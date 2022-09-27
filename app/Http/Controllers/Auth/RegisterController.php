<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Register');
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required',
            'phone' => 'required',
            'password' => 'required|min:6'
        ]);

        
        $validatedData['password'] = Hash::make($validatedData['password']);
        $validatedData['phone'] = $request->country_code.$validatedData['phone'];
        
        User::create($validatedData);

        return redirect('/')->with('success', 'Registration Successful! Please login');
    }
}
