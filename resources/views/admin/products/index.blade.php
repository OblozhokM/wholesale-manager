@extends('layouts.app')

@section('title', 'Адмін-панель: Товари')

@section('content')
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2>Управління товарами</h2>
    </div>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <table class="table table-bordered table-striped">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Назва</th>
                <th>Ціна</th>
                <th>Доставка</th>
                <th>Дії</th>
            </tr>
        </thead>
        <tbody>
            @foreach($products as $product)
                <tr>
                    <td>{{ $product->product_id }}</td>
                    <td>{{ $product->name }}</td>
                    <td>{{ $product->current_price }} грн</td>
                    <td>{{ $product->delivery_available ? 'Так' : 'Ні' }}</td>
                    <td>
                        <a href="{{ route('admin.products.show', $product->product_id) }}" class="btn btn-sm btn-info">Деталі</a>
                        
                        <form action="{{ route('admin.products.destroy', $product->product_id) }}" method="POST" class="d-inline">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Точно видалити цей товар?')">Видалити</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection