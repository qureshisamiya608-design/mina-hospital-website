
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl font-bold text-primary mb-16">Words of praise from our satisfied patients</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-2xl relative border border-gray-100">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <i className="fas fa-quote-left text-3xl text-white"></i>
            </div>
            
            <p className="text-gray-700 italic text-2xl leading-relaxed mb-10 pt-4 font-light">
              "The care I received at Mina Hospitals was exceptional. The doctors were not only knowledgeable but also incredibly kind and patient. I felt safe and well-cared for throughout my entire recovery process. The staff treated me like family."
            </p>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-md">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8KVVihilgdlx2FhLEB3tFFLzzOxKjXw57uQQlQn-NdKM4jI2CnKbH7pLltk72KCQwOuQOMcsbxueXmltHWBEEpY2p0WkM1hkoCPiwCx6PNJjn32ZbuTElVPZ4azUu3RLFwP6vkHs80KUqyQAs0UJreZVNdarUDD4Fbj672aCN-wUQ7Q3Rnye4w-EHLZcR0eEiT-NoXUmSSR5artTi9CTPozRBgyY5guqOpjyq1Nk8vsoxy4On17hjV-DU1GE1VVuYw5f1_aRSlSM" 
                  alt="Patient" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-xl text-gray-800">Rajeshwari Rao</div>
                <div className="text-primary font-bold text-sm tracking-widest uppercase mt-1">Recovered Patient</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-primary text-white font-bold px-8 py-3 rounded-md hover:bg-primary-dark transition-all shadow-md">
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
