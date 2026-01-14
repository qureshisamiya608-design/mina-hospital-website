
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    
    if (id === 'doctors-page') {
        navigate('/doctors');
        setIsMenuOpen(false);
        return;
    }

    if (id === 'departments-page') {
        navigate('/departments');
        setIsMenuOpen(false);
        return;
    }

    if (id === 'appointment-page') {
        navigate('/appointment');
        setIsMenuOpen(false);
        return;
    }

    if (id === 'emergency-page') {
        navigate('/emergency');
        setIsMenuOpen(false);
        return;
    }

    if (id === 'events-page') {
        navigate('/events');
        setIsMenuOpen(false);
        return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:04023531881" className="flex items-center hover:text-secondary transition-colors">
              <i className="fas fa-phone-alt mr-2 scale-x-[-1]"></i> 040 2353 1881
            </a>
            <span className="flex items-center"><i className="fas fa-envelope mr-2"></i> Hello@hexahealth.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/hexahealth" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/hexahealth" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/hexahealth" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/hexahealth" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-background/95 backdrop-blur-md shadow-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div onClick={(e: any) => handleNavClick(e, 'home')} className="flex items-center space-x-3 group cursor-pointer">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM13 13h3v-2h-3V8h-2v3H8v2h3v3h2v-3z" />
            </svg>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground leading-none group-hover:text-primary transition-colors">MINA</h1>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase group-hover:text-secondary transition-colors">Multi & Super Speciality Hospitals</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <Button variant="ghost" onClick={(e) => handleNavClick(e, 'home')} className="font-bold text-primary">Home</Button>
            <Button variant="ghost" onClick={(e) => handleNavClick(e, 'about')}>About Us</Button>
            <Button variant="ghost" onClick={(e) => handleNavClick(e, 'departments-page')} className={`${location.pathname === '/departments' ? 'text-primary font-bold' : ''}`}>Departments</Button>
            <Button variant="ghost" onClick={(e) => handleNavClick(e, 'doctors-page')} className={`${location.pathname === '/doctors' ? 'text-primary font-bold' : ''}`}>Our Doctors</Button>
            <Button variant="ghost" onClick={(e) => handleNavClick(e, 'events-page')} className={`${location.pathname === '/events' ? 'text-primary font-bold' : ''}`}>Events</Button>
            <Button variant="ghost" onClick={(e) => handleNavClick(e, 'emergency-page')} className={`text-red-600 hover:text-red-700 hover:bg-red-50 ${location.pathname === '/emergency' ? 'font-bold bg-red-50' : ''}`}>Emergency</Button>
            
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search..." 
                className="w-40 h-9 rounded-full bg-secondary/5 border-secondary/20 focus-visible:ring-secondary pl-9"
              />
              <i className="fas fa-search absolute left-3 top-2.5 text-muted-foreground text-xs"></i>
            </div>
            
            <Button 
              variant="secondary"
              onClick={() => navigate('/appointment')}
              className="font-bold shadow-sm"
            >
              Book Appointment
            </Button>
          </div>
          
          <Button 
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'max-h-screen py-6' : 'max-h-0'} lg:hidden overflow-hidden transition-all duration-300 bg-background border-t border-border px-4`}>
          <div className="flex flex-col space-y-2">
            <Button variant="ghost" className="justify-start w-full" onClick={(e) => handleNavClick(e, 'home')}>Home</Button>
            <Button variant="ghost" className="justify-start w-full" onClick={(e) => handleNavClick(e, 'about')}>About Us</Button>
            <Button variant="ghost" className="justify-start w-full" onClick={(e) => handleNavClick(e, 'departments-page')}>Departments</Button>
            <Button variant="ghost" className="justify-start w-full" onClick={(e) => handleNavClick(e, 'doctors-page')}>Our Doctors</Button>
            <Button variant="ghost" className="justify-start w-full" onClick={(e) => handleNavClick(e, 'events-page')}>Events</Button>
            <Button variant="ghost" className="justify-start w-full text-red-600 font-bold" onClick={(e) => handleNavClick(e, 'emergency-page')}>Emergency</Button>
            <Button 
              className="w-full mt-4"
              onClick={() => {
                navigate('/appointment');
                setIsMenuOpen(false);
              }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
