@extends('layouts.appAdmin', ['authgroup'=>'admin'])

@section('content')
    <div class="">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ $gender }}ウェア一覧</div>
                    <form action="" method="get">
                        @csrf
                        <div class="d-flex justify-content-around pt-4 pb-4">
                            @if ($gender == 'male')
                                @include('admin.parts.maleCategory')
                            @elseif ($gender == 'female')
                                @include('admin.parts.femaleCategory')
                            @endif
                            <div class="input-group">
                                <p class="m-auto p-2">ブランド : </p>
                                <select class="custom-select" id="brand" name="brand"
                                    aria-label="Example select with button addon">
                                    <option @if (\Request::get('brand') === null) selected @endif value="0">全て</option>
                                    <option @if (\Request::get('brand') === 'adidas') selected @endif value="adidas">Adidas</option>
                                    <option @if (\Request::get('brand') === 'nike') selected @endif value="nike">Nike</option>
                                    <option @if (\Request::get('brand') === 'yonex') selected @endif value="yonex">Yonex</option>
                                    <option @if (\Request::get('brand') === 'asics') selected @endif value="asics">Asics</option>
                                    <option @if (\Request::get('brand') === 'diadora') selected @endif value="diadora">Diadora</option>
                                    <option @if (\Request::get('brand') === 'prince') selected @endif value="prince">Prince</option>
                                    <option @if (\Request::get('brand') === 'fila') selected @endif value="fila">FILA</option>
                                    <option @if (\Request::get('brand') === 'underarmour') selected @endif value="underarmour">Underarmour</option>
                                    <option @if (\Request::get('brand') === 'ellesse') selected @endif value="ellesse">ellesse</option>
                                    <option @if (\Request::get('brand') === 'babolat') selected @endif value="babolat">babolat</option>
                                    <option @if (\Request::get('brand') === 'hydrogen') selected @endif value="hydrogen">Hydrogen</option>
                                    <option @if (\Request::get('brand') === 'lecoq') selected @endif value="lecoq">ellesse</option>
                                    <option @if (\Request::get('brand') === 'lacoste') selected @endif value="lacoste">lacoste</option>
                                    <option @if (\Request::get('brand') === 'yuuchan') selected @endif value="yuuchan">yuuchan</option>
                                    <option @if (\Request::get('brand') === 'ralosso') selected @endif value="ralosso">ralosso</option>
                                    <option @if (\Request::get('brand') === 'marc_de_paw') selected @endif value="marc_de_paw">Marc De Paw</option>
                                    <option @if (\Request::get('brand') === 'tenez') selected @endif value="tenez">10EZ</option>
                                    <option @if (\Request::get('brand') === 'yoxoi') selected @endif value="yoxoi">YOXOI</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <p class="m-auto p-2">色 : </p>
                                <select class="custom-select" id="color" name="color"
                                    aria-label="Example select with button addon">
                                    <option @if (\Request::get('color') === null) selected @endif value="0">全て</option>
                                    <option @if (\Request::get('color') === 'black') selected @endif value="black">black</option>
                                    <option @if (\Request::get('color') === 'white') selected @endif value="white">white</option>
                                    <option @if (\Request::get('color') === 'blue') selected @endif value="blue">blue</option>
                                    <option @if (\Request::get('color') === 'red') selected @endif value="red">red</option>
                                    <option @if (\Request::get('color') === 'green') selected @endif value="green">green</option>
                                    <option @if (\Request::get('color') === 'yellow') selected @endif value="yellow">yellow</option>
                                    <option @if (\Request::get('color') === 'navy') selected @endif value="navy">navy</option>
                                    <option @if (\Request::get('color') === 'pink') selected @endif value="pink">pink</option>
                                    <option @if (\Request::get('color') === 'orange') selected @endif value="orange">orange</option>
                                    <option @if (\Request::get('color') === 'purple') selected @endif value="purple">purple</option>
                                    <option @if (\Request::get('color') === 'gray') selected @endif value="gray">gray</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <div class="">
                        <div class="row">
                            @foreach ($items as $item)
                                <div class="col-sm">
                                    <div class="card bg-light mt-2 mb-2" style="width: 300px">
                                        <img class="card-img-top"
                                            src="{{ '/img/rakutenlist/' . $gender . '/' . $item->category . '/' . $item->img }}"
                                            alt="Card image cap">
                                        @if ($item->moshimoLink)
                                            <div style="margin: auto">
                                                <?= html_entity_decode($item->moshimoLink) ?>
                                            </div>
                                        @else
                                            <p style="text-align: center">アフィリエイトリンク設定無</p>
                                        @endif
                                        <div class="card-body">
                                            <p class="card-title">ブランド : {{ $item->brand }}</p>
                                            <p>カテゴリー : {{ $item->category }}</p>
                                            @if ($item->availability == 1)
                                                <p>状態 : <span class="font-weight-bold text-danger">表示中</span></p>
                                            @else
                                                <p>状態 : <span>非表示</span></p>
                                            @endif
                                            <a href="#" class="btn btn-primary btn-block">編集</a>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                        {{ $items->appends([
                            'category' => \Request::get('category'),
                            'brand' => \Request::get('brand'),
                            'color' => \Request::get('color'),
                            'pagination' => \Request::get('pagination'),
                        ])->links('vendor.pagination.bootstrap-4') }}
                    </div>

                </div>
            </div>
        </div>
    </div>

    <script>
        const category = document.getElementById('category')
        category.addEventListener('change', function() {
            this.form.submit()
        })

        const brand = document.getElementById('brand')
        brand.addEventListener('change', function() {
            this.form.submit()
        })

        const color = document.getElementById('color')
        color.addEventListener('change', function() {
            this.form.submit()
        })
    </script>
@endsection
