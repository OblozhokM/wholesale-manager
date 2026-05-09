import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/products');
                const allProducts = res.data.data ? res.data.data : res.data;

                const foundProduct = allProducts.find(
                    p => p.product_id === parseInt(id) || p.id === parseInt(id)
                );
                
                setProduct(foundProduct);
            } catch (error) {
                console.error("Помилка завантаження товару:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (isLoading) {
        return (
            <main style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
                <h2>⏳ Завантаження деталей...</h2>
            </main>
        );
    }

    return (
        <main style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
            {product ? (
                <div style={{ border: '1px solid #ddd', padding: '30px', display: 'inline-block', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <h1 style={{ color: '#333' }}>Деталі товару</h1>
                    <div style={{ width: '100%', height: '200px', backgroundColor: '#e9ecef', borderRadius: '4px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6c757d' }}>
                        Фото: {product.name}
                    </div>
                    <h2>{product.name}</h2>
                    <p style={{ fontSize: '28px', color: '#198754', fontWeight: 'bold', margin: '10px 0' }}>
                        {product.current_price || product.price || 0} грн
                    </p>
                    <p style={{ color: '#666' }}>Артикул (ID) з бази: {product.product_id || product.id}</p>
                    
                    {product.delivery_available !== undefined && (
                        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
                            Доставка: {product.delivery_available ? '✅ Доступна' : '❌ Немає'}
                        </p>
                    )}
                </div>
            ) : (
                <h2>Товар не знайдено у базі даних</h2>
            )}
            <br /><br />
            <Link to="/catalog" style={{ display: 'inline-block', marginTop: '20px', color: '#0d6efd', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
                &larr; Повернутися до каталогу
            </Link>
        </main>
    );
}