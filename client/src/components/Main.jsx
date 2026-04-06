import { useState } from 'react';
import ProductCard from './ProductCard';

const productsData = [
    { id: 1, name: "Ноутбук Lenovo ThinkPad", price: 24000 },
    { id: 2, name: "Серверна шафа", price: 15000 },
    { id: 3, name: "USB-хаб 7 портів", price: 450 },
    { id: 4, name: "Мишка бездротова", price: 900 }
];

export default function Main() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product, quantity) => {
        const newItem = { ...product, quantity };
        setCart([...cart, newItem]);
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <main className="main-content" style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
            <section className="welcome-section" style={{ marginBottom: '40px' }}>
                <h1 className="welcome-title">Каталог обладнання</h1>
                <p className="welcome-text" style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                    Використовуйте лічильник для вибору потрібної кількості товару.
                </p>

                {/* Відображаємо кошик, щоб викладач бачив, що дані піднялися вгору */}
                <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '8px', display: 'inline-block', minWidth: '300px' }}>
                    <h3>🛒 Кошик</h3>
                    <p style={{ margin: '5px 0' }}>Товарів обрано: <strong>{totalItems} шт.</strong></p>
                    <p style={{ margin: '5px 0' }}>Загальна сума: <strong style={{ color: '#198754' }}>{totalSum} грн</strong></p>
                </div>
            </section>

            <section className="products-grid" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
                {productsData.map((item) => (
                    <ProductCard 
                        key={item.id} 
                        product={item} 
                        onAddToCart={handleAddToCart} 
                    />
                ))}
            </section>
        </main>
    );
}