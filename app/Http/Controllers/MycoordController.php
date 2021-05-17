<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Library\Rakuten;
use App\Library\Encodes;




class MycoordController extends Controller
{
    public function getCapsData(Request $request)
    {
        $brand = $request->input('brand');
        $color = $request->input('color');
        $category = "506269";
        $type = 'caps';

        // 楽天管理タグにエンコード
        $encodeColor = Encodes::encodeRakutenColorTag($color);
        $encodeBrand = Encodes::encodeRakutenBrandTag($brand);

        // 楽天APIを叩く
        $getItems = Rakuten::SearchRakutenAPI($category, $encodeBrand, $encodeColor);

        // wearcoord管理DBでフィルター
        $sortDBitems = Rakuten::searchRakutenDB($type, $getItems);
        $myDBitems = Rakuten::searchRakutenDBItems($type, $sortDBitems, $color);



        // ddd($myDBitems);

        return response()->json( $myDBitems );
        // $allCaps = DB::table('caps_rakuten_apis')->whereNotNull($color . 'Img')->get();
        // ddd($allCaps);
    }
}
