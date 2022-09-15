<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;



Route::middleware('guest')->group(function () {
    // Route::get('/register', [RegisterController::class, 'index'])->name('register');
    Route::post('/register', [RegisterController::class, 'create']);

    // Route::get('/login', [LoginController::class, 'index'])->name('login');
    Route::post('/login', [LoginController::class, 'login']);

    Route::get('/forgot-password', [ResetPasswordController::class, 'index']);
    Route::post('/forgot-password', [ResetPasswordController::class, 'forgot']);

//     Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
//                 ->name('password.email');

    Route::get('reset-password/{token}', [ResetPasswordController::class, 'resetPassword'])->name('password.reset');

//     Route::post('reset-password', [NewPasswordController::class, 'store'])
//                 ->name('password.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/logout', [LoginController::class, 'logout']);

//     Route::get('verify-email', [EmailVerificationPromptController::class, '__invoke'])
//                 ->name('verification.notice');

//     Route::get('verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
//                 ->middleware(['signed', 'throttle:6,1'])
//                 ->name('verification.verify');

//     Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
//                 ->middleware('throttle:6,1')
//                 ->name('verification.send');

//     Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
//                 ->name('password.confirm');

//     Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

//     Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
//                 ->name('logout');
});
