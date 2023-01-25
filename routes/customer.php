<?php

use App\Http\Controllers\Customer\CustomerController;
use Illuminate\Support\Facades\Route;


Route::prefix('customers')->name('customers.')->group(function () {
    Route::get('/', [CustomerController::class, 'index'])->name('index');
    Route::post('/store', [CustomerController::class, 'store'])->name('store');
    Route::delete('/{id}', [CustomerController::class, 'destroy'])->name('delete');
});
