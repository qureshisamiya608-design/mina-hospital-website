
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmergencyPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="bg-red-700 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 animate-pulse">
            <i className="fas fa-ambulance text-4xl"></i>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">24/7 Emergency & Trauma Care Hyderabad</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Our trauma center provides every second counts care with 24/7 Critical Care Specialists and Mobile ICU Ambulances.
          </p>
          <div className="mt-8">
             <a href="tel:04023531881" className="inline-flex items-center bg-white text-red-600 hover:bg-red-50 font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105">
                <i className="fas fa-phone-alt mr-3 text-xl animate-bounce scale-x-[-1]"></i>
                <span className="text-2xl">040 2353 1881</span>
             </a>
             <p className="mt-3 text-sm opacity-80 font-bold tracking-wider">EMERGENCY HOTLINE - HYDERABAD</p>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
             <div className="order-2 md:order-1">
                <h2 className="font-display text-3xl font-bold text-gray-800 mb-6">Emergency Hospital in Hyderabad: Every Second Counts</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    MINA Hospitals provides comprehensive emergency care for poly-trauma, cardiac emergencies, stroke, and pediatric emergencies in Mehdipatnam and Attapur.
                </p>
                <ul className="space-y-4">
                    {[
                        'Dedicated Accident & Emergency Care Team',
                        'Advanced Cardiac Life Support (ACLS) Ambulances',
                        '24/7 Diagnostics (CT, Ultrasound, Lab)',
                        'Immediate access to Operation Theatres',
                        'Stroke & Cardiac Triage Protocols'
                    ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 font-medium">
                            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4 shrink-0">
                                <i className="fas fa-check"></i>
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
             </div>
             <div className="order-1 md:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                        src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800&h=600" 
                        alt="Best Emergency Room in Hyderabad MINA Hospital" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-red-600/10"></div>
                </div>
             </div>
          </div>

          {/* Location Specifics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-red-500 shadow-sm">
                <div className="flex items-center mb-4">
                    <i className="fas fa-map-marker-alt text-red-500 text-2xl mr-3"></i>
                    <h3 className="font-bold text-xl text-gray-800">Trauma Center Attapur (Shivarampally)</h3>
                </div>
                <p className="text-gray-600 mb-4">
                    Equipped with a dedicated Level-1 Trauma Center near the PVNR Expressway (Pillar 254) to handle highway accidents and critical trauma cases.
                </p>
                <p className="font-bold text-gray-800">Key Services:</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                    <li>24/7 Casualty & Trauma Center</li>
                    <li>Orthopedic Emergency & Joint Care</li>
                    <li>Critical Care ICU Support</li>
                </ul>
                <div className="mt-6">
                     <a 
                      href="https://www.google.com/maps/search/?api=1&query=Mina+Super+Speciality+Hospital+Shivarampally" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-600 font-bold hover:underline"
                   >
                      Get Directions to Attapur Branch <i className="fas fa-arrow-right ml-1"></i>
                   </a>
                </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary shadow-sm">
                <div className="flex items-center mb-4">
                    <i className="fas fa-map-marker-alt text-primary text-2xl mr-3"></i>
                    <h3 className="font-bold text-xl text-gray-800">Emergency Hospital Mehdipatnam</h3>
                </div>
                <p className="text-gray-600 mb-4">
                    Handles medical emergencies, pediatric emergencies, and urgent obstetric care (Labor & Delivery) in the heart of Mehdipatnam.
                </p>
                <p className="font-bold text-gray-800">Key Services:</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                    <li>Medical ICU (MICU)</li>
                    <li>Emergency C-Section</li>
                    <li>Poisoning Management</li>
                </ul>
                <div className="mt-6">
                     <a 
                      href="https://www.google.com/maps/search/?api=1&query=Mina+Multi+Speciality+Hospital+Mehdipatnam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline"
                   >
                      Get Directions to Mehdipatnam Branch <i className="fas fa-arrow-right ml-1"></i>
                   </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambulance */}
      <section className="py-20 bg-gray-900 text-white relative">
         <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
                <h2 className="font-display text-3xl font-bold mb-4 text-red-500">Ambulance Services Hyderabad</h2>
                <h3 className="text-4xl font-bold mb-6">Mobile ICU On Wheels</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Our ACLS ambulances are fully equipped Mobile ICUs staffed with trained paramedics to stabilize patients during transit across Hyderabad.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                        <i className="fas fa-heartbeat text-red-500 text-2xl mb-2"></i>
                        <h4 className="font-bold">Cardiac Monitors</h4>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                        <i className="fas fa-lungs text-red-500 text-2xl mb-2"></i>
                        <h4 className="font-bold">Ventilators</h4>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                        <i className="fas fa-syringe text-red-500 text-2xl mb-2"></i>
                        <h4 className="font-bold">Infusion Pumps</h4>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                        <i className="fas fa-user-nurse text-red-500 text-2xl mb-2"></i>
                        <h4 className="font-bold">Trauma Paramedics</h4>
                    </div>
                </div>
            </div>
             <div className="lg:w-1/2">
                <img 
                    src="https://images.unsplash.com/photo-1606166325683-16371f98eb6c?auto=format&fit=crop&q=80&w=800&h=600" 
                    alt="24/7 Ambulance Service Hyderabad" 
                    className="rounded-3xl shadow-2xl opacity-90"
                />
            </div>
         </div>
      </section>
    </div>
  );
};

export default EmergencyPage;
