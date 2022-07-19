<?php

namespace App\Http\Controllers;

use App\Models\ManageSkuList;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class ManageSkuListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $brand = request('brand');

        $itemData = ManageSkuList::where('sku', $id)
            ->where('brand', $brand)
            ->first();


        $capsId = ManageSkuList::where('gender', $itemData->gender)->where('brand',$brand)->where('type','caps')->where('isDefault',1)->value('wearId');
        $topsId = ManageSkuList::where('gender', $itemData->gender)->where('brand',$brand)->where('type','tops')->where('isDefault',1)->value('wearId');
        $pantsId = ManageSkuList::where('gender', $itemData->gender)->where('brand',$brand)->where('type','pants')->where('isDefault',1)->value('wearId');
        $shoesId = ManageSkuList::where('gender', $itemData->gender)->where('brand',$brand)->where('type','shoes')->where('isDefault',1)->value('wearId');

        $itemList = Arr::collapse([
            ['item' => $itemData],
            ['capsId' => $capsId],
            ['topsId' => $topsId],
            ['pantsId' => $pantsId],
            ['shoesId' => $shoesId],
        ]);

        return response()->json($itemList);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getSkuWearData(Request $request)
    {
        //
    }

    public function getRegisterList(Request $request)
    {
        $brand = request('brand');

        $itemData = ManageSkuList::where('brand', $brand)->get('sku');

        // オブジェクト内にある値を取り出して配列を作成
        $itemData = $itemData->map(function ($item, $key) {
            return $item['sku'];
        });

        return response()->json($itemData);
    }
}
