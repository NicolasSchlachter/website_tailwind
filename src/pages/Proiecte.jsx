import React from 'react';

function Proiecte() {
    const projects = [
        {
            title: "Erasmus+: Diversitate culturală în Europa",
            year: "2024-2025",
            description: "Proiect de schimb intercultural cu școli partenere din Germania și Austria, focalizat pe diversitatea culturală și înțelegerea tradițiilor europene.",
            participants: "Elevi din clasele IX-XI",
            status: "În desfășurare"
        },
        {
            title: "Grădina școlii - un spațiu verde și educativ",
            year: "2023-2024",
            description: "Elevii au amenajat o grădină în curtea școlii, învățând despre sustenabilitate și protecția mediului prin activități practice.",
            participants: "Elevi din clasele V-VIII",
            status: "Finalizat"
        },
        {
            title: "Robotica pentru începători",
            year: "2024",
            description: "Un club de robotică destinat elevilor pasionați de tehnologie și programare, unde aceștia construiesc și programează roboți pentru diverse competiții.",
            participants: "Elevi din clasele VII-X",
            status: "În desfășurare"
        },
        {
            title: "Festivalul cultural german",
            year: "Anual",
            description: "Un eveniment tradițional care sărbătorește cultura germană prin muzică, dans, teatru și gastronomie, organizat de elevii liceului.",
            participants: "Toți elevii școlii",
            status: "Eveniment anual"
        }
    ];

    return (
        <main>
            <div className="island">
                <h1 style={{ color: '#606C38', marginBottom: '20px' }}>Proiecte</h1>

                <p className="paragraph_font">
                    Proiectele educaționale sunt o componentă esențială a programului nostru, oferind elevilor oportunitatea de a aplica cunoștințele teoretice în contexte practice, de a dezvolta abilități de colaborare și de a contribui la comunitatea locală și internațională.
                </p>

                <div style={{ marginTop: '30px' }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{
                            marginBottom: '25px',
                            padding: '20px',
                            backgroundColor: index % 2 === 0 ? '#f9f9f5' : '#f5f5f0',
                            borderRadius: '10px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            border: '1px solid #DDA15E'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <h2 style={{ color: '#606C38', fontSize: '1.2rem', margin: 0 }}>{project.title}</h2>
                                <span style={{
                                    backgroundColor: project.status === 'În desfășurare' ? '#606C38' :
                                        project.status === 'Finalizat' ? '#DDA15E' : '#BC6C25',
                                    color: 'white',
                                    padding: '5px 10px',
                                    borderRadius: '15px',
                                    fontSize: '0.8rem'
                                }}>
                                    {project.status}
                                </span>
                            </div>

                            <p style={{ color: '#606C38', fontStyle: 'italic', marginBottom: '10px' }}>
                                Anul: {project.year} | Participanți: {project.participants}
                            </p>

                            <p className="paragraph_font">{project.description}</p>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '30px',
                    padding: '15px',
                    background: '#f8f8f8',
                    borderRadius: '8px',
                    border: '1px solid #DDA15E'
                }}>
                    <h3 style={{ color: '#606C38', marginBottom: '10px', fontSize: '1.1rem' }}>Propuneri de proiecte</h3>
                    <p className="paragraph_font">
                        Încurajăm elevii și profesorii să vină cu idei noi de proiecte educaționale. Propunerile pot fi trimise la adresa de email a școlii sau discutate direct cu coordonatorul de proiecte.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Proiecte;