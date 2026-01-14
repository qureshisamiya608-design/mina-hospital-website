
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Vision: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="bg-[#1A2521] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block animate-fade-in-up">Future Outlook</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Vision</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            "To be regionally respected in providing excellence in personalized patient care with 24/7 availability."
          </p>
        </div>
      </div>

      {/* Section 1: Regional Respect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                <div className="md:w-1/2">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform -rotate-3"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600" 
                            alt="Hospital Excellence" 
                            className="relative rounded-2xl shadow-xl w-full"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fas fa-award text-primary text-xl"></i>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-gray-800 mb-6">Regional Excellence</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        We aspire to be the benchmark for healthcare in the Hyderabad region. By continuously upgrading our facilities, training our staff in the latest medical protocols, and adhering to global safety standards (NABH), we aim to earn and keep the trust of our community.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Section 2: 24/7 Availability */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                <div className="md:w-1/2">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-secondary/10 rounded-2xl transform rotate-3"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1516574187841-693083f0498c?auto=format&fit=crop&q=80&w=800&h=600" 
                            alt="24/7 Care" 
                            className="relative rounded-2xl shadow-xl w-full"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fas fa-clock text-secondary text-xl"></i>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-gray-800 mb-6">Always Available, Always Caring</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        Sickness doesn't follow a schedule, and neither do we. Our vision includes a robust, round-the-clock infrastructure where emergency care, pharmacy, diagnostics, and critical support are available 24 hours a day, 7 days a week.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700 font-medium">
                            <i className="fas fa-check-circle text-secondary mr-3"></i> 24/7 Trauma Center
                        </li>
                        <li className="flex items-center text-gray-700 font-medium">
                            <i className="fas fa-check-circle text-secondary mr-3"></i> 24/7 Pharmacy & Labs
                        </li>
                        <li className="flex items-center text-gray-700 font-medium">
                            <i className="fas fa-check-circle text-secondary mr-3"></i> 24/7 Ambulance Fleet
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Section 3: Personalized Care */}
      <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-8">Personalized Patient Care</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                      <i className="fas fa-user-nurse text-3xl text-primary mb-4"></i>
                      <h3 className="font-bold text-lg mb-2">Individual Attention</h3>
                      <p className="text-sm text-gray-600">Tailored treatment plans that respect individual patient needs and history.</p>
                  </div>
                  <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                      <i className="fas fa-comments text-3xl text-primary mb-4"></i>
                      <h3 className="font-bold text-lg mb-2">Clear Communication</h3>
                      <p className="text-sm text-gray-600">Doctors who listen and explain diagnoses in simple, understandable terms.</p>
                  </div>
                  <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                      <i className="fas fa-heart text-3xl text-primary mb-4"></i>
                      <h3 className="font-bold text-lg mb-2">Emotional Support</h3>
                      <p className="text-sm text-gray-600">A compassionate environment that promotes healing and comfort.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Vision;
