import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data to your server
        console.log('Form submitted:', formData);
        // Show success message
        setSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <main>
            <div className="island">
                <h1 style={{ color: '#606C38', marginBottom: '20px' }}>Contact</h1>

                <p className="paragraph_font">
                    Pentru informații suplimentare sau întrebări, nu ezitați să ne contactați folosind una dintre metodele de mai jos sau completând formularul de contact.
                </p>

                <div className="text-content grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h2 style={{ color: '#606C38', fontSize: '1.2rem', marginBottom: '15px' }}>Informații de Contact</h2>

                        <div style={{
                            marginBottom: '15px',
                            padding: '15px',
                            backgroundColor: '#f9f9f5',
                            borderRadius: '10px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            border: '1px solid #DDA15E'
                        }}>
                            <h3 style={{ color: '#283618', fontWeight: 'bold', marginBottom: '8px' }}>Adresă</h3>
                            <p className="paragraph_font">Str. Ioan Slavici 2, 440010 Satu Mare, România</p>
                        </div>

                        <div style={{
                            marginBottom: '15px',
                            padding: '15px',
                            backgroundColor: '#f5f5f0',
                            borderRadius: '10px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            border: '1px solid #DDA15E'
                        }}>
                            <h3 style={{ color: '#283618', fontWeight: 'bold', marginBottom: '8px' }}>Telefon & Email</h3>
                            <p className="paragraph_font">Tel: +40 261 714 600</p>
                            <p className="paragraph_font">Email: secretariat@liceuljohannettinger.ro</p>
                        </div>

                        <div style={{
                            marginBottom: '15px',
                            padding: '15px',
                            backgroundColor: '#f9f9f5',
                            borderRadius: '10px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            border: '1px solid #DDA15E'
                        }}>
                            <h3 style={{ color: '#283618', fontWeight: 'bold', marginBottom: '8px' }}>Program</h3>
                            <p className="paragraph_font">Luni - Vineri: 7:30 - 15:30</p>
                            <p className="paragraph_font">Secretariat: 8:00 - 16:00</p>
                        </div>

                        <div style={{
                            marginBottom: '15px',
                            padding: '15px',
                            backgroundColor: '#f5f5f0',
                            borderRadius: '10px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            border: '1px solid #DDA15E'
                        }}>
                            <h3 style={{ color: '#283618', fontWeight: 'bold', marginBottom: '8px' }}>Rețele Sociale</h3>
                            <div className="flex space-x-4 mt-2">
                                <a href="#" className="text-[#606C38] hover:text-[#BC6C25]">Facebook</a>
                                <a href="#" className="text-[#606C38] hover:text-[#BC6C25]">Instagram</a>
                                <a href="#" className="text-[#606C38] hover:text-[#BC6C25]">YouTube</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 style={{ color: '#606C38', fontSize: '1.2rem', marginBottom: '15px' }}>Trimite un Mesaj</h2>

                        {submitted ? (
                            <div style={{
                                backgroundColor: '#e6f4ea',
                                border: '1px solid #34a853',
                                color: '#1e8e3e',
                                padding: '10px 15px',
                                borderRadius: '8px',
                                marginBottom: '15px'
                            }}>
                                Mesajul a fost trimis cu succes! Vă mulțumim pentru contactare.
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} style={{
                            padding: '20px',
                            backgroundColor: '#f9f9f5',
                            borderRadius: '10px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            border: '1px solid #DDA15E'
                        }}>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="name" style={{ display: 'block', color: '#283618', fontWeight: 'bold', marginBottom: '5px' }}>Nume:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid #DDA15E',
                                        borderRadius: '6px',
                                        outline: 'none',
                                        backgroundColor: 'white' // White background
                                    }}
                                    className="focus:border-[#606C38]"
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="email" style={{ display: 'block', color: '#283618', fontWeight: 'bold', marginBottom: '5px' }}>Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid #DDA15E',
                                        borderRadius: '6px',
                                        outline: 'none',
                                        backgroundColor: 'white' // White background
                                    }}
                                    className="focus:border-[#606C38]"
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="phone" style={{ display: 'block', color: '#283618', fontWeight: 'bold', marginBottom: '5px' }}>Telefon:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid #DDA15E',
                                        borderRadius: '6px',
                                        outline: 'none',
                                        backgroundColor: 'white' // White background
                                    }}
                                    className="focus:border-[#606C38]"
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="subject" style={{ display: 'block', color: '#283618', fontWeight: 'bold', marginBottom: '5px' }}>Subiect:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid #DDA15E',
                                        borderRadius: '6px',
                                        outline: 'none',
                                        backgroundColor: 'white' // White background
                                    }}
                                    className="focus:border-[#606C38]"
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="message" style={{ display: 'block', color: '#283618', fontWeight: 'bold', marginBottom: '5px' }}>Mesaj:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid #DDA15E',
                                        borderRadius: '6px',
                                        outline: 'none',
                                        height: '120px',
                                        resize: 'vertical',
                                        backgroundColor: 'white' // White background
                                    }}
                                    className="focus:border-[#606C38]"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    backgroundColor: '#606C38',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    transition: 'background-color 0.3s'
                                }}
                                className="hover:bg-[#BC6C25]"
                            >
                                Trimite Mesajul
                            </button>
                        </form>
                    </div>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <h2 style={{ color: '#606C38', fontSize: '1.2rem', marginBottom: '15px' }}>Locație</h2>
                    <div style={{
                        width: '100%',
                        height: '300px',
                        backgroundColor: '#f5f5f0',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #DDA15E'
                    }}>
                        {/* Replace with actual map component or iframe */}
                        <p style={{ color: '#606C38' }}>Hartă interactivă se va încărca aici</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;