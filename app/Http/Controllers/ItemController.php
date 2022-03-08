<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
    public function getItemDetail(Request $request)
    {
        $id = $request['id'];
        $type = $request['type'];

        $userItem = DB::table($type . '_rakuten_apis')->where('id', $id )->first();

        return response()->json($userItem);
    }

    public function registerWearItem(Request $request)
    {
        $id = $request['id'];
        $type = $request['type'];
        $userid = $request['user'];

        DB::table('userSelectCoord')->where('user_id', $userid )->update(
            [
                $type => $id,
            ]
        );

        return 'ok';
    }

    public function deleteCartItem(Request $request)
    {
        $id = $request['id'];
        $type = $request['type'];
        $userid = $request['user'];

        $userItem = DB::table('userCart')->where('type', $type)->where('user_id', $userid)->where('item_id', $id)->delete();

        return 'ok';
    }

    public function getCoord(Request $request)
    {
        $request->validate([
            'capsId' => ['nullable', 'string'],
            'topsId' => ['nullable', 'string'],
            'pantsId' => ['nullable', 'string'],
            'shoesId' => ['nullable', 'string'],
        ]);

        $capsId = $request['capsId'];
        $topsId = $request['topsId'];
        $pantsId = $request['pantsId'];
        $shoesId = $request['shoesId'];

        $capsItem = DB::table('caps_rakuten_apis')->where('id', $capsId)->first();
        $topsItem = DB::table('tops_rakuten_apis')->where('id', $topsId)->first();
        $pantsItem = DB::table('pants_rakuten_apis')->where('id', $pantsId)->first();
        $shoesItem = DB::table('shoes_rakuten_apis')->where('id', $shoesId)->first();

        $userItem = ([
            'capsItem' => $capsItem,
            'topsItem' => $topsItem,
            'pantsItem' => $pantsItem,
            'shoesItem' => $shoesItem,
        ]);

        return response()->json($userItem);
    }
}
