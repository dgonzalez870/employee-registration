<?php

use App\Http\Controllers\Countries\FindAllCountriesController;
use App\Http\Controllers\Employees\DeleteEmployeeController;
use App\Http\Controllers\Employees\RegisterEmployeeController;
use App\Http\Controllers\Employees\SearchController;
use App\Http\Controllers\Employees\UpdateEmployeeController;
use App\Http\Controllers\IdDocuments\FindAllIdDocumentsController;
use App\Http\Controllers\JobAreas\FindAllJobAreasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('countries')->group(function () {
    Route::get('/', [FindAllCountriesController::class, 'exec']);
});

Route::prefix('documents')->group(function () {
    Route::get('/', [FindAllIdDocumentsController::class, 'exec']);
});

Route::prefix('jobareas')->group(function () {
    Route::get('/', [FindAllJobAreasController::class, 'exec']);
});

Route::prefix('employees')->group(function () {
    Route::get('/', [SearchController::class, 'exec']);
    Route::post('/', [RegisterEmployeeController::class, 'exec']);
    Route::delete('/{id}', [DeleteEmployeeController::class, 'exec']);
    Route::patch('/{id}', [UpdateEmployeeController::class, 'exec']);
});
