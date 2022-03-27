<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#216496">


    <title>wearcoord</title>

    <meta name="description" content="wearcoordはオンラインでスポーツウェアのコーディネートを楽しめて購入できるアプリです" />

    <link rel="icon" href="{{ asset('img/logo/icon/32.ico') }}" sizes="16x16" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/32.ico') }}" sizes="32x32" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/48.ico') }}" sizes="48x48" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/64.ico') }}" sizes="64x64" type="image/ico" />
    <link rel="shortcut icon" href="{{ asset('img/logo/icon/64.ico') }}" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" href="{{ asset('img/logo/wearcoord-service.jpg') }}" />


    <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
    <link rel="stylesheet" href="{{ asset('css/lp/lp.css') }}">
    <link rel="stylesheet" href="{{ asset('css/components/common/common.css') }}">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/css/swiper.min.css">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">

    {{-- OGP --}}

    <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
        <meta property="og:url" content="{{ config('app.url') }}">
        <meta property="og:type" content="website" />
        <meta property="og:title" content="wearcoordトップ" />
        <meta property="og:description" content="wearcoordはオンラインでスポーツウェアのコーディネートを楽しめて購入できるアプリです" />
        <meta property="og:site_name" content="wearcoord" />
        <meta property="og:image" content="{{ asset('img/logo/wearcoord-ogp.jpg') }}" />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:image" content="{{ asset('img/logo/wearcoord-ogp.jpg') }}">

        @if (env('APP_ENV') == 'production')
            @include('layouts.parts.analytics')
        @endif

    </head>

