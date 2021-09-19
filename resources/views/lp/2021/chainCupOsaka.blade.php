<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>wearcoord</title>

    <meta name="description" content="Chain Cup 大阪大会 ベストドレッサー賞についての特設ページです" />

    <link rel="icon" href="{{ asset('img/logo/icon/32.ico') }}" sizes="16x16" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/32.ico') }}" sizes="32x32" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/48.ico') }}" sizes="48x48" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/64.ico') }}" sizes="64x64" type="image/ico" />
    <link rel="shortcut icon" href="{{ asset('img/logo/icon/64.ico') }}" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" href="{{ asset('img/logo/wearcoord-service.jpg') }}" />


    <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
    <link rel="stylesheet" href="{{ asset('css/lp/2021/chainCupOsaka.css') }}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/css/swiper.min.css">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">

        {{-- OGP --}}
        <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
            <meta property="og:url" content="{{ config('app.url') }}">
            <meta property="og:type" content="website" />
            <meta property="og:title" content="wearcoord Chain Cup 特設ページ" />
            <meta property="og:description" content="Chain Cup 大阪大会 ベストドレッサー賞についての特設ページです" />
            <meta property="og:site_name" content="wearcoord" />
            <meta property="og:image" content="{{ asset('img/logo/wearcoord-ogp.jpg') }}" />
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:image" content="{{ asset('img/logo/wearcoord-ogp.jpg') }}">

</head>
<body>
    <header class="lpHeader">
        <div class="headerList">
            <a href="{{ route('lp') }}" class="titleIcon">
                <img class="titleImg" src="{{asset('img/logo/0080E4-short.png')}}" alt="">
            </a>
        </div>
        <div class="headerBtn">
            <div class="headerBtnItem">
                <a class="login" href="{{ route('login') }}">
                    ログイン
                </a>
            </div>
            <div class="headerBtnItem signinBtn">
                <a  href="{{ route('register') }}">新規登録</a>
            </div>
        </div>
    </header>

    <main>
        <section class="top">
            <figure>
                <img class="topPlayer" src="{{asset('img/lp/2021/chaintop.png')}}" alt="">
            </figure>
            <div class="mainText">
                <p class="catch">もっと気楽に<br>テニスウェアの<br>オシャレを<br>楽しもう。</p>
                <p class="small">planned by</p>
                <img src="{{asset('img/lp/2021/216496-long.png')}}" alt="">
            </div>
        </section>

        <section>
            <div class="contentsBox">
                <img src="{{asset('img/lp/2021/chaincup_logo.png')}}" alt="">
                    <h1>
                        <span class="title">Chain Cup</span><br>
                        12/30 大阪大会<br>
                        <span class="marginTop">
                            ベストドレッサー賞<br>
                            概要ページ
                        </span>
                    </h1>
            </div>
        </section>
    </main>

    <footer>
        <ul>
            <li><a href="https://wearcoord.info/" target="_blank" rel="noopener noreferrer">企業情報</a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a></li>
            <li><a href="https://wearcoord.info/contact" target="_blank" rel="noopener noreferrer">お問い合わせ</a></li>
        </ul>
        <small>wearcoord,inc</small>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

</body>
</html>
