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
            <img src=" {{ asset('/storage/img/rakutenlist/male/506269/common_logo.png')}}">
                <div class="card">
                    <div class="card-header">{{ $gender }}ウェア新規登録</div>
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
                                            checked>
                                        <label class="form-check-label" for="show">
                                            表示する
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="available" id="not" value="0">
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
                                    <input type="text" class="form-control" id="itemId" name="itemId"
                                        placeholder="アイテムID">
                                </div>
                            </div>

                            {{-- 画像登録 --}}
                            <div class="form-group p-3">
                                <label for="wearimg">ウェア画像登録</label>
                                <input type="file" class="form-control-file" id="wearimg" name="wearimg">
                            </div>

                            {{-- アフィリエイトリンク --}}
                            <div class="form-group p-3">
                                <label for="link">アフィリエイトリンク</label>
                                <textarea class="form-control" name="link" id="link" rows="3"></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">登録する</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
