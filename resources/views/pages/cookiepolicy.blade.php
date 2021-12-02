<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#216496">

    <title>wearcoord Cookieポリシー</title>

    <meta name="description" content="wearcoord Cookieポリシーページです" />

    <link rel="icon" href="{{ asset('img/logo/icon/32.ico') }}" sizes="16x16" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/32.ico') }}" sizes="32x32" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/48.ico') }}" sizes="48x48" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/64.ico') }}" sizes="64x64" type="image/ico" />
    <link rel="shortcut icon" href="{{ asset('img/logo/icon/64.ico') }}" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" href="{{ asset('img/logo/wearcoord-service.jpg') }}" />

    <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
    <link rel="stylesheet" href="{{ asset('css/pages/policy/policy.css') }}">
    <script src="{{ asset('js/animation/wow.min.js') }}"></script>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/css/swiper.min.css">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

        {{-- OGP --}}
        <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
            <meta property="og:url" content="{{ config('app.url') }}">
            <meta property="og:type" content="website" />
            <meta property="og:title" content="wearcoord Cookieポリシー" />
            <meta property="og:description" content="wearcoord Cookieポリシーページです" />
            <meta property="og:site_name" content="wearcoord" />
            <meta property="og:image" content="{{ asset('img/logo/wearcoord-ogp.jpg') }}" />
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:image" content="{{ asset('img/logo/wearcoord-ogp.jpg') }}">

            @if(env('APP_ENV') == 'production')
            @include('layouts.parts.analytics')
            @endif

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
        <section class="mainSect">
            <div class="ppTitle">
                <h2>Cookieポリシー</h2>
            </div>
            <p class="pb-10">株式会wearcoordのウェブサイトおよびサービス上では、お客様の閲覧情報を分析し、個々のお客様に適したサービスや情報、広告等を提供する目的のため、Cookieが使用されています。 本Cookieポリシー（以下「本ポリシー」といいます）においては、弊社が管理するCookie（以下に定義します。）およびウェブサイトおよびサービス上で提携する第三者が設置するCookieの詳細、ならびにお客様による拒否方法を記載しています。</p>

            <ul class="mainUl">
                <li class="mainLi">
                    <h3>1. Cookieとは</h3>
                    <p>Cookieとは、お客様がウェブサイトやサービスにアクセスした際の閲覧情報を、お客様のデバイス（PCやスマートフォンなどの機器）に保存する機能のことです（Webビーコン等を含みます）。なお、Cookie情報から、お客様の個人情報を特定することは出来ません。 お客様は、ブラウザの設定によりCookieを拒否することができますが、拒否された場合は、一部のサービスが受けられない場合があることをご了承下さい。</p>
                </li>
                <li class="mainLi">
                    <h3>2. Cookieの利用目的</h3>
                    <ul>
                        <li>お客様が当社のウェブサイトおよびサービスを閲覧する際に、お客様のデバイスを識別し、サービス等を利用できるために使用しております。そのため、お客様がデバイス上にCookieを保存することによって、同じ情報を繰り返し入力することがなくなるなど、ブラウザ上等での利便性が高まります。</li>
                        <li>当社は、Cookieを使用して収集した情報を利用して、お客様のウェブサイトの利用状況（アクセス状況、トラフィック、ルーティング等）を分析し、ウェブサイトやサービスの向上、改善のために使用することがあります。この分析にあたっては、Googleアナリティクスを利用しています。</li>
                        <li>上記目的の他、当社が取得したCookie情報については、各社個人情報保護方針（プライバシーポリシー）に規定されている利用目的の範囲内で利用させていただきます。</li>
                    </ul>
                </li>
                <li class="mainLi">
                    <h3>3. Cookieの拒否方法</h3>
                    <p>お客様がブラウザの設定を変更することにより、Cookieを無効にすることが可能です。ただし、Cookieを無効にした場合は、一部のウェブサイトの機能が使用できなくなる、一部のページが正しく表示されなくなる、または当社の一部のサービスが受けられない場合があることをご了承下さい。</p>
                </li>
            </ul>
            <p class="pb-10">以上</p>
        </section>

    </main>

    <footer>
        <ul>
            <li><a href="https://wearcoord.info/" target="_blank" rel="noopener noreferrer">企業情報</a></li>
            <li><a href="{{ route('privacy') }}">プライバシーポリシー</a></li>
            <li><a href="https://wearcoord.info/contact" target="_blank" rel="noopener noreferrer">お問い合わせ</a></li>
        </ul>
        <small>wearcoord,inc</small>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script>
        new WOW().init();
    </script>

</body>
</html>
