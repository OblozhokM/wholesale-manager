import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
        setIsSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newErrors = {};

        if (!formData.email.includes('@')) {
            newErrors.email = 'Помилка: Email обов\'язково має містити символ "@"';
        }
        if (formData.message.length < 10) {
            newErrors.message = 'Помилка: Повідомлення не може бути коротшим за 10 символів';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); // Очищаємо форму
        }
    };

    return (
        <main style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
            <h1>Контакти</h1>
            <p>Залиште відгук або задайте питання щодо гуртових закупівель.</p>

            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'left', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
                
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Ім'я:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: errors.email ? '1px solid red' : '1px solid #ccc' }}
                    />
                    {errors.email && <span style={{ color: 'red', fontSize: '14px', display: 'block', marginTop: '5px' }}>{errors.email}</span>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Повідомлення:</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        rows="4"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: errors.message ? '1px solid red' : '1px solid #ccc' }}
                    ></textarea>
                    {errors.message && <span style={{ color: 'red', fontSize: '14px', display: 'block', marginTop: '5px' }}>{errors.message}</span>}
                </div>

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Відправити повідомлення
                </button>

                {isSubmitted && <p style={{ color: 'green', marginTop: '15px', fontWeight: 'bold', textAlign: 'center' }}>✅ Повідомлення успішно відправлено!</p>}
            </form>
        </main>
    );
}