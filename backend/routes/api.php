<?php

use App\Http\Controllers\Countries\FindAllCountriesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('countries')->group(function () {
    Route::get('/', [FindAllCountriesController::class, 'exec']);
});
