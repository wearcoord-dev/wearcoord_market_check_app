@extends('layouts.appAdmin', ['authgroup'=>'admin'])

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            @if ($errors->any())
            <div class="alert alert-danger" role="alert">
                <div>
                    <div class="font-medium text-red-600">
                    </div>

                    <ul class="mt-3 list-disc list-inside text-sm text-red-600">
                        @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            </div>

            @endif
            <div class="card">
                @if ($gender == 'male')
                <div class="card-header bg-info text-white">{{ $gender }}ウェア新規登録</div>
                @elseif($gender == 'female')
                <div class="card-header bg-warning text-dark">{{ $gender }}ウェア新規登録</div>
                @endif
                <form action="{{ route('itemAddPost', ['gender' => $gender]) }}" method="POST"
                    enctype="multipart/form-data">
                    @csrf
                    <div class="card-body p-5">

                        {{-- 表示切り替え --}}
                        <div class="row p-3">
                            <legend class="col-form-label col-sm-2 pt-0">アイテム表示</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="available" id="show" value="1"
                                        {{old('available', '1' )=='1' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="show">
                                        表示する
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="available" id="not" value="0"
                                        {{old('available')=='0' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="not">
                                        表示しない
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-around p-3">

                            {{-- カテゴリー --}}
                            @if ($gender == 'male')
                            @include('admin.parts.maleCategory')
                            @elseif ($gender == 'female')
                            @include('admin.parts.femaleCategory')
                            @endif

                            {{-- ブランド --}}
                            @include('admin.parts.brandSelect')

                            {{-- カラー --}}
                            @include('admin.parts.colorSelect')
                        </div>

                        {{-- アイテムID --}}
                        <div class="form-group row p-3">
                            <label for="itemId" class="col-sm-2 col-form-label">アイテムID</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="itemId" name="itemId" placeholder="アイテムID"
                                    value="{{old('itemId')}}">
                            </div>
                        </div>

                        {{-- 画像登録 --}}
                        <div class="form-group p-3">
                            <label for="wearimg">ウェア画像登録（コーデ用画像）</label>
                            <input type="file" class="form-control-file" id="wearimg" name="wearimg">
                        </div>

                        {{-- 画像登録 --}}
                        <div class="form-group p-3">
                            <label for="showImg">表示用画像登録（アイテム一覧用画像）</label>
                            <input type="file" class="form-control-file" id="showImg" name="showImg">
                        </div>

                        {{-- アフィリエイトリンク --}}
                        <div class="form-group p-3">
                            <label for="link">アフィリエイトリンク</label>
                            <textarea class="form-control" name="link" id="link" rows="3">{{ old('link') }}</textarea>
                        </div>

                        {{-- shopify_ID --}}
                        <div class="form-group row p-3">
                            <label for="shopify_id" class="col-sm-2 col-form-label">ShopifyアイテムID</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="shopify_id" name="shopify_id"
                                    placeholder="00000000000" value="{{old('shopify_id')}}">
                            </div>
                        </div>

                        <div class="bg-light">
                            <p class="py-3 fw-bold">外部ブランドECサイト埋め込み対応セクション</p>
                            {{-- 外部APP埋め込みSKU --}}
                            <div class="form-group row p-3">
                                <label for="sku" class="col-sm-2 col-form-label">外部APP用SKU登録</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="sku" name="sku" placeholder="abc123"
                                        value="{{old('sku')}}">
                                </div>
                                <small class="fw-lighter text-info">以下のボタン内容を反映させるにはSKUを登録してください</small>
                            </div>

                            {{-- 外部APP埋め込みAPP表示切り替え --}}
                            <div class="row p-3">
                                <legend class="col-form-label col-sm-2 pt-0">外部APP表示切り替え</legend>
                                <div class="col-sm-10">

                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" name="isShowSku"
                                            id="isShowOutsideApp" value="1">
                                        <label class="form-check-label" for="isShowOutsideApp">表示する</label>
                                    </div>
                                </div>
                            </div>

                            {{-- 外部APP埋め込み初期設定ウェア切り替え --}}
                            <div class="row p-3">
                                <legend class="col-form-label col-sm-2 pt-0">初期設定ウェア切り替え</legend>
                                <div class="col-sm-10">

                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch"
                                            name="isShowDefaultWear" id="isShowDefaultWear" value="1">
                                        <label class="form-check-label" for="isShowDefaultWear">初期設定ウェアにする</label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="py-2">
                            <button type="submit" class="btn btn-primary">登録する</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection