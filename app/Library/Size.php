<?php

namespace App\Library;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Size
{
    public static function FeedbackTopsSizeComment($mitake, $mihaba, $katahaba, $kyoui, $kitake, $sodetake)
    {
        $comment = null;
        // return $kyoui;

        if ($kyoui && $mihaba && $kitake || $kyoui === 0 || $mihaba === 0 || $kitake === 0) {
            $kyouiResult = self::kyouiCheck($kyoui);
            $kitakeResult = self::kitakeCheck($kitake);
            $mihabaResult = self::mihabaCheck($mihaba);

                    // return $kyouiResult;


            // 胸囲の条件分岐
            switch ($kyouiResult) {

                    // 胸囲が小さすぎる
                case $kyouiResult === "zero":

                    switch ($kitakeResult) {

                            // 着丈が小さすぎる
                        case $kitakeResult == "zero":

                            switch ($mihabaResult) {

                                    // 身幅が小さすぎる
                                case $mihabaResult == "zero":
                                    $comment = "000";
                                    break;

                                    // 身幅がちょうど良い
                                case $mihabaResult == 1:
                                    $comment = "001";
                                    break;

                                    // 身幅が大きすぎる
                                case $mihabaResult == 2:
                                    $comment = "002";
                                    break;
                            }
                            break;

                            // 着丈がちょうど良い
                        case $kitakeResult == 1:

                            switch ($mihabaResult) {

                                    // 身幅が小さすぎる
                                case $mihabaResult == "zero":
                                    $comment = "010";
                                    break;

                                    // 身幅がちょうど良い
                                case $mihabaResult == 1:
                                    $comment = "011";
                                    break;

                                    // 身幅が大きすぎる
                                case $mihabaResult == 2:
                                    $comment = "012";
                                    break;
                            }
                            break;

                            // 着丈が大きすぎる
                        case $kitakeResult == 2:

                            switch ($mihabaResult) {

                                    // 身幅が小さすぎる
                                case $mihabaResult == "zero":
                                    $comment = "020";
                                    break;

                                    // 身幅がちょうど良い
                                case $mihabaResult == 1:
                                    $comment = "021";
                                    break;

                                    // 身幅が大きすぎる
                                case $mihabaResult == 2:
                                    $comment = "022";
                                    break;
                            }
                            break;
                    }

                    break;

                    // 胸囲がちょうど良い
                case $kyouiResult === 1:

                    switch ($kitakeResult) {

                            // 着丈が小さすぎる
                        case $kitakeResult == "zero":

                            switch ($mihabaResult) {

                                    // 身幅が小さすぎ1
                                case $mihabaResult == "zero":
                                    $comment = "100";
                                    break;

                                    // 身幅がちょうど良い
                                case $mihabaResult == 1:
                                    $comment = "101";
                                    break;

                                    // 身幅が大きすぎる
                                case $mihabaResult == 2:
                                    $comment = "102";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                            // 着丈がちょうど良い
                        case $kitakeResult == 1:

                            switch ($mihabaResult) {

                                    // 身幅が小さすぎる
                                case $mihabaResult == "zero":
                                    $comment = "110";
                                    break;

                                    // 身幅がちょうど良い
                                case $mihabaResult == 1:
                                    $comment = "111";
                                    break;

                                    // 身幅が大きすぎる
                                case $mihabaResult == 2:
                                    $comment = "112";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                            // 着丈が大きすぎる
                        case $kitakeResult == 2:

                            switch ($mihabaResult) {

                                    // 身幅が小さすぎる
                                case $mihabaResult == "zero":
                                    $comment = "120";
                                    break;

                                    // 身幅がちょうど良い
                                case $mihabaResult == 1:
                                    $comment = "121";
                                    break;

                                    // 身幅が大きすぎる
                                case $mihabaResult == 2:
                                    $comment = "122";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                        default:
                            $comment = null;
                            break;
                    }

                    break;

                    // 胸囲が大きすぎる
                case $kyouiResult === 2:

                    switch ($kitakeResult) {

                            // 着丈が小さすぎる
                        case $kitakeResult == "zero":

                            switch ($mihabaResult) {

                                    // 身幅が小さすぎ1
                                case $mihabaResult == "zero":
                                    $comment = "200";
                                    break;

                                    // 身幅がちょうど良い
                                case $mihabaResult == 1:
                                    $comment = "201";
                                    break;

                                    // 身幅が大きすぎる
                                case $mihabaResult == 2:
                                    $comment = "202";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                            // 着丈がちょうど良い
                        case $kitakeResult == 1:

                            switch ($mihabaResult) {

                                    // 身幅が小さすぎる
                                case $mihabaResult == "zero":
                                    $comment = "210";
                                    break;

                                    // 身幅がちょうど良い
                                case $mihabaResult == 1:
                                    $comment = "211";
                                    break;

                                    // 身幅が大きすぎる
                                case $mihabaResult == 2:
                                    $comment = "212";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                            // 着丈が大きすぎる
                        case $kitakeResult == 2:

                            switch ($mihabaResult) {

                                    // 身幅が小さすぎる
                                case $mihabaResult == "zero":
                                    $comment = "220";
                                    break;

                                    // 身幅がちょうど良い
                                case $mihabaResult == 1:
                                    $comment = "221";
                                    break;

                                    // 身幅が大きすぎる
                                case $mihabaResult == 2:
                                    $comment = "222";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                        default:
                            $comment = null;
                            break;
                    }
                    break;

                default:
                    $comment = null;
                    break;
            }
        }

        return $comment;
    }

    public static function kyouiCheck($kyoui)
    {

        switch ($kyoui || $kyoui === 0) {

                // 胸囲が-5cmより大きい(小さすぎる)
            case $kyoui < -5:
                $result = "zero";
                break;

                // -5cm以上3cm以下(ちょうど良い)
            case $kyoui < 5:
                $result = 1;
                break;

                // 3cm以上(大きすぎる)
            case $kyoui > 5:
                $result = 2;
                break;
            default:
                $result = null;
                break;
        }

        return $result;
    }

    public static function kitakeCheck($kitake)
    {

        switch ($kitake || $kitake === 0) {

                // 身丈が-5cmより大きい(小さすぎる)
            case $kitake < -5:
                $result = "zero";
                break;

                // -5cm以上3cm以下(ちょうど良い)
            case $kitake < 3:
                $result = 1;
                break;

                // 3cm以上(大きすぎる)
            case $kitake > 3:
                $result = 2;
                break;
            default:
                $result = null;
                break;
        }

        return $result;
    }

    public static function mihabaCheck($mihaba)
    {

        switch ($mihaba || $mihaba === 0) {

                // 身幅が-5cmより大きい(小さすぎる)
            case $mihaba < -5:
                $result = "zero";
                break;

                // -5cm以上3cm以下(ちょうど良い)
            case $mihaba < 3:
                $result = 1;
                break;

                // 3cm以上(大きすぎる)
            case $mihaba > 3:
                $result = 2;
                break;
            default:
                $result = null;
                break;
        }

        return $result;
    }

    public static function FeedbackPantsSizeComment($waist, $hip, $watarihaba, $matagami, $matashita, $susohaba, $soutake)
    {
        $comment = null;
        // return $waistCalc;

        if ($waist && $soutake && $matashita || $waist === 0 || $soutake === 0 || $matashita === 0) {
            $waistResult = self::waistCheck($waist);
            $soutakeResult = self::soutakeCheck($soutake);
            $matashitaResult = self::matashitaCheck($matashita);


            // ウエストの条件分岐
            switch ($waistResult) {

                    // ウエストが小さすぎる
                case $waistResult === "zero":

                    switch ($soutakeResult) {

                            // 総丈が小さすぎる
                        case $soutakeResult == "zero":

                            switch ($matashitaResult) {

                                    // 股下が小さすぎる
                                case $matashitaResult == "zero":
                                    $comment = "000";
                                    break;

                                    // 股下がちょうど良い
                                case $matashitaResult == 1:
                                    $comment = "001";
                                    break;

                                    // 股下が大きすぎる
                                case $matashitaResult == 2:
                                    $comment = "002";
                                    break;
                            }
                            break;

                            // 総丈がちょうど良い
                        case $soutakeResult == 1:

                            switch ($matashitaResult) {

                                    // 股下が小さすぎる
                                case $matashitaResult == "zero":
                                    $comment = "010";
                                    break;

                                    // 股下がちょうど良い
                                case $matashitaResult == 1:
                                    $comment = "011";
                                    break;

                                    // 股下が大きすぎる
                                case $matashitaResult == 2:
                                    $comment = "012";
                                    break;
                            }
                            break;

                            // 総丈が大きすぎる
                        case $soutakeResult == 2:

                            switch ($matashitaResult) {

                                    // 股下が小さすぎる
                                case $matashitaResult == "zero":
                                    $comment = "020";
                                    break;

                                    // 股下がちょうど良い
                                case $matashitaResult == 1:
                                    $comment = "021";
                                    break;

                                    // 股下が大きすぎる
                                case $matashitaResult == 2:
                                    $comment = "022";
                                    break;
                            }
                            break;
                    }

                    break;

                    // ウエストがちょうど良い
                case $waistResult === 1:

                    switch ($soutakeResult) {

                            // 総丈が小さすぎる
                        case $soutakeResult == "zero":

                            switch ($matashitaResult) {

                                    // 股下が小さすぎ1
                                case $matashitaResult == "zero":
                                    $comment = "100";
                                    break;

                                    // 股下がちょうど良い
                                case $matashitaResult == 1:
                                    $comment = "101";
                                    break;

                                    // 股下が大きすぎる
                                case $matashitaResult == 2:
                                    $comment = "102";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                            // 総丈がちょうど良い
                        case $soutakeResult == 1:

                            switch ($matashitaResult) {

                                    // 股下が小さすぎる
                                case $matashitaResult == "zero":
                                    $comment = "110";
                                    break;

                                    // 股下がちょうど良い
                                case $matashitaResult == 1:
                                    $comment = "111";
                                    break;

                                    // 股下が大きすぎる
                                case $matashitaResult == 2:
                                    $comment = "112";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                            // 総丈が大きすぎる
                        case $soutakeResult == 2:

                            switch ($matashitaResult) {

                                    // 股下が小さすぎる
                                case $matashitaResult == "zero":
                                    $comment = "120";
                                    break;

                                    // 股下がちょうど良い
                                case $matashitaResult == 1:
                                    $comment = "121";
                                    break;

                                    // 股下が大きすぎる
                                case $matashitaResult == 2:
                                    $comment = "122";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                        default:
                            $comment = null;
                            break;
                    }

                    break;

                    // ウエストが大きすぎる
                case $waistResult === 2:

                    switch ($soutakeResult) {

                            // 総丈が小さすぎる
                        case $soutakeResult == "zero":

                            switch ($matashitaResult) {

                                    // 股下が小さすぎ1
                                case $matashitaResult == "zero":
                                    $comment = "200";
                                    break;

                                    // 股下がちょうど良い
                                case $matashitaResult == 1:
                                    $comment = "201";
                                    break;

                                    // 股下が大きすぎる
                                case $matashitaResult == 2:
                                    $comment = "202";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                            // 総丈がちょうど良い
                        case $soutakeResult == 1:

                            switch ($matashitaResult) {

                                    // 股下が小さすぎる
                                case $matashitaResult == "zero":
                                    $comment = "210";
                                    break;

                                    // 股下がちょうど良い
                                case $matashitaResult == 1:
                                    $comment = "211";
                                    break;

                                    // 股下が大きすぎる
                                case $matashitaResult == 2:
                                    $comment = "212";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                            // 総丈が大きすぎる
                        case $soutakeResult == 2:

                            switch ($matashitaResult) {

                                    // 股下が小さすぎる
                                case $matashitaResult == "zero":
                                    $comment = "220";
                                    break;

                                    // 股下がちょうど良い
                                case $matashitaResult == 1:
                                    $comment = "221";
                                    break;

                                    // 股下が大きすぎる
                                case $matashitaResult == 2:
                                    $comment = "222";
                                    break;

                                default:
                                    $comment = null;
                                    break;
                            }
                            break;

                        default:
                            $comment = null;
                            break;
                    }
                    break;

                default:
                    $comment = null;
                    break;
            }
        }

        return $comment;
    }

    public static function waistCheck($waist)
    {

        switch ($waist || $waist === 0) {

                // -3cmより大きい(小さすぎる)
            case $waist < -3:
                $result = "zero";
                break;

                // -3cm以上3cm以下(ちょうど良い)
            case $waist < 3:
                $result = 1;
                break;

                // 3cm以上(大きすぎる)
            case $waist > 3:
                $result = 2;
                break;
            default:
                $result = null;
                break;
        }

        return $result;
    }

    public static function soutakeCheck($soutake)
    {

        switch ($soutake || $soutake === 0) {

                // 2cmより大きい(小さすぎる)
            case $soutake < -2:
                $result = "zero";
                break;

                // -2cm以上2cm以下(ちょうど良い)
            case $soutake < 2:
                $result = 1;
                break;

                // 2cm以上(大きすぎる)
            case $soutake > 2:
                $result = 2;
                break;
            default:
                $result = null;
                break;
        }

        return $result;
    }

    public static function matashitaCheck($matashita)
    {

        switch ($matashita || $matashita === 0) {

                // 2cmより大きい(小さすぎる)
            case $matashita < -2:
                $result = "zero";
                break;

                // 2cm以上2cm以下(ちょうど良い)
            case $matashita < 2:
                $result = 1;
                break;

                // 2cm以上(大きすぎる)
            case $matashita > 2:
                $result = 2;
                break;
            default:
                $result = null;
                break;
        }

        return $result;
    }
}
