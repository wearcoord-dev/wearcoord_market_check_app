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
        $setake = $request['setake'];

        $checkList = DB::table('user_size')->where('user_id', $user_id)->first();

        if (isset($checkList)) {
            DB::table('user_size')->where('user_id', $user_id)->update([
                'user_id' => $user_id,
                'kyoui' => $kyoui,
                'mitake' => $mitake,
                'mihaba' => $mihaba,
                'katahaba' => $katahaba,
                'sodetake' => $sodetake,
                'setake' => $setake,
            ]);
        } else {
            DB::table('user_size')->insert([
                'user_id' => $user_id,
                'kyoui' => $kyoui,
                'mitake' => $mitake,
                'mihaba' => $mihaba,
                'katahaba' => $katahaba,
                'sodetake' => $sodetake,
                'setake' => $setake,
            ]);
        }

        return 'ok';
    }
}
