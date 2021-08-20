@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row genderArea">
                            <div class="genderText">ウェアの嗜好</div>
                            <p class="subtext">※1つ選択してください</p>

                            <div class="tabs">
                                <input id="male" type="radio" name="tab_item" checked>
                                <label class="tab_item" for="male">男性</label>
                                <input id="female" type="radio" name="tab_item">
                                <label class="tab_item" for="female">女性</label>
                                <div class="tab_content" id="male_content">
                                  <div class="tab_content_description">

                                    <details>
                                        <summary>男性</summary>

                                        {{-- Asicsブランド --}}
                                        <details>
                                            <summary>Asics</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="9" value="9" name="coorditem" required>
                                               <label class="genderRadiobox" for="9">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/9.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="10" value="10" name="coorditem" required>
                                               <label class="genderRadiobox" for="10">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/10.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="11" value="11" name="coorditem" required>
                                               <label class="genderRadiobox" for="11">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/11.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="12" value="12" name="coorditem" required>
                                               <label class="genderRadiobox" for="12">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/12.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Adidasブランド --}}
                                        <details>
                                            <summary>Adidas</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="13" value="13" name="coorditem" required>
                                               <label class="genderRadiobox" for="13">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/13.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="14" value="14" name="coorditem" required>
                                               <label class="genderRadiobox" for="14">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/14.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="15" value="15" name="coorditem" required>
                                               <label class="genderRadiobox" for="15">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/15.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="16" value="16" name="coorditem" required>
                                               <label class="genderRadiobox" for="16">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/16.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- FILAブランド --}}
                                        <details>
                                            <summary>FILA</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="17" value="17" name="coorditem" required>
                                               <label class="genderRadiobox" for="17">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/17.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="18" value="18" name="coorditem" required>
                                               <label class="genderRadiobox" for="18">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/18.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="19" value="19" name="coorditem" required>
                                               <label class="genderRadiobox" for="19">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/19.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="20" value="20" name="coorditem" required>
                                               <label class="genderRadiobox" for="20">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/20.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- NIKEブランド --}}
                                        <details>
                                            <summary>NIKE</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="21" value="21" name="coorditem" required>
                                               <label class="genderRadiobox" for="21">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/21.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="22" value="22" name="coorditem" required>
                                               <label class="genderRadiobox" for="22">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/22.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="23" value="23" name="coorditem" required>
                                               <label class="genderRadiobox" for="23">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/23.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="24" value="24" name="coorditem" required>
                                               <label class="genderRadiobox" for="24">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/24.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Princeブランド --}}
                                        <details>
                                            <summary>Prince</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="29" value="29" name="coorditem" required>
                                               <label class="genderRadiobox" for="29">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/29.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="30" value="30" name="coorditem" required>
                                               <label class="genderRadiobox" for="30">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/30.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="31" value="31" name="coorditem" required>
                                               <label class="genderRadiobox" for="31">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/31.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="32" value="32" name="coorditem" required>
                                               <label class="genderRadiobox" for="32">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/32.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Diadoraブランド --}}
                                        <details>
                                            <summary>Diadora</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="25" value="25" name="coorditem" required>
                                               <label class="genderRadiobox" for="25">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/25.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="26" value="26" name="coorditem" required>
                                               <label class="genderRadiobox" for="26">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/26.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="27" value="27" name="coorditem" required>
                                               <label class="genderRadiobox" for="27">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/27.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="28" value="28" name="coorditem" required>
                                               <label class="genderRadiobox" for="28">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/28.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Ellesseブランド --}}
                                        <details>
                                            <summary>Ellesse</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="33" value="33" name="coorditem" required>
                                               <label class="genderRadiobox" for="33">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/33.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="34" value="34" name="coorditem" required>
                                               <label class="genderRadiobox" for="34">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/34.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="35" value="35" name="coorditem" required>
                                               <label class="genderRadiobox" for="35">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/35.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="36" value="36" name="coorditem" required>
                                               <label class="genderRadiobox" for="36">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/36.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Babolatブランド --}}
                                        <details>
                                            <summary>Babolat</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="37" value="37" name="coorditem" required>
                                               <label class="genderRadiobox" for="37">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/37.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="38" value="38" name="coorditem" required>
                                               <label class="genderRadiobox" for="38">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/38.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="39" value="39" name="coorditem" required>
                                               <label class="genderRadiobox" for="39">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/39.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="40" value="40" name="coorditem" required>
                                               <label class="genderRadiobox" for="40">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/40.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Hydrogenブランド --}}
                                        <details>
                                            <summary>Hydrogen</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="41" value="41" name="coorditem" required>
                                               <label class="genderRadiobox" for="41">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/41.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="42" value="42" name="coorditem" required>
                                               <label class="genderRadiobox" for="42">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/42.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="43" value="43" name="coorditem" required>
                                               <label class="genderRadiobox" for="43">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/43.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="44" value="44" name="coorditem" required>
                                               <label class="genderRadiobox" for="44">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/44.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Lecoqブランド --}}
                                        <details>
                                            <summary>Lecoq</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="45" value="45" name="coorditem" required>
                                               <label class="genderRadiobox" for="45">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/45.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="46" value="46" name="coorditem" required>
                                               <label class="genderRadiobox" for="46">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/46.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="47" value="47" name="coorditem" required>
                                               <label class="genderRadiobox" for="47">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/47.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="48" value="48" name="coorditem" required>
                                               <label class="genderRadiobox" for="48">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/48.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Princeブランド --}}
                                        {{-- <details>
                                            <summary>Prince</summary>
                                            <div class="coordWrapper">

                                            </div>
                                        </details> --}}

                                    </details>

                                  </div>
                                </div>
                                <div class="tab_content" id="female_content">
                                  <div class="tab_content_description">

                                    <details>
                                        <summary>女性</summary>

                                        {{-- Princeブランド --}}
                                        <details>
                                            <summary>Prince</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="1" value="1" name="coorditem" required>
                                               <label class="genderRadiobox" for="1">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/1.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="3" value="3" name="coorditem" >
                                               <label class="genderRadiobox" for="3">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/3.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="4" value="4" name="coorditem" >
                                               <label class="genderRadiobox" for="4">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/4.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="67" value="67" name="coorditem" >
                                               <label class="genderRadiobox" for="67">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/67.png')}}" alt="">
                                               </label>
                                            </div>
                                        </details>

                                        {{-- diadoraブランド --}}
                                        <details>
                                            <summary>Diadora</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="2" value="2" name="coorditem" >
                                               <label class="genderRadiobox" for="2">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/2.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="5" value="5" name="coorditem" >
                                               <label class="genderRadiobox" for="5">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/5.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="6" value="6" name="coorditem" >
                                               <label class="genderRadiobox" for="6">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/6.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="7" value="7" name="coorditem" >
                                               <label class="genderRadiobox" for="7">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/7.png')}}" alt="">
                                               </label>

                                                {{-- <input type="radio"
                                                class="radioInput" id="8" value="8" name="coorditem" >
                                               <label class="genderRadiobox" for="8">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/8.png')}}" alt="">
                                               </label> --}}
                                            </div>
                                        </details>

                                        {{-- Elleseブランド --}}
                                        <details>
                                            <summary>Ellese</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="49" value="49" name="coorditem" >
                                               <label class="genderRadiobox" for="49">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/49.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="50" value="50" name="coorditem" >
                                               <label class="genderRadiobox" for="50">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/50.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="51" value="51" name="coorditem" >
                                               <label class="genderRadiobox" for="51">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/51.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="52" value="52" name="coorditem" >
                                               <label class="genderRadiobox" for="52">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/52.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- FILAブランド --}}
                                        <details>
                                            <summary>FILA</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="53" value="53" name="coorditem" >
                                               <label class="genderRadiobox" for="53">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/53.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="54" value="54" name="coorditem" >
                                               <label class="genderRadiobox" for="54">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/54.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="55" value="55" name="coorditem" >
                                               <label class="genderRadiobox" for="55">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/55.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="56" value="56" name="coorditem" >
                                               <label class="genderRadiobox" for="56">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/56.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Adidasブランド --}}
                                        <details>
                                            <summary>Adidas</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="57" value="57" name="coorditem" >
                                               <label class="genderRadiobox" for="57">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/57.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="58" value="58" name="coorditem" >
                                               <label class="genderRadiobox" for="58">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/58.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="59" value="59" name="coorditem" >
                                               <label class="genderRadiobox" for="59">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/59.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="60" value="60" name="coorditem" >
                                               <label class="genderRadiobox" for="60">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/60.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- NIKEブランド --}}
                                        <details>
                                            <summary>NIKE</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="61" value="61" name="coorditem" >
                                               <label class="genderRadiobox" for="61">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/61.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="62" value="62" name="coorditem" >
                                               <label class="genderRadiobox" for="62">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/62.png')}}" alt="">
                                               </label>
                                            </div>
                                        </details>

                                        {{-- Asicsブランド --}}
                                        <details>
                                            <summary>Asics</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="63" value="63" name="coorditem" >
                                               <label class="genderRadiobox" for="63">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/63.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="64" value="64" name="coorditem" >
                                               <label class="genderRadiobox" for="64">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/64.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="65" value="65" name="coorditem" >
                                               <label class="genderRadiobox" for="65">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/65.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="66" value="66" name="coorditem" >
                                               <label class="genderRadiobox" for="66">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/66.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Babolatブランド --}}
                                        <details>
                                            <summary>Babolat</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="68" value="68" name="coorditem" >
                                               <label class="genderRadiobox" for="68">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/68.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="69" value="69" name="coorditem" >
                                               <label class="genderRadiobox" for="69">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/69.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="70" value="70" name="coorditem" >
                                               <label class="genderRadiobox" for="70">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/70.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="71" value="71" name="coorditem" >
                                               <label class="genderRadiobox" for="71">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/71.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                        {{-- Lecoqブランド --}}
                                        <details>
                                            <summary>Lecoq</summary>
                                            <div class="coordWrapper">
                                                <input type="radio"
                                                class="radioInput" id="72" value="72" name="coorditem" >
                                               <label class="genderRadiobox" for="72">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/72.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="73" value="73" name="coorditem" >
                                               <label class="genderRadiobox" for="73">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/73.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="74" value="74" name="coorditem" >
                                               <label class="genderRadiobox" for="74">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/74.png')}}" alt="">
                                               </label>

                                                <input type="radio"
                                                class="radioInput" id="75" value="75" name="coorditem" >
                                               <label class="genderRadiobox" for="75">
                                                   <img class="wearSet" src="{{asset('/img/firstcoord/75.png')}}" alt="">
                                               </label>

                                            </div>
                                        </details>

                                    </details>

                                  </div>
                                </div>
                              </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0 regibtn">
                            <div class="col-md-6 offset-md-4" style="text-align: center">
                                <button type="submit" class="btn btn-primary registerbtn">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
