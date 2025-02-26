import React, { useState } from 'react';

function ResurseEducationale() {
    const [activeCategory, setActiveCategory] = useState('Toate');

    // Categories for filtering
    const categories = [
        'Toate',
        'Limbă Germană',
        'Matematică',
        'Științe',
        'Examene',
        'Certificări'
    ];

    // Sample educational resources
    const resources = [
        {
            id: 1,
            title: "Materiale Didactice Germană",
            description: "Resurse pentru învățarea limbii germane pentru toate nivelurile, inclusiv exerciții interactive, texte literare și materiale audio-video.",
            categories: ["Limbă Germană", "Gramatică", "Vocabular"],
            link: "#",
            image: "/assets/german_resources.jpg"
        },
        {
            id: 2,
            title: "Biblioteca Virtuală de Matematică",
            description: "Colecție de lecții, probleme și soluții pentru toate nivelurile de învățământ, cu explicații detaliate și exemple rezolvate.",
            categories: ["Matematică", "Algebră", "Geometrie"],
            link: "#",
            image: "/assets/math_resources.jpg"
        },
        {
            id: 3,
            title: "Laboratorul Virtual de Științe",
            description: "Simulări, experimente și tutoriale pentru fizică, chimie și biologie. Aceste resurse permit elevilor să exploreze concepte științifice complex în mod interactiv.",
            categories: ["Științe", "Fizică", "Chimie", "Biologie"],
            link: "#",
            image: "/assets/science_resources.jpg"
        },
        {
            id: 4,
            title: "Pregătire Bacalaureat",
            description: "Materiale de pregătire pentru examene, modele de subiecte și strategii de învățare. Include teste de antrenament și exerciții cu soluții detaliate.",
            categories: ["Examene", "Bacalaureat", "Metodologie"],
            link: "#",
            image: "/assets/bac_resources.jpg"
        },
        {
            id: 5,
            title: "Materialele DSD (Deutsches Sprachdiplom)",
            description: "Resurse pentru pregătirea examenului de certificare DSD, inclusiv exemple de exerciții, strategii de examinare și materiale audio pentru proba de ascultare.",
            categories: ["Certificări", "DSD", "Limbă Germană"],
            link: "#",
            image: "/assets/dsd_resources.jpg"
        },
        {
            id: 6,
            title: "Literatura Germană - Colecție Clasică",
            description: "Colecție digitală cu opere literare germane clasice, analize literare și contextualizări istorice pentru elevii din ciclul liceal.",
            categories: ["Limbă Germană", "Literatură", "Cultură"],
            link: "#",
            image: "/assets/german_literature.jpg"
        },
        {
            id: 7,
            title: "Informatică și Programare",
            description: "Materiale de învățare pentru informatică, algoritmi și limbaje de programare. Include exerciții practice și proiecte pentru dezvoltarea competențelor digitale.",
            categories: ["Informatică", "Programare", "Tehnologie"],
            link: "#",
            image: "/assets/programming_resources.jpg"
        },
        {
            id: 8,
            title: "Istorie și Geografie",
            description: "Resurse pentru studierea istoriei și geografiei, cu accent pe spațiul cultural german și relațiile româno-germane de-a lungul timpului.",
            categories: ["Istorie", "Geografie", "Științe Sociale"],
            link: "#",
            image: "/assets/history_resources.jpg"
        }
    ];

    // Filter resources based on active category
    const filteredResources = activeCategory === 'Toate'
        ? resources
        : resources.filter(resource =>
            resource.categories.some(cat => cat === activeCategory || cat.includes(activeCategory))
        );

    return (
        <main>
            <div className="island">
                <h1 style={{ color: '#606C38', marginBottom: '20px' }}>Resurse Educaționale</h1>

                <div className="text-content">
                    <p className="paragraph_font" style={{ marginBottom: '25px' }}>
                        Liceul Teoretic German "Johann Ettinger" oferă o varietate de resurse educaționale pentru a sprijini procesul de învățare al elevilor noștri.
                        Aceste materiale sunt concepute pentru a completa curriculum-ul școlar și pentru a facilita dezvoltarea abilităților lingvistice, științifice și matematice.
                    </p>

                    {/* Category filter */}
                    <div style={{ marginBottom: '25px' }}>
                        <h2 style={{ color: '#606C38', marginBottom: '15px', fontSize: '1.3rem' }}>Categorii</h2>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px',
                            marginBottom: '20px'
                        }}>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    style={{
                                        padding: '8px 15px',
                                        borderRadius: '20px',
                                        border: '1px solid #DDA15E',
                                        backgroundColor: activeCategory === category ? '#606C38' : '#FEFAE0',
                                        color: activeCategory === category ? 'white' : '#283618',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <h2 style={{ color: '#606C38', marginBottom: '15px', fontSize: '1.3rem' }}>Resurse Disponibile</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '20px',
                        marginTop: '20px'
                    }}>
                        {filteredResources.map(resource => (
                            <div key={resource.id} style={{
                                backgroundColor: '#fff',
                                padding: '20px',
                                borderRadius: '10px',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                border: '1px solid #DDA15E',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                 onMouseOver={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                                 }}
                                 onMouseOut={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
                                 }}
                            >
                                <div style={{ marginBottom: '15px', height: '150px', overflow: 'hidden', borderRadius: '8px' }}>
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <h3 style={{ color: '#283618', marginBottom: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>{resource.title}</h3>
                                <p className="paragraph_font" style={{ marginBottom: '15px', flex: 1 }}>{resource.description}</p>

                                <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                    {resource.categories.map((category, idx) => (
                                        <span key={idx} style={{
                                            backgroundColor: '#FEFAE0',
                                            color: '#606C38',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            fontSize: '0.8rem'
                                        }}>
                                            {category}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={resource.link}
                                    style={{
                                        backgroundColor: '#606C38',
                                        color: 'white',
                                        padding: '8px 15px',
                                        borderRadius: '5px',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        textAlign: 'center',
                                        transition: 'background-color 0.3s ease',
                                        alignSelf: 'flex-start',
                                        marginTop: 'auto'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#BC6C25'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#606C38'}
                                >
                                    Accesează
                                </a>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '30px',
                        padding: '20px',
                        backgroundColor: '#FEFAE0',
                        borderRadius: '10px',
                        border: '1px solid #DDA15E'
                    }}>
                        <h2 style={{ color: '#606C38', marginBottom: '15px', fontSize: '1.3rem' }}>Platforme Online</h2>
                        <p className="paragraph_font" style={{ marginBottom: '15px' }}>
                            Elevii noștri au acces la următoarele platforme educaționale:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
                            <li className="paragraph_font" style={{ marginBottom: '8px' }}>
                                <strong>Platforma școlară internă</strong> - pentru materiale de curs, teme și comunicare cu profesorii
                            </li>
                            <li className="paragraph_font" style={{ marginBottom: '8px' }}>
                                <strong>Biblioteca digitală</strong> - cu acces la cărți și resurse în limbile germană, română și engleză
                            </li>
                            <li className="paragraph_font" style={{ marginBottom: '8px' }}>
                                <strong>Platforme de certificare lingvistică</strong> - pentru pregătirea examenelor DSD și alte certificări
                            </li>
                            <li className="paragraph_font" style={{ marginBottom: '8px' }}>
                                <strong>Platforme interactive</strong> - pentru matematică, științe și programare
                            </li>
                        </ul>

                        <div style={{
                            backgroundColor: '#fff',
                            padding: '15px',
                            borderRadius: '8px',
                            marginTop: '20px'
                        }}>
                            <h3 style={{ color: '#283618', marginBottom: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>Solicitare Materiale Suplimentare</h3>
                            <p className="paragraph_font" style={{ marginBottom: '15px' }}>
                                Pentru a solicita resurse educaționale suplimentare, vă rugăm să completați formularul de mai jos sau să contactați bibliotecarul școlii.
                            </p>
                            <button style={{
                                backgroundColor: '#606C38',
                                color: 'white',
                                padding: '8px 15px',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease'
                            }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#BC6C25'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#606C38'}
                            >
                                Formular Solicitare
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ResurseEducationale;