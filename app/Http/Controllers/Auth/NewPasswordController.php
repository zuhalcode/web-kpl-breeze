<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;


class NewPasswordController extends Controller
{
    public function store(Request $request)
    {
        $status = Password::reset(
            $request->only('email', 'password', 'new_password', 'token'),
            function ($user) use ($request) {
                if(Hash::make($request->password) === $user->password) {
                    $user->forceFill([
                        'password' => Hash::make($request->new_password),
                        'remember_token' => Str::random(60),
                        ])->save();
                    event(new PasswordReset($user));
                    return redirect('/')->with('status', 'Reset password successfull, please login');
                }
            }
        );

        // if ($status == Password::PASSWORD_RESET) {
        // }

        return redirect('/')->with('status', trans($status));
    }
}
