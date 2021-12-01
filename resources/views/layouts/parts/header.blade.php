@section('header')
<header class="lpHeader">
    <div class="headerList">
        <a href="{{ route('lp') }}" class="titleIcon">
            <img class="titleImg" src="{{asset('img/logo/logo_216496.png')}}" alt="">
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
@endsection