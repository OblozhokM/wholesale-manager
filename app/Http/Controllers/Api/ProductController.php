<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products, 200);
    }

    public function show($id)
    {
        $product = Product::find($id);
        
        if (!$product) {
            return response()->json(['message' => 'Товар не знайдено'], 404);
        }
        
        return response()->json($product, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'current_price' => 'required|numeric|min:0.01',
            'delivery_available' => 'nullable|boolean'
        ]);

        $product = Product::create($validated);

        return response()->json([
            'message' => 'Товар успішно додано!',
            'product' => $product
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Товар не знайдено'], 404);
        }

        $product->update($request->all());

        return response()->json([
            'message' => 'Товар успішно оновлено!',
            'product' => $product
        ], 200);
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Товар не знайдено'], 404);
        }

        $product->delete();

        return response()->json(['message' => 'Товар успішно видалено!'], 200);
    }
}