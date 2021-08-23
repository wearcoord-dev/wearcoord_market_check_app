<?php

namespace App\Library;

use Illuminate\Support\Facades\DB;

class Encodes
{
    public static function encodeRakutenColorTag($color)
    {

        switch ($color) {
            case 'navy':
                $color = 1004015;
                break;
            case 'black':
                $color = 1000886;
                break;
            case 'white':
                $color = 1000873;
                break;
            case 'pink':
                $color = 1000876;
                break;
            case 'red':
                $color = 1000877;
                break;
            case 'orange':
                $color = 1000875;
                break;
            case 'yellow':
                $color = 1000874;
                break;
            case 'green':
                $color = 1000884;
                break;
            case 'blue':
                $color = 1000885;
                break;
            case 'purple':
                $color = 1000882;
                break;
            default:
                $color = $color;
                break;
        }

        return $color;
    }

    public static function encodeRakutenBrandTag($brand)
    {

        switch ($brand) {
            case 'yonex':
                $brand = 1002656;
                break;
            case 'nike':
                $brand = 1000588;
                break;
            case 'adidas':
                $brand = 1000595;
                break;
            case 'gosen':
                $brand = 1008297;
                break;
            case 'mizuno':
                $brand = 1000601;
                break;
            case 'asics':
                $brand = 1000860;
                break;
            case 'diadora':
                $brand = 1002148;
                break;
            case 'babolat':
                $brand = 1008404;
                break;
            case 'prince':
                $brand = 1004267;
                break;
            case 'fila':
                $brand = 1000965;
                break;
            case 'ellesse':
                $brand = 1001753;
                break;
            case 'oakley':
                $brand = 1001782;
                break;
            case 'lecoq':
                $brand = 1000865;
                break;
            case 'lacoste':
                $brand = 1000808;
                break;
            case 'newbalance':
                $brand = 1000597;
                break;
            case 'underarmour':
                $brand = 1001642;
                break;
            case 'srixon':
                $brand = 1004239;
                break;
            case 'lotto':
                $brand = 1008507;
                break;
            case 'armani':
                $brand = 1005489;
                break;
            case 'hydrogen':
                $brand = 1002257;
                break;
            default:
                $brand = $brand;
                break;
        }

        return $brand;
    }

