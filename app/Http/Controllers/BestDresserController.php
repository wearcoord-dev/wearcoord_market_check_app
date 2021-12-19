<?php

namespace App\Http\Controllers;

use App\Library\Database;
use App\Models\BestDresserCoordlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use function PHPUnit\Framework\isEmpty;

class BestDresserController extends Controller
{

    /**
     * ベストドレッサー賞パスコード認証
     *
     * @param array $request 入力結果
     * @return  boolean
     */
    public function checkPassCode(Request $request)
    {
        $user_id = $request['userid'];
        $input_codepass = $request['input_codepass'];

        // ユーザーが入力した認証パスが存在するか確認
        $checkResult = DB::table('tour_info')->where('passcode', $input_codepass)->exists();

        // 認証が成功した場合の処理
        if ($checkResult) {

            // ユーザーが現在参加しているベストドレッサー賞を登録
            $tour_id = DB::table('tour_info')->where('passcode', $input_codepass)->value('id');
            DB::table('users')->where('id', $user_id)->update([
                'tour_id' => $tour_id,
            ]);

            // ベストドレッサー賞のユーザー登録データが既に存在するか確認
            $checkUserExist = DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->exists();

            // 存在しなかった場合は新規で作成
            if (!$checkUserExist) {
                $getUserWear = DB::table('userSelectCoord')->where('user_id', $user_id)->first();

                DB::table('bestDresser_user_info')->insert([
                    'user_id' => $user_id,
                    'tour_id' => $tour_id,
                    'isCreatedCoord' => false,
                    'isDoneVoting' => false,
                    'created_at' => now(),
                    'caps' => $getUserWear->caps,
                    'tops' => $getUserWear->tops,
                    'pants' => $getUserWear->pants,
                    'shoes' => $getUserWear->shoes,
                    'mannequin' => $getUserWear->mannequin,
                ]);
            }
        }

        return response()->json($checkResult);
    }

    /**
     * 大会情報の取得
     *
     * @param array $request 入力結果
     * @return  array
     */
    public function getTourInfo(Request $request)
    {
        $tour_id = $request['tour_id'];

        $checkResult = DB::table('tour_info')->where('id', $tour_id)->first();


        return response()->json($checkResult);
    }

    /**
     * ベストドレッサー参加ユーザー情報の取得
     *
     * @param array $request 入力結果
     * @return  array
     */
    public function getBDUserInfo(Request $request)
    {
        $user_id = $request['user_id'];
        $tour_id = $request['tour_id'];

        $checkResult = DB::table('bestDresser_user_info')->where('tour_id', $tour_id)->where('user_id', $user_id)->first();


        return response()->json($checkResult);
    }

    /**
     * ベストドレッサー参加ユーザー選択ウェア詳細情報の取得
     *
     * @param array $request ユーザー情報
     * @return  array
     */
    public function getBDUserWear(Request $request)
    {
        $user_id = $request->input('user_id');
        $tour_id = DB::table('users')->where('id', $user_id)->value('tour_id');

        $userWear = DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->first();

        if (!$userWear) {
            return;
        }

        $types = ['caps', 'tops', 'pants', 'shoes'];

        foreach ($types as $type) {
            ${$type . 'Data'} = Database::createUrlAndCategory($userWear->$type, $type, $user_id);
        }

        $mannequin = $userWear->mannequin;

        // ddd($capsData);


        $wearData = [
            $capsData,
            $topsData,
            $pantsData,
            $shoesData,
            "mannequin" => $mannequin,
        ];
        // ddd($wearData);

        return response()->json($wearData);
    }

    /**
     * ベストドレッサー選択ウェア保存
     *
     * @param array $request ユーザー情報
     * @return  array
     */
    public function registerBDWear(Request $request)
    {
        $user_id = $request->input('userid');
        $tour_id = DB::table('users')->where('id', $user_id)->value('tour_id');

        // ウェアが選択されていれば反映、なければ前のデータを取得

        if ($request->input('caps')) {
            $caps = $request->input('caps');
        } elseif ($request->input('caps') == null) {
            $caps = null;
        } else {
            $caps = DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->value('caps');
        }

        if ($request->input('tops')) {
            $tops = $request->input('tops');
        } else {
            $tops = DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->value('tops');
        }

        if ($request->input('pants')) {
            $pants = $request->input('pants');
        } else {
            $pants = DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->value('pants');
        }

        if ($request->input('shoes')) {
            $shoes = $request->input('shoes');
        } else {
            $shoes = DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->value('shoes');
        }

        DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->update([
            'caps' => $caps,
            'tops' => $tops,
            'pants' => $pants,
            'shoes' => $shoes,
        ]);

        return 'OK';
    }

