<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TopsRakutenApi;
use Illuminate\Http\Request;

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
    public function store(Request $request, $gender)
    {
        $request->validate([
            'itemId' => ['required', 'string', 'max:200'],
            'brand' => ['required', 'string',  'max:100'],
            'category' => ['required', 'integer'],
            'color' => ['required', 'string'],
            'wearimg' => ['required', 'string'],
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
