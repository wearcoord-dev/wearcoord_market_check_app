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