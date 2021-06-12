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
}
