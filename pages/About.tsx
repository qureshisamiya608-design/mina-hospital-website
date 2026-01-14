
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-0">
      {/* Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Top Doctors in Hyderabad | MINA Hospital</h1>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Providing accessible, affordable, and high-quality healthcare to the Hyderabad community with compassion and integrity for over 25 years.
          </p>
        </div>
      </div>

      {/* Main Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
             <div className="md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuVHqwcKUs2kfWa3SRVRZafUN71gZzxrqqW4zdzGOzP83Is-IEwE_9x_IFMnHT9vP4ib6XzjOwLSSdCk3Ut_EbMqyKLx76XkC5msAWn2bsmsflEi3yfH0OcNLlfmA5NFVPMscVHxf-uNXt3T_I3U_iLstC4tSVHyqs_uNWJAmakB2UuGfjd72TEpaKLCaBPyVpOe0ukaBAwU-Skb3gvxqcwTOOyDtBeZ0nOdJ2WXyay3O0jTsmu53yrinnSLOzpa44OkXXL1hW4ok" alt="MINA Multi Speciality Hospital Building Hyderabad" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/20"></div>
                </div>
             </div>
             <div className="md:w-1/2">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Our Legacy</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-6">Best Hospital in Mehdipatnam: A Legacy of Care</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    MINA Multi Speciality Hospital was founded to make world-class healthcare accessible to everyone in Hyderabad. We bridge the gap between corporate quality and community prices.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                    With our branches in Mehdipatnam and Shivarampally, we have earned the trust of lakhs of patients through transparent practices, expert doctors, and a patient-first approach that defines "Healthcare Excellence."
                </p>
             </div>
          </div>

          {/* Two Campuses - Local SEO Optimized */}
          <div className="mb-20">
             <h2 className="font-display text-3xl font-bold text-center text-gray-800 mb-12">Multispeciality Hospital Branches in Hyderabad</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full">
                   <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary text-2xl">
                      <i className="fas fa-hospital-alt"></i>
                   </div>
                   <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">Mehdipatnam Branch</h3>
                   <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                      Located behind Hukas Complex, Royal Colony, our Mehdipatnam branch is the preferred multispeciality hospital for general medicine, specialized surgeries, and outpatient care.
                   </p>
                   <ul className="space-y-2 text-gray-700 mb-8">
                      <li className="flex items-center"><i className="fas fa-check text-secondary mr-2"></i> General Surgery & Laparoscopy</li>
                      <li className="flex items-center"><i className="fas fa-check text-secondary mr-2"></i> Best Gynecologist Mehdipatnam</li>
                      <li className="flex items-center"><i className="fas fa-check text-secondary mr-2"></i> Pediatric Specialist Clinic</li>
                   </ul>
                   <a 
                      href="https://www.google.com/maps/search/?api=1&query=Mina+Multi+Speciality+Hospital+Mehdipatnam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-white border border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-sm"
                   >
                      <i className="fas fa-map-marked-alt mr-2"></i> Location: Mehdipatnam Branch
                   </a>
                </div>

                <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full">
                   <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary text-2xl">
                      <i className="fas fa-ambulance"></i>
                   </div>
                   <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">Shivarampally (Attapur) Branch</h3>
                   <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                      Located at Pillar No. 254, Attapur, this Super Speciality Unit is equipped for severe trauma cases, orthopedics, and critical care near the PVNR Expressway.
                   </p>
                    <ul className="space-y-2 text-gray-700 mb-8">
                      <li className="flex items-center"><i className="fas fa-check text-secondary mr-2"></i> 24/7 Trauma & Emergency Hospital</li>
                      <li className="flex items-center"><i className="fas fa-check text-secondary mr-2"></i> Orthopedic & Joint Replacement</li>
                      <li className="flex items-center"><i className="fas fa-check text-secondary mr-2"></i> Expert Critical Care Unit (ICU)</li>
                   </ul>
                   <a 
                      href="https://www.google.com/maps/search/?api=1&query=Mina+Super+Speciality+Hospital+Shivarampally" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-white border border-secondary text-secondary font-bold py-3 rounded-xl hover:bg-secondary hover:text-white transition-all flex items-center justify-center shadow-sm"
                   >
                      <i className="fas fa-map-marked-alt mr-2"></i> Location: Shivarampally Branch
                   </a>
                </div>
             </div>
          </div>

          {/* Values */}
          <div className="bg-primary rounded-3xl p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 text-3xl">
                        <i className="fas fa-heart"></i>
                    </div>
                    <h3 className="font-bold text-xl mb-4">Compassion</h3>
                    <p className="opacity-80 leading-relaxed">Personalized care that respects every patient's dignity and individual health needs.</p>
                </div>
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 text-3xl">
                        <i className="fas fa-rupee-sign"></i>
                    </div>
                    <h3 className="font-bold text-xl mb-4">Affordable Price</h3>
                    <p className="opacity-80 leading-relaxed">Quality healthcare in Hyderabad at transparent, economy-conscious rates (₹150-₹250 consultations).</p>
                </div>
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 text-3xl">
                        <i className="fas fa-star"></i>
                    </div>
                    <h3 className="font-bold text-xl mb-4">Clinical Excellence</h3>
                    <p className="opacity-80 leading-relaxed">Upgraded technology and skills to ensure the best surgical and medical outcomes for our community.</p>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
             <h2 className="font-display text-3xl font-bold text-gray-800 mb-6">Experience Priority Healthcare Excellence</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                 Consult with top doctors in Mehdipatnam and Attapur. Book your appointment online today.
             </p>
             <div className="flex justify-center gap-4">
                 <button onClick={() => navigate('/appointment')} className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors shadow-lg">
                    Book Appointment Online
                 </button>
                 <button onClick={() => navigate('/departments')} className="bg-white text-primary border border-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                    View Medical Departments
                 </button>
             </div>
        </div>
      </section>
    </div>
  );
};

export default About;
