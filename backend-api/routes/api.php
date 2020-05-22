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

Route::post('/pins', 'PinsController@create');

//Todas

Route::get('/pins', 'PinsController@findAll');

//una
Route::get('/pins/{id}', 'PinsController@findById');

//update pin by ID
Route::put('/pins/{id}', 'PinsController@update');

// delete pin by ID
Route::delete('/pins/{id}', 'PinsController@delete');


//BOARDS

//una

Route::post('/boards', 'BoardsController@create');

// todas

Route::get('/boards', 'BoardsController@findAll');

// una
Route::put('/boards/{id}', 'BoardsController@findById');

// update by ID
Route::put('/boards/{id}', 'BoardsController@update');

//update  pin by id
Route::get('/boards/{id}/board', 'BoardsController@findBoard');

//delete a pin by id
Route::delete('/boards/{id}', 'BoardsController@delete');

//get all the pins of the board
Route::get('/boards/{id}/pins', 'BoardsController@findBoards');

//get all the pints of the board
Route::get('/boards/{id}/pins/{pin_id}', 'BoardsController@findPinOfBoard');
