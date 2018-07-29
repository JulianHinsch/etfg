
<?php

use Illuminate\Http\Request;

Route::group(['middleware' => 'addAuthResponseHeader'], function () {
    // firms
    Route::get('/firms', array('uses' => 'FirmsController@getAll')); //broken
    Route::get('/firms/{id}', array('uses' => 'FirmsController@getInfoById'));
    Route::get('/firms/views/{id}', array('uses' => 'FirmsController@getViewsById'));
    Route::get('/firms/actions/{id}', array('uses' => 'FirmsController@getActionsById'));
    // products
    Route::get('/products', array('uses' => 'ProductsController@getAll')); //broken
    Route::get('/products/{ticker}', array('uses' => 'ProductsController@getInfoByTicker'));
    Route::get('/products/actions/{ticker}', array('uses' => 'ProductsController@getActionsByTicker'));
    Route::get('/products/firms/{ticker}', array('uses' => 'ProductsController@getFirmsByTicker'));
    Route::get('/products/{ticker}/firms/{id}', array('uses' => 'ProductsController@getViewsByFirm'));
    // search
    Route::get('/search/{term}', array('uses' => 'SearchController@getSearchResults')); //works
    // charts
    Route::get('/viewsbycountry', array('uses' => 'ChartsController@getViewsByCountry')); //works
    Route::get('/viewsbytype', array('uses' => 'ChartsController@getViewsByType')); //works
    Route::get('/viewsbytype/{ticker}', array('uses' => 'ChartsController@getProductViewsByType'));
    Route::get('/viewsbyfirm/{ticker}', array('uses' => 'ChartsController@getProductViewsByFirm'));
});
