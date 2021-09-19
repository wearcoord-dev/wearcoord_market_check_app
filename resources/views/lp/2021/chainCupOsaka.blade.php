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

        <section class="wearcoord">
            <p class="intro">Chain Cup 12/30 大阪大会に<br>ご参加いただくみなさまへ</p>
            <div>
                <p>みなさん、はじめまして。<br>
                    私たちはwearcoord（ウェアコード）と申します。<br>
                    立ち上がったばっかりの、小さなサービスです。
                </p>
                <img class="wearcoord_logo" src="{{asset('img/lp/2021/216496-long.png')}}" alt="">
                <p>
                    私たちは<br>
                    「もっと気軽に多くの人がスポーツウェアのオシャレを楽しめたらいいな」<br>
                    という想いを持って、スポーツウェアのオンラインコーディネートアプリを開発しています。
                </p>
                <p class="margin">
                    今回、Chain Cupとwearcoordはタイアップを行い、大会エントリー後から当日にかけて<br>
                    <span class="focus">「ベストドレッサー賞」</span><br>
                    企画を行います！
                </p>
                <p>どんなウェアを着てみたら、一番気分が上がるかな？と、是非ご想像いただきながら参加してみてください！</p>
                <div class="fancyUp">
                    <img src="{{asset('img/lp/2021/player_male.png')}}" alt="">
                    <div class="fancyText">
                        <div class="left">
                            <p>LET'S</p>
                        </div>
                        <div>
                            <p>FANCY UP!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mainContents">
            <div class="h2title">
                <p>ABOUT</p>
                <h2>どんな企画？</h2>
            </div>

            <div class="box">
                <div class="h3title">
                    <img src="{{asset('img/lp/2021/select.png')}}" alt="">
                    <h3>アプリで<br>コーディネートを<br>作ろう</h3>
                </div>
                <div class="mainText">
                    <p style="margin-bottom: 10px">wearcoordにログイン後、Chain Cup特設ページにアクセスします。</p>
                    <p>アプリに掲載されているウェアを用いて、みなさんの思うオシャレを表現したウェアのコーディネートをつくりましょう！</p>
                    <div class="imgBox">
                        <img class="mainImg" src="{{asset('img/lp/2021/swipe.png')}}" alt="">
                        <img class="swiperImg" src="{{asset('img/lp/2021/swiper.png')}}" alt="">
                    </div>
                    <p style="margin-bottom: 20px">つくったコーディネートはwearcoordのChain Cup専用ページに投稿すると参加完了です。</p>
                    <p>投稿されたコーディネートは他の参加者へ表示され、後日Chain Cup参加者による投票が行われてベストドレッサーを選びます！</p>
                </div>
            </div>

            <div class="box">
                <div class="h3title">
                    <img src="{{asset('img/lp/2021/getitem.png')}}" alt="">
                    <h3>オシャレさんに<br>豪華な<br>プレゼント</h3>
                </div>
                <div class="mainText">
                    <p>投票で最も多くの票を集めて、見事ベストドレッサー賞に輝いたコーディネートを投稿された男女それぞれの方に、コーディネートで使われたトップスとパンツをプレゼント！</p>
                    <div class="imgBox">
                        <div style="margin: 0 0 -20px 0;">
                            <img class="topsImg" src="{{asset('img/lp/2021/tops.png')}}" alt="">
                            <img class="skirtImg" src="{{asset('img/lp/2021/skirt.png')}}" alt="">
                        </div>
                        <img class="itemsImg" src="{{asset('img/lp/2021/items.png')}}" alt="">
                    </div>
                    <p style="margin-bottom: 20px">またベストドレッサーに選ばれたコーディネートを投票された方からも、抽選でプレゼントがもらえるかも？</p>
                    <p class="gray">※商品の売行きにより在庫が確保できない場合は別アイテムをご用意致します</p>
                </div>
            </div>

        </section>

        <section class="mainContents">
            <div class="h2title">
                <p>HOW TO JOIN</p>
                <h2>参加方法</h2>
            </div>

            <div class="centerBox">
                <div class="container">
                    <figure>
                        <img class="registerImg" src="{{asset('img/lp/2021/register.png')}}" alt="">
                    </figure>
                    <div class="textBox">
                        <h3>ステップ①<br>wearcoordアプリに登録</h3>
                        <p>エントリーにはwearcoordアプリのアカウントが必要です。</p>
                        <p>wearcoordアプリwebページにアクセスをして、ユーザー登録をお願いします。</p>
                    </div>
                </div>

                <div class="container">
                    <figure>
                        <div class="wearset">
                            <img class="tops2Img" src="{{asset('img/lp/2021/tops2.png')}}" alt="">
                            <img class="poloImg" src="{{asset('img/lp/2021/polo.png')}}" alt="">
                            <img class="topsImg" src="{{asset('img/lp/2021/tops.png')}}" alt="">
                        </div>
                        <img class="registerImg" src="{{asset('img/lp/2021/create.png')}}" alt="">
                    </figure>
                    <div class="textBox">
                        <h3>ステップ②<br>コーディネートをつくる</h3>
                        <p>12月よりコーディネート投稿と投票ページの受付開始予定です。</p>
                        <p style="margin-bottom: 20px">Chain Cup特設ページにアクセスして、コーディネートを作成して投稿しましょう！</p>
                        <p>なおアクセスの際には大会本部のLINEで配布されるコード番号が必要になりますので、お忘れなく！</p>
                    </div>
                </div>

                <div class="container">
                    <figure class="step3">
                        <div>
                            <img class="playerImg" src="{{asset('img/lp/2021/player_male.png')}}" alt="">
                        </div>
                        <div class="right">
                            <p class="like">LIKE!</p>
                            <img class="likeImg" src="{{asset('img/lp/2021/like.png')}}" alt="">
                            <img class="swiperImg" src="{{asset('img/lp/2021/swiper.png')}}" alt="">
                        </div>
                    </figure>
                    <div class="textBox">
                        <h3>ステップ③<br>コーディネートに投票する</h3>
                        <p>投票ページで、他の参加者がつくったコーディネートから好きなものを一つ選んで、「いいね」しましょう！</p>
                    </div>
                </div>

                <div class="check">
                    <p>※ベストドレッサー参加とプレゼント受け取り資格のある方は、以下の項目を全て満たした方になります。必ず確認した上で参加してください。</p>
                    <ol>
                        <li>Chain Cup特設ページ経由でコーディネートを作成し、投稿していること。</li>
                        <li>特設ページ内にて、他の参加者のコーディネートに投票していること。</li>
                    </ol>
                </div>
            </div>
        </section>

        <section class="mainContents">
            <div class="h2title">
                <p>RESULT</p>
                <h2>結果発表</h2>
            </div>

            <div class="centerBox">
                <div class="resultBox">
                    <figure>
                        <img class="itemImg" src="{{asset('img/lp/2021/item.png')}}" alt="">
                        <img class="maleImg" src="{{asset('img/lp/2021/male.png')}}" alt="">
                    </figure>
                    <div class="textBox">
                        <h3>結果は後日特設ページで発表！</h3>
                        <p style="margin-bottom: 20px">見事ベストドレッサー賞に輝いたコーディネートは、後日特設ページ内で発表します！</p>
                        <p>またベストドレッサー賞に輝いた男女1名ずつの方へ、登録したメールアドレスへ通知が入りますのでご確認ください。</p>
                        <p style="margin-bottom: 50px">（そのためアカウント登録には有効なメールアドレスであることを忘れずに！）</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="endsect">
            <p class="mainText mb">好きな<br>テニスウェアを着て、</p>
            <p class="mainText">テニスにもっと<br>ワクワクを。</p>
            <p class="small">planned by</p>
            <figure>
                <img class="wearcoord_logo" src="{{asset('img/lp/2021/216496-long.png')}}" alt="">
            </figure>
        </section>

        <section class="linkBtn">
            <div class="contentsBox flexDirection">
                <p class="big">特設ページ</p>
                <p class="big">Coming Soon...</p>
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
