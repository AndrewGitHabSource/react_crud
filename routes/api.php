<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers as Controllers;

Route::get('/', [Controllers\UserController::class, 'index'])->name('index');
Route::post('/save', [Controllers\UserController::class, 'save'])->name('save');
Route::post('/edit', [Controllers\UserController::class, 'edit'])->name('edit');
Route::post('/delete', [Controllers\UserController::class, 'delete'])->name('delete');
