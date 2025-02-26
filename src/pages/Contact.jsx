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
                <h1 className="text-3xl font-bold mb-6">Contact</h1>

                <div className="text-content grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-left text-[#606C38]">Informații de Contact</h2>

                        <div className="bg-white p-6 rounded-lg shadow mb-6">
                            <h3 className="font-bold text-lg text-[#283618]">Adresă</h3>
                            <p className="paragraph_font">Str. Ioan Slavici 2, 440010 Satu Mare, România</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow mb-6">
                            <h3 className="font-bold text-lg text-[#283618]">Telefon & Email</h3>
                            <p className="paragraph_font">Tel: +40 261 714 600</p>
                            <p className="paragraph_font">Email: secretariat@liceuljohannettinger.ro</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow mb-6">
                            <h3 className="font-bold text-lg text-[#283618]">Program</h3>
                            <p className="paragraph_font">Luni - Vineri: 7:30 - 15:30</p>
                            <p className="paragraph_font">Secretariat: 8:00 - 16:00</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-lg text-[#283618]">Rețele Sociale</h3>
                            <div className="flex space-x-4 mt-2">
                                <a href="#" className="text-[#606C38] hover:text-[#BC6C25]">Facebook</a>
                                <a href="#" className="text-[#606C38] hover:text-[#BC6C25]">Instagram</a>
                                <a href="#" className="text-[#606C38] hover:text-[#BC6C25]">YouTube</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-left text-[#606C38]">Trimite un Mesaj</h2>

                        {submitted ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                Mesajul a fost trimis cu succes! Vă mulțumim pentru contactare.
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-[#283618] font-bold mb-2">Nume:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-[#DDA15E] rounded focus:outline-none focus:border-[#606C38]"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-[#283618] font-bold mb-2">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-[#DDA15E] rounded focus:outline-none focus:border-[#606C38]"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-[#283618] font-bold mb-2">Telefon:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-[#DDA15E] rounded focus:outline-none focus:border-[#606C38]"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-[#283618] font-bold mb-2">Subiect:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-[#DDA15E] rounded focus:outline-none focus:border-[#606C38]"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-[#283618] font-bold mb-2">Mesaj:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-[#DDA15E] rounded focus:outline-none focus:border-[#606C38] h-32"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#606C38] text-white px-4 py-2 rounded hover:bg-[#BC6C25] transition-colors"
                            >
                                Trimite Mesajul
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-left text-[#606C38]">Locație</h2>
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        {/* Replace with actual map component or iframe */}
                        <p className="text-gray-500">Hartă interactivă se va încărca aici</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;