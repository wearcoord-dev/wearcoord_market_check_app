@extends('layouts.appAdmin', ['authgroup'=>'admin'])

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">管理者 {{ __('Dashboard') }}</div>

                    <div class="card-body">
                        {{ $gender }}ウェア一覧です
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
