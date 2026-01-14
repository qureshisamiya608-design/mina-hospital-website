
import React from 'react';
import { useNavigate } from 'react-router-dom';

const departments = [
  { name: 'Cardiology', icon: 'fa-heartbeat' },
  { name: 'Neurology', icon: 'fa-brain' },
  { name: 'Orthopedics', icon: 'fa-bone' },
  { name: 'Gynecology', icon: 'fa-baby-carriage' },
  { name: 'Pediatrics', icon: 'fa-child' },
  { name: 'Oncology', icon: 'fa-ribbon' },
  { name: 'Pulmonology', icon: 'fa-lungs' },
  { name: 'Ophthalmology', icon: 'fa-eye' },
  { name: 'Dermatology', icon: 'fa-spa' },
  { name: 'ENT', icon: 'fa-ear-listen' },
  { name: 'Urology', icon: 'fa-droplet' },
  { name: 'Physiotherapy', icon: 'fa-walking' },
  { name: 'Pharmacy', icon: 'fa-capsules' },
  { name: 'Pathology', icon: 'fa-microscope' },
  { name: 'Dental', icon: 'fa-tooth' },
  { name: 'Radiology', icon: 'fa-x-ray' },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleDepartmentClick = (deptName: string) => {
    navigate('/doctors', { state: { department: deptName } });
  };

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="hidden lg:block lg:w-1/3 relative">
            <div className="h-full rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpXM1A2NROe95aNoHot9DdFgWsN0mPvHr93hzuqZWoycWe4cjMQnMRNlEusfjzFbj84H0pXohmWqtVSyLrkO70C4bGkU82jR32LDjinFAN9vlWLO60PjDxK9hlXJucOhKKkFgQDSoffTmgLT6q2Gs3AAeCeJWg1dscG1pA9Lq9tX0CEeSra0tSt7_p6Sy5-tBB-_xrzF5GxTXgrxteWSX25ZehSTI492dzitlGGPHH6QfsYwm4QENrRnbUhoSm4MtPcSe5sQ2JRyo" 
                alt="Doctor" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-primary/10 transition-colors"></div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="mb-12">
              <span className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-3 block">Specialized Departments</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">Healthcare Services</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Mina Hospitals, we pride ourselves on providing comprehensive medical services to meet all your healthcare needs with accuracy and care.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <div 
                  key={index} 
                  onClick={() => handleDepartmentClick(dept.name)}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all text-center border border-gray-100 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <i className={`fas ${dept.icon} text-3xl text-primary group-hover:text-white`}></i>
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">{dept.name}</h4>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center lg:text-left">
              <button 
                onClick={() => navigate('/departments')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded transition-all inline-flex items-center"
              >
                View All Departments <i className="fas fa-arrow-right ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
