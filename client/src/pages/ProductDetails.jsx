import { useParams, Link } from 'react-router-dom';

const productsData = [
    { id: 1, name: "Ноутбук Lenovo ThinkPad", price: 24000 },
    { id: 2, name: "Серверна шафа", price: 15000 },
    { id: 3, name: "USB-хаб 7 портів", price: 450 },
    { id: 4, name: "Мишка бездротова", price: 900 }
];

export default function ProductDetails() {
    const { id } = useParams(); // Дістаємо ID з URL
    const product = productsData.find(p => p.id === parseInt(id));

    return (
        <main style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
            {product ? (
                <div style={{ border: '1px solid #ddd', padding: '30px', display: 'inline-block', borderRadius: '8px' }}>
                    <h1>Деталі товару</h1>
                    <h2>{product.name}</h2>
                    <p style={{ fontSize: '24px', color: 'green', fontWeight: 'bold' }}>{product.price} грн</p>
                    <p>Артикул (ID) з URL: {id}</p>
                </div>
            ) : (
                <h2>Товар не знайдено</h2>
            )}
            <br /><br />
            <Link to="/catalog" style={{ color: '#0d6efd', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Назад до каталогу</Link>
        </main>
    );
}