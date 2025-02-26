import React from 'react';
import '../App.css';

function DespreNoi() {
    return (
        <div className="despre-noi-container">
            <div className="island">
                <h1 style={{ color: '#606C38', marginBottom: '20px' }}>Despre Noi</h1>

                <div className="text-content">
                    <p className="paragraph_font" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                        Liceul Teoretic German "Johann Ettinger" este o instituție educațională cu o bogată tradiție în învățământul în limba germană din România.
                    </p>

                    <h2 style={{ color: '#606C38', marginTop: '25px', marginBottom: '15px', fontSize: '1.3rem' }}>Istoric</h2>
                    <p className="paragraph_font">
                        Înființat în anul 1970, liceul nostru a evoluat continuu, adaptându-se cerințelor moderne ale educației, păstrând în același timp valorile tradiționale ale culturii germane. Numele liceului onorează memoria lui Johann Ettinger, o personalitate importantă a comunității germane din Satu Mare.
                    </p>

                    <h2 style={{ color: '#606C38', marginTop: '25px', marginBottom: '15px', fontSize: '1.3rem' }}>Misiunea noastră</h2>
                    <p className="paragraph_font">
                        Ne propunem să oferim elevilor noștri o educație de calitate, într-un mediu stimulativ și multicultural, care să le permită dezvoltarea armonioasă a personalității și dobândirea competențelor necesare pentru a face față provocărilor viitoare.
                    </p>

                    <h2 style={{ color: '#606C38', marginTop: '25px', marginBottom: '15px', fontSize: '1.3rem' }}>Obiective educaționale</h2>
                    <ul>
                        <li>Asigurarea unui învățământ de calitate în limbile germană și română</li>
                        <li>Dezvoltarea competențelor lingvistice și interculturale</li>
                        <li>Promovarea valorilor europene și a dialogului intercultural</li>
                        <li>Stimularea gândirii critice și a creativității</li>
                        <li>Cultivarea respectului pentru diversitate și a toleranței</li>
                    </ul>

                    <h2 style={{ color: '#606C38', marginTop: '25px', marginBottom: '15px', fontSize: '1.3rem' }}>Oferta educațională</h2>
                    <p className="paragraph_font">
                        Liceul nostru oferă programe educaționale complete, de la învățământul primar până la cel liceal, toate având la bază curriculum-ul național adaptat pentru predarea în limba germană.
                    </p>

                    <div style={{
                        marginTop: '20px',
                        padding: '15px',
                        background: '#f8f8f8',
                        borderRadius: '8px',
                        border: '1px solid #DDA15E'
                    }}>
                        <h3 style={{ color: '#606C38', marginBottom: '10px', fontSize: '1.1rem' }}>Niveluri de educație:</h3>
                        <ul>
                            <li>Învățământ primar (clasele 0-IV)</li>
                            <li>Învățământ gimnazial (clasele V-VIII)</li>
                            <li>Învățământ liceal (clasele IX-XII) - profil real și uman</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DespreNoi;