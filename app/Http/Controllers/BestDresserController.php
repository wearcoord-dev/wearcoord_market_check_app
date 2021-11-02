<?php

namespace App\Http\Controllers;

use App\Library\Database;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
    public function registerBDcoord(Request $request)
    {
        $imgUrl = $request['imgUrl'];
        $userId = $request['userId'];

        $tour_id = DB::table('users')->where('id', $userId)->value('tour_id');
        $userGender = DB::table('users')->where('id', $userId)->value('gender');

        $userWear = DB::table('bestDresser_user_info')->where('user_id', $userId)->where('tour_id', $tour_id)->first();

        $userCoord = DB::table('bestDresser_coordlist')->where('user_id', $userId)->where('tour_id', $tour_id)->first();


        if(!$userCoord){
            DB::table('bestDresser_coordlist')->insert([
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
        }else{
            DB::table('bestDresser_coordlist')->update([
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
        }

        return 'ok!';
    }
}
