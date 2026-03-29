export default function Main() {
    return (
        <main className="main-content" style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
            <section className="welcome-section">
                <h1 className="welcome-title">Вітаємо у системі гуртових замовлень!</h1>
                <p className="welcome-text" style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                    Це сучасний клієнтський застосунок, розроблений на React. 
                    Незабаром тут з'явиться каталог товарів, який підтягуватиметься безпосередньо з нашого REST API.
                </p>
            </section>
        </main>
    );
}