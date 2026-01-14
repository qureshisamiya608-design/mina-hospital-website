
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

// Unified doctor data for consistency across pages
const doctorsList = [
  {
    id: 1,
    name: 'Dr. Soheba Shukoor',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'MBBS, DGO, FMAS (WALS. USA)',
    experience: '29+ Years',
    expYears: 29,
    rating: 4.9,
    reviews: 120,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/3223-1-150x150.jpg',
    tags: ['High-Risk Pregnancy', 'Infertility', 'Laparoscopic Surgeon']
  },
  {
    id: 2,
    name: 'Dr. Hidayatullah Khan',
    specialty: 'Ophthalmology',
    qualification: 'MS Ophthalmology (Gold Medalist)',
    experience: '10+ Years',
    expYears: 10,
    rating: 4.8,
    reviews: 85,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Hiday.png',
    tags: ['Cataract', 'Lasik', 'Glaucoma']
  },
  {
    id: 3,
    name: 'Dr. Sachin Narkhede',
    specialty: 'Pediatrics & Neonatology',
    qualification: 'MBBS, DCh, FIAP (Neonatology)',
    experience: '15+ Years',
    expYears: 15,
    rating: 4.9,
    reviews: 200,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Sachin-Narkhede.jpg',
    tags: ['Newborn Care', 'Vaccination', 'Neonatologist']
  },
  {
    id: 4,
    name: 'Dr. P. Navanith Sagar Reddy',
    specialty: 'Pulmonology',
    qualification: 'Senior Pulmonologist',
    experience: '45+ Years',
    expYears: 45,
    rating: 4.9,
    reviews: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5JCV2XTMxm8Rx_PGkTbHYdIBZhEPcYtf7CFYnsC__9ZGHWqy_ySAmBwBtq5dUUoE5qrJSwPDWJv0TCr_Pyq3AFqxo65aQOuCe_9RernpNjdnEUxfkTUDFA-mqSXzVXmNAOXxeI2LuiyKJfiD3qFktMhS0bes4ni4AEhcfwnhmdNp4va3sj3TnAlWroENwQ32gexb6HC_Q39I5So6_N3dXguEwD2acpd_idKKqJWspQtD2Wy1a22TqKnmT1ZOv60OHonUb10qUfpc',
    tags: ['Asthma', 'Respiratory Failure', 'TB Expert']
  },
  {
    id: 5,
    name: 'Dr. D. Ramesh',
    specialty: 'Pediatrics',
    qualification: 'Senior Pediatrician',
    experience: '47+ Years',
    expYears: 47,
    rating: 4.8,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Child Specialist', 'General Pediatrics']
  },
  {
    id: 6,
    name: 'Dr. Naseemuddin N Shaikh',
    specialty: 'Endocrinology',
    qualification: 'MBBS, MD, DM Endocrinology',
    experience: '20+ Years',
    expYears: 20,
    rating: 4.7,
    reviews: 90,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-NASEEMUDDIN.jpg',
    tags: ['Diabetes', 'Thyroid', 'Endocrinologist']
  },
  {
    id: 7,
    name: 'Dr. Hameed Parekh',
    specialty: 'Orthopedics',
    qualification: 'Joint Replacement & Trauma Specialist',
    experience: '23+ Years',
    expYears: 23,
    rating: 4.8,
    reviews: 150,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Hameeed-Parekh.jpg',
    tags: ['Joint Replacement', 'Trauma', 'Orthopaedician']
  },
  {
    id: 8,
    name: 'Dr. Basith Hussain',
    specialty: 'Ophthalmology',
    qualification: 'Eye Surgery Specialist',
    experience: '28+ Years',
    expYears: 28,
    rating: 4.7,
    reviews: 110,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Eye Surgery', 'Cornea', 'Ophthalmologist']
  },
  {
    id: 9,
    name: 'Dr. Shoaib Ahmed',
    specialty: 'Cardiology',
    qualification: 'MD Cardiology',
    experience: '12+ Years',
    expYears: 12,
    rating: 4.7,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Interventional', 'Heart Failure']
  },
  {
    id: 10,
    name: 'Dr. Syeda Bushra',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'MBBS, DGO',
    experience: '18+ Years',
    expYears: 18,
    rating: 4.8,
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Maternity', 'Womens Health', 'DGO']
  },
  {
    id: 11,
    name: 'Dr. Khizar Raoof Mohammed',
    specialty: 'Urology',
    qualification: 'MBBS, MS, MCH in Urology',
    experience: '15+ Years',
    expYears: 15,
    rating: 4.6,
    reviews: 75,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Khizar-Raof.jpg',
    tags: ['Kidney Stones', 'Urinary Tract', 'Urologist']
  },
  {
    id: 12,
    name: 'Dr. Asim',
    specialty: 'General Surgery',
    qualification: 'MS General Surgery',
    experience: '14+ Years',
    expYears: 14,
    rating: 4.8,
    reviews: 100,
    image: 'https://images.unsplash.com/photo-1594824476969-513346381849?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Laparoscopy', 'Hernia', 'General Surgeon']
  },
  {
    id: 13,
    name: 'Dr. Asrar',
    specialty: 'Anaesthesia',
    qualification: 'MD Anaesthesia',
    experience: '16+ Years',
    expYears: 16,
    rating: 4.9,
    reviews: 80,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr.-Asrar-2-qken33rfiuimann0nve4gdxjzxpoqzyy67x9mtrgdo.jpg',
    tags: ['Pain Management', 'Critical Care', 'Anesthesiologist']
  },
  {
    id: 14,
    name: 'Dr. Ayesha Nazneen',
    specialty: 'Dental Surgery',
    qualification: 'BDS, FCE, MHA, PGDFC',
    experience: '10+ Years',
    expYears: 10,
    rating: 4.8,
    reviews: 95,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr-Ayesha-Nazneen-qkdkxeinja0uub0m42yeh1aajsifjegzz13coyk9t8.jpg',
    tags: ['Dental Implants', 'Root Canals', 'Dental Surgeon']
  },
  {
    id: 15,
    name: 'Dr. B Sushmitha Reddy',
    specialty: 'Dermatology',
    qualification: 'M.B.B.S, MD DVL',
    experience: '11+ Years',
    expYears: 11,
    rating: 4.7,
    reviews: 110,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr-Sushmita_1-1.jpg',
    tags: ['Skin Infections', 'Cosmetic Derm', 'Senior Dermatologist']
  },
  {
    id: 16,
    name: 'Dr. Syed Mohd. Azhar Hassan',
    specialty: 'Nephrology',
    qualification: 'M.B.B.S, MD, DM (Nephrology)',
    experience: '17+ Years',
    expYears: 17,
    rating: 4.9,
    reviews: 88,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Syed-Mohd.-Azhar-Hassan.jpg',
    tags: ['Kidney Transplant', 'Dialysis', 'Nephrologist']
  },
  {
    id: 17,
    name: 'Dr. FAHAD',
    specialty: 'Pulmonology',
    qualification: 'MD, Pulmonology',
    experience: '15+ Years',
    expYears: 15,
    rating: 4.8,
    reviews: 92,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-FAHAD.jpg',
    tags: ['Senior Pulmonologist', 'Chest Medicine']
  },
  {
    id: 18,
    name: 'Dr. Mohammed Moiz Uddin Ansari',
    specialty: 'Physiotherapy',
    qualification: 'Senior Physiotherapist',
    experience: '12+ Years',
    expYears: 12,
    rating: 4.7,
    reviews: 65,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/moiz.jpg',
    tags: ['Rehabilitation', 'Sports Injury', 'Physio']
  },
  {
    id: 19,
    name: 'Dr. Nikitha Shirine Todeti',
    specialty: 'General Medicine',
    qualification: 'M.B.B.S, M.D, General Medicine',
    experience: '8+ Years',
    expYears: 8,
    rating: 4.8,
    reviews: 105,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.Nikitha-Shirine-Todeti.jpeg',
    tags: ['General Physician', 'Internal Medicine']
  },
  {
    id: 20,
    name: 'Dr. Zeeshan',
    specialty: 'Gastroenterology',
    qualification: 'MBBS. MD, DM (Gastroenterology)',
    experience: '9+ Years',
    expYears: 9,
    rating: 4.9,
    reviews: 78,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-ZEESHAN-1.jpeg',
    tags: ['Gastroenterologist', 'Endoscopy']
  },
  {
    id: 21,
    name: 'Dr. Mohd Hameed Shareef',
    specialty: 'Neurosurgery',
    qualification: 'Consultant Neuro Surgeon',
    experience: '20+ Years',
    expYears: 20,
    rating: 4.9,
    reviews: 130,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Mohd-Hameed-Shareef.jpg',
    tags: ['Neuro-Trauma', 'Spine Surgery', 'Neuro Surgeon']
  },
  {
    id: 22,
    name: 'Dr. Mohammed Nawar',
    specialty: 'Dental Surgery',
    qualification: 'Dental Surgeon',
    experience: '12+ Years',
    expYears: 12,
    rating: 4.7,
    reviews: 84,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Mohammed-Nawar.jpg',
    tags: ['Oral Health', 'Cosmetic Dentistry']
  },
  {
    id: 23,
    name: 'Dr. Mir Zia Ur Rahman Ali',
    specialty: 'Orthopedics',
    qualification: 'Joint Replacement Surgeon',
    experience: '22+ Years',
    expYears: 22,
    rating: 4.8,
    reviews: 115,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/zia-2.jpg',
    tags: ['Orthopaedician', 'Joint Replacement']
  },
  {
    id: 24,
    name: 'Dr. Ahmed Abdul Khabeer',
    specialty: 'ENT',
    qualification: 'MBBS, MS, ENT Specialist',
    experience: '18+ Years',
    expYears: 18,
    rating: 4.9,
    reviews: 142,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/elementor/thumbs/Dr.-Ahmed-Abdul-Khabir-qk4jmj2rfapyf9ppdzqhc8f1apwzfr477l746ee3sc.jpeg',
    tags: ['ENT Surgeon', 'Micro Surgery', 'Head & Neck']
  },
  {
    id: 25,
    name: 'Dr. Revanth',
    specialty: 'Emergency Medicine',
    qualification: 'MBBS, MD Emergency Medicine',
    experience: '10+ Years',
    expYears: 10,
    rating: 4.8,
    reviews: 160,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-REVANTH.jpg',
    tags: ['Trauma Care', 'Emergency Specialist']
  },
  {
    id: 26,
    name: 'Dr. Md. Zia Ul Haq',
    specialty: 'Cardiology',
    qualification: 'MD, DNB (Cardiology)',
    experience: '14+ Years',
    expYears: 14,
    rating: 4.9,
    reviews: 125,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/zia.jpg',
    tags: ['Interventional Cardiologist', 'Heart Specialist']
  },
  {
    id: 27,
    name: 'Dr. Syed Mukarrumuddin Hussain',
    specialty: 'Ophthalmology',
    qualification: 'MBBS, M.D. (Ophthal)',
    experience: '25+ Years',
    expYears: 25,
    rating: 4.7,
    reviews: 118,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Mukaram.jpg',
    tags: ['Ophthalmologist', 'Sankara Netralaya Fellow']
  },
  {
    id: 28,
    name: 'Dr. Syed Sayeeduddin',
    specialty: 'General Surgery',
    qualification: 'MBBS, MS, General Surgery',
    experience: '30+ Years',
    expYears: 30,
    rating: 4.9,
    reviews: 210,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Dr.-Syed-Sayeeduddin.jpg',
    tags: ['General Surgeon', 'Senior Consultant']
  },
  {
    id: 29,
    name: 'Dr. Syed Musaab Mohiuddin',
    specialty: 'Ophthalmology',
    qualification: 'FRCS, MRCS, FICO',
    experience: '15+ Years',
    expYears: 15,
    rating: 4.9,
    reviews: 98,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Musaab.jpg',
    tags: ['Retinal Surgeon', 'Ophthalmologist']
  },
  {
    id: 30,
    name: 'Rafiya',
    specialty: 'Dietetics',
    qualification: 'Msc Nutrition and Dietetics',
    experience: '8+ Years',
    expYears: 8,
    rating: 4.8,
    reviews: 55,
    image: 'https://minahospitals.whitecoats.com/wp-content/uploads/sites/120/2024/02/Rafiya.jpg',
    tags: ['Dietician', 'Nutrition Expert']
  },
  {
    id: 31,
    name: 'Dr. NARESH',
    specialty: 'Pediatrics',
    qualification: 'Pediatric Specialist',
    experience: '12+ Years',
    expYears: 12,
    rating: 4.7,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Child Health', 'Peds Specialist']
  },
  {
    id: 32,
    name: 'Dr. SAGAR',
    specialty: 'Pulmonology',
    qualification: 'Pulmonologist',
    experience: '11+ Years',
    expYears: 11,
    rating: 4.8,
    reviews: 72,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Pulmonology', 'Lung Care']
  },
  {
    id: 33,
    name: 'Dr. SHAIZAD',
    specialty: 'ENT',
    qualification: 'ENT Surgeon',
    experience: '13+ Years',
    expYears: 13,
    rating: 4.7,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1594824476969-513346381849?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['ENT', 'Ear Nose Throat']
  },
  {
    id: 34,
    name: 'Dr. SHOAIB',
    specialty: 'Cardiac Surgery',
    qualification: 'Cardiac Specialist',
    experience: '16+ Years',
    expYears: 16,
    rating: 4.8,
    reviews: 81,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Cardiac', 'Heart Surgery']
  },
  {
    id: 35,
    name: 'Dr. SIDDIQUA',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'Obs & Gynae Consultant',
    experience: '14+ Years',
    expYears: 14,
    rating: 4.7,
    reviews: 77,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Gynaecologist', 'Maternity Care']
  },
  {
    id: 36,
    name: 'Dr. TAJAMUL',
    specialty: 'Pediatrics',
    qualification: 'Senior Pediatrician',
    experience: '19+ Years',
    expYears: 19,
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Peds Specialist', 'Child Care']
  },
  {
    id: 37,
    name: 'Dr. VIDYASRI',
    specialty: 'Obstetrics & Gynecology',
    qualification: 'Obs & Gynae Expert',
    experience: '10+ Years',
    expYears: 10,
    rating: 4.8,
    reviews: 66,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Maternity', 'Gynaecologist']
  },
  {
    id: 38,
    name: 'Dr. ZUHAIR',
    specialty: 'Orthopedics',
    qualification: 'Orthopedic Surgeon',
    experience: '12+ Years',
    expYears: 12,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Orthopaedician', 'Joint Care']
  },
  {
    id: 39,
    name: 'Dr. AFTAB ALI KHAN',
    specialty: 'Psychiatry',
    qualification: 'MBBS, DPM, Psychiatry',
    experience: '24+ Years',
    expYears: 24,
    rating: 4.9,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=350',
    tags: ['Psychiatrist', 'Mental Health']
  }
];

