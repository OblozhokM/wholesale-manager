@props(['product'])

<div class="card h-100 shadow-sm">
    <div class="card-body">
        <h5 class="card-title">{{ $product['name'] }}</h5>
        <h6 class="card-subtitle mb-2 text-primary">{{ $product['price'] }} грн</h6>
        
        @if($product['delivery_available'])
            <span class="badge bg-success">Доставка доступна</span>
        @else
            <span class="badge bg-secondary">Тільки самовивіз</span>
        @endif
    </div>
    <div class="card-footer bg-transparent border-top-0">
        <a href="/products/{{ $product['id'] }}" class="btn btn-outline-dark w-100">Детальніше</a>
    </div>
</div>