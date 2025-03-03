import React from 'react';

function Activitati() {
    // Activity data with images and descriptions
    const activities = [
        {
            title: "Activități sportive",
            description: "Organizăm diverse competiții sportive și încurajăm participarea elevilor la activități care promovează un stil de viață sănătos.",
            image: "/assets/gallery/nicolas.jpg"
        },
        {
            title: "Ateliere de artă",
            description: "Elevii noștri participă la ateliere de artă și meșteșuguri tradiționale, dezvoltându-și creativitatea și abilitățile artistice.",
            image: "/assets/gallery/nicolas.jpg"
        },
        {
            title: "Muzică și dans",
            description: "Grupul nostru coral și ansamblul de dansuri tradiționale reprezintă școala la diverse evenimente culturale locale și naționale.",
            image: "/assets/gallery/nicolas.jpg"
        },
        {
            title: "Clubul de știință",
            description: "Experimentele științifice și proiectele inovatoare sunt încurajate în cadrul clubului nostru de știință, unde elevii își pot dezvolta abilitățile de cercetare.",
            image: "/assets/gallery/nicolas.jpg"
        }
    ];

    return (
        <main>
            <div className="island">
                <h1 style={{ color: '#606C38', marginBottom: '20px' }}>Activități</h1>

                <p className="paragraph_font">
                    La Liceul Teoretic German "Johann Ettinger", oferim o gamă variată de activități extracurriculare care completează educația academică a elevilor noștri. Aceste activități sunt concepute pentru a dezvolta talentele, abilitățile sociale și încrederea în sine a elevilor.
                </p>

                <div style={{ marginTop: '30px' }}>
                    {activities.map((activity, index) => (
                        <div key={index} style={{
                            marginBottom: '30px',
                            padding: '20px',
                            backgroundColor: '#f9f9f5',
                            borderRadius: '10px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            border: '1px solid #DDA15E'
                        }}>
                            <h2 style={{ color: '#606C38', marginBottom: '15px', fontSize: '1.3rem', textAlign: 'center'}}>{activity.title}</h2>
                            <div style={{ display: 'flex', flexDirection: window.innerWidth > 768 ? 'row' : 'column', gap: '20px' }}>
                                <div style={{ flex: 1 }}>
                                    <img
                                        src={activity.image}
                                        alt={activity.title}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '8px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    flex: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <p className="paragraph_font">{activity.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    background: '#f8f8f8',
                    borderRadius: '8px',
                    border: '1px solid #DDA15E'
                }}>
                    <h3 style={{ color: '#606C38', marginBottom: '10px', fontSize: '1.1rem' }}>Înscrieri activități extracurriculare</h3>
                    <p className="paragraph_font">
                        Pentru înscrieri la activitățile extracurriculare, vă rugăm să contactați secretariatul școlii sau să discutați direct cu profesorii coordonatori.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Activitati;