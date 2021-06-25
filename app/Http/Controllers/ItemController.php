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
}
