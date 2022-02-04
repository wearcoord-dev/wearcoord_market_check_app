<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/appAdmin.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/reset.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin/admin.css') }}" rel="stylesheet">

</head>

<body>
    <div id="appAdmin">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/admin') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>

                <ul class="d-flex m-auto">
                    <li class="p-2"><a href="{{ route('itemIndex', ['gender' => 'male']) }}">男ウェア一覧</a></li>
                    <li class="p-2"><a href="{{ route('itemAdd', ['gender' => 'male']) }}">男ウェア新規登録</a>
                    </li>
                    <li class="p-2"><a href="{{ route('itemIndex', ['gender' => 'female']) }}">女ウェア一覧</a>
                    </li>
                    <li class="p-2"><a href="{{ route('itemAdd', ['gender' => 'female']) }}">女ウェア新規登録</a>
                    </li>
                </ul>

                <div>
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        <li>
                            <a>
                                {{ Auth::guard($authgroup)->user()->name }}
                            </a>

                            <div>
                                <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                    class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>

</body>

</html>
