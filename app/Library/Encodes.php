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
            $gender = "male";
            $coordId = 1;
        }

        return ["gender" => $gender, "coordId" => $coordId];
    }
}
