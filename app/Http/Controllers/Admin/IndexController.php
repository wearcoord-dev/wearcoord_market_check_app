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

    public function index(Request $request)
    {
        // $items = TopsRakutenApi::find(1);
        $items = DB::table('tops_rakuten_apis')->where('brand', 'hydrogen')->paginate(30);
        // dd($items);

        $category = $request->category;
        if (!$category) {
            $category = 506269;
        }

        $brand = $request->brand;

        $color = $request->color;

        $gender = 'male';

        if($category == 506269){
            // キャップス取得
            if($brand && $color){
                $items = DB::table('caps_rakuten_apis')->where('category', $category)->where('brand', $brand)->whereNotNull($color)->orderBy('id', 'desc')->paginate(30);
            }elseif($color){
                $items = DB::table('caps_rakuten_apis')->where('category', $category)->whereNotNull($color)->orderBy('id', 'desc')->paginate(30);
            }elseif($brand){
                $items = DB::table('caps_rakuten_apis')->where('category', $category)->where('brand', $brand)->orderBy('id', 'desc')->paginate(30);
            }else{
                $items = DB::table('caps_rakuten_apis')->where('category', $category)->orderBy('id', 'desc')->paginate(30);
            }
        }

        if($category == 508759){
            // 半袖取得
            if($brand && $color){
                $items = DB::table('tops_rakuten_apis')->where('category', $category)->where('brand', $brand)->whereNotNull($color)->orderBy('id', 'desc')->paginate(30);
            }elseif($color){
                $items = DB::table('tops_rakuten_apis')->where('category', $category)->whereNotNull($color)->orderBy('id', 'desc')->paginate(30);
            }elseif($brand){
                $items = DB::table('tops_rakuten_apis')->where('category', $category)->where('brand', $brand)->orderBy('id', 'desc')->paginate(30);
            }else{
                $items = DB::table('tops_rakuten_apis')->where('category', $category)->orderBy('id', 'desc')->paginate(30);

            }
        }




        return view('admin.itemIndex', compact('gender', 'items', 'category', 'brand', 'color'));
    }
}
