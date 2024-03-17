<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller{
    public function login(Request $request){
        if(auth()->attempt(['email' => $request->email, 'password' => $request->password])){
            $user = User::where('email', $request->email)->first();
            $token = $user->createToken('token');
            return response()->json([
                "status" => "success",
                "role" =>  $user->role,
                "token" => $token->plainTextToken
            ]);
        }
    }

    public function register(Request $request){
        $request->validate([
            'username' => ['required'],
            'email' => ['required'],
            'password' => ['required']
        ]);

        User::create([
            "username" => $request->username,
            "email" => $request->email,
            "password" => bcrypt($request->password)
        ]);

        return response()->json([
            "status" => "success",
            "message" => "anda berhasil register"
        ]);
    }

    public function logout(Request $request){
        $user = $request->user();
        $user->tokens()->delete();

        return response()->json([
            "status" => "success",
            "message" => "berhasil logout"
        ]);
    }
}
