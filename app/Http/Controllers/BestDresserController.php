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
        $tour_id = $request->input('tour_id');

        $userWear = DB::table('bestDresser_user_info')->where('user_id', $user_id)->where('tour_id', $tour_id)->first();

        if(!$userWear){
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
}
