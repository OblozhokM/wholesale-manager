import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart }) {
    const [count, setCount] = useState(0);

    if (!product) return null;

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {
        if (count > 0) setCount(count - 1);
    };

    const isPromo = product.product_id === 3 || product.id === 3;
    const basePrice = Number(product.current_price) || Number(product.price) || 0;
    const finalPrice = isPromo ? basePrice * 0.7 : basePrice;

    return (
        <div className="product-card" style={{ position: 'relative', border: isPromo ? '2px solid #dc3545' : '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px', textAlign: 'left', backgroundColor: 'white', boxShadow: isPromo ? '0 4px 12px rgba(220,53,69,0.2)' : '0 4px 6px rgba(0,0,0,0.1)' }}>
            
            {isPromo && (
                <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#dc3545', color: 'white', padding: '5px 10px', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', zIndex: 2 }}>
                    -30%
                </div>
            )}

            <div style={{ height: '150px', backgroundColor: '#e9ecef', marginBottom: '15px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6c757d', textAlign: 'center', padding: '10px' }}>
                Фото: {product?.name}
            </div>
            
            <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', height: '44px', overflow: 'hidden' }}>{product?.name}</h3>
            
            <div style={{ height: '35px', marginBottom: '10px' }}>
                {isPromo ? (
                    <>
                        <span style={{ textDecoration: 'line-through', color: '#6c757d', fontSize: '14px', marginRight: '10px' }}>{basePrice} грн</span>
                        <span style={{ color: '#dc3545', fontWeight: 'bold', fontSize: '22px' }}>{finalPrice.toFixed(0)} грн</span>
                    </>
                ) : (
                    <span style={{ color: '#198754', fontWeight: 'bold', fontSize: '20px' }}>{basePrice} грн</span>
                )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', padding: '5px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                <button onClick={handleDecrement} style={{ width: '30px', height: '30px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white' }}>-</button>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{count} шт.</span>
                <button onClick={handleIncrement} style={{ width: '30px', height: '30px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white' }}>+</button>
            </div>

            <button 
                style={{ 
                    width: '100%', padding: '10px', borderRadius: '4px', border: 'none', fontWeight: 'bold',
                    backgroundColor: count > 0 ? (isPromo ? '#dc3545' : '#0d6efd') : '#6c757d', 
                    color: 'white', cursor: count > 0 ? 'pointer' : 'not-allowed' 
                }}
                disabled={count === 0}
                onClick={() => onAddToCart({ ...product, appliedPrice: finalPrice }, count)}
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