
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FeedbackModal from './FeedbackModal';
import { PrivacyPolicyModal, TermsOfServiceModal } from './LegalModals';
import SitemapModal from './SitemapModal';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-[#111816] text-gray-300 pt-20 pb-10 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo Column */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM13 13h3v-2h-3V8h-2v3H8v2h3v3h2v-3z" />
              </svg>
              <div>
                <h2 className="font-display text-2xl font-bold text-white leading-none">MINA</h2>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Multi & Super Speciality Hospitals</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Compassion and Integrity. We provide accessible and high-quality medical services that are affordable for all, ensuring "Healthcare Excellence" for the Hyderabad region.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'fab fa-facebook-f', color: 'hover:bg-blue-600', link: 'https://www.facebook.com/hexahealth' },
                { icon: 'fab fa-twitter', color: 'hover:bg-sky-500', link: 'https://twitter.com/hexahealth' },
                { icon: 'fab fa-instagram', color: 'hover:bg-pink-600', link: 'https://www.instagram.com/hexahealth' },
                { icon: 'fab fa-linkedin-in', color: 'hover:bg-blue-700', link: 'https://www.linkedin.com/company/hexahealth' },
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all ${item.color} text-white`}>
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-primary font-bold mb-8 uppercase text-xs tracking-[0.2em]">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-primary transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-3 text-primary/40"></i>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-primary transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-3 text-primary/40"></i>About Us</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-primary transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-3 text-primary/40"></i>Departments</a></li>
              <li>
                  <a href="/doctors" onClick={(e) => { e.preventDefault(); navigate('/doctors'); }} className="hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right text-[10px] mr-3 text-primary/40"></i>Our Doctors
                  </a>
              </li>
              <li>
                  <a href="/events" onClick={(e) => { e.preventDefault(); navigate('/events'); }} className="hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right text-[10px] mr-3 text-primary/40"></i>Events
                  </a>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h3 className="text-primary font-bold mb-8 uppercase text-xs tracking-[0.2em]">Our Locations</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1.5 mr-4 text-primary text-lg"></i>
                <span className="leading-relaxed">
                  <strong className="text-white block mb-1">Mehdipatnam Branch</strong>
                  Opp. Okaz Complex, Royal Colony,<br/>
                  Mehdipatnam, Hyderabad - 500006<br/>
                  <span className="text-gray-400 text-xs mt-1 block">
                    <i className="fas fa-phone-alt mr-2 text-primary/70 scale-x-[-1]"></i>
                    +91-7396084445, +91-7396084446,<br/>
                    <span className="ml-6">040-35262700</span>
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1.5 mr-4 text-primary text-lg"></i>
                <span className="leading-relaxed">
                  <strong className="text-white block mb-1">Shivarampally Branch</strong>
                  Attapur, Pillar No. 254,<br/>
                  Shivarampalli, Hyderabad - 500052
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-4 text-primary text-lg scale-x-[-1]"></i>
                <div>
                   <span className="text-lg font-bold text-white block">040 2353 1881</span>
                   <span className="text-xs text-red-400 font-bold block mt-1">Emergency: +91 73960 84445</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Action Column */}
          <div>
            <h3 className="text-primary font-bold mb-8 uppercase text-xs tracking-[0.2em]">Patient Portal</h3>
            <div className="space-y-4">
              <Button 
                variant="secondary"
                onClick={(e: any) => handleNavClick(e, 'reports')}
                className="w-full justify-between bg-white text-gray-900 hover:bg-gray-200"
              >
                Online Reports <i className="fas fa-file-medical text-primary"></i>
              </Button>
              <Button 
                onClick={() => navigate('/appointment')}
                className="w-full justify-between"
              >
                Book Appointment <i className="fas fa-calendar-check"></i>
              </Button>
              <Button 
                variant="outline"
                onClick={() => setIsFeedbackOpen(true)}
                className="w-full justify-between border-white/10 text-white bg-transparent hover:bg-white/10 hover:text-white"
              >
                Feedback <i className="fas fa-comment-dots"></i>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-bold uppercase tracking-wider">
          <p>© 2024 Mina Multi & Super Speciality Hospitals. All Rights Reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</button>
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors uppercase tracking-wider">Terms of Service</button>
            <button onClick={() => setIsSitemapOpen(true)} className="hover:text-white transition-colors uppercase tracking-wider">Sitemap</button>
          </div>
        </div>
      </div>
      
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <SitemapModal isOpen={isSitemapOpen} onClose={() => setIsSitemapOpen(false)} />
    </footer>
  );
};

export default Footer;
