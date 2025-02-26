// src/pages/GalerieFoto.jsx
import React from 'react';

function GalerieFoto() {
    return (
        <div className="galerie-foto-page">
            <h1>Galerie Foto</h1>
            <p>Check out some photos of our school activities and events:</p>
            <div className="gallery">
                <img src="image1.jpg" alt="Event 1" />
                <img src="image2.jpg" alt="Event 2" />
                <img src="image3.jpg" alt="Event 3" />
            </div>
        </div>
    );
}

export default GalerieFoto;
