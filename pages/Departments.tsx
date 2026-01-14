
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const departmentsList = [
  {
    name: 'Cardiology',
    icon: 'fa-heartbeat',
    category: 'Clinical',
    description: 'Find the best cardiologist in Hyderabad. Comprehensive heart care from diagnostics to interventional procedures.',
    features: ['ECG & 2D Echo', 'TMT / Stress Test', 'Interventional Cardiology', 'Cardiac Critical Care']
  },
  {
    name: 'Obstetrics & Gynecology',
    icon: 'fa-baby-carriage',
    category: 'Clinical',
    description: 'Best maternity hospital in Mehdipatnam. Complete women’s healthcare from adolescence to painless delivery.',
    features: ['High-Risk Pregnancy', 'Infertility Treatment', 'Laparoscopic Surgery', 'Painless Delivery']
  },
  {
    name: 'Orthopedics',
    icon: 'fa-bone',
    category: 'Clinical',
    description: 'Leading orthopedic hospital in Hyderabad. Specialized care for joint replacement, spine, and sports injuries.',
    features: ['Joint Replacement', 'Trauma & Fracture Care', 'Arthroscopy', 'Sports Medicine']
  },
  {
    name: 'Pediatrics & Neonatology',
    icon: 'fa-child',
    category: 'Clinical',
    description: 'Expert child specialist hospital in Hyderabad. Compassionate care for infants and children including 24/7 NICU.',
    features: ['Neonatal ICU (NICU)', 'Vaccination', 'Growth Monitoring', 'Pediatric Emergencies']
  },
  {
    name: 'Neurology & Neurosurgery',
    icon: 'fa-brain',
    category: 'Clinical',
    description: 'Neuro super speciality care. Advanced diagnosis and treatment for strokes, nerve disorders, and minimal invasive spine surgeries.',
    features: ['Stroke Management', 'Spine Surgery', 'Neuro-Trauma Care', 'Neuropathy Clinic']
  },
  {
    name: 'General Medicine',
    icon: 'fa-user-md',
    category: 'Clinical',
    description: 'Comprehensive primary healthcare for adults focusing on diabetes management and chronic disease prevention.',
    features: ['Diabetes Management', 'Hypertension Control', 'Infectious Diseases', 'Geriatric Care']
  },
  {
    name: 'General Surgery',
    icon: 'fa-scalpel',
    category: 'Clinical',
    description: 'Expert surgical care including minimally invasive laparoscopy for hernia, appendicitis, and trauma.',
    features: ['Laparoscopic Surgery', 'Hernia Repair', 'Appendectomy', 'Trauma Surgery']
  },
  {
    name: 'Pulmonology',
    icon: 'fa-lungs',
    category: 'Clinical',
    description: 'Specialized diagnosis and treatment of respiratory diseases, asthma, and tuberculosis by senior pulmonologists.',
    features: ['Asthma & COPD', 'Tuberculosis Care', 'Pneumonia Treatment', 'Sleep Apnea']
  },
  {
    name: 'Emergency & Trauma Care',
    icon: 'fa-ambulance',
    category: 'Support',
    description: '24/7 trauma center in Hyderabad for accidents and medical emergencies. Level-1 critical care availability.',
    features: ['Trauma Center', 'Cardiac Life Support', 'Poisoning Management', 'Ambulance Services']
  },
  {
    name: 'Ophthalmology',
    icon: 'fa-eye',
    category: 'Clinical',
    description: 'Complete eye care services from cataract surgery to diabetic retinopathy management by expert ophthalmologists.',
    features: ['Cataract Surgery', 'Glaucoma Treatment', 'Diabetic Retinopathy', 'Refractive Errors']
  },
  {
    name: 'Dermatology',
    icon: 'fa-spa',
    category: 'Clinical',
    description: 'Expert medical and cosmetic care for skin, hair, and nails using advanced dermatological protocols.',
    features: ['Acne Treatment', 'Skin Allergies', 'Cosmetic Procedures', 'Hair Loss Treatment']
  },
  {
    name: 'Endocrinology',
    icon: 'fa-dna',
    category: 'Clinical',
    description: 'Expert care for hormonal disorders, thyroid conditions, and complex diabetes management.',
    features: ['Thyroid Clinic', 'Gestational Diabetes', 'Growth Disorders', 'Metabolic Health']
  },
  {
    name: 'Urology',
    icon: 'fa-tint',
    category: 'Clinical',
    description: 'Specialized treatment for kidney stones, urinary tract infections, and male reproductive health.',
    features: ['Kidney Stone Removal', 'UTI Management', 'Prostate Care', 'Uro-Surgery']
  },
  {
    name: 'ENT',
    icon: 'fa-ear-listen',
    category: 'Clinical',
    description: 'Advanced care for Ear, Nose, and Throat conditions, including micro-ear surgery and sinus treatments.',
    features: ['Micro Surgery', 'Sinusitis Treatment', 'Hearing Assessment', 'Throat Care']
  },
  {
    name: 'Nephrology',
    icon: 'fa-vial',
    category: 'Clinical',
    description: 'Comprehensive kidney care including dialysis services and kidney transplant physician consultations.',
    features: ['Dialysis Unit', 'Renal Biopsy', 'Chronic Kidney Disease', 'Hypertensive Kidney Care']
  },
  {
    name: 'Gastroenterology',
    icon: 'fa-stethoscope',
    category: 'Clinical',
    description: 'Diagnosis and treatment of digestive system disorders, including endoscopy and liver health.',
    features: ['Endoscopy & Colonoscopy', 'Liver Disease Care', 'Acidity & Ulcers', 'Digestive Health']
  },
  {
    name: 'Physiotherapy',
    icon: 'fa-walking',
    category: 'Support',
    description: 'Advanced rehabilitation services for post-surgical recovery, sports injuries, and chronic pain management.',
    features: ['Post-Op Rehab', 'Sports Physiotherapy', 'Manual Therapy', 'Pain Management']
  },
  {
    name: 'Dental Surgery',
    icon: 'fa-tooth',
    category: 'Clinical',
    description: 'Complete oral healthcare including cosmetic dentistry, implants, and trauma-related dental surgery.',
    features: ['Dental Implants', 'Root Canal Treatment', 'Smile Designing', 'Oral Surgery']
  },
  {
    name: 'Dietetics & Nutrition',
    icon: 'fa-apple-whole',
    category: 'Support',
    description: 'Personalized nutritional counseling for diabetes, weight management, and clinical recovery diets.',
    features: ['Diabetic Diet Plans', 'Weight Management', 'Therapeutic Nutrition', 'Maternal Nutrition']
  },
  {
    name: 'Anaesthesia',
    icon: 'fa-bed-pulse',
    category: 'Clinical',
    description: 'Providing safe sedation and advanced pain management protocols for all minor and major surgeries.',
    features: ['General Anaesthesia', 'Pain Clinic', 'Critical Care Support', 'Epidural Services']
  },
  {
    name: 'Psychiatry',
    icon: 'fa-head-side-virus',
    category: 'Clinical',
    description: 'Compassionate mental health services focusing on diagnosis, therapy, and medical management of behavioral health.',
    features: ['Mental Health Counseling', 'Anxiety & Depression', 'Stress Management', 'Behavioral Therapy']
  }
];

