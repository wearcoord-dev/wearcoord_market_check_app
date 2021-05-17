<?php

namespace App\Library;
use RakutenRws_Client;
use Illuminate\Support\Facades\DB;



class Rakuten
{
    public static function SearchRakutenAPI($genre, $brand, $color)
    {

        $client = new RakutenRws_Client();

        //定数化
        define("RAKUTEN_APPLICATION_ID", config('app.rakuten_id'));
        define("RAKUTEN_APPLICATION_SEACRET", config('app.rakuten_key'));

        //アプリIDをセット！
        $client->setApplicationId(RAKUTEN_APPLICATION_ID);

        //リクエストから検索キーワードを取り出し
        $keyword = $genre;
        $brand = $brand;
        $color = $color;

        // IchibaItemSearch API から、指定条件で検索
        if (!empty($keyword)) {
            $response = $client->execute('IchibaItemSearch', array(
                //入力パラメーター
                'genreId' => $keyword,
                'tagId' => $brand .  "," . $color,
                'affiliateId' => '1f1115bc.a4b49059.1f1115bd.9475decf',
            ));

            // レスポンスが正しいかを isOk() で確認することができます
            if ($response->isOk()) {
                $items = array();
                //配列で結果をぶち込んで行きます
                foreach ($response as $item) {
                    //画像サイズを変えたかったのでURLを整形します
                    // $str = str_replace("_ex=128x128", "_ex=175x175", $item['mediumImageUrls'][0]['imageUrl']);
                    if(isset($item['mediumImageUrls'][0]['imageUrl']))
                    {
                        $str = $item['mediumImageUrls'][0]['imageUrl'];
                    }else{
                        $str = null;
                    }

                    $items[] = array(
                        'itemName' => $item['itemName'],
                        'itemPrice' => $item['itemPrice'],
                        'itemUrl' => $item['itemUrl'],
                        'affiliateUrl' => $item['affiliateUrl'],
                        'itemCode' => $item['itemCode'],
                        'all' => $item,
                        'mediumImageUrls' => $str,
                        'siteIcon' => "../images/rakuten_logo.png",
                    );
                }
            } else {
                echo 'Error:' . $response->getMessage();
            }
        }

        return ['items' => $items];
    }

    public static function searchRakutenDB($type, $getItems)
    {
        $wearType = $type;


        foreach ($getItems as $getItem) {
            $result = array_filter(
                $getItem,
                function ($element) use ($wearType) {

                    if ($wearType == 'caps') {

                        $item = DB::table('caps_rakuten_apis')->where('itemId', $element['itemCode'])->first();

                        return $item;
                    }

                    if ($wearType == 'tops') {
                        $item = DB::table('tops_rakuten_apis')->where('itemId', $element['itemCode'])->first();

                        return $item;
                    }

                    if ($wearType == 'pants') {
                        $item = DB::table('pants_rakuten_apis')->where('itemId', $element['itemCode'])->first();

                        return $item;
                    }

                    if ($wearType == 'socks') {
                        $item = DB::table('socks_rakuten_apis')->where('itemId', $element['itemCode'])->first();

                        return $item;
                    }

                    if ($wearType == 'shoes') {
                        $item = DB::table('shoes_rakuten_apis')->where('itemId', $element['itemCode'])->first();

                        return $item;
                    }
                }
            );
        }
        // ddd($result);

        return ['result' => $result];
    }

    public static function searchRakutenDBItems($type, $sortDBitems, $color)
    {
        $wearType = $type;
        $DBitems = [];

        foreach($sortDBitems as $sortDBitem){

            foreach($sortDBitem as $item){

                    if ($wearType == 'caps') {
                        $DBitems[] = DB::table('caps_rakuten_apis')->where('itemId', $item['itemCode'])->whereNotNull( $color .'Img')->first();
                    }

                    if ($wearType == 'tops') {
                        $DBitems[] = DB::table('tops_rakuten_apis')->where('itemId', $item['itemCode'])->first();
                    }

                    if ($wearType == 'pants') {
                        $DBitems[] = DB::table('pants_rakuten_apis')->where('itemId', $item['itemCode'])->first();
                    }

                    if ($wearType == 'socks') {
                        $DBitems[] = DB::table('socks_rakuten_apis')->where('itemId', $item['itemCode'])->first();
                    }

                    if ($wearType == 'shoes') {
                        $DBitems[] = DB::table('shoes_rakuten_apis')->where('itemId', $item['itemCode'])->first();
                    }
            }

        }
        // ddd($DBitems);
        return ['DBitems' => $DBitems];
    }
}