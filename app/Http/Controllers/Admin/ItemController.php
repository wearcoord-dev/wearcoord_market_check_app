<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\TopsRakutenApi;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\UploadRequest;

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
            'brand' => ['required', 'string',  'max:100'],
            'category' => ['required', 'integer'],
            'color' => ['required', 'string'],
            'wearimg' => ['required', 'mimes:png', 'image'],
            'link' => ['nullable', 'string'],
            'available' => ['required', 'integer'],
        ]);

        $imageFiles = $request->wearimg;
        if (!is_null($imageFiles)) {
            $category = $request->category;

            // 画像の保存
            $filename = $request->wearimg->getClientOriginalName();
            $img = $request->wearimg->storeAs('/img/rakutenlist/' . $gender . '/' . $category, $filename);
            // dd($request);
        }


        try {
            DB::transaction(
                function () use ($request) {

                    // nullに変換
                    if($request->available == '0'){
                        $available = null;
                    }else{
                        $available = $request->available;
                    }

                    if($request->category == 508759 || $request->category == 565925){
                        $product = TopsRakutenApi::create([
                            'itemId' => $request->itemId,
                            'brand' => $request->brand,
                            'category' => $request->category,
                            'moshimoLink' => $request->link,
                            'availability' => $available,
                            $request->color => $request->wearimg->getClientOriginalName(),
                            'img' => $request->wearimg->getClientOriginalName(),
                        ]);
                    }
                },
                2
            );
        } catch (
            Throwable $e
        ) {
            Log::error($e);
            throw $e;
        }

        return redirect()->route('itemIndex', [
            'gender' => $gender,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
}
