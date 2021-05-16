<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get( '/caps', function ( Request $request ) {

    $caps = collect([
        [
            'id'  => 1,
            'url' => '/img/rakutenlist/adidas/male/506269/black/aozoraya-sp_10136470.png',
        ],
        [
            'id'  => 2,
            'url' => '/img/rakutenlist/adidas/male/506269/blue/la-foresta_10075792.png',
        ],
        [
            'id'  => 3,
            'url' => '/img/rakutenlist/adidas/male/506269/black/aozoraya-sp_10136470.png',
        ],
        [
            'id'  => 4,
            'url' => '/img/rakutenlist/adidas/male/506269/blue/la-foresta_10075792.png',
        ],
    ]);

    return response()->json( $caps );
} );

Route::get( '/tops', function ( Request $request ) {

    $tops = collect([
        [
            'id'  => 1,
            'url' => '/img/rakutenlist/asics/male/508759/black/chitosesports_10038396.png',
        ],
        [
            'id'  => 2,
            'url' => '/img/rakutenlist/asics/male/508759/blue/2041a102_11blue.png',
        ],
        [
            'id'  => 3,
            'url' => '/img/rakutenlist/asics/male/508759/green/chitosesports-b_10013876.png',
        ],
        [
            'id'  => 4,
            'url' => '/img/rakutenlist/fila/male/508759/red/la-foresta_10076503.png',
        ],
    ]);
    return response()->json( $tops );
} );

Route::get( '/pants', function ( Request $request ) {

    $pants = collect([
        [
            'id'  => 1,
            'url' => '/img/rakutenlist/asics/male/508772/black/chitosesports_10030744.png',
        ],
        [
            'id'  => 2,
            'url' => '/img/rakutenlist/fila/male/508772/red/amuse37_10002360.png',
        ],
        [
            'id'  => 3,
            'url' => '/img/rakutenlist/asics/male/508772/white/aozoraya-sp_10142640.png',
        ],
        [
            'id'  => 4,
            'url' => '/img/rakutenlist/asics/male/508772/black/chitosesports-b_10016753.png',
        ],
    ]);

    return response()->json( $pants );
} );

Route::get( '/shoes', function ( Request $request ) {

    $shoes = collect([
        [
            'id'  => 1,
            'url' => '/img/rakutenlist/fila/male/208025/white/esports_11472884.png',
        ],
        [
            'id'  => 2,
            'url' => '/img/rakutenlist/asics/male/208025/black/chitosesports_10047743.png',
        ],
        [
            'id'  => 3,
            'url' => '/img/rakutenlist/adidas/male/208025/red/everracket_10038980.png',
        ],
        [
            'id'  => 4,
            'url' => '/img/rakutenlist/adidas/male/208025/red/sportsauthority_10328602.png',
        ],
    ]);

    return response()->json( $shoes );
} );