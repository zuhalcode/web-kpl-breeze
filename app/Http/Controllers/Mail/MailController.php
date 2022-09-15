<?php

namespace App\Http\Controllers\Mail;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\MailNotify;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function index(Request $request)
    {
        $email = 'zuhalcode@gmail.com';

        try {   
            Mail::to($email)->send(new MailNotify($email));
            return response()->json(['Great check your inbox']);
        } catch(Exception $th) {
            return response()->json(['Something went wrong']);
        }
    }
}
