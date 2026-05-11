import { useState, useEffect } from 'react';

export default function PromoBanner() {
    const [timeLeft, setTimeLeft] = useState(172800); 

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor((timeLeft / (60 * 60)) % 48);
    const minutes = Math.floor((timeLeft / 60) % 60);
    const seconds = Math.floor(timeLeft % 60);

    if (timeLeft === 0) return null;

    return (
        <div style={{
            backgroundColor: '#dc3545', 
            color: 'white', 
            padding: '20px',
            borderRadius: '8px', 
            marginBottom: '30px', 
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',
            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.4)'
        }}>
            <div style={{ textAlign: 'left' }}>
                <h2 style={{ margin: '0 0 5px 0', fontSize: '24px' }}>🔥 Супер-акція! Знижка 30% на Монітори!</h2>
                <p style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}>Поспішайте, кількість акційного товару суворо обмежена.</p>
            </div>
            <div style={{ 
                fontSize: '32px', 
                fontWeight: 'bold', 
                backgroundColor: 'rgba(0,0,0,0.2)', 
                padding: '10px 20px', 
                borderRadius: '8px',
                fontFamily: 'monospace'
            }}>
                ⏳ {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </div>
        </div>
    );
}