<?php

namespace App\Http\Controllers;

use App\Library\Encodes;
use App\Library\Rakuten;
use App\Library\Database;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;





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
        $category = $request->input('category');
        $type = $request->input('type');




        // wearcoord管理DBでフィルター
        $myDBitems = Database::searchDB($color, $brand, $category, $type);

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
                        DB::table($type . '_rakuten_apis')->where('itemId', $item['itemCode'])->update([
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
        $colors = ['black', 'navy', 'white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray'];

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

    // 重なったウェアをDBに登録

    public function registerWear(Request $request)
    {
        $user_id = $request->input('userid');
        $caps = $request->input('caps');
        $tops = $request->input('tops');
        $pants = $request->input('pants');
        $shoes = $request->input('shoes');

        $checkList = DB::table('userSelectCoord')->where('user_id', $user_id)->first();

        if (isset($checkList)) {
            DB::table('userSelectCoord')->where('user_id', $user_id)->update([
                'user_id' => $user_id,
                'caps' => $caps,
                'tops' => $tops,
                'pants' => $pants,
                'shoes' => $shoes,
            ]);
        } else {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => $caps,
                'tops' => $tops,
                'pants' => $pants,
                'shoes' => $shoes,
            ]);
        }

        // ddd($caps);

        return 'OK';
    }

    public function getRegisterWear(Request $request)
    {
        $user_id = $request->input('id');

        $userWear = DB::table('userSelectCoord')->where('user_id', $user_id)->first();

        // データが無かったら作成
        if (!$userWear) {
            $gender = DB::table('users')->where('id', $user_id)->value('gender');

            if ($gender == "male") {
                $url = "mens_170_model.png";
            } else {
                $url = "woman_manekin1.png";
            }

            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 1,
                'tops' => 2,
                'pants' => 3,
                'shoes' => 20,
                'mannequin' => $url,
            ]);

            $userWear = DB::table('userSelectCoord')->where('user_id', $user_id)->first();
        }


        $types = ['caps', 'tops', 'pants', 'shoes'];

        foreach ($types as $type) {
            ${$type . 'Data'} = Database::createUrlAndCategory($userWear->$type, $type);
        }



        // $topsData = Database::createUrlAndCategory($userWear->tops, 'tops');
        // $pantsData = Database::createUrlAndCategory($userWear->pants, 'pants');
        // $shoesData = Database::createUrlAndCategory($userWear->shoes, 'shoes');
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

    public function registerInner(Request $request)
    {
        $url = $request->input('url');
        $user_id = $request->input('id');

        DB::table('userSelectCoord')->where('user_id', $user_id)->update([
            'mannequin' => $url,
        ]);
    }

    public function removeInner(Request $request)
    {
        $user_id = $request->input('id');
        $gender = $request->input('gender');

        if($gender == 'male'){
            DB::table('userSelectCoord')->where('user_id', $user_id)->update(
                [
                'mannequin' => "mens_170_model.png",
            ]);
        }else{
            DB::table('userSelectCoord')->where('user_id', $user_id)->update(
                [
                'mannequin' => "woman_manekin1.png",
            ]);
        };


        return response()->json('OK');
    }
}
