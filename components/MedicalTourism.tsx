
import React from 'react';

const MedicalTourism: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-10">
          <div className="border-2 border-primary/20 bg-primary/5 rounded-full py-3 px-10 shadow-sm">
            <span className="text-gray-800 font-bold text-2xl flex items-center gap-4">
              <i className="fas fa-globe-americas text-primary"></i> 
              FOREIGN <span className="text-primary italic">Medical Tourism</span>
            </span>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Care Without Boundaries</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-12">
          Mina Hospitals – Your Trusted Partner in Foreign Medical Tourism. We deliver world-class healthcare with compassion, expertise, and advanced technology to patients from across the globe.
        </p>
        
        <div className="text-secondary text-8xl opacity-10 animate-pulse">
          <i className="fas fa-plane-departure"></i>
        </div>
      </div>
    </section>
  );
};

export default MedicalTourism;
