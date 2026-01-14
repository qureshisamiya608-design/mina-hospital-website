
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Departments from './pages/Departments';
import Appointment from './pages/Appointment';
import About from './pages/About';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import EmergencyPage from './pages/EmergencyPage';
import EventsPage from './pages/EventsPage';

const ScrollManager: React.FC = () => {
    const location = useLocation();

    // Handle Route Changes for scroll position
    useEffect(() => {
        // Scroll to top on route change unless state dictates otherwise (handled in pages)
        if (!location.state || !(location.state as any).scrollTo) {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollManager />
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/emergency" element={<EmergencyPage />} />
                <Route path="/events" element={<EventsPage />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
