export default function Footer() {
    return (
        <footer className="site-footer" style={{ backgroundColor: '#e9ecef', padding: '20px', textAlign: 'center', borderTop: '1px solid #ddd' }}>
            <p className="footer-text" style={{ margin: 0, color: '#6c757d' }}>
                © {new Date().getFullYear()} Wholesale Manager. Всі права захищено.
            </p>
        </footer>
    );
}