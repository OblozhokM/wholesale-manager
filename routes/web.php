<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;

Route::get('/', [MainController::class, 'index']);
Route::get('/about', [MainController::class, 'about']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);

Route::prefix('admin')->name('admin.')->group(function () {
    Route::resource('products', AdminProductController::class);
});