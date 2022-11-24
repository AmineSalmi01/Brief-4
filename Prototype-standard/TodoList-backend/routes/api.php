<?php
use App\Http\Controllers\Todos_controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
// */
Route::get('/home', [Todos_controller::class, 'index']);

Route::get('/home/{id}', [Todos_controller::class, 'show']);

Route::post("/home", [Todos_controller::class, 'add']);

Route::put("/home/{id}", [Todos_controller::class, 'update']);

Route::delete("/home/{id}", [Todos_controller::class, 'destroy']);





Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


