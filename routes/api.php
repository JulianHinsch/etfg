
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

//firms
Route::get('/firms', array('uses' => 'FirmsController@getAll'));
Route::get('/firms/{id}', array('uses' => 'FirmsController@getInfoById'));
Route::get('/firms/views/{id}', array('uses' => 'FirmsController@getViewsById'));
Route::get('/firms/actions/{id}', array('uses' => 'FirmsController@getActionsById'));

//products
Route::get('/products', array('uses' => 'ProductsController@getAll'));
Route::get('/products/{ticker}', array('uses' => 'ProductsController@getInfoByTicker'));
Route::get('/products/actions/{ticker}', array('uses' => 'ProductsController@getActionsByTicker'));
Route::get('/products/firms/{ticker}', array('uses' => 'ProductsController@getFirmsByTicker'));
Route::get('/products/{ticker}/firms/{id}', array('uses' => 'ProductsController@getViewsByFirm'));

//countries
//Route::get('/ip-countries', array('uses' => 'IpCountriesController@getAll'));
//Route::get('/ip-countries/{countryCode}', array('uses' => 'IpCountriesController@getInfoByCode'));

//Route::get('/ip-states', array('uses' => 'IpStatesController@index'));
//Route::get('/ip-addresses', array('uses' => 'IpAddressesController@index'));
//Route::get('/migrations', array('uses' => 'MigrationsController@index'));
//Route::get('/ip-cities', array('uses' => 'IpCitiesController@index'));
//Route::get('/user-actions', array('uses' => 'UserActionsController@index'));
//Route::get('/users', array('uses' => 'UsersController@index'));
//Route::get('/action-types', array('uses' => 'ActionTypesController@index'));
//Route::get('/posts', array('uses' => 'PostsController@index'));

//search
Route::get('/search/{term}', array('uses' => 'SearchProductsFirmsController@getProductsFirmsSearchResults'));