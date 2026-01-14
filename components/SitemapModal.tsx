
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SitemapModal: React.FC<SitemapModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNavigation = (path: string, id?: string) => {
    if (id) {
      navigate(path, { state: { scrollTo: id } });
    } else {
      navigate(path);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto" role="dialog" aria-modal="true">
       <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-100 relative">
           <div className="bg-primary px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-white font-display">Sitemap</h3>
            <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h4 className="font-bold text-primary mb-3 border-b border-gray-100 pb-2">Main Pages</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><button onClick={() => handleNavigation('/')} className="hover:text-secondary transition-colors text-left w-full">Home</button></li>
                        <li><button onClick={() => handleNavigation('/about')} className="hover:text-secondary transition-colors text-left w-full">About Us</button></li>
                        <li><button onClick={() => handleNavigation('/mission')} className="hover:text-secondary transition-colors text-left w-full">Our Mission</button></li>
                        <li><button onClick={() => handleNavigation('/vision')} className="hover:text-secondary transition-colors text-left w-full">Our Vision</button></li>
                        <li><button onClick={() => handleNavigation('/doctors')} className="hover:text-secondary transition-colors text-left w-full">Doctors</button></li>
                        <li><button onClick={() => handleNavigation('/departments')} className="hover:text-secondary transition-colors text-left w-full">Departments</button></li>
                        <li><button onClick={() => handleNavigation('/appointment')} className="hover:text-secondary transition-colors text-left w-full">Book Appointment</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-3 border-b border-gray-100 pb-2">Sections</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><button onClick={() => handleNavigation('/', 'services')} className="hover:text-secondary transition-colors text-left w-full">Services</button></li>
                        <li><button onClick={() => handleNavigation('/', 'doctors')} className="hover:text-secondary transition-colors text-left w-full">Specialists</button></li>
                        <li><button onClick={() => handleNavigation('/', 'events')} className="hover:text-secondary transition-colors text-left w-full">Events</button></li>
                         <li><button onClick={() => handleNavigation('/', 'reports')} className="hover:text-secondary transition-colors text-left w-full">Online Reports</button></li>
                        <li><button onClick={() => handleNavigation('/', 'faq')} className="hover:text-secondary transition-colors text-left w-full">FAQ</button></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapModal;
