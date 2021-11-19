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
})->name('lp');

Route::get('/main', function () {
    return view('layouts.main');
})->middleware(['auth']);

// SNS認証用

Auth::routes();
Route::prefix('login')->name('login.')->group(function () {
    // Route::get('/{provider}', 'Auth\LoginController@redirectToProvider')->name('{provider}');
    // Route::get('/{provider}', [App\Http\Controllers\Auth\LoginController::class, 'redirectToProvider'])->name('{provider}');
    // Route::get('/google/callback', [App\Http\Controllers\Auth\LoginController::class, 'handleProviderCallback'])->name('google.callback');
    Route::get('/{provider}', 'App\Http\Controllers\Auth\LoginController@redirectToProvider')->name('{provider}');
    Route::get('/{provider}/callback', 'App\Http\Controllers\Auth\LoginController@handleProviderCallback')->name('{provider}.callback');
});

Route::prefix('register')->name('register.')->group(function () {
    Route::get('/{provider}', 'App\Http\Controllers\Auth\RegisterController@showProviderUserRegistrationForm')->name('{provider}');
    Route::post('/{provider}', 'App\Http\Controllers\Auth\RegisterController@registerProviderUser')->name('{provider}');
});

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
        'sizecheck' => $user->sizecheck,
        'tour_id' => $user->tour_id,
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

// 大会用LP

// Route::group(['middleware' => ['loginUserCheck']], function() {
    Route::get('/cc-osaka2021', function () {
        return view('lp.2021.chainCupOsaka');
    });
//   });

Route::get('/privacy-policy', function () {
    return view('pages.privacypolicy');
})->name('privacy');

Route::get('/cookie-policy', function () {
    return view('pages.cookiepolicy');
})->name('cookie');