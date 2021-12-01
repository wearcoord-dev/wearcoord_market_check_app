@extends('column.baseColumn')

{{-- @section('title', '各ブランドのサイズ感の違いどう見極める？') --}}

@section('pageCss')
<link rel="stylesheet" href="{{ asset('css/column/size/size.css') }}">
@endsection

@section('ogp')
        <meta property="og:url" content="{{ config('app.url') }}">
        <meta property="og:type" content="website" />
        <meta property="og:title" content="各ブランドのサイズ感の違いどう見極める？" />
        <meta property="og:description" content="スポーツウェアのブランドごとに微妙に異なるサイズ感の違い... どのように選ぶべきなのか解説します！" />
        <meta property="og:site_name" content=" wearcoordコラム" />
        <meta property="og:image" content="{{ asset('img/ogp/common/common.jpg') }}" />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:image" content="{{ asset('img/ogp/common/common.jpg') }}">
@endsection

@include('layouts.parts.header')

@section('content')
<main>
<section class="topSect">
    <div style="padding-top: 80px"></div>
    <div class="columnTitle">
        <h2>各ブランドのサイズ感の違い<span class="ib">どう見極める？</span></h2>
    </div>
    <div class="fluid">
        <figure class="thinkImg">
            <img src="{{ asset('img/reading/loose/polo.png') }}" alt="">
            <img src="{{ asset('img/reading/loose/tops.png') }}" alt="">
            <img src="{{ asset('img/reading/loose/tops2.png') }}" alt="">
        </figure>
        <figure class="thinking">
            <img src="{{ asset('img/reading/loose/thinking.png') }}" alt="">
        </figure>
    </div>

    <div class="container">
        <p>このコラムでわかること</p>
        <ul>
            <li>・自分にピッタリな服の考え方</li>
            <li>・確認すべきウェアのサイズ項目</li>
        </ul>
    </div>

    <p class="readintro"><span class="material-icons-outlined">
        keyboard_double_arrow_down
        </span>読んでみる<span class="material-icons-outlined">
        keyboard_double_arrow_down
        </span></p>
</section>

