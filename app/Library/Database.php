<?php

namespace App\Library;

use Illuminate\Support\Facades\DB;

class Database
{
    public static function searchDB($color, $brand, $category, $type)
    {
        if ($brand) {
            $item = DB::table($type . '_rakuten_apis')->where('brand', $brand)->where('category', $category)->get();

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
                                                    if (!$url) {
                                                        $url = $i->gray;
                                                    }
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
                $item = DB::table($type . '_rakuten_apis')->where('brand', $brand)->where('category', $category)->whereNotNull($color)->get();

                // urlに画像を入れる
                $DBitems = [];
                foreach ($item as $i) {
                    $url = $i->$color;
                    $DBitems[] = array('db' => $i, 'url' => $url);
                }
            }
        } else if ($color) {
            $item = DB::table($type . '_rakuten_apis')->where('category', $category)->whereNotNull($color)->get();

            // urlに画像を入れる
            $DBitems = [];
            foreach ($item as $i) {
                $url = $i->$color;
                $DBitems[] = array('db' => $i, 'url' => $url);
            }
        } else if ($category) {
            $item = DB::table($type . '_rakuten_apis')->where('category', $category)->get();

            // urlに画像を入れる
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
                                                    if (!$url) {
                                                        $url = $i->gray;
                                                    }
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
        }


        // ddd($DBitems);


        return ['item' => $DBitems, 'color' => $color, 'brand' => $brand, 'category' => $category];
    }

    public static function createUrlAndCategory($id, $type)
    {
        $colors = ['black', 'navy', 'white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray'];

        $testdesu = null;

        if (!$id) {
            return null;
        }


        if (!$testdesu) {
            $testdesu = DB::table($type . '_rakuten_apis')->where('id', $id)->first();
            if ($testdesu) {
                foreach ($colors as $color) {
                    if ($testdesu->$color) {
                        $data = array('category' => $testdesu->category, 'url' => $testdesu->$color);
                    }
                }
            }
        }
        // ddd($data);
        return [$type . 'Data' => $data];
    }

    public static function createFirstCoord($url, $user_id, $coordId)
    {

        if ($coordId == 1) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 602,
                'pants' => 362,
                'shoes' => 143,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 2) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 614,
                'pants' => 376,
                'shoes' => 138,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 3) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 562,
                'pants' => 362,
                'shoes' => 144,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 4) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 347,
                'pants' => 376,
                'shoes' => 141,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 5) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 617,
                'pants' => 374,
                'shoes' => 132,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 6) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 614,
                'pants' => 374,
                'shoes' => 132,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 7) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 606,
                'pants' => 367,
                'shoes' => 130,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 8) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 616,
                'pants' => 374,
                'shoes' => 127,
                'mannequin' => $url,
            ]);
        }
    }
}
