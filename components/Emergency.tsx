
import React from 'react';

const Emergency: React.FC = () => {
  return (
    <section className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAHpOfbGFqD5bAnsG4lD0Vsf2b5PLjQOdMgthqar1zU2oDKsC9mpXQz64iXjkyEg07Agz1oMaTGTyU_fYtXshfWtXAmINYlS7wwb98LY2GPDRzyyz3gKmGOYekDv9XZZST167DytVlNlEWb9YsmK-a7K188GQzyYqTC3mmsNJkgeoIllcKuiV-Z_XtH0WsOaqD7_2a6_OiTSNhE_hNWPboQD2SheOVwIfjoqu6p2IbnnMa_s-_8yBuNbdZD-LcyvcfjGX4LXnhE7g')" }}>
      <div className="absolute inset-0 bg-gray-900/80 md:bg-gradient-to-r md:from-gray-900 md:via-gray-900/70 md:to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h2 className="font-display text-5xl font-bold text-secondary mb-10">Emergency?</h2>
          <ul className="space-y-6 mb-12">
            {[
              { icon: 'fa-user-md', text: 'Dedicated Accident & Emergency Care Team' },
              { icon: 'fa-ambulance', text: 'Comprehensive Trauma Care' },
              { icon: 'fa-clock', text: '24/7 Specialist Care' },
              { icon: 'fa-heartbeat', text: 'Advanced Cardiac Life Support Ambulance' },
            ].map((item, i) => (
              <li key={i} className="flex items-center text-xl font-light">
                <span className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-5">
                  <i className={`fas ${item.icon} text-secondary`}></i>
                </span>
                {item.text}
              </li>
            ))}
          </ul>
          <a href="tel:04023531881" className="inline-flex items-center bg-secondary hover:bg-yellow-600 text-white font-bold py-5 px-10 rounded-full shadow-2xl transition-all transform hover:scale-105">
            <i className="fas fa-phone-alt mr-4 text-2xl animate-bounce scale-x-[-1]"></i> 
            <span className="text-2xl">040 2353 1881</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