    public static function encodeFirstSelectCoord($data)
    {

        if($data == "1"){
            $gender = "female";
            $coordId = 1;
        }
        if($data == "2"){
            $gender = "female";
            $coordId = 2;
        }
        if($data == "3"){
            $gender = "female";
            $coordId = 3;
        }
        if($data == "4"){
            $gender = "female";
            $coordId = 4;
        }
        if($data == "5"){
            $gender = "female";
            $coordId = 5;
        }
        if($data == "6"){
            $gender = "female";
            $coordId = 6;
        }
        if($data == "7"){
            $gender = "female";
            $coordId = 7;
        }
        if($data == "8"){
            $gender = "female";
            $coordId = 8;
        }
        if($data == "9"){
            $gender = "male";
            $coordId = 9;
        }
        if($data == "10"){
            $gender = "male";
            $coordId = 10;
        }
        if($data == "11"){
            $gender = "male";
            $coordId = 11;
        }
        if($data == "12"){
            $gender = "male";
            $coordId = 12;
        }
        if($data == "13"){
            $gender = "male";
            $coordId = 13;
        }
        if($data == "14"){
            $gender = "male";
            $coordId = 14;
        }
        if($data == "15"){
            $gender = "male";
            $coordId = 15;
        }
        if($data == "16"){
            $gender = "male";
            $coordId = 16;
        }
        if($data == "17"){
            $gender = "male";
            $coordId = 17;
        }
        if($data == "18"){
            $gender = "male";
            $coordId = 18;
        }
        if($data == "19"){
            $gender = "male";
            $coordId = 19;
        }
        if($data == "20"){
            $gender = "male";
            $coordId = 20;
        }
        if($data == "21"){
            $gender = "male";
            $coordId = 21;
        }
        if($data == "22"){
            $gender = "male";
            $coordId = 22;
        }
        if($data == "23"){
            $gender = "male";
            $coordId = 23;
        }
        if($data == "24"){
            $gender = "male";
            $coordId = 24;
        }
        if($data == "25"){
            $gender = "male";
            $coordId = 25;
        }
        if($data == "26"){
            $gender = "male";
            $coordId = 26;
        }
        if($data == "27"){
            $gender = "male";
            $coordId = 27;
        }
        if($data == "28"){
            $gender = "male";
            $coordId = 28;
        }
        if($data == "29"){
            $gender = "male";
            $coordId = 29;
        }
        if($data == "30"){
            $gender = "male";
            $coordId = 30;
        }
        if($data == "31"){
            $gender = "male";
            $coordId = 31;
        }
        if($data == "32"){
            $gender = "male";
            $coordId = 32;
        }
        if($data == "33"){
            $gender = "male";
            $coordId = 33;
        }
        if($data == "34"){
            $gender = "male";
            $coordId = 34;
        }
        if($data == "35"){
            $gender = "male";
            $coordId = 35;
        }
        if($data == "36"){
            $gender = "male";
            $coordId = 36;
        }
        if($data == "37"){
            $gender = "male";
            $coordId = 37;
        }
        if($data == "38"){
            $gender = "male";
            $coordId = 38;
        }
        if($data == "39"){
            $gender = "male";
            $coordId = 39;
        }
        if($data == "40"){
            $gender = "male";
            $coordId = 40;
        }
        if($data == "41"){
            $gender = "male";
            $coordId = 41;
        }
        if($data == "42"){
            $gender = "male";
            $coordId = 42;
        }
        if($data == "43"){
            $gender = "male";
            $coordId = 43;
        }
        if($data == "44"){
            $gender = "male";
            $coordId = 44;
        }
        if($data == "45"){
            $gender = "male";
            $coordId = 45;
        }
        if($data == "46"){
            $gender = "male";
            $coordId = 46;
        }
        if($data == "47"){
            $gender = "male";
            $coordId = 47;
        }
        if($data == "48"){
            $gender = "male";
            $coordId = 48;
        }
        if($data == "49"){
            $gender = "female";
            $coordId = 49;
        }
        if($data == "50"){
            $gender = "female";
            $coordId = 50;
        }
        if($data == "51"){
            $gender = "female";
            $coordId = 51;
        }
        if($data == "52"){
            $gender = "female";
            $coordId = 52;
        }
        if($data == "53"){
            $gender = "female";
            $coordId = 53;
        }
        if($data == "54"){
            $gender = "female";
            $coordId = 54;
        }
        if($data == "55"){
            $gender = "female";
            $coordId = 55;
        }
        if($data == "56"){
            $gender = "female";
            $coordId = 56;
        }
        if($data == "57"){
            $gender = "female";
            $coordId = 57;
        }
        if($data == "58"){
            $gender = "female";
            $coordId = 58;
        }
        if($data == "59"){
            $gender = "female";
            $coordId = 59;
        }
        if($data == "60"){
            $gender = "female";
            $coordId = 60;
        }
        if($data == "61"){
            $gender = "female";
            $coordId = 61;
        }
        if($data == "62"){
            $gender = "female";
            $coordId = 62;
        }
        if($data == "63"){
            $gender = "female";
            $coordId = 63;
        }
        if($data == "64"){
            $gender = "female";
            $coordId = 64;
        }
        if($data == "65"){
            $gender = "female";
            $coordId = 65;
        }
        if($data == "66"){
            $gender = "female";
            $coordId = 66;
        }
        if($data == "67"){
            $gender = "female";
            $coordId = 67;
        }
        if($data == "68"){
            $gender = "female";
            $coordId = 68;
        }
        if($data == "69"){
            $gender = "female";
            $coordId = 69;
        }
        if($data == "70"){
            $gender = "female";
            $coordId = 70;
        }
        if($data == "71"){
            $gender = "female";
            $coordId = 71;
        }
        if($data == "72"){
            $gender = "female";
            $coordId = 72;
        }
        if($data == "73"){
            $gender = "female";
            $coordId = 73;
        }
        if($data == "74"){
            $gender = "female";
            $coordId = 74;
        }
        if($data == "75"){
            $gender = "female";
            $coordId = 75;
        }
        if($data == "76"){
            $gender = "female";
            $coordId = 76;
        }
        if($data == "77"){
            $gender = "female";
            $coordId = 77;
        }
        if($data == "78"){
            $gender = "female";
            $coordId = 78;
        }


        return ["gender" => $gender, "coordId" => $coordId];
    }
}
