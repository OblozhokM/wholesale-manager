@props(['product'])

<div class="card h-100 shadow-sm">
    <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ $product->name }}</h5>
        <p class="card-text text-primary fs-4 fw-bold">{{ $product->current_price }} грн</p>
        <p class="card-text mb-4">
            <small class="text-muted">
                Доставка: {{ $product->delivery_available ? 'Доступна' : 'Тільки самовивіз' }}
            </small>
        </p>
        <a href="{{ route('products.show', $product->product_id) }}" class="btn btn-outline-primary mt-auto">Детальніше</a>
    </div>
</div>