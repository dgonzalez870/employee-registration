<?php

use App\Http\Controllers\CountriesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('countries')->group(function () {
    Route::get('/', [CountriesController::class, 'exec']);
});
