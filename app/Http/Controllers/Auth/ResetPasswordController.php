<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Mail\MailNotify;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/ForgotPassword');
    }

    public function forgot(Request $request)
    {
        $status = Password::sendResetLink(
            $request->only('email')
        );

        Mail::to('zuhalcode@gmail.com')->send(new MailNotify());

        
        return $status === Password::RESET_LINK_SENT
                    ? back()->with(['success' => __($status)])
                    : back()->withErrors(['error' => __($status)]);
    }

    public function resetPassword(Request $request)
    {
        dd('ui reset');
    }
}
