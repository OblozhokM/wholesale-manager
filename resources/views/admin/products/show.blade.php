@extends('layouts.app')

@section('title', 'Деталі товару')

@section('content')
    <div class="mb-4">
        <a href="{{ route('admin.products.index') }}" class="btn btn-secondary">&larr; Назад до списку</a>
    </div>

    <div class="card shadow-sm" style="max-width: 500px;">
        <div class="card-header bg-dark text-white">
            <h4 class="mb-0">Інформація про товар #{{ $product->product_id }}</h4>
        </div>
        <div class="card-body">
            <h3 class="card-title">{{ $product->name }}</h3>
            <p class="card-text fs-4 text-primary">Ціна: {{ $product->current_price }} грн</p>
            <p class="card-text">
                <strong>Статус доставки:</strong> 
                @if($product->delivery_available)
                    <span class="badge bg-success">Доступна</span>
                @else
                    <span class="badge bg-secondary">Тільки самовивіз</span>
                @endif
            </p>
            <hr>
            <p class="text-muted small">Запис створено: {{ $product->created_at ?? 'Дані з минулої БД' }}</p>
        </div>
    </div>
@endsection