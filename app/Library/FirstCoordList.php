<?php

namespace App\Library;

use Illuminate\Support\Facades\DB;

class FirstCoordList
{
    public static function createFirstCoord($url, $user_id, $coordId)
    {

        if ($coordId == 1) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 597,
                'pants' => 256,
                'shoes' => 140,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 2) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 628,
                'pants' => 374,
                'shoes' => 57,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 3) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 602,
                'pants' => 251,
                'shoes' => 132,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 4) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 582,
                'pants' => 249,
                'shoes' => 124,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 5) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 607,
                'pants' => 233,
                'shoes' => 58,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 6) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 616,
                'pants' => 374,
                'shoes' => 172,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 7) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 613,
                'pants' => 252,
                'shoes' => 143,
                'mannequin' => $url,
            ]);
        }
        // if ($coordId == 8) {
        //     DB::table('userSelectCoord')->insert([
        //         'user_id' => $user_id,
        //         'caps' => null,
        //         'tops' => 616,
        //         'pants' => 374,
        //         'shoes' => 127,
        //         'mannequin' => $url,
        //     ]);
        // }

// Asics male

        if ($coordId == 9) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 27,
                'tops' => 697,
                'pants' => 457,
                'shoes' => 223,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 10) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 696,
                'pants' => 73,
                'shoes' => 216,
                'mannequin' => "mens_170_long_black_socks_model.png",
            ]);
        }
        if ($coordId == 11) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 27,
                'tops' => 56,
                'pants' => 68,
                'shoes' => 217,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 12) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 83,
                'pants' => 458,
                'shoes' => 224,
                'mannequin' => "mens_170_short_white_socks_model.png",
            ]);
        }

// Adidas male

        if ($coordId == 13) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 22,
                'tops' => 682,
                'pants' => 50,
                'shoes' => 43,
                'mannequin' => "mens_170_underinner_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 14) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 24,
                'tops' => 679,
                'pants' => 28,
                'shoes' => 40,
                'mannequin' => "mens_170_underinner_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 15) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 677,
                'pants' => 45,
                'shoes' => 46,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 16) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 22,
                'tops' => 654,
                'pants' => 28,
                'shoes' => 40,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }

// fila male

        if ($coordId == 17) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 151,
                'pants' => 451,
                'shoes' => 223,
                'mannequin' => "mens_170_short_white_socks_model.png",
            ]);
        }
        if ($coordId == 18) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 141,
                'pants' => 451,
                'shoes' => 220,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 19) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 139,
                'pants' => 450,
                'shoes' => 215,
                'mannequin' => "mens_170_underinner_short_white_socks_model.png",
            ]);
        }
        if ($coordId == 20) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 148,
                'pants' => 452,
                'shoes' => 223,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }

        // nike male

        if ($coordId == 21) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 770,
                'pants' => 453,
                'shoes' => 213,
                'mannequin' => "mens_170_underinner_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 22) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 692,
                'pants' => 18,
                'shoes' => 214,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 23) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 649,
                'pants' => 2,
                'shoes' => 23,
                'mannequin' => "mens_170_long_black_socks_model.png",
            ]);
        }
        if ($coordId == 24) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 9,
                'tops' => 642,
                'pants' => 453,
                'shoes' => 35,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }

// diadora male

        if ($coordId == 25) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 9,
                'tops' => 709,
                'pants' => 84,
                'shoes' => 196,
                'mannequin' => "mens_170_short_white_socks_model.png",
            ]);
        }
        if ($coordId == 26) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 9,
                'tops' => 701,
                'pants' => 94,
                'shoes' => 209,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 27) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 122,
                'pants' => 80,
                'shoes' => 193,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 28) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 9,
                'tops' => 700,
                'pants' => 85,
                'shoes' => 196,
                'mannequin' => "mens_170_totalinner_short_black_socks_model.png",
            ]);
        }

// prince male

        if ($coordId == 29) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 711,
                'pants' => 301,
                'shoes' => 83,
                'mannequin' => "mens_170_short_black_socks_model.png",
            ]);
        }
        if ($coordId == 30) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 365,
                'pants' => 303,
                'shoes' => 78,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 31) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 44,
                'tops' => 356,
                'pants' => 300,
                'shoes' => 83,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 32) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 366,
                'pants' => 303,
                'shoes' => 77,
                'mannequin' => "mens_170_short_white_socks_model.png",
            ]);
        }

// ellese male

        if ($coordId == 33) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 719,
                'pants' => 452,
                'shoes' => 220,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 34) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 724,
                'pants' => 130,
                'shoes' => 220,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 35) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 715,
                'pants' => 450,
                'shoes' => 224,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 36) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 716,
                'pants' => 449,
                'shoes' => 222,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }

// babolat male

        if ($coordId == 37) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 737,
                'pants' => 446,
                'shoes' => 63,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 38) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 738,
                'pants' => 444,
                'shoes' => 63,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 39) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 729,
                'pants' => 306,
                'shoes' => 64,
                'mannequin' => "mens_170_totalinner_short_white_socks_model.png",
            ]);
        }
        if ($coordId == 40) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 499,
                'pants' => 444,
                'shoes' => 74,
                'mannequin' => "mens_170_short_white_socks_model.png",
            ]);
        }

