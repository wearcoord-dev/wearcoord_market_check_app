<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


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

// 本来API用で作ったもの

// コーデを削除

Route::get('/deletecoord', function (Request $request) {
});

Route::post('/deletecoord', [App\Http\Controllers\MycoordController::class, "deleteCoord"]);

// コーデをお気に入りに登録

Route::get('/registercoord', function (Request $request) {
});

Route::post('/registercoord', [App\Http\Controllers\MycoordController::class, "registerCoord"]);

// 顔画像登録

Route::get('/registerface', function (Request $request) {
});

Route::post('/registerface', [App\Http\Controllers\UserController::class, "registerFace"]);

// カートに追加

Route::get('/addcart', function (Request $request) {
});

Route::post('/addcart', [App\Http\Controllers\UserController::class, "addCart"]);

// カートから削除

Route::get('/deletecartitem', function (Request $request) {
});

Route::post('/deletecartitem', [App\Http\Controllers\ItemController::class, "deleteCartItem"]);

// 単品ウェアを着せる

Route::get('/registerwearitem', function (Request $request) {
});

Route::post('/registerwearitem', [App\Http\Controllers\ItemController::class, "registerWearItem"]);

// コーデ一式コピーして着せる

Route::get('/copycoord', function (Request $request) {
});

Route::post('/copycoord', [App\Http\Controllers\MycoordController::class, "copyCoord"]);

// 登録後最初のチェック

Route::get('/registerfirstcheck', function (Request $request) {
});

Route::post('/registerfirstcheck', [App\Http\Controllers\UserController::class, "registerFirstCheck"]);

// トップスのサイズ登録

Route::get('/registersize/tops', function (Request $request) {
});

Route::post('/registersize/tops', [App\Http\Controllers\UserController::class, "registerSizeTops"]);

// パンツのサイズ登録

Route::get('/registersize/pants', function (Request $request) {
});

Route::post('/registersize/pants', [App\Http\Controllers\UserController::class, "registerSizePants"]);

// ウェアからのサイズ登録

Route::get('/registersize/wear', function (Request $request) {
});

Route::post('/registersize/wear', [App\Http\Controllers\UserController::class, "registerSizeWear"]);

// アカウント削除

Route::get('/deleteaccount', function (Request $request) {
});

Route::post('/deleteaccount', [App\Http\Controllers\UserController::class, "deleteAccount"]);

// 顔写真削除

Route::get('/setting/deleteimg', function (Request $request) {
});

Route::post('/setting/deleteimg', [App\Http\Controllers\UserController::class, "deleteFaceImg"]);

// ベストドレッサー

// パスコード認証

Route::get('/bestdresser/passcode', function (Request $request) {
});

Route::post('/bestdresser/passcode', [App\Http\Controllers\BestDresserController::class, "checkPassCode"]);

// ユーザー進捗情報

Route::get('/bestdresser/bdUserInfo', function (Request $request) {
});

Route::post('/bestdresser/bdUserInfo', [App\Http\Controllers\BestDresserController::class, "getBDUserInfo"]);

// ユーザーの今のコーデ

Route::get('/bestdresser/bdUserWear', function (Request $request) {
});

Route::post('/bestdresser/bdUserWear', [App\Http\Controllers\BestDresserController::class, "getBDUserWear"]);

// コーデの保存

Route::get('/bestdresser/registerBDWear', function (Request $request) {
});

Route::post('/bestdresser/registerBDWear', [App\Http\Controllers\BestDresserController::class, "registerBDWear"]);

// コーデの投稿

Route::get('/bestdresser/registerBDCoord', function (Request $request) {
});

Route::post('/bestdresser/registerBDCoord', [App\Http\Controllers\BestDresserController::class, "registerBDCoord"]);


// インナーの保存

Route::get('/bestdresser/registerBDInner', function (Request $request) {
});

Route::post('/bestdresser/registerBDInner', [App\Http\Controllers\BestDresserController::class, "registerBDInner"]);

// いいねしたコーデの取得

Route::get('/bestdresser/getLikeCoord', function (Request $request) {
});

Route::post('/bestdresser/getLikeCoord', [App\Http\Controllers\BestDresserController::class, "getLikeCoord"]);

// コーデへのいいね投稿

Route::get('/bestdresser/postBDCoord', function (Request $request) {
});

Route::post('/bestdresser/postBDCoord', [App\Http\Controllers\BestDresserController::class, "postBDCoord"]);

// コーデへのいいね削除

Route::get('/bestdresser/deleteBDCoord', function (Request $request) {
});

Route::post('/bestdresser/deleteBDCoord', [App\Http\Controllers\BestDresserController::class, "deleteBDCoord"]);

// ウェア単品の着用

Route::get('/bestdresser/wearItemBD', function (Request $request) {
});

Route::post('/bestdresser/wearItemBD', [App\Http\Controllers\BestDresserController::class, "wearItemBD"]);

Route::get('/bestdresser/resultCoord', [App\Http\Controllers\BestDresserController::class, "resultCoord"])->name('resultCoord');


// Route::get('/calcLikeBD', [App\Http\Controllers\BestDresserController::class, "calcLikeBD"])->name('calcLikeBD');

// ここまで

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

// コラム記事

Route::get('/column/size', function () {
    return view('column.read.size');
})->name('column_size');



// 管理画面

Route::get('/admin/login', [App\Http\Controllers\AuthAdmin\LoginController::class, 'showAdminLoginForm']);
Route::get('/admin/register', [App\Http\Controllers\AuthAdmin\RegisterController::class, 'showAdminRegisterForm']);

Route::post('/admin/login', [App\Http\Controllers\AuthAdmin\LoginController::class, 'adminLogin']);
Route::post('/admin/register', [App\Http\Controllers\AuthAdmin\RegisterController::class, 'registerAdmin'])->name('admin-register');

Route::view('/admin', 'admin')->middleware('auth:admin')->name('admin-home');

Route::get('password/admin/reset', [App\Http\Controllers\AuthAdmin\AdminForgotPasswordController::class, 'showLinkRequestForm'])->name('admin.password.request');
Route::post('password/admin/email', [App\Http\Controllers\AuthAdmin\AdminForgotPasswordController::class, 'sendResetLinkEmail'])->name('admin.password.email');
Route::get('password/admin/reset/{token}', [App\Http\Controllers\AuthAdmin\AdminResetPasswordController::class, 'showResetForm'])->name('admin.password.reset');
Route::post('password/admin/reset', [App\Http\Controllers\AuthAdmin\AdminResetPasswordController::class, 'reset'])->name('admin.password.update');

// Route::view('/admin/maleIndex', 'admin.maleIndex')->middleware('auth:admin')->name('male-index');

// ウェア一覧取得
Route::get('/admin/index/{gender}', [App\Http\Controllers\Admin\IndexController::class, 'index'])->name('itemIndex');

// ウェア追加
Route::get('/admin/add/{gender}', [App\Http\Controllers\Admin\ItemController::class, 'index'])->name('itemAdd');
