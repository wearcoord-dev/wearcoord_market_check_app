<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Library\Rakuten;
use App\Library\Encodes;
use App\Library\Database;




class MycoordController extends Controller
{

    // 楽天APIを経由して検索

    public function getCapsData(Request $request)
    {
        $brand = $request->input('brand');
        $color = $request->input('color');
        $category = $request->input('category');
        $type = $request->input('type');

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

    // wearcoordのDBだけで検索

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

        // 使うとき/Library/Rakuten側をOFFにする

        define("RAKUTEN_APPLICATION_ID", config('app.rakuten_id'));
        define("RAKUTEN_APPLICATION_SEACRET", config('app.rakuten_key'));

        $category = "508803";
        $type = "tops";

        $colors = ['black', 'navy', 'white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];

        foreach ($colors as $color) {

            $encodeColor = Encodes::encodeRakutenColorTag($color);

            $brands = ['yonex', 'nike', 'adidas', 'gosen', 'mizuno', 'asics', 'diadora', 'babolat', 'prince', 'fila', 'ellesse', 'oakley', 'lecoq', 'lacoste', 'newbalance', 'underarmour', 'srixon', 'lotto', 'armani', 'hydrogen'];

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
                        DB::table( $type . '_rakuten_apis')->where('itemId', $item['itemCode'])->update([
                            'category' => $category
                        ]);
                    }
                }
            }
        }
    }

    // DBの画像の名前に色を追加する

    public static function addColorImgDB()
    {
        $colors = ['black', 'navy', 'white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];

        $type = "tops";

        foreach ($colors as $color) {

            $items = DB::table($type . '_rakuten_apis')->whereNotNull($color)->get();

            foreach ($items as $item) {
                // $imgName = $item->$color;
                $txt = $color . '_' . $item->$color;
                // ddd($txt);

                // $test = DB::table($type . '_rakuten_apis')->where('id', $item->id)->value($color);
                // ddd($test);


                DB::table($type . '_rakuten_apis')->where('id', $item->id)->update([
                    $color => $txt
                ]);
                // ddd($item->$color);
            }
        }
    }
}
