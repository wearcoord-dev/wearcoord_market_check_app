@extends('layouts.appAdmin', ['authgroup'=>'admin'])

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">管理者 {{ __('Dashboard') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        You are logged in as 管理者!
                    </div>
                </div>
                <div class="card mt-4">
                    <h5 class="card-header">現在の仕様</h5>
                    <div class="card-body">
                        <h5 class="card-title">ウェア一覧</h5>
                        <ul style="padding: 20px">
                            <li class="card-text" style="list-style: disc">表示順は新しいものから載せている</li>
                            <li class="card-text" style="list-style: disc">大きく飛び出しているアフィリエイトリンクはアプリ側でも飛び出しているので、本当は要修正</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
