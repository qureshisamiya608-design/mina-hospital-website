
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50" id="appointment">
      <div className="container mx-auto px-4">
        <div className="bg-primary/10 border border-primary/20 rounded-[40px] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden shadow-xl">
          {/* Background decoration */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary opacity-5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
          
          <div className="z-10 lg:w-3/5 text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Schedule your appointment easily at Mina Hospitals.
            </h2>
            <p className="text-gray-600 text-xl mb-12 max-w-2xl leading-relaxed font-light">
              Our streamlined online booking system allows you to quickly and conveniently schedule your visit, ensuring a hassle-free experience from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/appointment')}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-5 px-12 rounded-xl shadow-xl transition-all text-xl"
              >
                Book Appointment Now
              </button>
              <div className="flex items-center space-x-3 opacity-80 justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM13 13h3v-2h-3V8h-2v3H8v2h3v3h2v-3z" />
                </svg>
                <span className="font-display font-bold text-2xl text-primary-dark">MINA Hospital</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 flex justify-center lg:justify-end z-10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white rounded-3xl shadow-lg -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaoMPKc7Xvaw4WcdiPWtHqw9Wh5i_lLDOJ_zu9Eh-jEfTscrNZwgqPhZYYYADVpmXDFV68EgxA5yWuW33hD9LjZ7w3SFRXxzJMbxyCG8M2MT_QW7D-1OT_nqWvR6eMjUYidWfwBhRgK548OJtPUWR_yJ5FZ01H3IKT46RvgAZkFC3thJs8oDp0G7dp3I9M-4f0l2LHqnYjkvHTMRLwBt_S0Z4unWi355BJJ6r7DcjRA62iEWePx76dAvrtZgVg9i04i2rgsUBDmCI" 
                alt="Doctor Consultation" 
                className="rounded-2xl shadow-2xl relative w-full max-w-sm object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
