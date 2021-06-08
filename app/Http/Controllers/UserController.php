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
}