<section class="mainSect">

    <div class="mainContainer">
        <div class="wrapper">
            <div>
                <p class="tac">テニスウェア好きの皆さん</p>

                <div class="issue">
                    <p>「普段着てるブランドと少し違うものに挑戦したい！」</p>
                    <p>「たまたまネットで可愛いものを見つけて欲しくなった！」</p>
                </div>

                <p>このような経験がある方は多いのではないでしょうか？一目惚れしてそのウェアがすごく欲しくなる、着てみたくなるという衝動に駆られること、やっぱりありますよね。</p>
                <p style="padding: 30px 0">ただそこで気になってくるのは、ブランドごとに微妙に異なるサイズ感の違いかと思います。</p>

                <figure class="centerImgSimple">
                    <img src="{{ asset('img/reading/loose/female_thinking.png') }}" alt="">
                </figure>

                <p>同じブランドでも微妙にアイテムごとにサイズが違う、そんなときは何を参考にしてウェアを選べばいいのでしょうか？</p>
            </div>

            <div class="pointSect">
                <h3>
                    <p class="point">point①</p>
                    <p class="h3title">ウェアのサイズの考え方を<span class="ib">知っておこう！</span></p>
                </h3>

                <hr class="hr">

                <p style="padding: 50px 0">オンラインストア内の商品ページの中で胸囲や身丈、ウエストといったサイズの記載を見かけたことはありませんか？</p>

                <ul class="centerImg">
                    <li><a href="{{ asset('img/column/size/larosso.jpg') }}" data-lightbox="simple-group" data-title="参考 : ralosso公式オンラインストア" data-alt="ralosso公式オンラインストア"><img src="{{ asset('img/column/size/larosso.jpg') }}" alt="ralosso公式オンラインストア"></a>
                    <p class="figcaption">参考 : ralosso公式オンラインストア</p>
                    </li>
                </ul>

                <p style="padding: 50px 0 20px">トップスやパンツなどのアイテムには商品のサイズが記載されていることが多く、試着ができないオンラインストア上ではその数値を参考にして商品を選ぶしかありません。</p>
                <p style="padding: 20px 0 0px">そのため普段着用しているウェアの胸囲やウエスト、身幅や股下などのサイズが大体これくらい（◯◯cm）かな？と把握し、それを基準として欲しいウェアのサイズを確認すると良いでしょう！</p>
            </div>

            <div class="pointSect">
                <h3>
                    <p class="point">point②</p>
                    <p class="h3title">トップスとパンツの<span class="ib">サイズ項目を知っておこう！</span></p>
                </h3>

                <hr class="hr">

                <h4 style="padding: 50px 0">●トップスのサイズ項目の例</h4>

                <ul class="centerImg">
                    <li><a href="{{ asset('img/column/size/tops_size.jpg') }}" data-lightbox="simple-group" data-title="トップスのサイズ項目の例" data-alt="トップスのサイズ項目の例"><img src="{{ asset('img/column/size/tops_size.jpg') }}" alt="トップスのサイズ項目の例"></a>
                    </li>
                </ul>

                <p style="padding: 50px 0">トップスの例として上記のようなサイズの項目が挙げられます。胸囲は様々なウェアに大抵記載がありますが、アイテムやオンラインストアによっては幅や丈まで分かる場合があります。</p>

                <h4 style="padding: 50px 0">●パンツのサイズ項目の例</h4>

                <ul class="centerImg">
                    <li><a href="{{ asset('img/column/size/pants_size.jpg') }}" data-lightbox="simple-group" data-title="パンツのサイズ項目の例" data-alt="パンツのサイズ項目の例"><img src="{{ asset('img/column/size/pants_size.jpg') }}" alt="パンツのサイズ項目の例"></a>
                    </li>
                </ul>

                <p style="padding: 50px 0 0">パンツの例として上記のようなサイズの項目が挙げられます。項目が多いと思われる方もいらっしゃるかもしれませんが、ショートやロングそれぞれご自身がちょうどいいと思うサイズを一度把握しておくと、ウェア選びがとても簡単になります！</p>
            </div>

            <div class="pointSect">
                <h3>
                    <p class="point">LET'S TRY!</p>
                    <p class="h3title">wearcoordの<span class="ib">サイズ機能を使ってみよう！</span></p>
                </h3>

                <hr class="hr">

                <p style="padding: 50px 0 0">オンラインストアの商品ページによっては、親切にその商品の実寸サイズを測って掲載してくれているお店もありますが、あまり多くないというのが現状です。</p>
                <p style="padding: 30px 0">　オンラインコーディネートアプリ「wearcoord」では、様々なブランドのウェアのサイズをデータベースとして登録しています。</p>
                <p style="padding: 0 0 50px">普段着用しているウェアやサイズをご自身のアカウントに登録し、そのサイズをもとに気になるウェアとサイズの比較することができる「サイズ比較機能」を提供しています。</p>

                <ul class="centerImg">
                    <li><a href="{{ asset('img/column/size/sizefunc.png') }}" data-lightbox="simple-group" data-title="サイズ機能" data-alt="サイズ機能"><img src="{{ asset('img/column/size/sizefunc.png') }}" alt="サイズ機能"></a>
                    </li>
                </ul>

                <p style="padding: 50px 0 0">胸囲やウエストといったサイズが、今の自分のサイズと気になるウェアと比べて「どのくらい（何cm）違うのか」を算出し結果を見ることができるので、直感的にサイズ感を知ることが可能です。</p>

                <p style="padding: 30px 0 0">ぜひ一度、サイズ比較機能を使って様々なウェアを見てみてください！</p>
            </div>

                <a class="linkBtn" href="/main/settings/size">
                    <p>wearcoordアプリで<span class="ib">サイズ機能を試してみる</span></p>
                    <span class="material-icons-outlined" style="font-size: 36px">
                        arrow_right
                        </span>
                    </a>
        </div>
    </div>

</section>
</main>
@endsection

@include('layouts.parts.footer')