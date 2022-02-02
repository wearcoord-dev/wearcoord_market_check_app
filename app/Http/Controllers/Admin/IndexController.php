<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\TopsRakutenApi;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index(Request $request, $gender)
    {
        // $items = TopsRakutenApi::find(1);

        $category = $request->category;
        if (!$category) {
            $category = 506269;
        }

        $brand = $request->brand;
        $color = $request->color;
        $gender = $gender;

        if($gender == 'male'){
            $items = self::getMaleItems($brand, $color, $category);
        }

        return view('admin.itemIndex', compact('gender', 'items', 'category', 'brand', 'color'));
    }

    private static function getMaleItems($brand, $color, $category){

        if ($category == 506269) {
            // キャップス取得
            $items = self::getItemsFromDB('caps', $brand, $color, $category);
        }

        if ($category == 508759) {
            // 半袖取得
            $items = self::getItemsFromDB('tops', $brand, $color, $category);
        }

        if ($category == 565925) {
            // アウター取得
            $items = self::getItemsFromDB('tops', $brand, $color, $category);
        }

        if ($category == 508772) {
            // ショートパンツ取得
            $items = self::getItemsFromDB('pants', $brand, $color, $category);
        }

        if ($category == 565926) {
            // ロングパンツ取得
            $items = self::getItemsFromDB('pants', $brand, $color, $category);
        }

        if ($category == 208025) {
            // シューズ取得
            $items = self::getItemsFromDB('shoes', $brand, $color, $category);
        }

        return $items;
    }

    // DBからアイテムを絞り込んで取得

    private  static function getItemsFromDB($type, $brand, $color, $category){
        if ($brand && $color) {
            $items = DB::table($type . '_rakuten_apis')->where('category', $category)->where('brand', $brand)->whereNotNull($color)->orderBy('id', 'desc')->paginate(30);
        } elseif ($color) {
            $items = DB::table($type . '_rakuten_apis')->where('category', $category)->whereNotNull($color)->orderBy('id', 'desc')->paginate(30);
        } elseif ($brand) {
            $items = DB::table($type . '_rakuten_apis')->where('category', $category)->where('brand', $brand)->orderBy('id', 'desc')->paginate(30);
        } else {
            $items = DB::table($type . '_rakuten_apis')->where('category', $category)->orderBy('id', 'desc')->paginate(30);
        }
        return $items;
    }
}
