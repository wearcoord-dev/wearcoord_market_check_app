<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/caps', [App\Http\Controllers\MycoordController::class, "getCapsDBData"])->name('getCapsDBData');

Route::get('/tops', [App\Http\Controllers\MycoordController::class, "getCapsDBData"])->name('getCapsDBData');

Route::get('/pants', [App\Http\Controllers\MycoordController::class, "getCapsDBData"])->name('getCapsDBData');

Route::get('/shoes', [App\Http\Controllers\MycoordController::class, "getCapsDBData"])->name('getCapsDBData');

Route::get('/registerwear', [App\Http\Controllers\MycoordController::class, "registerWear"])->name('registerWear');

Route::get('/getwear', [App\Http\Controllers\MycoordController::class, "getRegisterWear"])->name('getRegisterWear');

Route::get('/registerinner', [App\Http\Controllers\MycoordController::class, "registerInner"])->name('registerInner');

Route::get('/removeinner', [App\Http\Controllers\MycoordController::class, "removeInner"])->name('removeInner');

Route::get('/removecaps', [App\Http\Controllers\MycoordController::class, "removeCaps"])->name('removeCaps');

Route::get('/getitem', [App\Http\Controllers\MycoordController::class, "getItem"])->name('getItem');


// Route::get('/caps', [App\Http\Controllers\MycoordController::class, "addBrandDB"])->name('addBrandDB');

// Route::get('/caps', [App\Http\Controllers\MycoordController::class, "addColorImgDB"])->name('addColorImgDB');

// Route::get('/user', function (Request $request) {

//     $user = Auth::user();
//     ddd($user);

//     return response()->json($user);
// });

Route::get('/registercoord', function (Request $request) {
});

Route::post('/registercoord', [App\Http\Controllers\MycoordController::class, "registerCoord"]);

Route::get('/registerface', function (Request $request) {
});

Route::post('/registerface', [App\Http\Controllers\UserController::class, "registerFace"]);

Route::get('/addcart', function (Request $request) {
});

Route::post('/addcart', [App\Http\Controllers\UserController::class, "addCart"]);

Route::get('/getcartitem', [App\Http\Controllers\UserController::class, "getCartItem"]);

Route::get('/getusercoord', [App\Http\Controllers\MainHomeController::class, "getUserCoord"]);

Route::get('/getrecocoord', [App\Http\Controllers\MainHomeController::class, "getRecoCoord"]);

Route::get('/getuserfavcoord', [App\Http\Controllers\MycoordController::class, "getUserFavCoord"]);

Route::get('/getwcfavcoord', [App\Http\Controllers\MycoordController::class, "getWcFavCoord"]);

// Route::post('/registercoord', function (Request $request) {

//     // ddd($request);

//     return response()->json($request['imgUrl']);
// });

// Route::get( '/pants', function ( Request $request ) {

//     $pants = collect([
//         [
//             'id'  => 1,
//             'url' => '/img/rakutenlist/asics/male/508772/black/chitosesports_10030744.png',
//         ],
//         [
//             'id'  => 2,
//             'url' => '/img/rakutenlist/fila/male/508772/red/amuse37_10002360.png',
//         ],
//         [
//             'id'  => 3,
//             'url' => '/img/rakutenlist/asics/male/508772/white/aozoraya-sp_10142640.png',
//         ],
//         [
//             'id'  => 4,
//             'url' => '/img/rakutenlist/asics/male/508772/black/chitosesports-b_10016753.png',
//         ],
//     ]);

//     return response()->json( $pants );
// } );

// Route::get( '/shoes', function ( Request $request ) {

//     $shoes = collect([
//         [
//             'id'  => 1,
//             'url' => '/img/rakutenlist/fila/male/208025/white/esports_11472884.png',
//         ],
//         [
//             'id'  => 2,
//             'url' => '/img/rakutenlist/asics/male/208025/black/chitosesports_10047743.png',
//         ],
//         [
//             'id'  => 3,
//             'url' => '/img/rakutenlist/adidas/male/208025/red/everracket_10038980.png',
//         ],
//         [
//             'id'  => 4,
//             'url' => '/img/rakutenlist/adidas/male/208025/red/sportsauthority_10328602.png',
//         ],
//     ]);

//     return response()->json( $shoes );
// } );