const specialties = [...new Set(doctorsList.map(d => d.specialty))];
const experienceRanges = [
  { label: 'Junior (0-10 Yrs)', value: '0-10' },
  { label: 'Senior (11-25 Yrs)', value: '11-25' },
  { label: 'Expert (26+ Yrs)', value: '26-99' }
];
const qualificationsList = ['MBBS', 'MD', 'MS', 'DGO', 'Senior Consultant', 'DM', 'DNB', 'FRCS'];

interface FilterProps {
  label: string;
  icon: string;
  options: string[] | { label: string; value: string }[];
  selected: string | null;
  onSelect: (val: string | null) => void;
  hasSearch?: boolean;
}

const FilterDropdown: React.FC<FilterProps> = ({ label, icon, options, selected, onSelect, hasSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
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

  const filteredOptions = hasSearch 
    ? (options as string[]).filter(opt => opt.toLowerCase().includes(search.toLowerCase()))
    : options;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-sm font-medium h-12 min-w-[140px] ${
          selected 
          ? 'bg-white border-primary shadow-sm' 
          : 'bg-white border-gray-200 hover:border-gray-300'
        }`}
      >
        <i className={`${icon} text-gray-400`}></i>
        <span className="text-gray-500">{label}:</span>
        {selected ? (
          <span className="bg-primary/5 text-primary px-2 py-0.5 rounded-md text-[10px] font-bold border border-primary/20 flex items-center gap-1">
            {typeof selected === 'string' && selected.includes('-') 
              ? experienceRanges.find(r => r.value === selected)?.label 
              : selected}
            <i className="fas fa-times cursor-pointer hover:text-red-500" onClick={(e) => { e.stopPropagation(); onSelect(null); }}></i>
          </span>
        ) : (
          <i className="fas fa-chevron-down text-[10px] text-gray-300 ml-1"></i>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-fade-in-up">
          <div 
             onClick={() => { onSelect(null); setIsOpen(false); }}
             className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer text-sm text-gray-400 border-b border-gray-100"
          >
            None
            {!selected && <i className="fas fa-check text-primary text-[10px]"></i>}
          </div>

          {hasSearch && (
            <div className="p-3 border-b border-gray-100">
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
                <input
                  autoFocus
                  type="text"
                  placeholder={`Search ${label}...`}
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
                filteredOptions.map((opt, i) => {
                    const optLabel = typeof opt === 'string' ? opt : opt.label;
                    const optValue = typeof opt === 'string' ? opt : opt.value;
                    const isSelected = selected === optValue;

                    return (
                        <div
                        key={i}
                        onClick={() => { onSelect(optValue); setIsOpen(false); }}
                        className="px-4 py-3 flex justify-between items-center hover:bg-primary/5 cursor-pointer text-sm font-medium text-gray-700 transition-colors"
                        >
                        {optLabel}
                        {isSelected && <i className="fas fa-check text-primary text-[10px]"></i>}
                        </div>
                    );
                })
            ) : (
                <div className="p-4 text-center text-xs text-gray-400">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Doctors: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Filters State
    const [searchTerm, setSearchTerm] = useState('');
    const [specialtyFilter, setSpecialtyFilter] = useState<string | null>(null);
    const [expFilter, setExpFilter] = useState<string | null>(null);
    const [qualFilter, setQualFilter] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.state && (location.state as any).department) {
            setSpecialtyFilter((location.state as any).department);
        }
    }, [location]);

    const handleDoctorClick = (doc: any) => {
        navigate('/appointment', { state: { doctor: doc, step: 2 } });
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSpecialtyFilter(null);
        setExpFilter(null);
        setQualFilter(null);
    };

    const filteredDoctors = doctorsList.filter(doc => {
        const matchesName = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = !specialtyFilter || doc.specialty.includes(specialtyFilter);
        
        const matchesExp = !expFilter || (() => {
          const [min, max] = expFilter.split('-').map(Number);
          return doc.expYears >= min && doc.expYears <= max;
        })();

        const matchesQual = !qualFilter || doc.qualification.includes(qualFilter);

        return matchesName && matchesSpecialty && matchesExp && matchesQual;
    });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
        {/* Page Header */}
        <div className="bg-primary text-white py-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Our Medical Specialists</h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                    Collaborating with Hyderabad's most distinguished doctors to deliver priority healthcare excellence.
                </p>
            </div>
        </div>

        {/* Professional Filter Bar */}
        <div className="container mx-auto px-4 -mt-10 relative z-20">
          <div className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 border border-gray-100">
             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div className="shrink-0">
                   <h2 className="text-lg font-bold text-gray-900 flex items-center">
                     Confidence <i className="fas fa-shield-halved ml-2 text-primary/30 text-xs"></i>
                   </h2>
                   <p className="text-xs text-gray-400 mt-1 font-medium tracking-wide">Refine your confidence score with filters</p>
                </div>
                
                <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
                   {/* Main Name Search Bar */}
                   <div className="relative w-full sm:w-64">
                      <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                      <input 
                        type="text" 
                        placeholder="Search doctor name..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm h-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                      />
                   </div>

                   <FilterDropdown 
                      label="Specialist" 
                      icon="fas fa-user-md" 
                      options={specialties} 
                      selected={specialtyFilter} 
                      onSelect={setSpecialtyFilter} 
                      hasSearch
                   />
                   <FilterDropdown 
                      label="Experience" 
                      icon="fas fa-briefcase" 
                      options={experienceRanges} 
                      selected={expFilter} 
                      onSelect={setExpFilter} 
                   />
                   <FilterDropdown 
                      label="Qualification" 
                      icon="fas fa-graduation-cap" 
                      options={qualificationsList} 
                      selected={qualFilter} 
                      onSelect={setQualFilter} 
                   />

                   <button 
                      onClick={resetFilters}
                      disabled={!searchTerm && !specialtyFilter && !expFilter && !qualFilter}
                      className={`px-8 py-3 rounded-xl font-bold text-sm transition-all h-12 flex items-center gap-2 ${
                        (searchTerm || specialtyFilter || expFilter || qualFilter)
                        ? 'bg-primary text-white shadow-lg hover:bg-primary-dark shadow-primary/20'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                   >
                     Reset Filters
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <section className="py-20">
            <div className="container mx-auto px-4">
                
                <div className="mb-10 flex items-center justify-between">
                   <p className="text-gray-500 font-bold text-sm">
                     Showing <span className="text-primary">{filteredDoctors.length}</span> verified specialists
                   </p>
                </div>

                {filteredDoctors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {filteredDoctors.map((doc, idx) => (
                            <div 
                                key={idx} 
                                onClick={() => handleDoctorClick(doc)}
                                className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group cursor-pointer flex flex-col h-full animate-fade-in-up"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="h-80 overflow-hidden relative">
                                    <img 
                                        src={doc.image} 
                                        alt={doc.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4">
                                      <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
                                        <i className="fas fa-star text-orange-400 text-[10px]"></i>
                                        <span className="text-xs font-bold text-gray-900">{doc.rating}</span>
                                      </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 px-6">
                                        <Button className="w-full rounded-2xl bg-secondary hover:bg-secondary/90 shadow-xl border-none font-bold">
                                            Priority Visit Booking
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-8 text-center flex-grow flex flex-col">
                                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">{doc.name}</h3>
                                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">{doc.specialty}</p>
                                    
                                    <div className="mt-auto space-y-4 pt-4 border-t border-gray-50">
                                      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
                                        <span>Qualification</span>
                                        <span className="text-gray-900 truncate max-w-[140px] text-right">{doc.qualification.split(',')[0]}</span>
                                      </div>
                                      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
                                        <span>Experience</span>
                                        <span className="text-gray-900">{doc.experience}</span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200 shadow-sm">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-300 text-4xl">
                            <i className="fas fa-user-md-slash"></i>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">No Specialists Found</h3>
                        <p className="text-gray-500 mb-10 max-w-sm mx-auto">Try adjusting your filters or search keywords to find a specialist that meets your requirements.</p>
                        <Button 
                            onClick={resetFilters}
                            variant="secondary"
                            className="rounded-full px-12"
                        >
                            Reset Specialist Search
                        </Button>
                    </div>
                )}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Priority Healthcare</span>
                <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Need Immediate Specialist Consultation?</h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                    Experience the Mina difference with economy-conscious pricing and top-tier clinical expertise. Consultations start at ₹150.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                      size="xl"
                      onClick={() => navigate('/appointment')}
                      className="bg-primary text-white font-bold rounded-full px-12 shadow-xl hover:bg-primary-dark transition-all"
                  >
                      Book Priority Visit
                  </Button>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Doctors;
