import React from "react";

function Home() {
    return (
        <main>
            <div className="island">
                <h1 style={{ color: '#606C38', marginBottom: '20px' }}>Liceul Teoretic German "Johann Ettinger"</h1>
                <p className="paragraph_font">Bine ați venit pe site-ul nostru! Liceul Teoretic German "Johann Ettinger" din Satu Mare oferă educație de calitate în limba germană și română.</p>
                <div style={{ marginTop: '30px' }}>
                    <img
                        src="/assets/school-front.jpg"
                        alt="Liceul Teoretic German Johann Ettinger"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
                <div className="text-content" style={{ marginTop: '30px' }}>
                    <p className="paragraph_font">Fondată în 1970, școala noastră are o tradiție îndelungată în educația bilingvă și în promovarea valorilor multiculturale.</p>
                    <p className="paragraph_font">Oferim educație de la nivel preșcolar până la nivel liceal, conform curriculum-ului românesc și german.</p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ color: '#606C38', marginBottom: '15px', fontSize: '1.5rem' }}>Anunțuri recente</h2>
                    <div className="text-content">
                        <div style={{
                            padding: '15px',
                            background: '#f8f8f8',
                            borderRadius: '8px',
                            border: '1px solid #DDA15E',
                            marginBottom: '10px'
                        }}>
                            <p className="paragraph_font" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Înscrieri anul școlar 2025-2026</p>
                            <p className="paragraph_font">Înscrierile pentru noul an școlar au început. Vă rugăm să consultați secțiunea Contact pentru detalii.</p>
                        </div>
                        <div style={{
                            padding: '15px',
                            background: '#f8f8f8',
                            borderRadius: '8px',
                            border: '1px solid #DDA15E'
                        }}>
                            <p className="paragraph_font" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Olimpiada de Limba Germană</p>
                            <p className="paragraph_font">Felicitări elevilor noștri pentru rezultatele excelente obținute la Olimpiada Națională de Limba Germană!</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;