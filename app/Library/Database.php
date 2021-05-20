<?php

namespace App\Library;

use Illuminate\Support\Facades\DB;

class Database
{
    public static function searchDB($color, $brand, $category, $type)
    {
        if ($brand) {
            $item = DB::table( $type . '_rakuten_apis')->where('brand', $brand)->where('category', $category)->get();

            // 先に見つけた画像だけ取得
            $DBitems = [];
            foreach ($item as $i) {

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
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                $DBitems[] = array('db' => $i, 'url' => $url);
            }
            if ($color) {
                $item = DB::table( $type . '_rakuten_apis')->where('brand', $brand)->where('category', $category)->whereNotNull($color)->get();

                // urlに画像を入れる
                $DBitems = [];
                foreach ($item as $i) {
                    $url = $i->$color;
                    $DBitems[] = array('db' => $i, 'url' => $url);
                }
            }
        } else if ($color) {
            $item = DB::table( $type . '_rakuten_apis')->where('category', $category)->whereNotNull($color)->get();

            // urlに画像を入れる
            $DBitems = [];
            foreach ($item as $i) {
                $url = $i->$color;
                $DBitems[] = array('db' => $i, 'url' => $url);
            }
        }


        // ddd($DBitems);


        return ['item' => $DBitems, 'color' => $color, 'brand' => $brand, 'category' => $category];
    }
}