<body>
    <header class="lpHeader">
        <div class="headerList">
            <a href="{{ route('lp') }}" class="titleIcon">
                <img class="titleImg" src="{{ asset('img/logo/logo_216496.png') }}" alt="">
            </a>
        </div>
        <div class="headerBtn">
            <div class="headerBtnItem">
                <a class="login" href="{{ route('login') }}">
                    ログイン
                </a>
            </div>
            <div class="headerBtnItem signinBtn">
                <a href="{{ route('register') }}">新規登録</a>
            </div>
        </div>
    </header>

    <section style="background-color: #fff">

        {{-- male --}}
        <div class="mannequinImg">
            <picture class="mannequinWrap">
                <img class="mannequinPosition" src="{{ asset('img/lp/manekin_toplp.png') }}" alt="">
            </picture>
            <div class="caps-container">
                <img class="capslist" src="{{ asset('img/lp/wearlist-caps_male.png') }}" alt="">
            </div>
            <div class="swiper-container tops-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide-item">
                        <img class="toplist" src="{{ asset('img/lp/wearlist-top.png') }}" alt="">
                    </div>
                    <div class="swiper-slide slide-item">
                        <img class="toplist" src="{{ asset('img/lp/wearlist-top.png') }}" alt="">
                    </div>
                </div>
            </div>
            <div class="pants-container">
                <img class="pantslist" src="{{ asset('img/lp/wearlist-pants.png') }}" alt="">
            </div>
            <div class="shoes-container">
                <img class="shoeslist" src="{{ asset('img/lp/wearlist-shoes.png') }}" alt="">
            </div>
        </div>
        </div>

        <div class="mannequinImg female">
            <picture class="mannequinWrap">
                <img class="mannequinPosition" src="{{ asset('img/lp/woman_manekin_lp.png') }}" alt="">
            </picture>
            <div class="caps-container">
                <img class="capslist" src="{{ asset('img/lp/wearlist-caps_female.png') }}" alt="">
            </div>
            <div class="swiper-container tops-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide-item">
                        <img class="toplist" src="{{ asset('img/lp/ladies_lp_item.png') }}" alt="">
                    </div>
                    <div class="swiper-slide slide-item">
                        <img class="toplist" src="{{ asset('img/lp/ladies_lp_item.png') }}" alt="">
                    </div>
                </div>
            </div>
            <div class="pants-container">
                <img class="pantslist" src="{{ asset('img/lp/wearlist-pants_female.png') }}" alt="">
            </div>
            <div class="shoes-container">
                <img class="shoeslist" src="{{ asset('img/lp/wearlist-shoes_female.png') }}" alt="">
            </div>
        </div>
        </div>
    </section>

    <section id="top">
        <div class="skewed"></div>
    </section>
    <section class="catchSect">
        <div class="catchText">
            <div class="textBold">
                <p>スポーツウェアのオシャレをもっと気軽に。</p>
                <p>普段のスポーツを、よりワクワクしたものに。</p>
            </div>
            <div class="textDesc">
                <p>「欲しいイメージのウェアが見つからない・・・」「欲しいウェアが見つかった！でも着てみたら自分に合うのかな・・・」</p>
                <p>スポーツウェアを購入する前に自分に似合うかどうかわからなくて困ったことはありませんか？</p>
                <p>wearcoordでは欲しいウェアの組み合わせを購入前に見える化することでスポーツウェアをより気軽に楽しく、普段のスポーツをよりワクワクしたものにするお手伝いをします。</p>
            </div>
            <picture>
                <img class="mockImg" src="{{ asset('img/lp/top_catch.png') }}" alt="">
            </picture>
        </div>
    </section>

    <section class="sect">
        <div>
            <h2 class="sectTitle">wearcoordでできること</h2>
        </div>
        <ul class="sectUl">
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/search_item.png') }}" alt="">
                </picture>
                <h3>気になるウェアを探す</h3>
                <p>「このブランドのこんなカラーのアイテムが欲しい！」新作アイテムやプロ着用モデルなど豊富なアイテムの試着が可能です。</p>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/coord_wear.png') }}" alt="">
                </picture>
                <h3>コーデを作って確認</h3>
                <p>購入したいウェアを組み合わせて、理想のコーディネートを作ることができます。</p>
            </li>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/ref.png') }}" alt="">
                </picture>
                <h3>他人のコーデを参考に</h3>
                <p>wearcoordアプリ上で他のユーザーが作った全身コーディネートを参照し、ワンクリックで試着できます。</p>
            </li>
        </ul>
    </section>

    <section class="sect">
        <div>
            <h2 class="sectTitle">wearcoordの楽しみ方</h2>
        </div>

        <div class="funcBox leftBorder">
            <div class="wrapper">
                <picture>
                    <img src="{{ asset('img/lp/top_catch.png') }}" alt="">
                </picture>
                <div class="textBox">
                    <h3>コーディネートを直感的にできる！</h3>
                    <div class="description">
                        <p>欲しいアイテムをタップで検索！<br>気になるアイテムを横スクロールで着せ替え！</p>
                        <p class="p20">どんどんサクサク、ウェアを手軽に楽しく直感的に着せ替えてコーディネートを楽しめます。</p>
                        <div>
                            <div class='arrow_box'>
                                <p class="patent">※特許出願中！</p>
                                <p class="patent">wearcoordだけの体験！</p>
                            </div>
                            <div class="img_tennis male_img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="funcBox rightBorder">
            <div class="wrapper reverse">
                <picture>
                    <img src="{{ asset('img/lp/size.png') }}" alt="">
                </picture>
                <div class="textBox">
                    <h3>あなたに合ったウェアかどうかフィードバック！</h3>
                    <div class="description">
                        <p>あなたにピッタリなウェアサイズデータを登録すると、着たいウェアを選んだ時にwearcoordアプリがあなたに合ったウェアかどうか診断してフィードバック！</p>
                        <p class="p20">より安心してオンライン上でウェアの購入ができます。サイズのフィードバックできる対象のウェアはどんどん拡大中！</p>
                        <div>
                            <div class='arrow_box'>
                                <p class="patent">※特許出願中！</p>
                                <p class="patent">wearcoordだけの機能！</p>
                            </div>
                            <div class="img_tennis female_img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="sect">
        <div>
            <h2 class="sectTitle">wearcoordユーザーの声</h2>
        </div>
        <ul class="sectUl">
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/user1.png') }}" alt="">
                </picture>
                <h3>単価が高いウェアも安心<br>（20代 : テニスが趣味）</h3>
                <p>「今までは単価の高いレディースウェアをネット上の情報だけで選ぶのは難しかったけれど、組み合わせコーデで直感的に確認できるので、価格を気にせず好きなウェアを選べる！」
                </p>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/user2.png') }}" alt="">
                </picture>
                <h3>お店で試着より気軽で良い<br>（30代: 週末テニスプレイヤー）</h3>
                <p>「ちょっと気になる可愛いデザインのアイテムがあるけれどそのアイテムを置いているお店が近くにない時に、試着をする感覚で全身コーデを作ることができイメージが湧く！」</p>
            </li>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/user3.png') }}" alt="">
                </picture>
                <h3>ずっとこれを待っていた！<br>（50代: 週末テニスプレイヤー）</h3>
                <p>「いつもウェア買う時は欲しいウェアと履いているシューズなどを合わせたコーデを頭で想像するしかなかったが、wearcoordがあるとちゃんと目で確認した上で購入できるのがありがたい！」
                </p>
            </li>
        </ul>
    </section>

    <section class="sect">
        <div>
            <h2 class="sectTitle">wearcoord公式instagram</h2>
        </div>
        <ul class="sectUl" id="insta">

        </ul>
    </section>

    <section class="sect">
        <div>
            <h2 class="sectTitle">wearcoordで取り扱うブランド一覧</h2>
        </div>
        <ul class="sectUl sectBrand">
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/adidas.png') }}" alt="">
                </picture>
                <h3>Adidas</h3>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/asics.png') }}" alt="">
                </picture>
                <h3>Asics</h3>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/diadora.png') }}" alt="">
                </picture>
                <h3>Diadora</h3>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/ellesse.png') }}" alt="">
                </picture>
                <h3>Ellesse</h3>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/fila.png') }}" alt="">
                </picture>
                <h3>Fila</h3>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/prince.png') }}" alt="">
                </picture>
                <h3>Prince</h3>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/underarmar.png') }}" alt="">
                </picture>
                <h3>Underarmar</h3>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/yonex.png') }}" alt="">
                </picture>
                <h3>Yonex</h3>
            </li>
            <li>
                <picture>
                    <img class="" src="{{ asset('img/lp/nike.png') }}" alt="">
                </picture>
                <h3>Nike</h3>
            </li>
        </ul>
    </section>

    <section class="sect">
        <div>
            <h2 class="sectTitle">wearcoordコラム</h2>
        </div>
        <ul class="sectUl sectColumn">
            <li>
                <a href="{{ route('column_size') }}">
                    <img class="" src="{{ asset('img/lp/2021/size.jpg') }}" alt="">
                </a>
            </li>
            {{-- <li>
                    <a>
                        <img class="" src="{{asset('img/lp/2021/size.jpg')}}" alt="">
                    </a>
                </li> --}}
        </ul>
    </section>

    <footer>
        <ul>
            <li><a href="https://wearcoord.info" target="_blank" rel="noopener noreferrer">企業情報</a></li>
            <li><a href="{{ route('privacy') }}">プライバシーポリシー</a></li>
            <li><a href="https://wearcoord.info/contact" target="_blank" rel="noopener noreferrer">お問い合わせ</a></li>
        </ul>
        <small>wearcoord,inc</small>
    </footer>
    </script>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.5.8/swiper-bundle.min.js"
        integrity="sha512-sAHYBRXSgMOV2axInO6rUzuKKM5SkItFLlLHQ8YjRD+FBwowtATOs4njP9oim3/MzyAGrB52SLDjpAOLcOT9TA=="
        crossorigin="anonymous"></script>
    <script>
        const txts = $('.mannequinImg');
        let txtIndex = -1;
        txts.hide()

        function showNextTxt() {
            txtIndex++;
            txts.eq(txtIndex % txts.length).fadeIn(2000).delay(3000).fadeOut(2000, showNextTxt);
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: {
                    delay: 0,
                },
                loop: true,
                speed: 10000,
                disableOnInteraction: false,
                autoplayDisableOnInteraction: false,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
            });
        }
        showNextTxt();
    </script>
    <script src="{{ asset('js/sns/instagram.js') }}" defer></script>

</body>

</html>
