<?php

namespace App\Library;

use Illuminate\Support\Facades\DB;

class Database
{
    public static function searchDB($color, $brand, $category)
    {
        if($brand){
            $item = DB::table('caps_rakuten_apis')->where('brand', $brand)->get();

            if($color){
                $item = DB::table('caps_rakuten_apis')->where('brand', $brand)->whereNotNull($color)->get();
            }
        }else if($color){
            $item = DB::table('caps_rakuten_apis')->whereNotNull($color)->get();
        }

        // ddd($item);

        return ['item' => $item, 'color' => $color, 'brand' => $brand, 'category' => $category];
    }
}
