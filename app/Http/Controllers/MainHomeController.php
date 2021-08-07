<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class MainHomeController extends Controller
{

    public function getUserCoord(Request $request)
    {
        $gender = $request['gender'];
        $userWear = DB::table('userCreateCoord')->where('gender', $gender)->orderBy('id', 'desc')->take(5)->get();

        return response()->json($userWear);
    }

    public function getRecoCoord(Request $request)
    {
        $gender = $request['gender'];
        $recoWear = DB::table('wc_recommend_outfits')->where('gender', $gender)->orderBy('id', 'desc')->take(5)->get();

        return response()->json($recoWear);
    }

    public function getRecommendItem(Request $request)
    {
        $user_id = $request['userid'];
        $gender = $request['gender'];

        // topsのデータを取得
        $userSelectTops = DB::table('userSelectCoord')->where('user_id', $user_id)->value('tops');
        $userSelectItem = DB::table('tops_rakuten_apis')->where('id', $userSelectTops)->first();
        $userSelectCategory = $userSelectItem->category;

        // 色を取得
        $colors = ['black', 'navy', 'white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray'];

        foreach ($colors as $color) {
            $getColor = $userSelectItem->$color;

            if ($getColor) {
                $userColor = $color;
            }
        }

        // 色とカテゴリーが合っているアイテムを6件ランダムで取得
        $recommendItems = DB::table('tops_rakuten_apis')->whereNotNull($userColor)->where('category', $userSelectCategory)->inRandomOrder()->take(6)->get();

        // 画像を格納
        $data = [];
        foreach ($recommendItems as $recommendItem) {
            $url = $recommendItem->$userColor;
            $data[] = array('item' => $recommendItem, 'url' => $url);
        }

        return response()->json($data);
    }
}
