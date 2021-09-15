<?php

namespace App\Library;

use Illuminate\Support\Facades\DB;

class Database
{
    public static function searchDB($color, $brand, $category, $type, $page)
    {
        if (empty($page)) {
            $page = 1;
        }

        if ($brand) {

            // availabilityがnullではないものを取得
            $item = DB::table($type . '_rakuten_apis')->where('brand', $brand)->where('category', $category)->orderBy('id', 'desc')->whereNotNull('availability')->paginate(21);

            // availabilityがnullではない全ての数を取得
            $count = DB::table($type . '_rakuten_apis')->where('brand', $brand)->where('category', $category)->whereNotNull('availability')->count();

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
                $item = DB::table($type . '_rakuten_apis')->where('brand', $brand)->where('category', $category)->whereNotNull($color)->orderBy('id', 'desc')->whereNotNull('availability')->paginate(21);
                $count = DB::table($type . '_rakuten_apis')->where('brand', $brand)->where('category', $category)->whereNotNull($color)->whereNotNull('availability')->count();


                // urlに画像を入れる
                $DBitems = [];
                foreach ($item as $i) {
                    $url = $i->$color;
                    $DBitems[] = array('db' => $i, 'url' => $url);
                }
            }
        } else if ($color) {
            $item = DB::table($type . '_rakuten_apis')->where('category', $category)->whereNotNull($color)->orderBy('id', 'desc')->whereNotNull('availability')->paginate(21);
            $count = DB::table($type . '_rakuten_apis')->where('category', $category)->whereNotNull('availability')->whereNotNull($color)->count();

            // urlに画像を入れる
            $DBitems = [];
            foreach ($item as $i) {
                $url = $i->$color;
                $DBitems[] = array('db' => $i, 'url' => $url);
            }
        } else if ($category) {
            $item = DB::table($type . '_rakuten_apis')->where('category', $category)->orderBy('id', 'desc')->whereNotNull('availability')->paginate(21);
            $count = DB::table($type . '_rakuten_apis')->where('category', $category)->whereNotNull('availability')->count();

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


        return ['item' => $DBitems, 'color' => $color, 'brand' => $brand, 'category' => $category, 'count' => $count];
    }

    public static function createUrlAndCategory($id, $type, $user_id)
    {
        $colors = ['black', 'navy', 'white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray'];

        $testdesu = null;

        if (!$id) {
            return null;
        }


        if (!$testdesu) {
            $testdesu = DB::table($type . '_rakuten_apis')->where('id', $id)->first();
            if ($type == 'tops') {
                $userTopsSize = DB::table('user_size')->where('user_id', $user_id)->value('tops_size');
                $isSizeTopsDB = DB::table('tops_size')->where('item_id', $id)->where('size', $userTopsSize)->exists();
            }
            if ($type == 'pants') {
                $userPantsSize = DB::table('user_size')->where('user_id', $user_id)->value('pants_size');
                $isSizePantsDB = DB::table('pants_size')->where('item_id', $id)->where('size', $userPantsSize)->exists();
            }
            if ($testdesu) {
                foreach ($colors as $color) {
                    if ($testdesu->$color) {
                        if ($type == 'tops') {
                            $data = array(
                                'category' => $testdesu->category, 'url' => $testdesu->$color,
                                'id' => $id, 'isSizeTopsDB' => $isSizeTopsDB
                            );
                        }elseif($type == 'pants'){
                            $data = array(
                                'category' => $testdesu->category, 'url' => $testdesu->$color,
                                'id' => $id, 'isSizePantsDB' => $isSizePantsDB
                            );
                        }else{
                            $data = array(
                                'category' => $testdesu->category, 'url' => $testdesu->$color,
                                'id' => $id,
                            );
                        }
                    }
                }
            }
        }
        // ddd($data);
        return [$type . 'Data' => $data];
    }
}
