
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] -ml-36 -mb-36"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/10 rounded-full scale-110 blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
              <div className="w-80 h-80 rounded-full relative z-10 border-4 border-white/20 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Medical Team" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Health Care Excellence</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Why Choose Us</h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="text-5xl md:text-6xl font-display font-bold text-white/20 group-hover:text-secondary/40 transition-colors">01</div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Clinical Excellence</h3>
                  <p className="text-white/80 max-w-lg leading-relaxed text-lg">
                    We deliver the best care through advanced techniques and skilled professionals, ensuring optimal outcomes for every patient.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="text-5xl md:text-6xl font-display font-bold text-white/20 group-hover:text-secondary/40 transition-colors">02</div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Personalized Care</h3>
                  <p className="text-white/80 max-w-lg leading-relaxed text-lg">
                    Every patient is unique. We provide custom-tailored treatment plans to meet your specific health needs at Mina Hospitals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="text-5xl md:text-6xl font-display font-bold text-white/20 group-hover:text-secondary/40 transition-colors">03</div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Quality Standards</h3>
                  <p className="text-white/80 max-w-lg leading-relaxed text-lg">
                    We uphold the highest global quality standards to ensure exceptional care, safety, and hygiene for every visitor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
