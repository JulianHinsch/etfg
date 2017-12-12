
<?php

use Illuminate\Http\Request;

//API Routes

// firms

Route::get('/firms', array('uses' => 'FirmsController@getAll'));

//these don't need a datafilter param because the firm is already specified
Route::get('/firms/{id}', array('uses' => 'FirmsController@getInfoById'));
Route::get('/firms/views/{id}', array('uses' => 'FirmsController@getViewsById'));
Route::get('/firms/actions/{id}', array('uses' => 'FirmsController@getActionsById'));

// products

Route::get('/products', array('uses' => 'ProductsController@getAll'));
Route::get('/products/{ticker}', array('uses' => 'ProductsController@getInfoByTicker'));
Route::get('/products/actions/{ticker}', array('uses' => 'ProductsController@getActionsByTicker'));
Route::get('/products/firms/{ticker}', array('uses' => 'ProductsController@getFirmsByTicker'));
Route::get('/products/{ticker}/firms/{id}', array('uses' => 'ProductsController@getViewsByFirm'));

// search

Route::get('/search/{term}', array('uses' => 'SearchProductsFirmsController@getProductsFirmsSearchResults'));

// charts

Route::get('/viewsbytype', array('uses' => 'ChartsController@getViewsByType'));
Route::get('/viewsbytype/{ticker}', array('uses' => 'ChartsController@getProductViewsByType'));
Route::get('/viewsbycountry', array('uses' => 'ChartsController@getViewsByCountry'));
Route::get('/viewsbyfirm/{ticker}', array('uses' => 'ChartsController@getProductViewsByFirm'));