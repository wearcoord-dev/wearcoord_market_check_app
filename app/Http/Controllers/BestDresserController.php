<?php

namespace App\Http\Controllers;

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
        $checkResult = DB::table('tour_info')->where('passcode', $input_codepass)->exists();

        if ($checkResult) {
            $tour_id = DB::table('tour_info')->where('passcode', $input_codepass)->value('id');
            DB::table('users')->where('id', $user_id)->update([
                'tour_id' => $tour_id,
            ]);
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
}
