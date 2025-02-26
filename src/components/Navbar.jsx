// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/despre-noi">Despre noi</Link></li>
                <li><Link to="/activitati">Activități</Link></li>
                <li><Link to="/proiecte">Proiecte</Link></li>
                <li><Link to="/galerie-foto">Galerie foto</Link></li>
                <li><Link to="/media">Media</Link></li>
                <li><Link to="/resurse-educaționale">Resurse educaționale</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
