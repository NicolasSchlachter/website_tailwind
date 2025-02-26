// src/pages/Contact.jsx
import React from 'react';

function Contact() {
    return (
        <div className="contact-page">
            <h1>Contact</h1>
            <p>If you have any questions, feel free to reach out:</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
