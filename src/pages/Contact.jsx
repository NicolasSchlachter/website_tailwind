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

        // Create email content with nice formatting and colors
        const emailSubject = encodeURIComponent(`[Contact Website] ${formData.subject}`);
        const emailBody = encodeURIComponent(`
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #DDA15E; border-radius: 10px; background-color: #FEFAE0;">
        <h2 style="color: #606C38; border-bottom: 2px solid #DDA15E; padding-bottom: 10px;">Mesaj nou de la website-ul liceului</h2>
        
        <div style="background-color: #f9f9f5; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <p style="margin: 5px 0;"><strong style="color: #283618;">Nume:</strong> ${formData.name}</p>
            <p style="margin: 5px 0;"><strong style="color: #283618;">Email:</strong> ${formData.email}</p>
            <p style="margin: 5px 0;"><strong style="color: #283618;">Telefon:</strong> ${formData.phone}</p>
        </div>
        
        <div style="background-color: #f9f9f5; padding: 15px; border-radius: 8px;">
            <h3 style="color: #606C38; margin-top: 0;">Subiect: ${formData.subject}</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        
        <p style="font-size: 12px; color: #666; margin-top: 20px; text-align: center;">
            Acest email a fost generat automat prin formularul de contact de pe website-ul liceului.
        </p>
    </div>
</body>
</html>
`);

        // Open mail client with formatted email
        window.location.href = `mailto:nicolasschlachter740@gmail.com?subject=${emailSubject}&body=${emailBody}`;

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
                            <p className="paragraph_font">Bulevardul Cloșca, nr. 72, Satu Mare</p>
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
                            <p className="paragraph_font">Tel: 0261722185</p>
                            <p className="paragraph_font">Email: ltg@lgerm-ettinger.ro</p>
                            <p className="paragraph_font">Site oficial: <a href="http://www.lgerm-ettinger.ro" target="_blank" rel="noopener noreferrer" style={{color: '#606C38', textDecoration: 'underline'}}>www.lgerm-ettinger.ro</a></p>
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
                            <div className="flex space-x-12 mt-2">
                                {/* Facebook Icon */}
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#606C38" className="hover:fill-[#BC6C25] transition-colors">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                                {/* Instagram Icon */}
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#606C38" className="hover:fill-[#BC6C25] transition-colors">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                {/* YouTube Icon */}
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#606C38" className="hover:fill-[#BC6C25] transition-colors">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
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
                                        backgroundColor: 'white',
                                        color: 'black'
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
                                        backgroundColor: 'white',
                                        color: 'black'
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
                                        backgroundColor: 'white',
                                        color: 'black'
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
                                        backgroundColor: 'white',
                                        color: 'black'
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
                                        backgroundColor: 'white',
                                        color: 'black'
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
                        height: '400px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        border: '1px solid #DDA15E',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                    }}>
                        {/* Google Maps iframe for Liceul Teoretic German Johann Ettinger */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.949435180262!2d22.86608877679171!3d47.78962497131791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737d843763ce8c9%3A0xada564bd5dc317d7!2sBulevardul%20Clo%C8%99ca%2072%2C%20Satu%20Mare%20440066!5e0!3m2!1sen!2sro!4v1708975746013!5m2!1sen!2sro"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bulevardul Cloșca, nr. 72, Satu Mare"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;
