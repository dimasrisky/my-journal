<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [ PageController::class, 'index' ]);
Route::get('/login', [ AuthController::class, 'login' ])->name('login-form');
Route::post('/login', [ AuthController::class, 'loginHandle' ])->name('login-handle');
Route::get('/register', [ AuthController::class, 'register' ])->name('register-form');
Route::post('/register', [ AuthController::class, 'registerHandle' ])->name('register-handle');
