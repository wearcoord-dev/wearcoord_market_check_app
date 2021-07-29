<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="description" content="wearcoordはオンラインでスポーツウェアのコーディネートを楽しめて購入できるアプリです" />
    <meta name="robots" content="noindex,nofollow" />

    <link rel="icon" href="{{ asset('img/logo/icon/32.ico') }}" sizes="16x16" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/32.ico') }}" sizes="32x32" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/48.ico') }}" sizes="48x48" type="image/ico" />
    <link rel="icon" href="{{ asset('img/logo/icon/64.ico') }}" sizes="64x64" type="image/ico" />
    <link rel="shortcut icon" href="{{ asset('img/logo/icon/64.ico') }}" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" href="{{ asset('img/logo/wearcoord-service.jpg') }}" />


    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined	" rel="stylesheet">

    {{-- font awesome --}}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">


    <!-- Styles -->
    <link href="{{ asset('css/reset.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('css/components/mycoord/mycoord.css') }}" rel="stylesheet">

    {{-- OGP --}}
    <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
    <meta property="og:url" content="{{ config('app.url') }}">
    <meta property="og:type" content="website" />
    <meta property="og:title" content="wearcoord" />
    <meta property="og:description" content="wearcoordはオンラインでスポーツウェアのコーディネートを楽しめて購入できるアプリです" />
    <meta property="og:site_name" content="wearcoord" />
    <meta property="og:image" content="{{ asset('img/logo/wearcoord-ogp.jpg') }}" />
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="{{ asset('img/logo/wearcoord-ogp.jpg') }}">



    {{-- <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NEPPTM9ZH4"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-NEPPTM9ZH4');
    gtag('config', 'UA-199807866-2');
    </script> --}}

</head>
<body>
    <div id="app"></div>
</body>
</html>
