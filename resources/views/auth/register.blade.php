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
                                            <input type="radio"
                                             class="radioInput" id="1" value="1" name="coorditem" required>
                                            <label class="genderRadiobox" for="1">
                                                <img class="wearSet" src="{{asset('img/lp/adidas.png')}}" alt="">
                                            </label>

                                            <input type="radio"
                                             class="radioInput" id="prince2" value="prince2" name="coorditem" required>
                                            <label class="genderRadiobox" for="prince2">
                                                <img class="wearSet" src="{{asset('img/lp/adidas.png')}}" alt="">
                                            </label>

                                            <input type="radio"
                                             class="radioInput" id="prince3" value="prince3" name="coorditem" required>
                                            <label class="genderRadiobox" for="prince3">
                                                <img class="wearSet" src="{{asset('img/lp/adidas.png')}}" alt="">
                                            </label>

                                        </div>
                                    </details>

                                    {{-- Diadoraブランド --}}
                                    <details>
                                        <summary>Diadora</summary>

                                        <div class="coordWrapper">
                                            <input type="radio"
                                             class="radioInput" id="diadora1" value="2" name="coorditem" required>
                                            <label class="genderRadiobox" for="diadora1">
                                                <img class="wearSet" src="{{asset('img/lp/adidas.png')}}" alt="">
                                            </label>

                                            <input type="radio"
                                             class="radioInput" id="diadora2" value="diadora2" name="coorditem" required>
                                            <label class="genderRadiobox" for="diadora2">
                                                <img class="wearSet" src="{{asset('img/lp/adidas.png')}}" alt="">
                                            </label>
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
                                            class="radioInput" id="prince4" value="prince4" name="coorditem">
                                            <label class="genderRadiobox" for="prince4">
                                                <img class="wearSet" src="{{asset('img/lp/adidas.png')}}" alt="">
                                            </label>
                                            <input type="radio"
                                            class="radioInput" id="prince5" value="prince5" name="coorditem">
                                            <label class="genderRadiobox" for="prince5">
                                                <img class="wearSet" src="{{asset('img/lp/adidas.png')}}" alt="">
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
