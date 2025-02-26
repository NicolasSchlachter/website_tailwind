import React from 'react';

function Media() {
    const mediaItems = [
        {
            title: "Interviu cu directorul liceului",
            type: "Video",
            date: "15 Ianuarie 2025",
            source: "TV Satu Mare",
            link: "https://youtube.com/example1",
            description: "Interviu despre performanțele academice ale elevilor și proiectele viitoare ale liceului."
        },
        {
            title: "Reportaj: Festivalul Culturii Germane",
            type: "Video",
            date: "10 Decembrie 2024",
            source: "TV1 România",
            link: "https://youtube.com/example2",
            description: "Reportaj despre ediția anuală a Festivalului Culturii Germane organizat de liceul nostru."
        },
        {
            title: "Liceul German 'Johann Ettinger' - tradiție și inovație în educație",
            type: "Articol",
            date: "5 Noiembrie 2024",
            source: "Ziarul Local",
            link: "https://news.com/example1",
            description: "Articol despre istoria și evoluția liceului, cu accent pe metodele moderne de predare și rezultatele academice."
        },
        {
            title: "Interviu cu elevii participanți la Olimpiada Internațională de Limba Germană",
            type: "Audio",
            date: "20 Octombrie 2024",
            source: "Radio Cultural",
            link: "https://radio.com/example1",
            description: "Discuție cu elevii care au reprezentat România la Olimpiada Internațională de Limba Germană."
        }
    ];

    // Group media items by type
    const groupedMedia = mediaItems.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <main>
            <div className="island">
                <h1 style={{ color: '#606C38', marginBottom: '20px' }}>Media</h1>

                <p className="paragraph_font">
                    Această secțiune conține materiale media despre activitățile și realizările Liceului Teoretic German "Johann Ettinger", inclusiv interviuri, reportaje și articole din presă.
                </p>

                {Object.keys(groupedMedia).map(type => (
                    <div key={type} style={{ marginTop: '30px' }}>
                        <h2 style={{
                            color: '#606C38',
                            marginBottom: '15px',
                            fontSize: '1.3rem',
                            borderBottom: '2px solid #DDA15E',
                            paddingBottom: '5px'
                        }}>
                            {type}
                        </h2>

                        {groupedMedia[type].map((item, index) => (
                            <div key={index} style={{
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#f9f9f5',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                border: '1px solid #DDA15E'
                            }}>
                                <h3 style={{ color: '#606C38', marginBottom: '5px', fontSize: '1.1rem' }}>{item.title}</h3>
                                <p style={{
                                    color: '#606C38',
                                    fontStyle: 'italic',
                                    fontSize: '0.9rem',
                                    marginBottom: '10px'
                                }}>
                                    {item.date} • {item.source}
                                </p>
                                <p className="paragraph_font" style={{ marginBottom: '15px' }}>{item.description}</p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '8px 15px',
                                        background: '#606C38',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderRadius: '4px',
                                        fontWeight: 'bold',
                                        fontSize: '0.9rem',
                                        transition: 'background 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.background = '#BC6C25'}
                                    onMouseOut={(e) => e.target.style.background = '#606C38'}
                                >
                                    {type === 'Articol' ? 'Citește articolul' :
                                        type === 'Video' ? 'Vizionează videoclipul' :
                                            type === 'Audio' ? 'Ascultă înregistrarea' : 'Accesează'}
                                </a>
                            </div>
                        ))}
                    </div>
                ))}

                <div style={{
                    marginTop: '30px',
                    padding: '15px',
                    background: '#f8f8f8',
                    borderRadius: '8px',
                    border: '1px solid #DDA15E',
                    textAlign: 'center'
                }}>
                    <h3 style={{ color: '#606C38', marginBottom: '10px', fontSize: '1.1rem' }}>Presă și media</h3>
                    <p className="paragraph_font">
                        Pentru solicitări din partea presei sau pentru a semnala apariții media despre liceul nostru, vă rugăm să contactați departamentul de relații publice la adresa de email: <strong>pr@lgerm-ettinger.ro</strong>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Media;