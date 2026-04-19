export default function AboutPage() {
    return (
        <main style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
            <h1>Про нас</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', lineHeight: '1.6' }}>
                <p>
                    <strong>WholesaleStore</strong> — це сучасна платформа для управління гуртовими замовленнями ІТ-обладнання.
                </p>
                <p>
                    Наш проєкт розробляється з використанням найсучасніших технологій: Laravel для потужного REST API на бекенді та React.js для швидкого і реактивного користувацького інтерфейсу на фронтенді.
                </p>
                <p>
                    Ми прагнемо забезпечити найкращий досвід для наших клієнтів, пропонуючи швидке завантаження, зручний кошик та миттєву навігацію завдяки React Router.
                </p>
            </div>
        </main>
    );
}