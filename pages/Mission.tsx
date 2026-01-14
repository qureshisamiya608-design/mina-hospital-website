
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Mission: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block animate-fade-in-up">Our Purpose</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Mission</h1>
          <p className="text-xl text-primary-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            "To provide comprehensive and cost-effective care for the health and happiness of the community."
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Pillar 1 */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">Comprehensive Care</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in treating the whole person, not just the symptoms. Our multidisciplinary team collaborates to ensure every aspect of a patient's physical and emotional well-being is addressed.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary text-2xl group-hover:bg-secondary group-hover:text-white transition-colors">
                <i className="fas fa-rupee-sign"></i>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">Cost-Effective Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Healthcare is a right, not a privilege. We are committed to maintaining affordable consultation fees (₹150–₹250) and transparent billing practices to ensure no one is denied care due to financial constraints.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">Community Happiness</h3>
              <p className="text-gray-600 leading-relaxed">
                A healthy community is a happy community. Through outreach programs, health camps, and patient education, we strive to uplift the overall health standards of Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Pledge Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <i className="fas fa-quote-left text-4xl text-secondary mb-6 block opacity-50"></i>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-8">
            "We pledge to serve every individual with dignity, respecting their needs and offering the highest standard of medical ethics."
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl font-bold text-gray-800 mb-6">Join us in our mission for better health</h2>
            <button 
                onClick={() => navigate('/appointment')}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
                Book an Appointment
            </button>
        </div>
      </section>
    </div>
  );
};

export default Mission;
