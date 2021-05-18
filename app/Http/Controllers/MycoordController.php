<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Library\Rakuten;
use App\Library\Encodes;
use App\Library\Database;




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
        $sortDBitems = Rakuten::searchRakutenDB($type, $getItems, $color);
        $myDBitems = Rakuten::searchRakutenDBItems($type, $sortDBitems, $color, $brand, $category);

        // ddd($sortDBitems);

        return response()->json($myDBitems);
        // $allCaps = DB::table('caps_rakuten_apis')->whereNotNull($color . 'Img')->get();
        // ddd($allCaps);
    }

    public function getCapsDBData(Request $request)
    {
        $brand = $request->input('brand');
        $color = $request->input('color');
        $category = "506269";
        $type = 'caps';

        // wearcoord管理DBでフィルター
        $myDBitems = Database::searchDB($color, $brand, $category);

        // ddd($myDBitems);

        return response()->json($myDBitems);
    }

    // DBにブランド名追加を自動化

    public static function addBrandDB()
    {

        define("RAKUTEN_APPLICATION_ID", config('app.rakuten_id'));
        define("RAKUTEN_APPLICATION_SEACRET", config('app.rakuten_key'));

        $category = "565818";
        $type = "caps";

        $colors = ['black', 'navy', 'white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];

        foreach ($colors as $color) {

            $encodeColor = Encodes::encodeRakutenColorTag($color);

            $brands = ['yonex', 'nike', 'adidas', 'gosen', 'mizuno', 'asics', 'diadora', 'babolat', 'prince', 'fila', 'ellesse', 'oakley', 'lecoq', 'lacoste', 'newbalance', 'underarmour', 'srixon', 'lotto', 'armani'];

            foreach ($brands as $brand) {

                sleep(1);

                $encodeBrand = Encodes::encodeRakutenBrandTag($brand);

                // 楽天APIを叩く
                $getItems = Rakuten::SearchRakutenAPI($category, $encodeBrand, $encodeColor);


                // wearcoord管理DBでフィルター
                $sortDBitems = Rakuten::searchRakutenDB($type, $getItems, $color);

                // ddd($sortDBitems);

                foreach ($sortDBitems as $sortDBitem) {

                    foreach ($sortDBitem as $item) {
                        DB::table('caps_rakuten_apis')->where('itemId', $item['itemCode'])->update([
                            'brand' => $brand
                        ]);
                    }
                }
            }
        }
    }
}
