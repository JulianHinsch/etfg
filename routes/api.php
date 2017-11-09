
<?php

use Illuminate\Http\Request;

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

Route::get('/posts', array('uses' => 'PostsController@index'));
Route::get('/views', array('uses' => 'ViewsController@index'));
Route::get('/action-types', array('uses' => 'ActionTypesController@index'));
Route::get('/actions', array('uses' => 'ActionsController@index'));
Route::get('/firms', array('uses' => 'FirmsController@index'));
Route::get('/ip-cities', array('uses' => 'IpCitiesController@index'));
Route::get('/products', array('uses' => 'ProductsController@index'));
Route::get('/ip-countries', array('uses' => 'IpCountriesController@index'));
Route::get('/ip-states', array('uses' => 'IpStatesController@index'));
Route::get('/ip-addresses', array('uses' => 'IpAddressesController@index'));
Route::get('/migrations', array('uses' => 'MigrationsController@index'));
Route::get('/user-actions', array('uses' => 'UserActionsController@index'));
Route::get('/users', array('uses' => 'UsersController@index'));
Route::get('/example', array('uses' => 'ExampleController@index'));
