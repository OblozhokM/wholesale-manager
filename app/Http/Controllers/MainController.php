<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function about()
    {
        return "Про проєкт: Ця автоматизована інформаційна система призначена для управління замовленнями, клієнтами та логістикою гуртової компанії.";
    }
}