<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function loginPage()
    {
        return Inertia::render('Login');
    }

    public function registerPage()
    {
        return Inertia::render('Register');
    }

    
    
    
}
