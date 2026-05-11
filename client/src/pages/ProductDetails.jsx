import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const [quantity, setQuantity] = useState(1);

    const PROMO_IDS = [3]; 
    const DISCOUNT_PERCENT = 30;

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

    const currentId = product?.product_id || product?.id;
    const isPromo = product ? PROMO_IDS.includes(currentId) : false;
    const basePrice = product?.current_price || product?.price || 0;
    
    const finalPrice = isPromo 
        ? Math.round(basePrice - (basePrice * (DISCOUNT_PERCENT / 100))) 
        : basePrice;

    const handleAddToCart = () => {
        if (!product) return;

        const savedCart = JSON.parse(localStorage.getItem('wholesale_cart')) || [];
        
        const existingItemIndex = savedCart.findIndex(
            item => item.id === product.id || item.product_id === product.product_id
        );
        
        if (existingItemIndex >= 0) {
            savedCart[existingItemIndex].quantity += quantity;
            savedCart[existingItemIndex].appliedPrice = finalPrice; 
        } else {
            savedCart.push({ ...product, quantity, appliedPrice: finalPrice });
        }
        
        localStorage.setItem('wholesale_cart', JSON.stringify(savedCart));
        alert('Товар успішно додано в кошик! 🛒');
    };

    if (isLoading) {
        return (
            <main className="flex-1 p-10 text-center">
                <h2 className="text-xl text-gray-600 font-medium">⏳ Завантаження деталей...</h2>
            </main>
        );
    }

    if (!product) {
        return (
            <main className="flex-1 p-10 text-center">
                <h2 className="text-2xl text-red-600 font-bold mb-4">Товар не знайдено у базі даних</h2>
                <Link to="/catalog" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    &larr; Повернутися до каталогу
                </Link>
            </main>
        );
    }

    return (
        <main className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen">
            <div className={`max-w-5xl mx-auto p-6 bg-white shadow-sm rounded-xl border-2 ${isPromo ? 'border-red-500 shadow-red-100' : 'border-gray-100'}`}>
                
                <Link to="/catalog" className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center text-sm font-medium transition-colors">
                    &larr; Повернутися до каталогу
                </Link>

                <div className="flex flex-col md:flex-row gap-10 mt-2">
                    
                    <div className="w-full md:w-1/2 bg-gray-50 rounded-xl flex items-center justify-center p-10 border border-gray-100 min-h-[300px] relative">
                        <span className="text-gray-400">Фото: {product.name}</span>
                        
                        {isPromo && (
                            <div className="absolute top-4 left-4 bg-red-600 text-white text-lg font-bold px-4 py-1 rounded-lg shadow-md">
                                -{DISCOUNT_PERCENT}%
                            </div>
                        )}
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                        
                        <div className="flex items-center flex-wrap gap-3 mb-6 text-sm">
                            <span className="text-gray-500">
                                Артикул: <span className="font-mono text-gray-700">{currentId}</span>
                            </span>
                            
                            {product.delivery_available !== undefined && (
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${product.delivery_available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {product.delivery_available ? 'Доставка доступна' : 'Немає доставки'}
                                </span>
                            )}
                            
                            {isPromo && (
                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border border-red-200">
                                    Акційна пропозиція
                                </span>
                            )}
                        </div>

                        <div className="mb-8">
                            {isPromo ? (
                                <div className="flex flex-col">
                                    <span className="text-lg text-gray-400 line-through decoration-red-500 mb-1">
                                        {basePrice} грн
                                    </span>
                                    <div className="text-4xl font-extrabold text-red-600">
                                        {finalPrice} <span className="text-xl font-medium">грн</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-4xl font-extrabold text-green-600">
                                    {finalPrice} <span className="text-xl text-gray-500 font-medium">грн</span>
                                </div>
                            )}
                        </div>

                        <div className="mb-8">
                            <h3 className="font-semibold text-gray-900 mb-3">Основні характеристики:</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li><span className="font-medium text-gray-800">Категорія:</span> Комп'ютерне обладнання</li>
                                <li><span className="font-medium text-gray-800">Гарантія:</span> 12 місяців від виробника</li>
                            </ul>
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <input 
                                type="number" 
                                value={quantity} 
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                min="1" 
                                className="w-20 border border-gray-300 rounded-lg text-center font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                Додати в кошик
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}