import { useState, useEffect } from 'react';

export default function PromoBanner() {
    const [timeLeft, setTimeLeft] = useState(3600);

    useEffect(() => {
        if (timeLeft <= 0) return;
        
        const timerId = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');

    return (
        <div style={{ backgroundColor: '#ffc107', color: '#000', padding: '15px', textAlign: 'center', borderRadius: '8px', marginBottom: '20px', fontWeight: 'bold' }}>
            🔥 Акція! Знижки на сервери діють ще: {minutes}:{seconds} 🔥
        </div>
    );
}