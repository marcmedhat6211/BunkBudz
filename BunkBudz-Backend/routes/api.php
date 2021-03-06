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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => 'api',], function($router){
    Route::post('ads/create', 'API\AdController@create');
    Route::get('ads/{ad}', 'API\AdController@show');
    Route::post('images/create', 'API\ImagesController@create');
    Route::get('images/{image}', 'API\ImagesController@show');
});


