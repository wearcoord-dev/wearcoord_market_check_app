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
                            <details>
                                <summary>クリックで展開</summary>
                                <div class="genderBox">
                                </div>
                                <details>
                                    <summary>男性</summary>

                                    {{-- Princeブランド --}}
                                    <details>
                                        <summary>Prince</summary>
                                        <div class="coordWrapper">


                                        </div>
                                    </details>

                                    {{-- Diadoraブランド --}}
                                    <details>
                                        <summary>Diadora</summary>

                                        <div class="coordWrapper">
                                            {{-- <input type="radio"
                                             class="radioInput" id="diadora1" value="2" name="coorditem" required>
                                            <label class="genderRadiobox" for="diadora1">
                                                <img class="wearSet" src="{{asset('img/lp/adidas.png')}}" alt="">
                                            </label>

                                            <input type="radio"
                                             class="radioInput" id="diadora2" value="diadora2" name="coorditem" required>
                                            <label class="genderRadiobox" for="diadora2">
                                                <img class="wearSet" src="{{asset('img/lp/adidas.png')}}" alt="">
                                            </label> --}}
                                        </div>

                                    </details>

                                </details>
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

                                            <input type="radio"
                                            class="radioInput" id="8" value="8" name="coorditem" >
                                           <label class="genderRadiobox" for="8">
                                               <img class="wearSet" src="{{asset('/img/firstcoord/8.png')}}" alt="">
                                           </label>
                                        </div>
                                    </details>

                                </details>
                            </details>
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

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
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
