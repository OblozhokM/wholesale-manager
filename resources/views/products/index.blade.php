@extends('layouts.app')

@section('title', 'Асортимент товарів')

@section('content')
    <h2 class="mb-4">Каталог продукції</h2>
    
    <div class="row row-cols-1 row-cols-md-3 g-4">
        @foreach($products as $product)
            <div class="col">
                <x-card :product="$product" />
            </div>
        @endforeach
    </div>
@endsection