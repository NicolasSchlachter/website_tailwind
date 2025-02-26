import React from 'react';

function ResurseEducationale() {
    // Sample educational resources
    const resources = [
        {
            id: 1,
            title: "Materiale Didactice Germană",
            description: "Resurse pentru învățarea limbii germane pentru toate nivelurile",
            categories: ["Limbă Germană", "Gramatică", "Vocabular"],
            link: "#"
        },
        {
            id: 2,
            title: "Biblioteca Virtuală de Matematică",
            description: "Colecție de lecții, probleme și soluții pentru toate nivelurile de învățământ",
            categories: ["Matematică", "Algebră", "Geometrie"],
            link: "#"
        },
        {
            id: 3,
            title: "Laboratorul Virtual de Științe",
            description: "Simulări, experimente și tutoriale pentru fizică, chimie și biologie",
            categories: ["Științe", "Fizică", "Chimie", "Biologie"],
            link: "#"
        },
        {
            id: 4,
            title: "Pregătire Bacalaureat",
            description: "Materiale de pregătire pentru examene, modele de subiecte și strategii de învățare",
            categories: ["Examene", "Bacalaureat", "Metodologie"],
            link: "#"
        },
        {
            id: 5,
            title: "Materialele DSD (Deutsches Sprachdiplom)",
            description: "Resurse pentru pregătirea examenului de certificare DSD",
            categories: ["Certificări", "DSD", "Limbă Germană"],
            link: "#"
        }
    ];

    return (
        <main>
            <div className="island">
                <h1 className="text-3xl font-bold mb-6">Resurse Educaționale</h1>

                <div className="text-content">
                    <p className="paragraph_font mb-8">
                        Liceul Teoretic German "Johann Ettinger" oferă o varietate de resurse educaționale pentru a sprijini procesul de învățare al elevilor noștri.
                        Aceste materiale sunt concepute pentru a completa curriculum-ul școlar și pentru a facilita dezvoltarea abilităților lingvistice, științifice și matematice.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 text-left text-[#606C38]">Resurse Disponibile</h2>

                    <div className="grid grid-cols-1 gap-6 mt-4">
                        {resources.map(resource => (
                            <div key={resource.id} className="bg-white p-4 rounded-lg shadow border border-[#DDA15E] hover:shadow-md transition-all">
                                <h3 className="text-xl font-bold text-[#283618]">{resource.title}</h3>
                                <p className="text-[#606C38] mt-2">{resource.description}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {resource.categories.map((category, idx) => (
                                        <span key={idx} className="bg-[#FEFAE0] text-[#606C38] text-sm px-2 py-1 rounded">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={resource.link}
                                    className="inline-block mt-4 bg-[#606C38] text-white px-4 py-2 rounded hover:bg-[#BC6C25] transition-colors"
                                >
                                    Accesează
                                </a>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-left text-[#606C38]">Platforme Online</h2>
                    <p className="paragraph_font mb-4">
                        Elevii noștri au acces la următoarele platforme educaționale:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="paragraph_font mb-2">Platforma școlară internă pentru materiale de curs și teme</li>
                        <li className="paragraph_font mb-2">Biblioteca digitală cu acces la cărți și resurse în limbile germană, română și engleză</li>
                        <li className="paragraph_font mb-2">Platforme de pregătire pentru examenele de certificare lingvistică</li>
                        <li className="paragraph_font mb-2">Platforme de învățare interactivă pentru matematică și științe</li>
                    </ul>

                    <div className="bg-[#FEFAE0] p-6 rounded-lg border border-[#DDA15E] mt-8">
                        <h3 className="text-xl font-bold text-[#283618] mb-3">Solicitare Materiale Suplimentare</h3>
                        <p className="paragraph_font mb-4">
                            Pentru a solicita resurse educaționale suplimentare, vă rugăm să completați formularul de mai jos sau să contactați bibliotecarul școlii.
                        </p>
                        <button className="bg-[#606C38] text-white px-4 py-2 rounded hover:bg-[#BC6C25] transition-colors">
                            Formular Solicitare
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ResurseEducationale;