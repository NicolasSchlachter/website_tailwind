import React, { useState } from 'react';

function GalerieFoto() {
    // Image gallery data - you would replace these with actual images
    const galleryImages = [
        {
            id: 1,
            src: "/assets/gallery/nicolas.jpg",
            alt: "Clădirea școlii",
            category: "Școală"
        },
        {
            id: 2,
            src: "/assets/gallery/nicolas.jpg",
            alt: "Sala de clasă modernă",
            category: "Facilități"
        },
        {
            id: 3,
            src: "/assets/gallery/nicolas.jpg",
            alt: "Laboratorul de științe",
            category: "Facilități"
        },
        {
            id: 4,
            src: "/assets/gallery/nicolas.jpg",
            alt: "Biblioteca școlii",
            category: "Facilități"
        },
        {
            id: 5,
            src: "/assets/gallery/nicolas.jpg",
            alt: "Competiție sportivă",
            category: "Evenimente"
        },
        {
            id: 6,
            src: "/assets/gallery/nicolas.jpg",
            alt: "Ceremonia de absolvire",
            category: "Evenimente"
        },
        {
            id: 7,
            src: "/assets/gallery/nicolas.jpg",
            alt: "Proiect de artă",
            category: "Activități"
        },
        {
            id: 8,
            src: "/assets/gallery/nicolas.jpg",
            alt: "Spectacol muzical",
            category: "Activități"
        }
    ];

    // State for filtering
    const [activeCategory, setActiveCategory] = useState('Toate');
    const [selectedImage, setSelectedImage] = useState(null);

    // Get unique categories
    const categories = ['Toate', ...new Set(galleryImages.map(img => img.category))];

    // Filter images based on active category
    const filteredImages = activeCategory === 'Toate'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    // Function to open image in lightbox
    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    // Function to close lightbox
    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <main>
            <div className="island">
                <h1 style={{ color: '#606C38', marginBottom: '20px' }}>Galerie Foto</h1>

                <p className="paragraph_font">
                    Explorați colecția noastră de imagini care ilustrează viața școlară, facilitățile și evenimentele organizate la Liceul Teoretic German "Johann Ettinger".
                </p>

                {/* Category filters */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    marginTop: '20px',
                    marginBottom: '25px',
                    flexWrap: 'wrap'
                }}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            style={{
                                padding: '8px 15px',
                                background: activeCategory === category ? '#606C38' : '#DDA15E',
                                color: 'white',
                                border: 'none',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '15px',
                    marginBottom: '30px'
                }}>
                    {filteredImages.map(image => (
                        <div
                            key={image.id}
                            onClick={() => openLightbox(image)}
                            style={{
                                cursor: 'pointer',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                height: '160px' // Fixed height for uniformity
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedImage && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000
                    }} onClick={closeLightbox}>
                        <div style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            padding: '20px',
                            background: '#fff',
                            borderRadius: '8px',
                            position: 'relative'
                        }} onClick={e => e.stopPropagation()}>
                            <button
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: '#606C38',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onClick={closeLightbox}
                            >
                                ✕
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: 'calc(90vh - 100px)',
                                    display: 'block',
                                    margin: '0 auto'
                                }}
                            />
                            <p style={{
                                marginTop: '15px',
                                textAlign: 'center',
                                color: '#606C38',
                                fontWeight: 'bold'
                            }}>
                                {selectedImage.alt}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default GalerieFoto;