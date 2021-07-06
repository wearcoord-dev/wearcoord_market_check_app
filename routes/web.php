<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('lp.mainLp');
});

Route::get('/main', function () {
    return view('layouts.main');
})->middleware(['auth']);

Auth::routes();

// /main/以降にアクセスしても404にしない

Route::get('/main/{any}', static function () {
    return view('layouts.main');
})->where('any', '.*')->middleware(['auth']);


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/user', function () {

    $user = Auth::user();

    $user = [
        'id' => $user->id,
        'gender' => $user->gender,
        'faceImg' => $user->faceImg,
        'firstcheck' => $user->firstcheck,
    ];

    return response()->json($user);
});

Route::get('/getwear', [App\Http\Controllers\MycoordController::class, "getRegisterWear"])->name('getRegisterWear')->middleware(['auth']);

Route::get('/getregistercoord', [App\Http\Controllers\MycoordController::class, "getRegisterCoord"])->name('getRegisterCoord')->middleware(['auth']);

// 外部参照用

Route::get('/viewtest/studio1', function () {
    return view('check.one');
});

Route::get('/studio2', function () {
    return view('check.two');
});