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

     <!-- Demo styles -->
     <style>
        html,
        body {
          position: relative;
          height: 100%;
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
          height: 100%;
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
          /* height: 100%; */
          object-fit: cover;
        }

        .swiper-container-v {
          background: #eee;
        }
      </style>

</head>
<body>
    <!-- Swiper -->

    <div class="swiper-container mySwiper swiper-container-h">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="swiper-container mySwiper2 swiper-container-v">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="{{asset('img/test/red/360_NBA_030.jpg')}}" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="{{asset('img/test/red/360_NBA_003.jpg')}}" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="{{asset('img/test/red/360_NBA_012.jpg')}}" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="{{asset('img/test/red/360_NBA_021.jpg')}}" alt="">
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        <div class="swiper-slide">
          <div class="swiper-container mySwiper2 swiper-container-v">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="{{asset('img/test/yellow/360_EAC_030.jpg')}}" alt="">
              </div>
              <div class="swiper-slide">
                <img src="{{asset('img/test/yellow/360_EAC_003.jpg')}}" alt="">
              </div>
              <div class="swiper-slide">
                <img src="{{asset('img/test/yellow/360_EAC_012.jpg')}}" alt="">
              </div>
              <div class="swiper-slide">
                <img src="{{asset('img/test/yellow/360_EAC_021.jpg')}}" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="swiper-slide">
            <div class="swiper-container mySwiper2 swiper-container-v">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="{{asset('img/test/blue/360_RAY_030.jpg')}}" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="{{asset('img/test/blue/360_RAY_003.jpg')}}" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="{{asset('img/test/blue/360_RAY_012.jpg')}}" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="{{asset('img/test/blue/360_RAY_021.jpg')}}" alt="">
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- Swiper JS -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 50,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      var swiper2 = new Swiper(".mySwiper2", {
        direction: "vertical",
        spaceBetween: 50,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    </script>
  </body>
</html>
