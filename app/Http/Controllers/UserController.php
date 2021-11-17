<?php

namespace App\Http\Controllers;

use App\Library\Size;
use Illuminate\Http\Request;
use App\Library\FirstCoordList;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function deleteAccount(Request $request)
    {

        $user_id = $request['id'];

        DB::table('users')->where('id', $user_id)->delete();
        DB::table('userSelectCoord')->where('user_id', $user_id)->delete();
        DB::table('userCreateCoord')->where('user_id', $user_id)->delete();
        DB::table('userCart')->where('user_id', $user_id)->delete();
        DB::table('user_size')->where('user_id', $user_id)->delete();

        return 'ok';
    }

    public function registerFace(Request $request)
    {

        $imgUrl = $request['imgUrl'];
        $userId = $request['userId'];

        DB::table('users')->where('id', $userId)->update([
            'faceImg' => $imgUrl
        ]);

        return 'ok!';
    }

    public function deleteFaceImg(Request $request)
    {

        $user_id = $request['id'];

        DB::table('users')->where('id', $user_id)->update([
            'faceImg' => null
        ]);

        return $user_id;
    }

    public function addCart(Request $request)
    {
        $type = $request['type'];
        $item = $request['item'];
        $userId = $request['userId'];

        $checkItem = DB::table('userCart')->where('user_id', $userId)->where('type', $type)->where('item_id', $item)->first();

        // return $checkItem;

        if (!$checkItem) {
            DB::table('userCart')->insert([
                'user_id' => $userId,
                'type' => $type,
                'item_id' => $item,
            ]);
        } else {
            return 0;
        }

        return 1;
    }

    public function getCartItem(Request $request)
    {
        $type = $request['type'];
        $userId = $request['id'];
        $DBitems = [];

        $checkItems = DB::table('userCart')->where('user_id', $userId)->where('type', $type)->get();

        foreach ($checkItems as $checkItem) {

            $getItem = DB::table($type . '_rakuten_apis')->where('id', $checkItem->item_id)->first();

            // nullじゃなければ格納
            if ($getItem) {
                $DBitems[] = $getItem;
            }
        }

        return response()->json($DBitems);
    }

    public function registerFirstCheck(Request $request)
    {
        $id = $request['id'];

        DB::table('users')->where('id', $id)->update([
            'firstcheck' => 1,
        ]);

        $userWear = DB::table('userSelectCoord')->where('user_id', $id)->first();

        // データが無かったら作成
        if (!$userWear) {
            $gender = DB::table('users')->where('id', $id)->value('gender');
            $coordId = DB::table('users')->where('id', $id)->value('registerCoord');

            if ($gender == "male") {
                $url = "mens_170_model.png";
            } else {
                $url = "woman_totalinner_manekin1.png";
            }

            // 新規登録で選んだコーデを反映
            FirstCoordList::createFirstCoord($url, $id, $coordId);
        }

        return 'ok';
    }

    public function registerSizeTops(Request $request)
    {
        $user_id = $request['userid'];
        $kyoui = $request['kyoui'];
        $mitake = $request['mitake'];
        $mihaba = $request['mihaba'];
        $katahaba = $request['katahaba'];
        $sodetake = $request['sodetake'];
        $kitake = $request['kitake'];
        $tops_size = $request['tops_size'];

        $checkList = DB::table('user_size')->where('user_id', $user_id)->first();

        if (isset($checkList)) {
            DB::table('user_size')->where('user_id', $user_id)->update([
                'user_id' => $user_id,
                'kyoui' => $kyoui,
                'mitake' => $mitake,
                'mihaba' => $mihaba,
                'katahaba' => $katahaba,
                'sodetake' => $sodetake,
                'kitake' => $kitake,
                'tops_size' => $tops_size,
            ]);
        } else {
            DB::table('user_size')->insert([
                'user_id' => $user_id,
                'kyoui' => $kyoui,
                'mitake' => $mitake,
                'mihaba' => $mihaba,
                'katahaba' => $katahaba,
                'sodetake' => $sodetake,
                'kitake' => $kitake,
                'tops_size' => $tops_size,
            ]);

            DB::table('users')->where('id', $user_id)->update([
                'sizecheck' => 1,
            ]);
        }

        return 'ok';
    }

    public function registerSizePants(Request $request)
    {
        $user_id = $request['userid'];
        $waist = $request['waist'];
        $hip = $request['hip'];
        $watarihaba = $request['watarihaba'];
        $matagami = $request['matagami'];
        $matashita = $request['matashita'];
        $susohaba = $request['susohaba'];
        $soutake = $request['soutake'];
        $pants_size = $request['pants_size'];


        $checkList = DB::table('user_size')->where('user_id', $user_id)->first();

        if (isset($checkList)) {
            DB::table('user_size')->where('user_id', $user_id)->update([
                'user_id' => $user_id,
                'waist' => $waist,
                'hip' => $hip,
                'watarihaba' => $watarihaba,
                'matagami' => $matagami,
                'matashita' => $matashita,
                'susohaba' => $susohaba,
                'soutake' => $soutake,
                'pants_size' => $pants_size,
            ]);
        } else {
            DB::table('user_size')->insert([
                'user_id' => $user_id,
                'waist' => $waist,
                'hip' => $hip,
                'watarihaba' => $watarihaba,
                'matagami' => $matagami,
                'matashita' => $matashita,
                'susohaba' => $susohaba,
                'soutake' => $soutake,
                'pants_size' => $pants_size,
            ]);

            DB::table('users')->where('id', $user_id)->update([
                'sizecheck' => 1,
            ]);
        }

        return 'ok';
    }

    public function registerSizeWear(Request $request)
    {
        $user_id = $request['id'];
        $props = $request['props'];
        $type = $request['type'];

        $checkList = DB::table('user_size')->where('user_id', $user_id)->first();

        // return response()->json($props);


        if (isset($checkList)) {
            if ($type == 'tops') {
                DB::table('user_size')->where('user_id', $user_id)->update([
                    'kyoui' => $props['db']['kyoui'],
                    'mitake' => $props['db']['mitake'],
                    'mihaba' => $props['db']['mihaba'],
                    'katahaba' => $props['db']['katahaba'],
                    'sodetake' => $props['db']['sodetake'],
                    'kitake' => $props['db']['kitake'],
                    'tops_item_id' => $props['db']['item_id'],
                    'tops_size' => $props['db']['size'],
                ]);
            }
            if ($type == 'pants') {
                DB::table('user_size')->where('user_id', $user_id)->update([
                    'waist' => $props['db']['waist'],
                    'hip' => $props['db']['hip'],
                    'watarihaba' => $props['db']['watarihaba'],
                    'matagami' => $props['db']['matagami'],
                    'matashita' => $props['db']['matashita'],
                    'susohaba' => $props['db']['susohaba'],
                    'soutake' => $props['db']['soutake'],
                    'pants_item_id' => $props['db']['item_id'],
                    'pants_size' => $props['db']['size'],
                ]);
            }
        } else {
            if ($type == 'tops') {
                DB::table('user_size')->insert([
                    'user_id' => $user_id,
                    'kyoui' => $props['db']['kyoui'],
                    'mitake' => $props['db']['mitake'],
                    'mihaba' => $props['db']['mihaba'],
                    'katahaba' => $props['db']['katahaba'],
                    'sodetake' => $props['db']['sodetake'],
                    'kitake' => $props['db']['kitake'],
                    'tops_item_id' => $props['db']['item_id'],
                    'tops_size' => $props['db']['size'],
                ]);
            }
            if ($type == 'pants') {
                DB::table('user_size')->insert([
                    'user_id' => $user_id,
                    'waist' => $props['db']['waist'],
                    'hip' => $props['db']['hip'],
                    'watarihaba' => $props['db']['watarihaba'],
                    'matagami' => $props['db']['matagami'],
                    'matashita' => $props['db']['matashita'],
                    'susohaba' => $props['db']['susohaba'],
                    'soutake' => $props['db']['soutake'],
                    'pants_item_id' => $props['db']['item_id'],
                    'pants_size' => $props['db']['size'],
                ]);
            }

            // サイズ登録がされたことを管理
            DB::table('users')->where('id', $user_id)->update([
                'sizecheck' => 1,
            ]);
        }

        return 'ok';
    }

    public function getUserSize(Request $request)
    {
        $user_id = $request['id'];

        $userSize = DB::table('user_size')->where('user_id', $user_id)->first();

        return response()->json($userSize);
    }

    public function getSizeWear(Request $request)
    {
        $brand = $request['brand'];
        $size = $request['size'];
        $type = $request['type'];
        $gender = $request['gender'];

        $wearItems = [];

        $wearDataList = DB::table($type . '_size')->where('brand', $brand)->where('size', $size)->where('gender', $gender)->get();

        // 画像を取得

        foreach ($wearDataList as $wearData) {
            $i = DB::table($type . '_rakuten_apis')->where('id', $wearData->item_id)->first();

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
            $wearItems[] = array('db' => $wearData, 'url' => $url, 'category' => $i->category);
        }

        return response()->json($wearItems);
    }

    public function getCalcSize(Request $request)
    {
        $user_id = $request['userid'];
        $type = $request['type'];


        $userSize = DB::table('user_size')->where('user_id', $user_id)->first();
        $userCoord = DB::table('userSelectCoord')->where('user_id', $user_id)->first();



        if ($type == 'tops') {
            $wearSize = DB::table('tops_size')->where('item_id', $userCoord->tops)->where('size', $userSize->tops_size)->first();

            // 身丈
            if (!$wearSize->mitake) {
                $mitake = null;
                $mitake = array('calc' => $mitake, 'size' => $wearSize->mitake);
            } elseif (!$userSize->mitake) {
                $mitake = null;
                $mitake = array('calc' => $mitake, 'size' => $wearSize->mitake);
            } else {
                $mitake = $wearSize->mitake - $userSize->mitake;
                $mitake = array('calc' => $mitake, 'size' => $wearSize->mitake);
            }

            // 身幅
            if (!$wearSize->mihaba) {
                $mihaba = null;
                $mihaba = array('calc' => $mihaba, 'size' => $wearSize->mihaba);
            } elseif (!$userSize->mihaba) {
                $mihaba = null;
                $mihaba = array('calc' => $mihaba, 'size' => $wearSize->mihaba);
            } else {
                $mihaba =  $wearSize->mihaba - $userSize->mihaba;
                $mihaba = array('calc' => $mihaba, 'size' => $wearSize->mihaba);
            }

            // 肩幅
            if (!$wearSize->katahaba) {
                $katahaba = null;
                $katahaba = array('calc' => $katahaba, 'size' => $wearSize->katahaba);
            } elseif (!$userSize->katahaba) {
                $katahaba = null;
                $katahaba = array('calc' => $katahaba, 'size' => $wearSize->katahaba);
            } else {
                $katahaba = $wearSize->katahaba - $userSize->katahaba;
                $katahaba = array('calc' => $katahaba, 'size' => $wearSize->katahaba);
            }

            // 胸囲
            if (!$wearSize->kyoui) {
                $kyoui = null;
                $kyoui = array('calc' => $kyoui, 'size' => $wearSize->kyoui);
            } elseif (!$userSize->kyoui) {
                $kyoui = null;
                $kyoui = array('calc' => $kyoui, 'size' => $wearSize->kyoui);
            } else {
                $kyoui = $wearSize->kyoui - $userSize->kyoui;
                $kyoui = array('calc' => $kyoui, 'size' => $wearSize->kyoui);
            }

            // 着丈
            if (!$wearSize->kitake) {
                $kitake = null;
                $kitake = array('calc' => $kitake, 'size' => $wearSize->kitake);
            } elseif (!$userSize->kitake) {
                $kitake = null;
                $kitake = array('calc' => $kitake, 'size' => $wearSize->kitake);
            } else {
                $kitake = $wearSize->kitake - $userSize->kitake;
                $kitake = array('calc' => $kitake, 'size' => $wearSize->kitake);
            }

            // 袖丈
            if (!$wearSize->sodetake) {
                $sodetake = null;
                $sodetake = array('calc' => $sodetake, 'size' => $wearSize->sodetake);
            } elseif (!$userSize->sodetake) {
                $sodetake = null;
                $sodetake = array('calc' => $sodetake, 'size' => $wearSize->sodetake);
            } else {
                $sodetake = $wearSize->sodetake - $userSize->sodetake;
                $sodetake = array('calc' => $sodetake, 'size' => $wearSize->sodetake);
            }

            // 計算結果を取得

            $mitakeCalc = $mitake['calc'];
            $mihabaCalc = $mihaba['calc'];
            $katahabaCalc = $katahaba['calc'];
            $kyouiCalc = $kyoui['calc'];
            $kitakeCalc = $kitake['calc'];
            $sodetakeCalc = $sodetake['calc'];

            // コメントを指定

            // return response()->json($wearItems[0]['mihaba']);
            $sizeFB = Size::FeedbackTopsSizeComment($mitakeCalc, $mihabaCalc, $katahabaCalc, $kyouiCalc, $kitakeCalc, $sodetakeCalc);

            $wearItems[] = array('mitake' => $mitake, 'mihaba' => $mihaba, 'katahaba' => $katahaba, 'kyoui' => $kyoui, 'kitake' => $kitake, 'sodetake' => $sodetake, 'comment' => $sizeFB);
            // return response()->json($sizeFB);

        }

        if ($type == 'pants') {
            $wearSize = DB::table('pants_size')->where('item_id', $userCoord->pants)->where('size', $userSize->pants_size)->first();

            // ウエスト
            if (!$wearSize->waist) {
                $waist = null;
                $waist = array('calc' => $waist, 'size' => $wearSize->waist);
            } elseif (!$userSize->waist) {
                $waist = null;
                $waist = array('calc' => $waist, 'size' => $wearSize->waist);
            } else {
                $waist = $wearSize->waist - $userSize->waist;
                $waist = array('calc' => $waist, 'size' => $wearSize->waist);
            }

            // ヒップ
            if (!$wearSize->hip) {
                $hip = null;
                $hip = array('calc' => $hip, 'size' => $wearSize->hip);
            } elseif (!$userSize->hip) {
                $hip = null;
                $hip = array('calc' => $hip, 'size' => $wearSize->hip);
            } else {
                $hip =  $wearSize->hip - $userSize->hip;
                $hip = array('calc' => $hip, 'size' => $wearSize->hip);
            }

            // ワタリ幅
            if (!$wearSize->watarihaba) {
                $watarihaba = null;
                $watarihaba = array('calc' => $watarihaba, 'size' => $wearSize->watarihaba);
            } elseif (!$userSize->watarihaba) {
                $watarihaba = null;
                $watarihaba = array('calc' => $watarihaba, 'size' => $wearSize->watarihaba);
            } else {
                $watarihaba = $wearSize->watarihaba - $userSize->watarihaba;
                $watarihaba = array('calc' => $watarihaba, 'size' => $wearSize->watarihaba);
            }

            // 股上
            if (!$wearSize->matagami) {
                $matagami = null;
                $matagami = array('calc' => $matagami, 'size' => $wearSize->matagami);
            } elseif (!$userSize->matagami) {
                $matagami = null;
                $matagami = array('calc' => $matagami, 'size' => $wearSize->matagami);
            } else {
                $matagami = $wearSize->matagami - $userSize->matagami;
                $matagami = array('calc' => $matagami, 'size' => $wearSize->matagami);
            }

            // 股下
            if (!$wearSize->matashita) {
                $matashita = null;
                $matashita = array('calc' => $matashita, 'size' => $wearSize->matashita);
            } elseif (!$userSize->matashita) {
                $matashita = null;
                $matashita = array('calc' => $matashita, 'size' => $wearSize->matashita);
            } else {
                $matashita = $wearSize->matashita - $userSize->matashita;
                $matashita = array('calc' => $matashita, 'size' => $wearSize->matashita);
            }

            // 裾幅
            if (!$wearSize->susohaba) {
                $susohaba = null;
                $susohaba = array('calc' => $susohaba, 'size' => $wearSize->susohaba);
            } elseif (!$userSize->susohaba) {
                $susohaba = null;
                $susohaba = array('calc' => $susohaba, 'size' => $wearSize->susohaba);
            } else {
                $susohaba = $wearSize->susohaba - $userSize->susohaba;
                $susohaba = array('calc' => $susohaba, 'size' => $wearSize->susohaba);
            }

            // 総丈
            if (!$wearSize->soutake) {
                $soutake = null;
                $soutake = array('calc' => $soutake, 'size' => $wearSize->soutake);
            } elseif (!$userSize->soutake) {
                $soutake = null;
                $soutake = array('calc' => $soutake, 'size' => $wearSize->soutake);
            } else {
                $soutake = $wearSize->soutake - $userSize->soutake;
                $soutake = array('calc' => $soutake, 'size' => $wearSize->soutake);
            }

            // 計算結果を取得

            $waistCalc = $waist['calc'];
            $hipCalc = $hip['calc'];
            $watarihabaCalc = $watarihaba['calc'];
            $matagamiCalc = $matagami['calc'];
            $matashitaCalc = $matashita['calc'];
            $susohabaCalc = $susohaba['calc'];
            $soutakeCalc = $soutake['calc'];

            // コメントを指定

            // return response()->json($wearItems[0]['mihaba']);
            $sizeFB = Size::FeedbackPantsSizeComment($waistCalc, $hipCalc, $watarihabaCalc, $matagamiCalc, $matashitaCalc, $susohabaCalc, $soutakeCalc);

            // return response()->json($sizeFB);

            $wearItems[] = array('waist' => $waist, 'hip' => $hip, 'watarihaba' => $watarihaba, 'matagami' => $matagami, 'matashita' => $matashita, 'susohaba' => $susohaba , 'soutake' => $soutake, 'comment' => $sizeFB);
        }


        return response()->json($wearItems);
    }
}
