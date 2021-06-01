<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>studio1</title>


    <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
    <link rel="stylesheet" href="{{ asset('css/lp/lp.css') }}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/css/swiper.min.css">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined	" rel="stylesheet">

    <style>
        html,
        body {
          position: relative;
          /* height: 100%; */
        }

        body {
          background: #eee;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #000;
          margin: 0;
          padding: 0;
        }

        .swiper-container {
          width: 100%;
          /* height: 100%; */
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      </style>

</head>
<body>
    {{-- <div id="target">
        <img style="width: 100%" class="rollerblade-img" src="{{asset('img/test/blue/360_RAY_030.jpg')}}">
      </div> --}}

      <div class="swiper-container mySwiper">
        <div class="swiper-wrapper">
            <div  id="target3" class="swiper-slide">
              <img style="width: 100%; object-fit: contain" class="rollerblade-img" src="{{asset('img/test/red/360_NBA_030.jpg')}}">
            </div>
            <div  id="target2" class="swiper-slide">
              <img style="width: 100%; object-fit: contain" class="rollerblade-img" src="{{asset('img/test/yellow/360_EAC_030.jpg')}}">
            </div>
          <div  id="target" class="swiper-slide">
            <img style="width: 100%; object-fit: contain" class="rollerblade-img" src="{{asset('img/test/blue/360_RAY_030.jpg')}}">
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>

          <!-- Swiper JS -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
      var swiper = new Swiper(".mySwiper", {
        allowTouchMove: false,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    </script>

      <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      <script src="{{asset('js/check/rollerblade.js')}}"></script>

      <script>
            $(document).ready(function(){

  // You can specify an array of images outside of the rollerblade method,
  // and then pass it in, as so:

  var arrayOfImages = [
    'img/test/blue/360_RAY_030.jpg',
    'img/test/blue/360_RAY_003.jpg',
    'img/test/blue/360_RAY_012.jpg',
    'img/test/blue/360_RAY_021.jpg',
  ]

  $("#target").rollerblade({imageArray:arrayOfImages});

  var arrayOfImages = [
    'img/test/yellow/360_EAC_030.jpg',
    'img/test/yellow/360_EAC_003.jpg',
    'img/test/yellow/360_EAC_012.jpg',
    'img/test/yellow/360_EAC_021.jpg',
  ]

  $("#target2").rollerblade({imageArray:arrayOfImages});

  var arrayOfImages = [
    'img/test/red/360_NBA_030.jpg',
    'img/test/red/360_NBA_003.jpg',
    'img/test/red/360_NBA_012.jpg',
    'img/test/red/360_NBA_021.jpg',
  ]

  $("#target3").rollerblade({imageArray:arrayOfImages});

  // OR you can create the array directly in the options object, as so:

//   $("#target").rollerblade({imageArray:[
//     'path/to/image/1.jpg',
//     'path/to/image/2.jpg',
//     'path/to/image/3.jpg',
//     'path/to/image/4.jpg',
//     'and/so/on.jpg'
//   ]});

})
      </script>
</body>
</html>
