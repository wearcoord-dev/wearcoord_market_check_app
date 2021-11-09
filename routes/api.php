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

Route::get('/getitemdetail', [App\Http\Controllers\ItemController::class, "getItemDetail"])->name('getItemDetail');

Route::get('/getrecommenditem', [App\Http\Controllers\MainHomeController::class, "getRecommendItem"])->name('getRecommendItem');


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

Route::get('/getlarosso2021', [App\Http\Controllers\MycoordController::class, "getLarosso2021"]);

Route::get('/getusersize', [App\Http\Controllers\UserController::class, "getUserSize"]);

Route::get('/getsizewear', [App\Http\Controllers\UserController::class, "getSizeWear"]);

Route::get('/getcalcsize', [App\Http\Controllers\UserController::class, "getCalcSize"]);

Route::get('/createAvailability', [App\Http\Controllers\MycoordController::class, "addAvailabilityDB"]);

Route::get('/registerwearitem', function (Request $request) {
});

Route::post('/registerwearitem', [App\Http\Controllers\ItemController::class, "registerWearItem"]);

Route::get('/deletecartitem', function (Request $request) {
});

Route::post('/deletecartitem', [App\Http\Controllers\ItemController::class, "deleteCartItem"]);

Route::get('/deletecoord', function (Request $request) {
});

Route::post('/deletecoord', [App\Http\Controllers\MycoordController::class, "deleteCoord"]);

Route::get('/copycoord', function (Request $request) {
});

Route::post('/copycoord', [App\Http\Controllers\MycoordController::class, "copyCoord"]);

Route::get('/registerfirstcheck', function (Request $request) {
});

Route::post('/registerfirstcheck', [App\Http\Controllers\UserController::class, "registerFirstCheck"]);

Route::get('/registersize/tops', function (Request $request) {
});

Route::post('/registersize/tops', [App\Http\Controllers\UserController::class, "registerSizeTops"]);

Route::get('/registersize/pants', function (Request $request) {
});

Route::post('/registersize/pants', [App\Http\Controllers\UserController::class, "registerSizePants"]);

Route::get('/registersize/wear', function (Request $request) {
});

Route::post('/registersize/wear', [App\Http\Controllers\UserController::class, "registerSizeWear"]);

Route::get('/deleteaccount', function (Request $request) {
});

Route::post('/deleteaccount', [App\Http\Controllers\UserController::class, "deleteAccount"]);

Route::get('/setting/deleteimg', function (Request $request) {
});

Route::post('/setting/deleteimg', [App\Http\Controllers\UserController::class, "deleteFaceImg"]);

// ベストドレッサー

Route::get('/bestdresser/tourinfo', [App\Http\Controllers\BestDresserController::class, "getTourInfo"]);

Route::get('/bestdresser/passcode', function (Request $request) {
});

Route::post('/bestdresser/passcode', [App\Http\Controllers\BestDresserController::class, "checkPassCode"]);

Route::get('/bestdresser/bdUserInfo', function (Request $request) {
});

Route::post('/bestdresser/bdUserInfo', [App\Http\Controllers\BestDresserController::class, "getBDUserInfo"]);

Route::get('/bestdresser/bdUserWear', function (Request $request) {
});

Route::post('/bestdresser/bdUserWear', [App\Http\Controllers\BestDresserController::class, "getBDUserWear"]);

Route::get('/bestdresser/registerBDWear', function (Request $request) {
});

Route::post('/bestdresser/registerBDWear', [App\Http\Controllers\BestDresserController::class, "registerBDWear"]);

Route::get('/bestdresser/registerBDCoord', function (Request $request) {
});

Route::post('/bestdresser/registerBDCoord', [App\Http\Controllers\BestDresserController::class, "registerBDCoord"]);

Route::get('/bestdresser/registerBDInner', function (Request $request) {
});

Route::post('/bestdresser/registerBDInner', [App\Http\Controllers\BestDresserController::class, "registerBDInner"]);

Route::get('/bestdresser/bdCoordList', [App\Http\Controllers\BestDresserController::class, "bdCoordList"]);

Route::get('/bestdresser/getLikeCoord', function (Request $request) {
});

Route::post('/bestdresser/getLikeCoord', [App\Http\Controllers\BestDresserController::class, "getLikeCoord"]);

Route::get('/bestdresser/postBDCoord', function (Request $request) {
});

Route::post('/bestdresser/postBDCoord', [App\Http\Controllers\BestDresserController::class, "postBDCoord"]);

Route::get('/bestdresser/deleteBDCoord', function (Request $request) {
});

Route::post('/bestdresser/deleteBDCoord', [App\Http\Controllers\BestDresserController::class, "deleteBDCoord"]);

Route::get('/bestdresser/getuserBDcoord', [App\Http\Controllers\BestDresserController::class, "getUserBDCoord"]);


Route::get('/bestdresser/wearItemBD', function (Request $request) {
});

Route::post('/bestdresser/wearItemBD', [App\Http\Controllers\BestDresserController::class, "wearItemBD"]);

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