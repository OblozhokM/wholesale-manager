@extends('layouts.app')

@section('title', 'Додати новий товар')

@section('content')
    <div class="mb-4">
        <a href="{{ route('admin.products.index') }}" class="btn btn-secondary">&larr; Назад до списку</a>
    </div>

    <div class="card shadow-sm" style="max-width: 600px;">
        <div class="card-header bg-dark text-white">
            <h4 class="mb-0">Створення нового товару</h4>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.products.store') }}" method="POST">
                @csrf <div class="mb-3">
                    <label for="name" class="form-label">Назва товару <span class="text-danger">*</span></label>
                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ old('name') }}">
                    @error('name')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="current_price" class="form-label">Поточна ціна (грн) <span class="text-danger">*</span></label>
                    <input type="number" step="0.01" class="form-control @error('current_price') is-invalid @enderror" id="current_price" name="current_price" value="{{ old('current_price') }}">
                    @error('current_price')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-4 form-check">
                    <input type="checkbox" class="form-check-input" id="delivery_available" name="delivery_available" value="1" {{ old('delivery_available') ? 'checked' : '' }}>
                    <label class="form-check-label" for="delivery_available">Доступна доставка перевізниками</label>
                </div>

                <button type="submit" class="btn btn-success w-100">Зберегти товар</button>
            </form>
        </div>
    </div>
@endsection