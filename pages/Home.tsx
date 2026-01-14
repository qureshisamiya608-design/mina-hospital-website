
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Specialists from '../components/Specialists';
import Events from '../components/Events';
import PatientInfo from '../components/PatientInfo';
import Testimonials from '../components/Testimonials';
import AppointmentBanner from '../components/AppointmentBanner';
import Accreditation from '../components/Accreditation';
import MedicalTourism from '../components/MedicalTourism';
import OnlineReports from '../components/OnlineReports';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const elementId = (location.state as any).scrollTo;
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
        <Hero />
        <Welcome />
        <WhyChooseUs />
        <Services />
        <Stats />
        <Specialists />
        <Events />
        <PatientInfo />
        <Testimonials />
        <AppointmentBanner />
        <Accreditation />
        <MedicalTourism />
        <FAQ />
        <OnlineReports />
    </>
  );
};

export default Home;
