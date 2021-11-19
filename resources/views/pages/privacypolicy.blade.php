<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#216496">

    <title>wearcoord プライバシーポリシー</title>

    <meta name="description" content="wearcoord プライバシーポリシーページです" />

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
            <meta property="og:title" content="wearcoord プライバシーポリシー" />
            <meta property="og:description" content="wearcoord プライバシーポリシーページです" />
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
        <section class="mainSect">
            <div class="ppTitle">
                <h2>プライバシーポリシー</h2>
            </div>
            <p class="pb-10">株式会社wearcoord（以下、「当社」といいます。）は、ユーザーの個人情報の適切な取り扱い及び保護のため、次のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定め、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の関係法令・ガイドライン等ともに遵守致します。</p>

            <ul class="mainUl">
                <li class="mainLi">
                    <h3>第1条（本ポリシーで使用する用語の定義）</h3>
                    <p>本ポリシーで使用する用語は、個人情報保護法が使用する用語の例によるものとします。</p>
                </li>
                <li class="mainLi">
                    <h3>第2条（取得する個人情報）</h3>
                    <p>当社は、法に基づき、下記の個人情報を取得いたします。</p>
                    <ul>
                        <li>サービスへのログインおよび利用等に関する情報</li>
                        <li>サービスログインのためのユーザーID（メールアドレス）およびパスワード</li>
                        <li>アカウント登録情報としての性別およびメールアドレス</li>
                        <li>アカウントに紐づく情報としてお客様から提供される氏名、アカウント情報、サイズ情報の参考としてお客様から提供される体格情報</li>
                        <li>サービスの利用を通じてお客様が行った取引の遂行のための情報および当該取引内容に関する情報</li>
                        <li>お客様から当社へのお問い合わせやご連絡等に関する情報</li>
                        <li>法律上の要請等により、本人確認を行うための本人確認書類（運転免許証、健康保険証、住民票の写し等のことをいいます。）および当該書類に含まれる情報</li>
                    </ul>
                </li>
                <li class="mainLi">
                    <h3>第3条（個人情報の利用目的）</h3>
                    <p>当社が前条記載の個人情報を利用する目的は、以下のとおりです。</p>
                    <ul class="includeUl">
                        <li>
                            <p class="pb-10">1. サービスへのログインおよびサービスの利用（お客様の同意に基づく利用又はお客様との契約の履行のための利用）</p>
                            <ul>
                                <li>お客様がサービスにログインするため</li>
                                <li>お客様に適したサービスを提供・運用するため</li>
                                <li>お客様と当社グループとの間の取引の成立および履行その他のお客様によるサービスの利用のため</li>
                                <li>お客様から当社へのお問い合わせやご連絡等に関する情報</li>
                                <li>サービスの会員であるお客様の管理のため</li>
                                <li>サービスの商品等の梱包・発送業務のため</li>
                                <li>サービスの対価の請求のため</li>
                                <li>サービスの運営上必要な事項の通知のため</li>
                                <li>当社が提供する他のサービスの案内のメッセージ等を送付するため</li>
                                <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等を送付するため</li>
                                <li>当社の運用するSNSアカウントにおいて投稿を行うに際しユーザー名をメンション等するため</li>
                                <li>サービスの各種問合わせ、アフターサービス対応のため</li>
                                <li>退会したお客様へのご連絡・各種問合わせ対応のため</li>
                                <li>不正行為等の防止および対応のため</li>
                                <li>当社が実施するサービス又は企画に関する連絡のため</li>
                                <li>ユーザーの本人認証及び各種画面における登録情報の自動表示</li>
                                <li>なお、お客様がサービスへログインし、サービスをご利用いただくためには、当社が上記の目的で利用するために、お客様の個人情報をご提供いただく必要がございます。</li>
                            </ul>
                        </li>
                        <li>
                            <p class="pb-10">2. 広告・マーケティングのための利用（お客様の同意に基づく利用）</p>
                            <ul>
                                <li>サービス上又は第三者の媒体においてサービスの勧誘、広告その他のマーケティングをするため</li>
                                <li>メールマガジンの送信のため</li>
                                <li>お客様と当社グループとの間の取引の成立および履行その他のお客様によるサービスの利用のため</li>
                                <li>キャンペーン、懸賞企画、アンケートの実施のため</li>
                                <li>サービス上又は第三者の媒体において第三者が広告主となる広告を配信するため</li>
                            </ul>
                        </li>
                        <li>
                            <p class="pb-10">3. 商品開発・研究のための利用（お客様との同意に基づく利用）</p>
                            <ul>
                                <li>マーケティングデータの調査・分析のため</li>
                                <li>当社グループの新たなサービスや商品等の開発のため</li>
                                <li>上記の利用目的に付随する目的</li>
                            </ul>
                            <p class="pt-10">当社は、個人情報の利用目的を関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合には、ユーザーに通知し又は本サイト上で公表します。</p>
                            <p>当社は、個人情報保護法その他の法令により許容される事由がある場合を除いて、あらかじめユーザーの同意を得ない限り、第1項の利用目的の達成に必要な範囲を超えて、個人情報を取り扱うことは致しません。</p>
                        </li>
                    </ul>
                </li>
                <li class="mainLi">
                    <h3>第4条（個人情報の適正な取得）</h3>
                    <p>当社は、適正な手段に基づき個人情報を取得するものとし、偽りその他不正の手段により個人情報を取得することは致しません。</p>
                    <p>当社は、個人情報保護法その他の法令により許容される事由がある場合を除いて、あらかじめユーザーの同意を得ない限り、ユーザーの要配慮個人情報を取得することは致しません。</p>
                </li>
                <li class="mainLi">
                    <h3>第5条（個人データの安全管理等）</h3>
                    <p>当社は、利用目的の達成に必要な範囲内において、個人データを正確かつ最新の内容に保つよう努めるものとします。</p>
                    <p>当社は、その取り扱う個人データにつき、漏洩、滅失又は毀損の防止その他個人データの安全管理のために必要かつ適切な措置を講じるものとし、従業員及び委託先に対して必要かつ適切な監督を行います。</p>
                </li>
                <li class="mainLi">
                    <h3>第6条（個人データの第三者提供）</h3>
                    <p class="pb-10">当社は、個人情報保護法その他の法令に基づき許容される事由がある場合を除いて、あらかじめユーザーの同意を得ない限り、個人データを第三者に提供すること（以下「第三者提供」といいます。）は致しません。ただし、次の各号に掲げる場合は、第三者提供には当たらないものとします。</p>
                    <ul>
                        <li>当社の利用目的の達成に必要な範囲内で個人データの取扱いの全部又は一部を委託する場合</li>
                        <li>合併その他の事由による事業の承継に伴って個人データが提供される場合</li>
                        <li>個人情報保護法の定めに基づき、個人データを共同利用する場合</li>
                    </ul>
                </li>
                <li class="mainLi">
                    <h3>第7条（個人データの共同利用）</h3>
                    <p class="pb-10">当社は、以下に定めるところに従い、ユーザーの個人データを共同利用することがあります。</p>
                    <ul>
                        <li>共同利用されるユーザーの個人データの項目</li>
                        <li>共同利用者の範囲</li>
                        <li>共同利用者の利用目的</li>
                        <li>ユーザの個人データの管理について責任を有する者の氏名または名称</li>
                    </ul>
                </li>
                <li class="mainLi">
                    <h3>第8条（保有個人データの開示等の請求等）</h3>
                    <p>個人情報保護法の定めに基づき、ユーザーから、当該ユーザーが識別される保有個人データの利用目的の通知のお求めがあった場合、当社は、ユーザーご本人からのお求めであることを確認した上で、個人情報保護法の定めに従い、速やかに対応致します。なお、保有個人データの利用目的の通知につきましては、１件当たり1,000円の手数料を頂戴しておりますので、予めご了承ください。</p>
                    <p>個人情報保護法の定めに基づき、ユーザーから、当該ユーザーが識別される保有個人データの開示、訂正、利用停止等のご請求があった場合、当社は、ユーザーご本人からのご請求であることを確認した上で、個人情報保護法の定めに従い、速やかに対応致します。なお、保有個人データの開示につきましては、１件当たり1,000円の手数料を頂戴しておりますので、予めご了承ください。</p>
                </li>
                <li class="mainLi">
                    <h3>第9条（クッキー関連）</h3>
                    <p>当社のサービスではお客様の閲覧情報を分析し、ここのお客様に適したサービスや情報、広告等を提供する目的のため、Cookieを利用しています。</p>
                    <p>詳しくはこちらの<a href="{{ route('cookie') }}">クッキーポリシー</a>をご覧ください。</p>
                </li>
                <li class="mainLi">
                    <h3>第10条（お問合せ窓口）</h3>
                    <p>開示等のご請求等、ご意見、ご質問、苦情のお申出その他個人情報の取扱いに関するお問合せは、以下の窓口までお願い致します。</p>
                    <address class="pt-10">
                        〒231-0861<br>
                        神奈川県横浜市中区元町４丁目１６８BIZcomfort元町<br>
                        株式会社wearcoord<br>
                        メールアドレス：info@wearcoord.com
                    </address>
                </li>
                <li class="mainLi">
                    <h3>第11条（本ポリシーの変更）</h3>
                    <p>当社は、ユーザーの個人情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて本ポリシーを変更することがあります。当社が本ポリシーを変更した場合には、本サイトへ掲載する方法にてユーザーに通知致します。</p>
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
