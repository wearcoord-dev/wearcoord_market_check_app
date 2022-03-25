<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CapsCount;
use App\Models\CapsRakutenApi;
use App\Models\TopsCount;
use App\Models\TopsRakutenApi;
use Illuminate\Http\Request;

class CountController extends Controller
{
    public function addItemCount(Request $request)
    {
        $request->validate([
            'caps' => ['integer'],
            'tops' => ['integer'],
        ]);

        $capsId = $request['caps'];
        $topsId = $request['tops'];

        // caps
        // 該当するウェアidが存在するか確認
        $existCaps = CapsRakutenApi::where('id', $capsId)->value('id');

        if($existCaps){
            $existCapsCountDB = CapsCount::where('wearId', $capsId)->first();

            // カウントDBに既にウェアidある場合はそれをカウントアップする
            if($existCapsCountDB){
                $existCapsCountDB->increment('totalCount');
                $existCapsCountDB->increment('month');
                $existCapsCountDB->increment('week');
                $existCapsCountDB->increment('day');
                $existCapsCountDB->save();
            }else{
                // カウントDBに該当のidが無ければ新規追加
                CapsCount::create([
                    'wearId' => $existCaps,
                    'totalCount' => 1,
                    'month' => 1,
                    'week' => 1,
                    'day' => 1,
                ]);
            }
        }else{
        }

        // tops
        // 該当するウェアidが存在するか確認
        $existTops = TopsRakutenApi::where('id', $topsId)->value('id');

        if($existTops){
            // $existCountDB = TopsCount::where('wearId', $topsId)->exists();
            $existCountDB = TopsCount::where('wearId', $topsId)->first();

            // カウントDBに既にウェアidある場合はそれをカウントアップする
            if($existCountDB){
                $existCountDB->increment('totalCount');
                $existCountDB->increment('month');
                $existCountDB->increment('week');
                $existCountDB->increment('day');
                $existCountDB->save();
            }else{
                // カウントDBに該当のidが無ければ新規追加
                TopsCount::create([
                    'wearId' => $existTops,
                    'totalCount' => 1,
                    'month' => 1,
                    'week' => 1,
                    'day' => 1,
                ]);
            }
        }else{
        }
    }
}
