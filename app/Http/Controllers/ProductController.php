<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = [
            ['id' => 1, 'name' => 'Ноутбук Lenovo', 'price' => 24000.00, 'delivery_available' => true],
            ['id' => 2, 'name' => 'Мишка бездротова', 'price' => 900.00, 'delivery_available' => true],
            ['id' => 3, 'name' => 'Монітор Dell 24"', 'price' => 7200.00, 'delivery_available' => false],
            ['id' => 4, 'name' => 'Серверна шафа', 'price' => 15000.00, 'delivery_available' => false],
        ];

        return view('products.index', compact('products')); 
    }

    public function show($id)
    {
        return "Тут буде відображатися детальна інформація про товар з ідентифікатором: " . $id . ". Наприклад, його опис та опції доставки.";
    }
}