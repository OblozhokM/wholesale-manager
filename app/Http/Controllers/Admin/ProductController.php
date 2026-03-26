<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('admin.products.index', compact('products'));
    }

    public function show(Product $product)
    {
        return view('admin.products.show', compact('product'));
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('admin.products.index')->with('success', 'Товар успішно видалено!');
    }
    
    public function create() {
        return view('admin.products.create');
    }
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'current_price' => 'required|numeric|min:0.01',
            'delivery_available' => 'nullable'
        ], [
            'name.required' => 'Поле "Назва товару" є обов\'язковим.',
            'name.max' => 'Назва не може бути довшою за 150 символів.',
            'current_price.required' => 'Вкажіть ціну товару.',
            'current_price.numeric' => 'Ціна має бути числовим значенням.',
            'current_price.min' => 'Ціна повинна бути більшою за нуль.'
        ]);

        $validated['delivery_available'] = $request->has('delivery_available') ? 1 : 0;

        Product::create($validated);


        return redirect()->route('admin.products.index')->with('success', 'Новий товар успішно додано до каталогу!');
    }
    public function edit(string $id) {}
    public function update(Request $request, string $id) {}
}