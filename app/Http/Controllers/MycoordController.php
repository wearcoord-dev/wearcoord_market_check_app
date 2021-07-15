<?php

namespace App\Http\Controllers;

use App\Library\Encodes;
use App\Library\Rakuten;
use App\Library\Database;
use App\Library\FirstCoordList;
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
        $page = $request->input('page');

        if($category == null){
            return;
        }



        // wearcoord管理DBでフィルター
        $myDBitems = Database::searchDB($color, $brand, $category, $type, $page);

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
        // $caps = $request->input('caps');
        // $tops = $request->input('tops');
        // $pants = $request->input('pants');
        // $shoes = $request->input('shoes');

        // ウェアが選択されていれば反映、なければ前のデータを取得

        if ($request->input('caps')) {
            $caps = $request->input('caps');
        } else {
            $caps = $checkList = DB::table('userSelectCoord')->where('user_id', $user_id)->value('caps');
        }

        if ($request->input('tops')) {
            $tops = $request->input('tops');
        } else {
            $tops = $checkList = DB::table('userSelectCoord')->where('user_id', $user_id)->value('tops');
        }

        if ($request->input('pants')) {
            $pants = $request->input('pants');
        } else {
            $pants = $checkList = DB::table('userSelectCoord')->where('user_id', $user_id)->value('pants');
        }

        if ($request->input('shoes')) {
            $shoes = $request->input('shoes');
        } else {
            $shoes = $checkList = DB::table('userSelectCoord')->where('user_id', $user_id)->value('shoes');
        }


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
            $coordId = DB::table('users')->where('id', $user_id)->value('registerCoord');

            if ($gender == "male") {
                $url = "mens_170_model.png";
            } else {
                $url = "woman_totalinner_manekin1.png";
            }

            // 新規登録で選んだコーデを反映
            FirstCoordList::createFirstCoord($url, $user_id, $coordId);


            $userWear = DB::table('userSelectCoord')->where('user_id', $user_id)->first();
        }


        $types = ['caps', 'tops', 'pants', 'shoes'];

        foreach ($types as $type) {
            ${$type . 'Data'} = Database::createUrlAndCategory($userWear->$type, $type);
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

        if ($gender == 'male') {
            DB::table('userSelectCoord')->where('user_id', $user_id)->update(
                [
                    'mannequin' => "mens_170_model.png",
                ]
            );
        } else {
            DB::table('userSelectCoord')->where('user_id', $user_id)->update(
                [
                    'mannequin' => "woman_manekin1.png",
                ]
            );
        };

        return response()->json('OK');
    }

    public function removeCaps(Request $request)
    {
        $user_id = $request->input('id');

        DB::table('userSelectCoord')->where('user_id', $user_id)->update(
            [
                'caps' => null,
            ]
        );

        return response()->json('OK');
    }

    public function registerCoord(Request $request)
    {
        // return response()->json($request);
        $imgUrl = $request['imgUrl'];
        $userId = $request['userId'];

        $userWear = DB::table('userSelectCoord')->where('user_id', $userId)->first();

        $userGender = DB::table('users')->where('id', $userId)->value('gender');

        DB::table('userCreateCoord')->insert([
            'user_id' => $userId,
            'gender' => $userGender,
            'caps' => $userWear->caps,
            'tops' => $userWear->tops,
            'pants' => $userWear->pants,
            'shoes' => $userWear->shoes,
            'mannequin' => $userWear->mannequin,
            'img' => $imgUrl,
            'created_at' => now(),
        ]);

        return 'ok!';
    }

    public function getRegisterCoord(Request $request)
    {
        $user_id = $request['id'];

        $userWear = DB::table('userCreateCoord')->where('user_id', $user_id)->get();

        return response()->json($userWear);
    }

    public function getItem(Request $request)
    {
        $id = $request['id'];
        $type = $request['type'];

        $userItem = DB::table($type . '_rakuten_apis')->where('id', $id)->get();

        return response()->json($userItem);
    }

    public function getUserFavCoord(Request $request)
    {
        $id = $request['id'];

        $userItem = DB::table('userCreateCoord')->where('id', $id)->first();

        return response()->json($userItem);
    }

    public function getWcFavCoord(Request $request)
    {
        $id = $request['id'];

        $userItem = DB::table('wc_recommend_outfits')->where('id', $id)->first();

        return response()->json($userItem);
    }

    public function getLarosso2021(Request $request)
    {
        $gender = $request['gender'];
        $type = $request['type'];

        $category = '';

        if($type == 'tops'){
            if($gender == 'male'){
                $category = '508759';
            }
        }
        if($type == 'pants'){
            if($gender == 'male'){
                $category = '508772';
            }
        }

        $userItem = DB::table($type . '_rakuten_apis')->where('brand', 'ralosso')->where('category', $category)->get();

        return response()->json($userItem);
    }

    public function deleteCoord(Request $request)
    {
        $id = $request['id'];

        DB::table('userCreateCoord')->where('id', $id)->delete();

        return 'ok';
    }

    public function copyCoord(Request $request)
    {
        $id = $request['id'];
        $user_id = $request['userid'];
        $caps = $request['caps'];
        $tops = $request['tops'];
        $pants = $request['pants'];
        $shoes = $request['shoes'];

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

        return 'ok';
    }
}
