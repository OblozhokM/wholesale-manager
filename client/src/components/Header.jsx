export default function Header() {
    return (
        <header className="site-header" style={{ backgroundColor: '#212529', padding: '15px 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                <h2 className="logo" style={{ color: 'white', margin: 0 }}>WholesaleStore</h2>
                <nav>
                    <ul className="nav-menu" style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
                        <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Головна</a></li>
                        <li><a href="/catalog" style={{ color: '#ffc107', textDecoration: 'none' }}>Каталог</a></li>
                        <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>Про нас</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}