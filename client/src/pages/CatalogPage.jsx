import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import PromoBanner from '../components/PromoBanner';

export default function CatalogPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('wholesale_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('wholesale_cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const categoriesRes = await axios.get('http://127.0.0.1:8000/api/categories');
                setCategories(categoriesRes.data.data ? categoriesRes.data.data : categoriesRes.data);

                const productsRes = await axios.get('http://127.0.0.1:8000/api/products');
                let allProducts = productsRes.data.data ? productsRes.data.data : productsRes.data;

                if (selectedCategory) {
                    allProducts = allProducts.filter(item => {
                        const name = item.name.toLowerCase();
                        if (selectedCategory === '1') return name.includes('ноутбук');
                        if (selectedCategory === '2') return name.includes('сервер') || name.includes('хаб');
                        if (selectedCategory === '3') return name.includes('мишка') || name.includes('монітор');
                        return true;
                    });
                }
                setProducts(allProducts);
            } catch (error) {
                console.error("API Error:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [selectedCategory]);

    const handleAddToCart = (product, quantity) => {
        const newItem = { ...product, quantity };
        setCart([...cart, newItem]);
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalSum = cart.reduce((sum, item) => sum + ((item.appliedPrice || item.current_price || item.price || 0) * item.quantity), 0);

    return (
        <main className="main-content" style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
            
            {/* 3. ВСТАВЛЯЄМО БАНЕР ОСЬ ТУТ */}
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <PromoBanner />
            </div>

            <section className="welcome-section" style={{ marginBottom: '40px' }}>
                <h1 className="welcome-title">Каталог обладнання</h1>
                
                <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '8px', display: 'inline-block', minWidth: '300px' }}>
                    <h3>🛒 Кошик</h3>
                    <p style={{ margin: '5px 0' }}>Товарів обрано: <strong>{totalItems} шт.</strong></p>
                    <p style={{ margin: '5px 0' }}>Загальна сума: <strong style={{ color: '#198754' }}>{totalSum.toFixed(0)} грн</strong></p>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Фільтр за категорією:</label>
                    <select 
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        <option value="">Всі категорії</option>
                        {categories?.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
            </section>

            {isLoading ? (
                <h2>Завантаження даних з API...</h2>
            ) : (
                <section className="products-grid" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
                    {products?.length > 0 ? (
                        products.map((item) => (
                            <ProductCard key={item.product_id || item.id || Math.random()} product={item} onAddToCart={handleAddToCart} />
                        ))
                    ) : (
                        <h3>Товарів у цій категорії не знайдено.</h3>
                    )}
                </section>
            )}
        </main>
    );
}