    /**
     * ベストドレッサーコーデ登録
     *
     * @param array $request ユーザー情報
     * @return  array
     */
    public function registerBDCoord(Request $request)
    {
        $imgUrl = $request['imgUrl'];
        $userId = $request['userId'];

        $tour_id = DB::table('users')->where('id', $userId)->value('tour_id');
        $userGender = DB::table('users')->where('id', $userId)->value('gender');

        $userWear = DB::table('bestDresser_user_info')->where('user_id', $userId)->where('tour_id', $tour_id)->first();

        $userCoord = DB::table('bestDresser_coordlists')->where('user_id', $userId)->where('tour_id', $tour_id)->first();


        if (!$userCoord) {
            DB::table('bestDresser_coordlists')->insert([
                'user_id' => $userId,
                'tour_id' => $tour_id,
                'gender' => $userGender,
                'caps' => $userWear->caps,
                'tops' => $userWear->tops,
                'pants' => $userWear->pants,
                'shoes' => $userWear->shoes,
                'mannequin' => $userWear->mannequin,
                'img' => $imgUrl,
                'created_at' => now(),
            ]);
            DB::table('bestDresser_user_info')->where('user_id', $userId)->where('tour_id', $tour_id)->update([
                'isCreatedCoord' => true,
            ]);
        } else {
            DB::table('bestDresser_coordlists')->where('user_id', $userId)->where('tour_id', $tour_id)->update([
                'user_id' => $userId,
                'tour_id' => $tour_id,
                'gender' => $userGender,
                'caps' => $userWear->caps,
                'tops' => $userWear->tops,
                'pants' => $userWear->pants,
                'shoes' => $userWear->shoes,
                'mannequin' => $userWear->mannequin,
                'img' => $imgUrl,
                'updated_at' => now(),
            ]);
            DB::table('bestDresser_user_info')->where('user_id', $userId)->where('tour_id', $tour_id)->update([
                'isCreatedCoord' => true,
            ]);
        }

        return 'ok!';
    }

    /**
     * ベストドレッサーインナー保存
     *
     * @param array $request ユーザー情報
     * @return  array
     */
    public function registerBDInner(Request $request)
    {
        $url = $request->input('url');
        $user_id = $request->input('id');
        $tour_id = DB::table('users')->where('id', $user_id)->value('tour_id');

        DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->update([
            'mannequin' => $url,
        ]);

        return 'ok!';
    }

    /**
     * ベストドレッサー コーデ全取得
     *
     * @param array $request ユーザー情報
     * @return  array
     */
    public function bdCoordList(Request $request)
    {
        $user_id = $request->input('user_id');
        $tour_id = DB::table('users')->where('id', $user_id)->value('tour_id');
        $gender = DB::table('users')->where('id', $user_id)->value('gender');

        $coordList = DB::table('bestDresser_coordlists')->where('tour_id', $tour_id)->where('gender', $gender)->where('user_id', '!=', $user_id)->get();

        return response()->json($coordList);
    }

    /**
     * ベストドレッサー いいね取得
     *
     * @param array $request ユーザー情報
     * @return  array
     */
    public function getLikeCoord(Request $request)
    {
        $user_id = $request->input('user_id');
        $coord = $request->input('coord');
        $user = DB::table('users')->where('id', $user_id)->first();

        $model = new BestDresserCoordlist();
        $getLikeCoord = $model->isLikedBy($user, $coord);

        return response()->json($getLikeCoord);
    }

