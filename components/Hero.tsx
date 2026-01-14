
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Layered Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920" 
          alt="Mina Multi Speciality Hospital Hyderabad Priority Care" 
          className="w-full h-full object-cover"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001A33]/90 via-[#001A33]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001A33] via-transparent to-transparent opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Tagline */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-[2px] w-12 bg-secondary rounded-full"></span>
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              Healthcare Excellence in Hyderabad
            </span>
          </div>

          {/* H1 Headline for SEO */}
          <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.1] text-white mb-8">
            Best Multi & <br/>
            Super <span className="text-secondary italic underline decoration-secondary/30 underline-offset-8">Speciality</span> Hospital.
          </h1>

          {/* Subheadline/H2 for SEO */}
          <h2 className="text-lg md:text-2xl mb-12 text-white/80 font-medium max-w-2xl leading-relaxed">
            Leading multispeciality hospital in Mehdipatnam & Shivarampally. Experience world-class medical expertise fused with a deep commitment to affordable patient care.
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Button 
              size="xl"
              onClick={() => navigate('/appointment')}
              className="font-bold shadow-2xl bg-secondary hover:bg-secondary/90 text-white rounded-full border-none px-12 transition-all hover:scale-105 active:scale-95"
            >
              Book Priority Visit <i className="fas fa-calendar-check ml-3"></i>
            </Button>
            <Button 
              size="xl"
              variant="outline"
              onClick={scrollToServices}
              className="bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white backdrop-blur-md rounded-full px-12 transition-all"
            >
              Our Medical Specialities
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 flex flex-wrap gap-10 items-center opacity-70">
            <div className="flex items-center space-x-3">
              <i className="fas fa-shield-check text-secondary text-2xl"></i>
              <span className="text-white font-bold text-xs uppercase tracking-widest">NABH Accredited</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-user-md text-secondary text-2xl"></i>
              <span className="text-white font-bold text-xs uppercase tracking-widest">30+ Top Specialists</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-clock text-secondary text-2xl"></i>
              <span className="text-white font-bold text-xs uppercase tracking-widest">24/7 Emergency Hospital</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Explore</span>
        <i className="fas fa-chevron-down text-white"></i>
      </div>
    </section>
  );
};

export default Hero;
