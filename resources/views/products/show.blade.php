@extends('layouts.app')

@section('title', $product->name)

@section('content')
    <div class="mb-4">
        <a href="{{ route('products.index') }}" class="btn btn-secondary">&larr; Назад до каталогу</a>
    </div>

    <div class="card shadow-sm border-0 bg-light" style="max-width: 600px;">
        <div class="card-body p-5">
            <h1 class="display-6 fw-bold mb-3">{{ $product->name }}</h1>
            <h2 class="text-success mb-4">{{ $product->current_price }} грн</h2>
            
            <div class="mb-4">
                <h5>Інформація:</h5>
                <ul class="list-unstyled">
                    <li><strong>Артикул (ID):</strong> {{ $product->product_id }}</li>
                    <li>
                        <strong>Статус доставки:</strong> 
                        @if($product->delivery_available)
                            <span class="badge bg-info text-dark">Доступна перевізниками</span>
                        @else
                            <span class="badge bg-secondary">Самовивіз зі складу</span>
                        @endif
                    </li>
                </ul>
            </div>

            <button class="btn btn-success btn-lg px-5">Купити</button>
        </div>
    </div>
@endsection