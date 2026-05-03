import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart }) {
    const [count, setCount] = useState(0);

    if (!product) return null;

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div className="product-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px', textAlign: 'left', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <div style={{ height: '150px', backgroundColor: '#e9ecef', marginBottom: '15px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6c757d', textAlign: 'center', padding: '10px' }}>
                Фото: {product?.name}
            </div>
            
            <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', height: '44px', overflow: 'hidden' }}>{product?.name}</h3>
            <p style={{ color: '#198754', fontWeight: 'bold', fontSize: '20px', margin: '0 0 15px 0' }}>
                {product?.current_price || product?.price || 0} грн
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', padding: '5px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                <button onClick={handleDecrement} style={{ width: '30px', height: '30px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white' }}>-</button>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{count} шт.</span>
                <button onClick={handleIncrement} style={{ width: '30px', height: '30px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white' }}>+</button>
            </div>

            <button 
                style={{ 
                    width: '100%', padding: '10px', borderRadius: '4px', border: 'none', fontWeight: 'bold',
                    backgroundColor: count > 0 ? '#0d6efd' : '#6c757d', 
                    color: 'white', cursor: count > 0 ? 'pointer' : 'not-allowed' 
                }}
                disabled={count === 0}
                onClick={() => onAddToCart(product, count)}
            >
                Купити
            </button>
            
            <Link 
                to={`/product/${product?.product_id || product?.id}`} 
                style={{ display: 'block', textAlign: 'center', marginTop: '10px', textDecoration: 'none', color: '#0d6efd' }}
            >
                Детальніше
            </Link>
        </div>
    );
}