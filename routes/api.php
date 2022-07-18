<?php

use App\Http\Controllers\ManageSkuListController;
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

Route::get('/getcartitem', [App\Http\Controllers\UserController::class, "getCartItem"]);

Route::get('/getusercoord', [App\Http\Controllers\MainHomeController::class, "getUserCoord"]);

Route::get('/getrecocoord', [App\Http\Controllers\MainHomeController::class, "getRecoCoord"]);

Route::get('/getuserfavcoord', [App\Http\Controllers\MycoordController::class, "getUserFavCoord"]);

Route::get('/getwcfavcoord', [App\Http\Controllers\MycoordController::class, "getWcFavCoord"]);

Route::get('/getlarosso2021', [App\Http\Controllers\MycoordController::class, "getLarosso2021"]);

Route::get('/getbrandtops', [App\Http\Controllers\MycoordController::class, "getBrandTops"]);

Route::get('/getusersize', [App\Http\Controllers\UserController::class, "getUserSize"]);

Route::get('/getsizewear', [App\Http\Controllers\UserController::class, "getSizeWear"]);

Route::get('/getcalcsize', [App\Http\Controllers\UserController::class, "getCalcSize"]);

Route::get('/createAvailability', [App\Http\Controllers\MycoordController::class, "addAvailabilityDB"]);

Route::get('/getcoord', [App\Http\Controllers\ItemController::class, "getCoord"])->name('getCoord');

Route::get('/getAllRegisterItems', [App\Http\Controllers\ItemController::class, "getAllRegisterItems"])->name('getAllRegisterItems');



// ベストドレッサー

Route::get('/bestdresser/tourinfo', [App\Http\Controllers\BestDresserController::class, "getTourInfo"]);

Route::get('/bestdresser/bdCoordList', [App\Http\Controllers\BestDresserController::class, "bdCoordList"]);

Route::get('/bestdresser/getuserBDcoord', [App\Http\Controllers\BestDresserController::class, "getUserBDCoord"]);

Route::get('/bestdresser/bdMyPostCoord', [App\Http\Controllers\BestDresserController::class, "bdMyPostCoord"]);

Route::get('/bestdresser/getBDTourInfo', [App\Http\Controllers\BestDresserController::class, "getBDTourInfo"]);

Route::get('/bestdresser/getOwnLike', [App\Http\Controllers\BestDresserController::class, "getOwnLike"]);

Route::get('/bestdresser/calcLikeBD', [App\Http\Controllers\BestDresserController::class, "calcLikeBD"])->name('calcLikeBD');


Route::post('/countitems', [App\Http\Controllers\Admin\CountController::class, "addItemCount"]);

// SKUデータ関係
Route::get('/sku/skuWearData', [App\Http\Controllers\ManageSkuListController::class, "getSkuWearData"]);
Route::apiResource('/sku', ManageSkuListController::class);