    /**
     * ベストドレッサー いいね機能
     *
     * @param array $request ユーザー情報
     * @return
     */
    public function postBDCoord(Request $request)
    {
        $user_id = $request->input('user_id');
        $coord = $request->input('coord');
        $user = DB::table('users')->where('id', $user_id)->first();

        $existBDLike = DB::table('likes')->where('user_id', $user_id)->where('tour_id', $user->tour_id)->first();

        if ($existBDLike) {
            DB::table('likes')->where('user_id', $user_id)->where('tour_id', $user->tour_id)->update([
                'coord_id' => $coord,
                'updated_at' => now()
            ]);
            DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $user->tour_id)->update([
                'isDoneVoting' => true,
            ]);
        } else {
            DB::table('likes')->insert([
                'coord_id' => $coord,
                'user_id' => $user_id,
                'tour_id' => $user->tour_id,
                'gender' => $user->gender,
                'created_at' => now()
            ]);
            DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $user->tour_id)->update([
                'isDoneVoting' => true,
            ]);
        }

        return 'ok';
    }

    /**
     * ベストドレッサー いいね削除
     *
     * @param array $request ユーザー情報
     * @return
     */
    public function deleteBDCoord(Request $request)
    {
        $user_id = $request->input('user_id');
        $coord = $request->input('coord');
        $user = DB::table('users')->where('id', $user_id)->first();

        $existBDLike = DB::table('likes')->where('user_id', $user_id)->where('tour_id', $user->tour_id)->first();

        if ($existBDLike) {
            DB::table('likes')->where('user_id', $user_id)->where('tour_id', $user->tour_id)->delete();
            DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $user->tour_id)->update([
                'isDoneVoting' => false,
            ]);
        }

        return 'ok';
    }

    /**
     * ベストドレッサー ユーザーコーデ取得
     *
     * @param array $request ユーザー情報
     * @return
     */
    public function getUserBDCoord(Request $request)
    {
        $id = $request['id'];

        $userItem = DB::table('bestDresser_coordlists')->where('id', $id)->first();

        return response()->json($userItem);
    }

    /**
     * ベストドレッサー ウェア着用
     *
     * @param array $request ユーザー情報
     * @return
     */
    public function wearItemBD(Request $request)
    {
        $type = $request['type'];
        $item = $request['item'];
        $user_id = $request['userId'];

        $tour_id = DB::table('users')->where('id', $user_id)->value('tour_id');

        $result = DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->update([
            $type => $item,
        ]);

        return response()->json($result);
    }

    /**
     * 大会情報
     *
     * @param array $request ユーザー情報
     * @return
     */
    public function getBDTourInfo(Request $request)
    {
        $user_id = $request->input('user_id');
        $tour_id = DB::table('users')->where('id', $user_id)->value('tour_id');
        $tourInfo = DB::table('tour_info')->where('id', $tour_id)->first();

        return response()->json($tourInfo);
    }

    /**
     * ユーザーコーデのいいね有無取得
     *
     * @param array $request ユーザー情報
     * @return
     */
    public function getOwnLike(Request $request)
    {
        $user_id = $request->input('user_id');
        $tour_id = DB::table('users')->where('id', $user_id)->value('tour_id');
        $coord_id = DB::table('bestDresser_coordlists')->where('user_id', $user_id)->where('tour_id', $tour_id)->value('id');
        $getLike = DB::table('likes')->where('coord_id', $coord_id)->where('tour_id', $tour_id)->exists();

        return response()->json($getLike);
    }

    /**
     * ベストドレッサー コーデ全取得
     *
     * @param object $request ユーザー情報
     * @return  array
     */
    public function bdMyPostCoord(Request $request)
    {
        $user_id = $request->input('user_id');
        $tour_id = DB::table('users')->where('id', $user_id)->value('tour_id');

        $coordList = DB::table('bestDresser_coordlists')->where('tour_id', $tour_id)->where('user_id', $user_id)->first();

        return response()->json($coordList);
    }

    /**
     * ベストドレッサー いいね結果集計
     *
     * @param array $request getパラメータ
     * @return  array
     */
    public function calcLikeBD(Request $request)
    {
        $tour_id = $request['tour_id'];

        // $resultMale = DB::table('likes')->where('tour_id', $tour_id)->where('gender', "male")->groupBy('likes.id')->get('coord_id');

        $total = DB::table('likes')
            ->select('likes.coord_id', DB::raw("count(likes.coord_id) as count"))
            ->where('gender', "male")
            ->where('tour_id', $tour_id)
            ->groupBy('likes.coord_id')
            ->orderBy('count', 'desc')
            ->get();

        $totalFemale = DB::table('likes')
            ->select('likes.coord_id', DB::raw("count(likes.coord_id) as count"))
            ->where('gender', "female")
            ->where('tour_id', $tour_id)
            ->groupBy('likes.coord_id')
            ->orderBy('count', 'desc')
            ->get();

        $totalArr = array( "male" => $total,  "female" => $totalFemale);



        // 初期実装

        // $resultMale = DB::table('likes')->where('tour_id', $tour_id)->where('gender', "male")->get('coord_id');
        // $resultFemale = DB::table('likes')->where('tour_id', $tour_id)->where('gender', "female")->get('coord_id');

        // if($resultMale->isEmpty() && $resultFemale->isEmpty()){
        //     return response()->json('not found');
        // }

        // $total = null;


        // if(!$resultMale->isEmpty()){
        //     $arr = null;
        //     foreach($resultMale as $r){
        //         $arr[] = $r->coord_id;
        //     }

        //     $unique = array_unique($arr);


        //     foreach($unique as $u){
        //         $getCount = DB::table('likes')->where('coord_id', $u)->count();

        //         if($total){
        //             if($total['male']['いいね合計数'] < $getCount){
        //                 $total = array(  'male' => [ 'いいね合計数' => $getCount, 'coord_id' => $u ] );
        //             }else{
        //             }
        //         }else{
        //             $total = array('male' => ['いいね合計数' => $getCount, 'coord_id' => $u]);
        //         }
        //     }
        // }

        // $totalFemale = null;


        // if(!$resultFemale->isEmpty()){
        //     $arr = null;
        //     foreach($resultFemale as $r){
        //         $arr[] = $r->coord_id;
        //     }

        //     $unique = array_unique($arr);


        //     foreach($unique as $u){
        //         $getCount = DB::table('likes')->where('coord_id', $u)->count();

        //         if($totalFemale){
        //             if($totalFemale['female']['いいね合計数'] < $getCount){
        //                 $totalFemale = array(  'female' => [ 'いいね合計数' => $getCount, 'coord_id' => $u ] );
        //             }else{
        //             }
        //         }else{
        //             $totalFemale = array('female' => ['いいね合計数' => $getCount, 'coord_id' => $u]);
        //         }
        //     }
        // }

        // $totalArr = array($total, $totalFemale);

        return response()->json($totalArr);
    }
}
