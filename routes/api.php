<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/products/store', [ProductController::class, 'store']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

Route::get('/categories', function () {
    return response()->json([
        ['id' => 1, 'name' => 'Ноутбуки'],
        ['id' => 2, 'name' => 'Мережеве обладнання'],
        ['id' => 3, 'name' => 'Периферія']
    ]);
});