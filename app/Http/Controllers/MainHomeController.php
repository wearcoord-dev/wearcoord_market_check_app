<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class MainHomeController extends Controller
{

    public function getUserCoord(Request $request)
{
    $gender = $request['gender'];
    $userWear = DB::table('userCreateCoord')->where('gender', $gender)->orderBy('id', 'desc')->take(5)->get();

    return response()->json($userWear);

}

}
