import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetails from './pages/ProductDetails';
import AboutPage from './pages/AboutPage'; // ДОДАЛИ ІМПОРТ
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/about" element={<AboutPage />} /> {/* ДОДАЛИ МАРШРУТ */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;