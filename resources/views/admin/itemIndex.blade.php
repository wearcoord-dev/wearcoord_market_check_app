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

                            {{-- カテゴリー --}}
                            @if ($gender == 'male')
                                @include('admin.parts.maleCategory')
                            @elseif ($gender == 'female')
                                @include('admin.parts.femaleCategory')
                            @endif

                            {{-- ブランド --}}
                            @include('admin.parts.brand')

                            {{-- カラー --}}
                            @include('admin.parts.color')
                        </div>
                    </form>

                    <div class="">
                        <div class="row">
                            @foreach ($items as $item)
                                <div class="col-sm">
                                    <div class="card bg-light mt-2 mb-2" style="width: 300px">
                                        @foreach ($colorSets as $color)
                                        @if ($item->$color !==null )
                                        <img class="card-img-top"
                                            src="{{ '/img/rakutenlist/' . $gender . '/' . $item->category . '/' . $item->$color }}"
                                            alt="Card image cap">
                                            @endif
                                        @endforeach
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
                                            <a href="{{ route('itemShow', ['item' => $item->id, 'category' => $item->category, 'gender' => $gender]) }}"
                                                class="btn btn-primary btn-block">編集</a>
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
