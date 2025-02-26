import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer
import Home from './pages/Home';
import DespreNoi from './pages/DespreNoi';
import Activitati from './pages/Activitati';
import Proiecte from './pages/Proiecte';
import GalerieFoto from './pages/GalerieFoto';
import Media from './pages/Media';
import ResurseEducationale from './pages/ResurseEducationale';
import Contact from './pages/Contact';
import './App.css'; // Include global styles
import "./tailwind.css";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/despre-noi" element={<DespreNoi />} />
                        <Route path="/activitati" element={<Activitati />} />
                        <Route path="/proiecte" element={<Proiecte />} />
                        <Route path="/galerie-foto" element={<GalerieFoto />} />
                        <Route path="/media" element={<Media />} />
                        <Route path="/resurse-educaționale" element={<ResurseEducationale />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer /> {/* Ensure Footer is always present */}
            </div>
        </Router>
    );
}

export default App;