// hydrogen male

        if ($coordId == 41) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 74,
                'tops' => 742,
                'pants' => 437,
                'shoes' => 214,
                'mannequin' => "mens_170_long_black_socks_model.png",
            ]);
        }
        if ($coordId == 42) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 432,
                'pants' => 436,
                'shoes' => 214,
                'mannequin' => "mens_170_long_black_socks_model.png",
            ]);
        }
        if ($coordId == 43) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 74,
                'tops' => 743,
                'pants' => 438,
                'shoes' => 214,
                'mannequin' => "mens_170_long_black_socks_model.png",
            ]);
        }
        if ($coordId == 44) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 74,
                'tops' => 428,
                'pants' => 440,
                'shoes' => 214,
                'mannequin' => "mens_170_long_black_socks_model.png",
            ]);
        }

// lecoq male

        if ($coordId == 45) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 747,
                'pants' => 434,
                'shoes' => 222,
                'mannequin' => "mens_170_long_black_socks_model.png",
            ]);
        }
        if ($coordId == 46) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 746,
                'pants' => 428,
                'shoes' => 215,
                'mannequin' => "mens_170_long_black_socks_model.png",
            ]);
        }
        if ($coordId == 47) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 750,
                'pants' => 430,
                'shoes' => 223,
                'mannequin' => "mens_170_short_white_socks_model.png",
            ]);
        }
        if ($coordId == 48) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 402,
                'pants' => 314,
                'shoes' => 214,
                'mannequin' => "mens_170_long_black_socks_model.png",
            ]);
        }
        if ($coordId == 49) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 626,
                'pants' => 357,
                'shoes' => 59,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 50) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 625,
                'pants' => 357,
                'shoes' => 143,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 51) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 61,
                'tops' => 623,
                'pants' => 230,
                'shoes' => 185,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 52) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 622,
                'pants' => 140,
                'shoes' => 122,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 53) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 133,
                'pants' => 242,
                'shoes' => 59,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 54) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 286,
                'pants' => 242,
                'shoes' => 56,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 55) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 318,
                'pants' => 238,
                'shoes' => 172,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 56) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 61,
                'tops' => 287,
                'pants' => 252,
                'shoes' => 144,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 57) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 234,
                'pants' => 183,
                'shoes' => 121,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 58) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 229,
                'pants' => 183,
                'shoes' => 117,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 59) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 220,
                'pants' => 183,
                'shoes' => 58,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 60) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 195,
                'pants' => 188,
                'shoes' => 58,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 61) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 179,
                'pants' => 357,
                'shoes' => 124,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 62) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 178,
                'pants' => 375,
                'shoes' => 124,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 63) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 265,
                'pants' => 206,
                'shoes' => 56,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 64) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 261,
                'pants' => 206,
                'shoes' => 58,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 65) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 256,
                'pants' => 375,
                'shoes' => 59,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 66) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 255,
                'pants' => 374,
                'shoes' => 57,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 67) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => NULL,
                'tops' => 553,
                'pants' => 233,
                'shoes' => 129,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 68) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 578,
                'pants' => 374,
                'shoes' => 160,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 69) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 450,
                'pants' => 357,
                'shoes' => 158,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 70) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 447,
                'pants' => 233,
                'shoes' => 164,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 71) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 452,
                'pants' => 253,
                'shoes' => 166,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 72) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 488,
                'pants' => 374,
                'shoes' => 172,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 73) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 483,
                'pants' => 356,
                'shoes' => 172,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 74) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 479,
                'pants' => 354,
                'shoes' => 172,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 75) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 63,
                'tops' => 467,
                'pants' => 374,
                'shoes' => 168,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 76) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 669,
                'pants' => 421,
                'shoes' => 171,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 77) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 669,
                'pants' => 419,
                'shoes' => 171,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 78) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 668,
                'pants' => 417,
                'shoes' => 171,
                'mannequin' => $url,
            ]);
        }

// lacoste male

        if ($coordId == 79) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 757,
                'pants' => 426,
                'shoes' => 223,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 80) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 755,
                'pants' => 426,
                'shoes' => 219,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 81) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 753,
                'pants' => 426,
                'shoes' => 219,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
        if ($coordId == 82) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 410,
                'pants' => 427,
                'shoes' => 222,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }

// ralosso male

        if ($coordId == 83) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 763,
                'pants' => 380,
                'shoes' => 214,
                'mannequin' => "mens_170_underinner_short_white_socks_model.png",
            ]);
        }
        if ($coordId == 84) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 13,
                'tops' => 631,
                'pants' => 377,
                'shoes' => 223,
                'mannequin' => "mens_170_underinner_short_white_socks_model.png",
            ]);
        }
        if ($coordId == 85) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 666,
                'pants' => 380,
                'shoes' => 217,
                'mannequin' => "mens_170_underinner_short_white_socks_model.png",
            ]);
        }
        if ($coordId == 86) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 659,
                'pants' => 377,
                'shoes' => 224,
                'mannequin' => "mens_170_long_white_socks_model.png",
            ]);
        }
    }
}