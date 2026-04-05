import ProductCard from './ProductCard';

const productsData = [
    { id: 1, name: "Ноутбук Lenovo ThinkPad", price: 24000 },
    { id: 2, name: "Серверна шафа", price: 15000 },
    { id: 3, name: "USB-хаб 7 портів", price: 450 },
    { id: 4, name: "Мишка бездротова", price: 900 }
];

export default function Main() {
    return (
        <main className="main-content" style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
            <section className="welcome-section" style={{ marginBottom: '40px' }}>
                <h1 className="welcome-title">Каталог обладнання</h1>
                <p className="welcome-text" style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                    Використовуйте лічильник для вибору потрібної кількості товару.
                </p>
            </section>

            <section className="products-grid" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
                {productsData.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </section>
        </main>
    );
}