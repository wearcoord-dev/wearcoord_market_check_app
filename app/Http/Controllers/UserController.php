<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function registerFace(Request $request)
    {

        $imgUrl = $request['imgUrl'];
        $userId = $request['userId'];

        DB::table('users')->where('id', $userId)->update([
            'faceImg' => $imgUrl
        ]);

        return 'ok!';
    }

    public function addCart(Request $request)
    {
        $type = $request['type'];
        $item = $request['item'];
        $userId = $request['userId'];

        $checkItem = DB::table('userCart')->where('user_id', $userId)->where('type', $type)->where('item_id', $item)->first();

        // return $checkItem;

        if(!$checkItem){
            DB::table('userCart')->insert([
                'user_id' => $userId,
                'type' => $type,
                'item_id' => $item,
            ]);
        }else{
            return 0;
        }

        return 1;
    }

    public function getCartItem(Request $request)
    {
        $type = $request['type'];
        $userId = $request['id'];
        $DBitems = [];

        $checkItems = DB::table('userCart')->where('user_id', $userId)->where('type', $type)->get();

        foreach($checkItems as $checkItem){

            $getItem = DB::table( $type . '_rakuten_apis')->where('id', $checkItem->item_id)->first();

            // nullじゃなければ格納
            if($getItem){
                $DBitems[] = $getItem;
            }
        }

        return response()->json($DBitems);
    }

    public function registerFirstCheck(Request $request)
    {
        $id = $request['id'];

            DB::table('users')->where('id', $id)->update([
                'firstcheck' => 1,
            ]);

        return 'ok';
    }

    public function registerSizeTops(Request $request)
    {
        $user_id = $request['userid'];
        $kyoui = $request['kyoui'];
        $mitake = $request['mitake'];
        $mihaba = $request['mihaba'];
        $katahaba = $request['katahaba'];
        $sodetake = $request['sodetake'];
        $kitake = $request['kitake'];

        $checkList = DB::table('user_size')->where('user_id', $user_id)->first();

        if (isset($checkList)) {
            DB::table('user_size')->where('user_id', $user_id)->update([
                'user_id' => $user_id,
                'kyoui' => $kyoui,
                'mitake' => $mitake,
                'mihaba' => $mihaba,
                'katahaba' => $katahaba,
                'sodetake' => $sodetake,
                'kitake' => $kitake,
            ]);
        } else {
            DB::table('user_size')->insert([
                'user_id' => $user_id,
                'kyoui' => $kyoui,
                'mitake' => $mitake,
                'mihaba' => $mihaba,
                'katahaba' => $katahaba,
                'sodetake' => $sodetake,
                'kitake' => $kitake,
            ]);
        }

        return 'ok';
    }

    public function registerSizePants(Request $request)
    {
        $user_id = $request['userid'];
        $weist = $request['weist'];
        $hip = $request['hip'];
        $watarihaba = $request['watarihaba'];
        $matagami = $request['matagami'];
        $matashita = $request['matashita'];
        $susohaba = $request['susohaba'];

        $checkList = DB::table('user_size')->where('user_id', $user_id)->first();

        if (isset($checkList)) {
            DB::table('user_size')->where('user_id', $user_id)->update([
                'user_id' => $user_id,
                'weist' => $weist,
                'hip' => $hip,
                'watarihaba' => $watarihaba,
                'matagami' => $matagami,
                'matashita' => $matashita,
                'susohaba' => $susohaba,
            ]);
        } else {
            DB::table('user_size')->insert([
                'user_id' => $user_id,
                'weist' => $weist,
                'hip' => $hip,
                'watarihaba' => $watarihaba,
                'matagami' => $matagami,
                'matashita' => $matashita,
                'susohaba' => $susohaba,
            ]);
        }

        return 'ok';
    }

    public function registerSizeWear(Request $request)
    {
        $user_id = $request['id'];
        $props = $request['props'];
        $type = $request['type'];

        $checkList = DB::table('user_size')->where('user_id', $user_id)->first();

        if (isset($checkList)) {
            if($type == 'tops'){
                DB::table('user_size')->where('user_id', $user_id)->update([
                    'kyoui' => $props['db']['kyoui'],
                    'mitake' => $props['db']['mitake'],
                    'mihaba' => $props['db']['mihaba'],
                    'katahaba' => $props['db']['katahaba'],
                    'sodetake' => $props['db']['sodetake'],
                    'kitake' => $props['db']['kitake'],
                    'tops_item_id' => $props['db']['item_id'],
                ]);
            }
        } else {
            if($type == 'tops'){
                DB::table('user_size')->insert([
                    'user_id' => $user_id,
                    'kyoui' => $props['db']['kyoui'],
                    'mitake' => $props['db']['mitake'],
                    'mihaba' => $props['db']['mihaba'],
                    'katahaba' => $props['db']['katahaba'],
                    'sodetake' => $props['db']['sodetake'],
                    'kitake' => $props['db']['kitake'],
                    'tops_item_id' => $props['db']['item_id'],
                ]);
            }
        }

        return 'ok';
    }

    public function getUserSize(Request $request)
    {
        $user_id = $request['id'];

        $userSize = DB::table('user_size')->where('user_id', $user_id)->first();

        return response()->json($userSize);

    }

    public function getSizeWear(Request $request)
    {
        $brand = $request['brand'];
        $size = $request['size'];
        $type = $request['type'];
        $gender = $request['gender'];

        $wearItems = [];

        $wearDataList = DB::table( $type . '_size')->where('brand', $brand)->where('size', $size)->where('gender', $gender)->get();

        // 画像を取得

        foreach($wearDataList as $wearData){
            $i = DB::table( $type . '_rakuten_apis')->where('id', $wearData->item_id)->first();

            $url = $i->black;

                if (!$url) {
                    $url = $i->white;
                    if (!$url) {
                        $url = $i->blue;
                        if (!$url) {
                            $url = $i->red;
                            if (!$url) {
                                $url = $i->green;
                                if (!$url) {
                                    $url = $i->yellow;
                                    if (!$url) {
                                        $url = $i->navy;
                                        if (!$url) {
                                            $url = $i->pink;
                                            if (!$url) {
                                                $url = $i->orange;
                                                if (!$url) {
                                                    $url = $i->purple;
                                                    if (!$url) {
                                                        $url = $i->gray;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                $wearItems[] = array('db' => $wearData, 'url' => $url, 'category' => $i->category);

        }

        return response()->json($wearItems);

    }
}
