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
        if ($coordId == 9) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 26,
                'tops' => 83,
                'pants' => 68,
                'shoes' => 49,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 10) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 47,
                'pants' => 68,
                'shoes' => 49,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 11) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 26,
                'tops' => 60,
                'pants' => 57,
                'shoes' => 100,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 12) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 27,
                'tops' => 92,
                'pants' => 67,
                'shoes' => 49,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 13) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 24,
                'tops' => 342,
                'pants' => 46,
                'shoes' => 40,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 14) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 338,
                'pants' => 47,
                'shoes' => 47,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 15) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 22,
                'tops' => 497,
                'pants' => 23,
                'shoes' => 46,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 16) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 24,
                'tops' => 341,
                'pants' => 50,
                'shoes' => 47,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 17) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 56,
                'tops' => 148,
                'pants' => 98,
                'shoes' => 62,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 18) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 56,
                'tops' => 139,
                'pants' => 119,
                'shoes' => 69,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 19) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 56,
                'tops' => 138,
                'pants' => 120,
                'shoes' => 12,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 20) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 151,
                'pants' => 98,
                'shoes' => 39,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 21) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 2,
                'tops' => 2,
                'pants' => 18,
                'shoes' => 28,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 22) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 2,
                'tops' => 28,
                'pants' => 10,
                'shoes' => 39,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 23) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 30,
                'pants' => 18,
                'shoes' => 31,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 24) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 27,
                'pants' => 16,
                'shoes' => 23,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 25) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 124,
                'pants' => 90,
                'shoes' => 23,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 26) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 34,
                'tops' => 101,
                'pants' => 90,
                'shoes' => 196,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 27) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 34,
                'tops' => 117,
                'pants' => 79,
                'shoes' => 193,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 28) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 33,
                'tops' => 99,
                'pants' => 94,
                'shoes' => 193,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 29) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 40,
                'tops' => 358,
                'pants' => 303,
                'shoes' => 85,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 30) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 42,
                'tops' => 363,
                'pants' => 296,
                'shoes' => 80,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 31) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 45,
                'tops' => 366,
                'pants' => 303,
                'shoes' => 85,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 32) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 371,
                'pants' => 300,
                'shoes' => 83,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 33) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 166,
                'pants' => 130,
                'shoes' => 15,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 34) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 161,
                'pants' => 130,
                'shoes' => 105,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 35) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 500,
                'pants' => 125,
                'shoes' => 40,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 36) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 169,
                'pants' => 135,
                'shoes' => 13,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 38) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 65,
                'tops' => 380,
                'pants' => 308,
                'shoes' => 73,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 39) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 66,
                'tops' => 384,
                'pants' => 305,
                'shoes' => 68,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 40) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 65,
                'tops' => 499,
                'pants' => 306,
                'shoes' => 63,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 41) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 74,
                'tops' => 424,
                'pants' => 332,
                'shoes' => 65,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 42) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 425,
                'pants' => 341,
                'shoes' => 73,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 43) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 428,
                'pants' => 334,
                'shoes' => 63,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 44) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 74,
                'tops' => 423,
                'pants' => 339,
                'shoes' => 40,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 46) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 65,
                'tops' => 392,
                'pants' => 317,
                'shoes' => 47,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 47) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => null,
                'tops' => 397,
                'pants' => 309,
                'shoes' => 78,
                'mannequin' => $url,
            ]);
        }
        if ($coordId == 48) {
            DB::table('userSelectCoord')->insert([
                'user_id' => $user_id,
                'caps' => 22,
                'tops' => 400,
                'pants' => 314,
                'shoes' => 83,
                'mannequin' => $url,
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
    }
}