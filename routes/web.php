<?php

use App\Http\Controllers\Mail\MailController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function() {
    return Inertia::render('Home');
})->middleware('guest');

Route::get('/home', function() {
    return Inertia::render('Homepage');
})->middleware('auth')->name('home');

Route::get('/send', [MailController::class, 'index']);


require __DIR__.'/auth.php';
