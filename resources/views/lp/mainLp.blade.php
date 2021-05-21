<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>wearcoord</title>


    <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
    <link rel="stylesheet" href="{{ asset('css/lp/lp.css') }}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/css/swiper.min.css">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined	" rel="stylesheet">

</head>
<body>
    <header class="lpHeader">
        <div class="headerList">
            <a href="#top" class="titleIcon">
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

    <div class="mannequinImg">
        <div class="caps-container">
            <img class="capslist" src="{{asset('img/lp/wearlist-caps.png')}}" alt="">
        </div>
        <div class="swiper-container tops-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide-item">
                    <img class="toplist" src="{{asset('img/lp/wearlist-top.png')}}" alt="">
                </div>
                <div class="swiper-slide slide-item">
                    <img class="toplist" src="{{asset('img/lp/wearlist-top.png')}}" alt="">
                </div>
            </div>
        </div>
            <div class="pants-container">
                <img class="pantslist" src="{{asset('img/lp/wearlist-pants.png')}}" alt="">
            </div>
            <div class="shoes-container">
                <img class="shoeslist" src="{{asset('img/lp/wearlist-shoes.png')}}" alt="">
            </div>
        </div>
    </div>

    <div class="mannequinImg female">
        <div class="caps-container">
            <img class="capslist" src="{{asset('img/lp/wearlist-caps.png')}}" alt="">
        </div>
        <div class="swiper-container tops-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide-item">
                    <img class="toplist" src="{{asset('img/lp/ladies_lp_item.png')}}" alt="">
                </div>
                <div class="swiper-slide slide-item">
                    <img class="toplist" src="{{asset('img/lp/ladies_lp_item.png')}}" alt="">
                </div>
            </div>
        </div>
            <div class="pants-container">
                <img class="pantslist" src="{{asset('img/lp/wearlist-pants.png')}}" alt="">
            </div>
            <div class="shoes-container">
                <img class="shoeslist" src="{{asset('img/lp/wearlist-shoes.png')}}" alt="">
            </div>
        </div>
    </div>

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
                <p>「欲しいウェアが見つかった！でも自分の持っているウェアに合うかな？自分の顔にこの色は似合うかな？」スポーツウェアを購入する前に自分に似合うかどうかわからなくて困ったことはありませんか？</p>
                <p>wearcoordでは欲しいウェアの組み合わせを購入前に見える化することでスポーツウェアをより気軽に楽しく、普段のスポーツもよりワクワクしたものにするお手伝いをします。</p>
            </div>
            <picture>
                <img class="mockImg" src="{{asset('img/lp/mockup.png')}}" alt="">
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
                        <img class="" src="{{asset('img/lp/li-tennis.png')}}" alt="">
                    </picture>
                    <h3>気になるウェアを探す</h3>
                    <p>「このブランドのこんなカラーのアイテムが欲しい！」新作アイテムやプロ着用モデルなど豊富なアイテムの試着が可能です</p>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/li-running.png')}}" alt="">
                    </picture>
                    <h3>コーデを作って確認</h3>
                    <p>購入したいウェアを手持ちウェアやシューズと合わせマネキンに着せて確認できます</p>
                </li>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/li-ref.png')}}" alt="">
                    </picture>
                    <h3>他人のコーデを参考に</h3>
                    <p>wearcoordユーザーが作った全身コーディネートを参照しワンクリックで試着できます</p>
                </li>
            </ul>
    </section>

    <section class="sect">
        <div>
            <h2 class="sectTitle">wearcoordユーザーの声</h2>
        </div>
            <ul class="sectUl">
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/person2.png')}}" alt="">
                    </picture>
                    <h3>単価が高いウェアも安心<br>(20代 : テニスが趣味)</h3>
                    <p>「単価の高いレディースウェアをネット上だけで選ぶのは難しいが、自分の顔や組み合わせにマッチするか確認できるので価格を気にせず好きなウェアを選べる」
                    </p>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/person1.png')}}" alt="">
                    </picture>
                    <h3>お店で試着より気軽で良い<br>(30代: 週末テニスプレイヤー)</h3>
                    <p>「ちょっと気になる可愛いデザインのアイテムがあるけれどお店が近くにない時、試着をする感覚で全身コーデを作ることができてイメージが湧く」</p>
                </li>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/li-tennis.png')}}" alt="">
                    </picture>
                    <h3>ずっとこれを待っていた！<br>(50代: 週末テニスプレイヤー)</h3>
                    <p>「いつもウェア買う時は欲しいウェアと履いているシューズなどのコーデを頭で想像するしかなかったが、これがあるとちゃんと目で見た上で購入できるのがありがたい」
                    </p>
                </li>
            </ul>
    </section>

       <section class="sect">
        <div>
            <h2 class="sectTitle">wearcoordで取り扱うブランド一覧</h2>
        </div>
            <ul class="sectUl sectBrand">
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/adidas.png')}}" alt="">
                    </picture>
                    <h3>Adidas</h3>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/asics.png')}}" alt="">
                    </picture>
                    <h3>Asics</h3>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/diadora.png')}}" alt="">
                    </picture>
                    <h3>Diadora</h3>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/ellesse.png')}}" alt="">
                    </picture>
                    <h3>Ellesse</h3>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/fila.png')}}" alt="">
                    </picture>
                    <h3>Fila</h3>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/prince.png')}}" alt="">
                    </picture>
                    <h3>Prince</h3>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/underarmar.png')}}" alt="">
                    </picture>
                    <h3>Underarmar</h3>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/yonex.png')}}" alt="">
                    </picture>
                    <h3>Yonex</h3>
                </li>
                <li>
                    <picture>
                        <img class="" src="{{asset('img/lp/nike.png')}}" alt="">
                    </picture>
                    <h3>Nike</h3>
                </li>
            </ul>
    </section>

    <footer>wearcoord,inc</footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.5.8/swiper-bundle.min.js" integrity="sha512-sAHYBRXSgMOV2axInO6rUzuKKM5SkItFLlLHQ8YjRD+FBwowtATOs4njP9oim3/MzyAGrB52SLDjpAOLcOT9TA==" crossorigin="anonymous"></script>
    <script>
        const txts = $('.mannequinImg');
        let txtIndex = -1;
        txts.hide()

        function showNextTxt() {
        txtIndex++;
        txts.eq(txtIndex % txts.length).fadeIn(2000).delay(3000).fadeOut(2000, showNextTxt);

        var mySwiper = new Swiper ('.swiper-container', {
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
</body>
</html>
