<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\TopsRakutenApi;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\UploadRequest;
use App\Models\CapsRakutenApi;
use App\Models\ManageSkuList;
use App\Models\PantsRakutenApi;
use App\Models\ShoesRakutenApi;
use Illuminate\Support\Facades\Log;
use Throwable;

class ItemController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($gender)
    {
        return view('admin.itemAdd', compact('gender'));
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
    public function store(UploadRequest $request, $gender)
    {
        $request->validate([
            'itemId' => ['required', 'string', 'max:200'],
            'brand' => ['required', 'string', 'max:100'],
            'category' => ['required', 'integer'],
            'color' => ['required', 'string'],
            'wearimg' => ['required', 'mimes:png', 'image'],
            'showImg' => ['nullable', 'image'],
            'link' => ['nullable', 'string'],
            'available' => ['required', 'integer'],
            'shopify_id' => ['nullable', 'string'],
            'sku' => ['nullable', 'string'],
            'isShowSku' => ['nullable', 'string'],
            'isShowDefaultWear' => ['nullable', 'string'],
        ]);

        // コーデ画像用
        $imageFiles = $request->wearimg;
        if (!is_null($imageFiles)) {
            $category = $request->category;

            // 画像の保存
            $filename = $request->wearimg->getClientOriginalName();
            $img = $request->wearimg->storeAs(
                '/img/rakutenlist/' . $gender . '/' . $category,
                $filename
            );
            // dd($request);
        }

        // 一覧画像用
        $imageFilesShow = $request->showImg;
        if (!is_null($imageFilesShow)) {
            // 画像の保存
            $filenameShow = $request->showImg->getClientOriginalName();
            $img = $request->showImg->storeAs('/img/showList/', $filenameShow);
            // dd($request);
        }

        $isSku = null;

        if ($request->sku) {
            $isSku = true;
        } else {
            $isSku = null;
        }

        try {
            DB::transaction(function () use ($request, $isSku, $gender) {
                // nullに変換
                if ($request->available == '0') {
                    $available = null;
                } else {
                    $available = $request->available;
                }

                $capsCategory = [
                    506269 => true,
                    565818 => true,
                ];

                $topsCategory = [
                    508759 => true,
                    565925 => true,
                    508803 => true,
                    565927 => true,
                    500316 => true,
                ];

                $pantsCategory = [
                    508820 => true,
                    565928 => true,
                    565816 => true,
                    508772 => true,
                    565926 => true,
                ];

                $shoesCategory = [
                    208025 => true,
                    565819 => true,
                ];

                if (isset($topsCategory[$request->category])) {
                    TopsRakutenApi::create([
                        'itemId' => $request->itemId,
                        'brand' => $request->brand,
                        'category' => $request->category,
                        'moshimoLink' => $request->link,
                        'availability' => $available,
                        $request->color => $request->wearimg->getClientOriginalName(),
                        'img' => $request->wearimg->getClientOriginalName(),
                        'shopify_id' => $request->shopify_id,
                        'showImg' => $request->showImg->getClientOriginalName(),
                        'isSku' => $isSku,
                    ]);

                    // SKUが入っているか見て処理
                    if ($request->sku) {
                        $wearId = TopsRakutenApi::where(
                            'itemId',
                            $request->itemId
                        )
                            ->where('category', $request->category)
                            ->value('id');
                        self::storeSkuList(
                            $request,
                            'tops',
                            $wearId,
                            $gender,
                            $request->isShowDefaultWear
                        );
                    }
                } elseif (isset($capsCategory[$request->category])) {
                    CapsRakutenApi::create([
                        'itemId' => $request->itemId,
                        'brand' => $request->brand,
                        'category' => $request->category,
                        'moshimoLink' => $request->link,
                        'availability' => $available,
                        $request->color => $request->wearimg->getClientOriginalName(),
                        'img' => $request->wearimg->getClientOriginalName(),
                        'shopify_id' => $request->shopify_id,
                        'showImg' => $request->showImg->getClientOriginalName(),
                        'isSku' => $isSku,
                    ]);

                    // SKUが入っているか見て処理
                    if ($request->sku) {
                        $wearId = CapsRakutenApi::where(
                            'itemId',
                            $request->itemId
                        )
                            ->where('category', $request->category)
                            ->value('id');
                        self::storeSkuList(
                            $request,
                            'caps',
                            $wearId,
                            $gender,
                            $request->isShowDefaultWear
                        );
                    }
                } elseif (isset($pantsCategory[$request->category])) {
                    PantsRakutenApi::create([
                        'itemId' => $request->itemId,
                        'brand' => $request->brand,
                        'category' => $request->category,
                        'moshimoLink' => $request->link,
                        'availability' => $available,
                        $request->color => $request->wearimg->getClientOriginalName(),
                        'img' => $request->wearimg->getClientOriginalName(),
                        'shopify_id' => $request->shopify_id,
                        'showImg' => $request->showImg->getClientOriginalName(),
                        'isSku' => $isSku,
                    ]);

                    // SKUが入っているか見て処理
                    if ($request->sku) {
                        $wearId = PantsRakutenApi::where(
                            'itemId',
                            $request->itemId
                        )
                            ->where('category', $request->category)
                            ->value('id');
                        self::storeSkuList(
                            $request,
                            'pants',
                            $wearId,
                            $gender,
                            $request->isShowDefaultWear
                        );
                    }
                } elseif (isset($shoesCategory[$request->category])) {
                    ShoesRakutenApi::create([
                        'itemId' => $request->itemId,
                        'brand' => $request->brand,
                        'category' => $request->category,
                        'moshimoLink' => $request->link,
                        'availability' => $available,
                        $request->color => $request->wearimg->getClientOriginalName(),
                        'img' => $request->wearimg->getClientOriginalName(),
                        'shopify_id' => $request->shopify_id,
                        'showImg' => $request->showImg->getClientOriginalName(),
                        'isSku' => $isSku,
                    ]);

                    // SKUが入っているか見て処理
                    if ($request->sku) {
                        $wearId = ShoesRakutenApi::where(
                            'itemId',
                            $request->itemId
                        )
                            ->where('category', $request->category)
                            ->value('id');
                        self::storeSkuList(
                            $request,
                            'shoes',
                            $wearId,
                            $gender,
                            $request->isShowDefaultWear
                        );
                    }
                }
            }, 2);
        } catch (Throwable $e) {
            Log::error($e);
            throw $e;
        }

        $category = $request->category;
        $color = $request->color;
        $brand = $request->brand;

        return redirect()->route('itemIndex', [
            'gender' => $gender,
            'category' => $category,
            'color' => $color,
            'brand' => $brand,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $category, $id)
    {
        $gender = $request->input('gender');

        if ($gender == 'male') {
            $detail = self::getMaleItems($id, $category);
        }
        if ($gender == 'female') {
            $detail = self::getFemaleItems($id, $category);
        }

        $skuData = null;

        if ($detail[0]->isSku) {
            $capsCategory = [
                506269 => true,
                565818 => true,
            ];

            $topsCategory = [
                508759 => true,
                565925 => true,
                508803 => true,
                565927 => true,
                500316 => true,
            ];

            $pantsCategory = [
                508820 => true,
                565928 => true,
                565816 => true,
                508772 => true,
                565926 => true,
            ];

            $shoesCategory = [
                208025 => true,
                565819 => true,
            ];

            if (isset($topsCategory[$request->category])) {
                $skuData = self::getSkuData($detail[0]->id, 'tops');
            } elseif (isset($capsCategory[$request->category])) {
                $skuData = self::getSkuData($detail[0]->id, 'caps');
            } elseif (isset($pantsCategory[$request->category])) {
                $skuData = self::getSkuData($detail[0]->id, 'pants');
            } elseif (isset($shoesCategory[$request->category])) {
                $skuData = self::getSkuData($detail[0]->id, 'shoes');
            }
        }

        $type = $detail[1];
        $detail = $detail[0];
        $color = self::getColor($detail);
        $brand = $detail->brand;

        return view(
            'admin.itemShow',
            compact(
                'gender',
                'detail',
                'category',
                'brand',
                'color',
                'type',
                'skuData'
            )
        );
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
    public function update(Request $request)
    {
        // dd($id, $type, $request);

        $request->validate([
            'itemId' => ['required', 'string', 'max:200'],
            'brand' => ['required', 'string', 'max:100'],
            'category' => ['required', 'integer'],
            'color' => ['required', 'string'],
            'wearimg' => ['mimes:png', 'image'],
            'showImg' => ['nullable', 'image'],
            'link' => ['nullable', 'string'],
            'available' => ['required', 'integer'],
            'id' => ['required', 'integer'],
            'type' => ['required', 'string'],
            'shopify_id' => ['nullable', 'string'],
            'sku' => ['nullable', 'string'],
            'isShowSku' => ['nullable', 'string'],
            'isShowDefaultWear' => ['nullable', 'string'],
        ]);

        $id = $request->input('id');
        $type = $request->input('type');
        $gender = $request->input('gender');
        $color = $request->color;
        $category = $request->category;
        $shopify_id = $request->shopify_id;
        $sku = $request->sku;
        $isShowDefaultWear = $request->isShowDefaultWear;

        $imageFiles = $request->wearimg;

        if (!is_null($imageFiles)) {
            // 画像の保存
            $filename = $request->wearimg->getClientOriginalName();
            $img = $request->wearimg->storeAs(
                '/img/rakutenlist/' . $gender . '/' . $category,
                $filename
            );
        }

        // 一覧画像用
        $imageFilesShow = $request->showImg;
        if (!is_null($imageFilesShow)) {
            // 画像の保存
            $filenameShow = $request->showImg->getClientOriginalName();
            $img = $request->showImg->storeAs('/img/showList/', $filenameShow);
        }

        // 外部Appに表示する場合のflg
        if ($request->sku) {
            $isSku = true;
        } else {
            $isSku = null;
        }

        // デフォルトウェアにするかのboolean
        if ($request->isShowDefaultWear) {
            $isShowDefaultWear = true;
        } else {
            $isShowDefaultWear = null;
        }

        try {
            DB::transaction(function () use (
                $request,
                $type,
                $id,
                $imageFiles,
                $imageFilesShow,
                $color,
                $shopify_id,
                $sku,
                $isSku,
                $gender,
                $isShowDefaultWear
            ) {
                // nullに変換
                if ($request->available == '0') {
                    $available = null;
                } else {
                    $available = $request->available;
                }

                if ($type == 'tops') {
                    $product = TopsRakutenApi::findOrFail($id);
                    $product->availability = $available;
                    $product->brand = $request->brand;
                    $product->itemId = $request->itemId;
                    $product->shopify_id = $shopify_id;
                    if (!$product->isSku) {
                        $product->isSku = $isSku;
                    }
                    $oldColor = self::getColor($product);

                    if ($color) {
                        $imgUrl = $product->$oldColor;
                        $product->$oldColor = null;
                        $product->$color = $imgUrl;
                    }

                    if ($imageFiles) {
                        $product->img = $request->wearimg->getClientOriginalName();
                        $product->$color = $request->wearimg->getClientOriginalName();
                    }
                    if ($imageFilesShow) {
                        $product->showImg = $request->showImg->getClientOriginalName();
                    }
                    if ($request->link) {
                        $product->moshimoLink = $request->link;
                    }
                    $product->save();

                    // SKUの更新
                    if ($isSku) {
                        $wearId = TopsRakutenApi::where(
                            'itemId',
                            $request->itemId
                        )
                            ->where('category', $request->category)
                            ->value('id');
                        self::updateSkuData(
                            $request,
                            $wearId,
                            'tops',
                            $gender,
                            $isShowDefaultWear
                        );
                    }
                } elseif ($type == 'caps') {
                    $product = CapsRakutenApi::findOrFail($id);
                    $product->availability = $available;
                    $product->brand = $request->brand;
                    $product->itemId = $request->itemId;
                    $product->shopify_id = $shopify_id;
                    if (!$product->isSku) {
                        $product->isSku = $isSku;
                    }
                    $oldColor = self::getColor($product);

                    if ($color) {
                        $imgUrl = $product->$oldColor;
                        $product->$oldColor = null;
                        $product->$color = $imgUrl;
                    }
                    if ($imageFiles) {
                        $product->img = $request->wearimg->getClientOriginalName();
                        $product->$color = $request->wearimg->getClientOriginalName();
                    }
                    if ($imageFilesShow) {
                        $product->showImg = $request->showImg->getClientOriginalName();
                    }
                    if ($request->link) {
                        $product->moshimoLink = $request->link;
                    }
                    $product->save();

                    // SKUの更新
                    if ($isSku) {
                        $wearId = CapsRakutenApi::where(
                            'itemId',
                            $request->itemId
                        )
                            ->where('category', $request->category)
                            ->value('id');
                        self::updateSkuData(
                            $request,
                            $wearId,
                            'caps',
                            $gender,
                            $isShowDefaultWear
                        );
                    }
                } elseif ($type == 'pants') {
                    $product = PantsRakutenApi::findOrFail($id);
                    $product->availability = $available;
                    $product->brand = $request->brand;
                    $product->itemId = $request->itemId;
                    $product->shopify_id = $shopify_id;
                    if (!$product->isSku) {
                        $product->isSku = $isSku;
                    }
                    $oldColor = self::getColor($product);

                    if ($color) {
                        $imgUrl = $product->$oldColor;
                        $product->$oldColor = null;
                        $product->$color = $imgUrl;
                    }
                    if ($imageFiles) {
                        $product->img = $request->wearimg->getClientOriginalName();
                        $product->$color = $request->wearimg->getClientOriginalName();
                    }
                    if ($imageFilesShow) {
                        $product->showImg = $request->showImg->getClientOriginalName();
                    }
                    if ($request->link) {
                        $product->moshimoLink = $request->link;
                    }
                    $product->save();

                    // SKUの更新
                    if ($isSku) {
                        $wearId = PantsRakutenApi::where(
                            'itemId',
                            $request->itemId
                        )
                            ->where('category', $request->category)
                            ->value('id');
                        self::updateSkuData(
                            $request,
                            $wearId,
                            'pants',
                            $gender,
                            $isShowDefaultWear
                        );
                    }
                } elseif ($type == 'shoes') {
                    $product = ShoesRakutenApi::findOrFail($id);
                    $product->availability = $available;
                    $product->brand = $request->brand;
                    $product->itemId = $request->itemId;
                    $product->shopify_id = $shopify_id;
                    if (!$product->isSku) {
                        $product->isSku = $isSku;
                    }
                    $oldColor = self::getColor($product);

                    if ($color) {
                        $imgUrl = $product->$oldColor;
                        $product->$oldColor = null;
                        $product->$color = $imgUrl;
                    }
                    if ($imageFiles) {
                        $product->img = $request->wearimg->getClientOriginalName();
                        $product->$color = $request->wearimg->getClientOriginalName();
                    }
                    if ($imageFilesShow) {
                        $product->showImg = $request->showImg->getClientOriginalName();
                    }
                    if ($request->link) {
                        $product->moshimoLink = $request->link;
                    }
                    $product->save();

                    // SKUの更新
                    if ($isSku) {
                        $wearId = ShoesRakutenApi::where(
                            'itemId',
                            $request->itemId
                        )
                            ->where('category', $request->category)
                            ->value('id');
                        self::updateSkuData(
                            $request,
                            $wearId,
                            'shoes',
                            $gender,
                            $isShowDefaultWear
                        );
                    }
                }
            },
            2);
        } catch (Throwable $e) {
            Log::error($e);
            throw $e;
        }

        if ($gender == 'male') {
            $detail = self::getMaleItems($id, $category);
        }
        if ($gender == 'female') {
            $detail = self::getFemaleItems($id, $category);
        }

        $skuData = null;

        if ($detail[0]->isSku) {
            $capsCategory = [
                506269 => true,
                565818 => true,
            ];

            $topsCategory = [
                508759 => true,
                565925 => true,
                508803 => true,
                565927 => true,
                500316 => true,
            ];

            $pantsCategory = [
                508820 => true,
                565928 => true,
                565816 => true,
                508772 => true,
                565926 => true,
            ];

            $shoesCategory = [
                208025 => true,
                565819 => true,
            ];

            if (isset($topsCategory[$request->category])) {
                $skuData = self::getSkuData($detail[0]->id, 'tops');
            } elseif (isset($capsCategory[$request->category])) {
                $skuData = self::getSkuData($detail[0]->id, 'caps');
            } elseif (isset($pantsCategory[$request->category])) {
                $skuData = self::getSkuData($detail[0]->id, 'pants');
            } elseif (isset($shoesCategory[$request->category])) {
                $skuData = self::getSkuData($detail[0]->id, 'shoes');
            }
        }

        $type = $detail[1];
        $detail = $detail[0];
        $color = self::getColor($detail);
        $brand = $detail->brand;

        return view(
            'admin.itemShow',
            compact(
                'gender',
                'detail',
                'category',
                'brand',
                'color',
                'type',
                'skuData'
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->id;
        $type = $request->type;
        $gender = $request->gender;

        if ($type == 'tops') {
            TopsRakutenApi::findOrFail($id)->delete();
            self::deleteSkuData($id, 'tops');
        } elseif ($type == 'caps') {
            CapsRakutenApi::findOrFail($id)->delete();
            self::deleteSkuData($id, 'caps');
        } elseif ($type == 'pants') {
            PantsRakutenApi::findOrFail($id)->delete();
            self::deleteSkuData($id, 'pants');
        } elseif ($type == 'shoes') {
            ShoesRakutenApi::findOrFail($id)->delete();
            self::deleteSkuData($id, 'shoes');
        }

        $category = $request->category;
        $color = $request->color;
        $brand = $request->brand;

        return redirect()->route('itemIndex', [
            'gender' => $gender,
            'category' => $category,
            'color' => $color,
            'brand' => $brand,
        ]);
    }

    private static function getMaleItems($item, $category)
    {
        if ($category == 506269) {
            // キャップス取得
            $items = self::getItemsFromDB('caps', $item, $category);
        }

        if ($category == 508759) {
            // 半袖取得
            $items = self::getItemsFromDB('tops', $item, $category);
        }

        if ($category == 565925) {
            // アウター取得
            $items = self::getItemsFromDB('tops', $item, $category);
        }

        if ($category == 508772) {
            // ショートパンツ取得
            $items = self::getItemsFromDB('pants', $item, $category);
        }

        if ($category == 565926) {
            // ロングパンツ取得
            $items = self::getItemsFromDB('pants', $item, $category);
        }

        if ($category == 208025) {
            // シューズ取得
            $items = self::getItemsFromDB('shoes', $item, $category);
        }

        return $items;
    }

    // 女性アイテム取得

    private static function getFemaleItems($item, $category)
    {
        if ($category == 565818) {
            // キャップス取得
            $items = self::getItemsFromDB('caps', $item, $category);
        }

        if ($category == 508803) {
            // 半袖取得
            $items = self::getItemsFromDB('tops', $item, $category);
        }

        if ($category == 565927) {
            // アウター取得
            $items = self::getItemsFromDB('tops', $item, $category);
        }

        if ($category == 500316) {
            // ワンピース取得
            $items = self::getItemsFromDB('tops', $item, $category);
        }

        if ($category == 508820) {
            // ショートパンツ取得
            $items = self::getItemsFromDB('pants', $item, $category);
        }

        if ($category == 565928) {
            // ロングパンツ取得
            $items = self::getItemsFromDB('pants', $item, $category);
        }

        if ($category == 565816) {
            // スカート取得
            $items = self::getItemsFromDB('pants', $item, $category);
        }

        if ($category == 565819) {
            // シューズ取得
            $items = self::getItemsFromDB('shoes', $item, $category);
        }

        return $items;
    }

    private static function getItemsFromDB($type, $item, $category)
    {
        $items = DB::table($type . '_rakuten_apis')
            ->where('id', $item)
            ->first();

        return [$items, $type];
    }

    private static function getColor($items)
    {
        $colorSets = [
            'black',
            'white',
            'blue',
            'red',
            'green',
            'yellow',
            'navy',
            'pink',
            'orange',
            'purple',
            'gray',
        ];

        foreach ($colorSets as $set) {
            if ($items->$set !== null) {
                return $set;
            }
        }
    }

    // 外部埋め込みアプリ用のSKU登録処理
    private static function storeSkuList(
        $request,
        $type,
        $wearId,
        $gender,
        $isShowDefaultWear
    ) {
        $isValue = null;

        if ($request->isShowSku == '1') {
            $isValue = 1;
        } else {
            $isValue = null;
        }

        try {
            DB::transaction(function () use (
                $request,
                $type,
                $isValue,
                $wearId,
                $gender,
                $isShowDefaultWear
            ) {
                ManageSkuList::create([
                    'sku' => $request->sku,
                    'isShow' => $isValue,
                    'type' => $type,
                    'wearId' => $wearId,
                    'brand' => $request->brand,
                    'gender' => $gender,
                    'isDefault' => $isShowDefaultWear,
                ]);
            },
            2);
        } catch (Throwable $e) {
            Log::error($e);
            throw $e;
        }
    }

    // 登録してあるSKUデータを取得
    private static function getSkuData($id, $type)
    {
        $skuData = ManageSkuList::where('wearId', $id)
            ->where('type', $type)
            ->first();

        return $skuData;
    }

    // SKUデータをアップデートする
    private static function updateSkuData(
        $request,
        $id,
        $type,
        $gender,
        $isShowDefaultWear
    ) {
        $skuItem = ManageSkuList::where('wearId', $id)
            ->where('type', $type)
            ->first();

        // SKUがある場合は更新して無い場合は新規作成
        if ($skuItem) {
            $skuItem->sku = $request->sku;
            $skuItem->isShow = $request->isShowSku;
            if ($isShowDefaultWear) {
                self::checkSkuOthers($type, $request->brand, $gender);
            }
            $skuItem->isDefault = $isShowDefaultWear;
            $skuItem->brand = $request->brand;
            $skuItem->save();
        } else {
            ManageSkuList::create([
                'sku' => $request->sku,
                'isShow' => $request->isShowSku,
                'type' => $type,
                'wearId' => $id,
                'brand' => $request->brand,
                'gender' => $gender,
                'isDefault' => $isShowDefaultWear,
            ]);
        }
    }

    // SKUデータを削除する
    private static function deleteSkuData($id, $type)
    {
        ManageSkuList::where('wearId', $id)
            ->where('type', $type)
            ->delete();
    }

    private static function checkSkuOthers($type, $brand, $gender)
    {
        $getLists = ManageSkuList::where('type', $type)
            ->where('brand', $brand)
            ->where('gender', $gender)
            ->where('isDefault', 1)
            ->update(['isDefault' => null]);

        // dd($type, $brand, $gender);
        return;
    }
}