const categories = [...new Set(departmentsList.map(d => d.category))];

interface FilterDropdownProps {
  label: string;
  icon: string;
  options: string[];
  selected: string | null;
  onSelect: (val: string | null) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, icon, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-sm font-medium h-12 min-w-[160px] ${
          selected 
          ? 'bg-white border-primary shadow-sm' 
          : 'bg-white border-gray-200 hover:border-gray-300'
        }`}
      >
        <i className={`${icon} text-gray-400`}></i>
        <span className="text-gray-500">{label}:</span>
        {selected ? (
          <span className="bg-primary/5 text-primary px-2 py-0.5 rounded-md text-[10px] font-bold border border-primary/20 flex items-center gap-1">
            {selected}
            <i className="fas fa-times cursor-pointer hover:text-red-500" onClick={(e) => { e.stopPropagation(); onSelect(null); }}></i>
          </span>
        ) : (
          <i className="fas fa-chevron-down text-[10px] text-gray-300 ml-1"></i>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-fade-in-up">
          <div 
             onClick={() => { onSelect(null); setIsOpen(false); }}
             className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer text-sm text-gray-400 border-b border-gray-100"
          >
            All Categories
            {!selected && <i className="fas fa-check text-primary text-[10px]"></i>}
          </div>
          <div className="max-h-60 overflow-y-auto">
            {options.map((opt, i) => (
              <div
                key={i}
                onClick={() => { onSelect(opt); setIsOpen(false); }}
                className="px-4 py-3 flex justify-between items-center hover:bg-primary/5 cursor-pointer text-sm font-medium text-gray-700 transition-colors"
              >
                {opt}
                {selected === opt && <i className="fas fa-check text-primary text-[10px]"></i>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Departments: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetFilters = () => {
    setSearchTerm('');
    setCategoryFilter(null);
  };

  const handleBookClick = (deptName: string) => {
    navigate('/appointment', { state: { department: deptName } });
  };

  const filteredDepartments = departmentsList.filter(dept => {
    const matchesSearch = 
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      dept.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || dept.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Medical Specialities & Departments</h1>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
             World-class expertise across 20+ medical specialities, ensuring comprehensive and affordable healthcare for you and your family in Hyderabad.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 border border-gray-100">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="shrink-0">
                 <h2 className="text-lg font-bold text-gray-900 flex items-center">
                   Explore Departments <i className="fas fa-search-plus ml-2 text-primary/30 text-xs"></i>
                 </h2>
                 <p className="text-xs text-gray-400 mt-1 font-medium tracking-wide">Find the right medical care for your needs</p>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
                 {/* Name/Description Search */}
                 <div className="relative w-full sm:w-64">
                    <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                    <input 
                      type="text" 
                      placeholder="Search speciality..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm h-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                    />
                 </div>

                 <FilterDropdown 
                    label="Category" 
                    icon="fas fa-layer-group" 
                    options={categories} 
                    selected={categoryFilter} 
                    onSelect={setCategoryFilter} 
                 />

                 <button 
                    onClick={resetFilters}
                    disabled={!searchTerm && !categoryFilter}
                    className={`px-8 py-3 rounded-xl font-bold text-sm transition-all h-12 flex items-center gap-2 ${
                      (searchTerm || categoryFilter)
                      ? 'bg-primary text-white shadow-lg hover:bg-primary-dark shadow-primary/20'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                 >
                   Reset Search
                 </button>
              </div>
           </div>
        </div>
      </div>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
             <p className="text-gray-500 font-bold text-sm">
               Showing <span className="text-primary">{filteredDepartments.length}</span> specialized departments
             </p>
          </div>

          {filteredDepartments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDepartments.map((dept, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mr-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <i className={`fas ${dept.icon} text-2xl text-primary group-hover:text-white`}></i>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-gray-800">{dept.name}</h3>
                      <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">{dept.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed h-20 overflow-hidden">
                    {dept.description}
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Priority Services</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {dept.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm text-gray-600 flex items-center">
                          <i className="fas fa-check text-secondary text-xs mr-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => handleBookClick(dept.name)}
                    className="w-full border border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    Book Specialist Consultation
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200 shadow-sm">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-300 text-4xl">
                    <i className="fas fa-search-minus"></i>
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">No Departments Found</h3>
                <p className="text-gray-500 mb-10 max-w-sm mx-auto">We couldn't find any departments matching your search. Try a different keyword or category.</p>
                <Button 
                    onClick={resetFilters}
                    variant="secondary"
                    className="rounded-full px-12"
                >
                    View All Departments
                </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-dark rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Need Priority Specialized Care?</h2>
              <p className="text-lg text-primary-light mb-8 max-w-2xl mx-auto">
                Our team of 39+ specialists in Mehdipatnam and Attapur are here to help. Book a priority visit today for expert clinical outcomes.
              </p>
              <button 
                onClick={() => navigate('/appointment')}
                className="bg-white text-primary font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Schedule Appointment Now
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
