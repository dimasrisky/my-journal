<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Models\Article;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/userArticles', function (Request $request){
    $id = $request->user()->id;
    $articles = Article::with('category')->where('user_id', $id)->get();
    return $articles;
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request){
    return $request->user();
});


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::get('/newest-articles', [ ArticleController::class, 'newestArticle' ]);

Route::group(["middleware" => "auth:sanctum"], function(){
    Route::get('/popular-articles', [ ArticleController::class, 'popularArticle' ]);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/articles', ArticleController::class)->parameter('articles', 'id');
    Route::get('/categories', [ ArticleController::class, 'category' ]);
});
