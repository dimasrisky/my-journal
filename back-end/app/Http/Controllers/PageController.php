<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index(){
        return view('main');
    }

    public function article(){
        return view('article');
    }
}
