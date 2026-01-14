
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ChevronDown, X, Check, Search, UserRound, Briefcase } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from '../components/ui/dropdown-menu';

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

const services = [
    { id: 'consultation', name: 'General Consultation', price: 250, duration: '20 min' },
    { id: 'specialist', name: 'Specialist Consultation', price: 500, duration: '30 min' },
    { id: 'video', name: 'Video Consultation', price: 400, duration: '30 min' },
    { id: 'followup', name: 'Follow-up Visit', price: 150, duration: '15 min' },
];

const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00', '20:30'
];

interface FilterProps {
    label: string;
    icon: React.ReactNode;
    options: string[] | { label: string; value: string }[];
    selected: string | null;
    onSelect: (val: string | null) => void;
    hasSearch?: boolean;
}

const FilterDropdown: React.FC<FilterProps> = ({ label, icon, options, selected, onSelect, hasSearch }) => {
    const [search, setSearch] = useState('');

    const filteredOptions = hasSearch
        ? (options as string[]).filter(opt => opt.toLowerCase().includes(search.toLowerCase()))
        : options;

    const getDisplayValue = () => {
        if (!selected) return null;
        if (typeof selected === 'string' && selected.includes('-')) {
            return experienceRanges.find(r => r.value === selected)?.label;
        }
        return selected;
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-sm font-medium h-12 min-w-[140px] ${selected
                        ? 'bg-white border-primary shadow-sm'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                >
                    <span className="text-gray-400">{icon}</span>
                    <span className="text-gray-500">{label}:</span>
                    {selected ? (
                        <span className="bg-primary/5 text-primary px-2 py-0.5 rounded-md text-[10px] font-bold border border-primary/20 flex items-center gap-1">
                            {getDisplayValue()}
                            <X
                                className="w-3 h-3 cursor-pointer hover:text-red-500"
                                onClick={(e) => { e.stopPropagation(); onSelect(null); }}
                            />
                        </span>
                    ) : (
                        <ChevronDown className="w-3 h-3 text-gray-300 ml-1" />
                    )}
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 rounded-2xl shadow-2xl border border-gray-100 p-0 overflow-hidden" align="start">
                {/* Clear Selection Option */}
                <DropdownMenuItem
                    onClick={() => onSelect(null)}
                    className="px-4 py-3 flex justify-between items-center cursor-pointer text-sm text-gray-400 border-b border-gray-100 rounded-none focus:bg-gray-50"
                >
                    None
                    {!selected && <Check className="w-3 h-3 text-primary" />}
                </DropdownMenuItem>

                {/* Search Input */}
                {hasSearch && (
                    <div className="p-3 border-b border-gray-100">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3" />
                            <input
                                type="text"
                                placeholder={`Search ${label}...`}
                                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}

                {/* Options List */}
                <div className="max-h-60 overflow-y-auto">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((opt, i) => {
                            const optLabel = typeof opt === 'string' ? opt : opt.label;
                            const optValue = typeof opt === 'string' ? opt : opt.value;
                            const isSelected = selected === optValue;

                            return (
                                <DropdownMenuItem
                                    key={i}
                                    onClick={() => onSelect(optValue)}
                                    className="px-4 py-3 flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 rounded-none focus:bg-primary/5"
                                >
                                    {optLabel}
                                    {isSelected && <Check className="w-3 h-3 text-primary" />}
                                </DropdownMenuItem>
                            );
                        })
                    ) : (
                        <div className="p-4 text-center text-xs text-gray-400">No results found</div>
                    )}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const Appointment: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [step, setStep] = useState(1);

    // Appointment State
    const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
    const [selectedService, setSelectedService] = useState(services[0]);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [patientDetails, setPatientDetails] = useState({
        name: '',
        email: '',
        phone: '',
        reason: ''
    });

    // Filtering State (Synced with Doctors page)
    const [searchTerm, setSearchTerm] = useState('');
    const [specialtyFilter, setSpecialtyFilter] = useState<string | null>(null);
    const [expFilter, setExpFilter] = useState<string | null>(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Generate next 5 days for dates
    const [dates, setDates] = useState<{ day: string, date: string, fullDate: string }[]>([]);

    useEffect(() => {
        const d = [];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        for (let i = 0; i < 5; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            d.push({
                day: days[date.getDay()],
                date: `${months[date.getMonth()]} ${date.getDate()}`,
                fullDate: date.toISOString().split('T')[0]
            });
        }
        setDates(d);
        setSelectedDate(d[0].fullDate);
        window.scrollTo(0, 0);

        // Handle navigation state from Doctors or Departments page
        if (location.state) {
            const state = location.state as any;

            if (state.doctor) {
                const doc = state.doctor;
                // Enrich doc data if coming from external source
                setSelectedDoctor({
                    ...doc,
                    rating: doc.rating || '4.9',
                    reviews: doc.reviews || '100+',
                    tags: doc.tags || ['Specialist', doc.specialty]
                });
                if (state.step) setStep(state.step);
            }

            if (state.department) {
                setSpecialtyFilter(state.department);
            }
        }

    }, [location]);

    const handleNext = () => {
        if (step === 1 && selectedDoctor) setStep(2);
        if (step === 2 && selectedTime) setStep(3);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSpecialtyFilter(null);
        setExpFilter(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    // Filter Logic
    const filteredDoctors = doctorsList.filter(doc => {
        const matchesName = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = !specialtyFilter ||
            doc.specialty.toLowerCase() === specialtyFilter.toLowerCase();
        const matchesExp = !expFilter || (() => {
            const [min, max] = expFilter.split('-').map(Number);
            return doc.expYears >= min && doc.expYears <= max;
        })();
        return matchesName && matchesSpecialty && matchesExp;
    });

    const getHeaderTitle = () => {
        if (step === 1) return "Select Your Specialist";
        if (step === 2) return "Set Your Schedule";
        return "Complete Your Booking";
    };

    const getHeaderSub = () => {
        if (step === 1) return "Choose from our team of 39+ verified medical experts across Hyderabad.";
        if (step === 2) return "Choose your preferred visit type and time slot for a seamless experience.";
        return "Please provide patient details to finalize your priority appointment slot.";
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 flex items-center justify-center">
                <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg w-full">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-check text-4xl text-green-600"></i>
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
                    <p className="text-gray-600 mb-8">
                        Your appointment with <span className="font-bold text-gray-800">{selectedDoctor?.name}</span> on <span className="font-bold text-gray-800">{selectedDate}</span> at <span className="font-bold text-gray-800">{selectedTime}</span> has been successfully scheduled.
                    </p>
                    <button onClick={() => navigate('/')} className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all">Return Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Unified Themed Header with Dynamic Content */}
            <div className="bg-primary text-white py-12 sm:py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-500">{getHeaderTitle()}</h1>
                    <p className="text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-4 transition-all duration-500">{getHeaderSub()}</p>

                    {/* Action-Oriented Progress Stepper */}
                    <div className="flex justify-between sm:justify-center items-center gap-1 sm:gap-10 mt-10 sm:mt-16 overflow-x-auto no-scrollbar pb-2 max-w-full px-2">
                        {/* Step 1 */}
                        <div className={`flex flex-col items-center shrink-0 transition-all duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
                            <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 mb-3 relative transition-all duration-500 ${step > 1 ? 'border-green-500 bg-green-500 text-white' :
                                step === 1 ? 'border-secondary bg-secondary text-white shadow-[0_0_20px_rgba(199,138,59,0.4)]' : 'border-white/20'
                                }`}>
                                {step > 1 ? <i className="fas fa-check text-base sm:text-xl"></i> : <i className="fas fa-user-md text-base sm:text-xl"></i>}
                                {step === 1 && <span className="absolute inset-0 rounded-full animate-ping bg-secondary/30"></span>}
                            </div>
                            <div className="text-center">
                                <span className={`block text-[10px] sm:text-xs font-bold uppercase tracking-widest ${step === 1 ? 'text-secondary' : 'text-white/60'}`}>Specialist</span>
                                <span className="hidden sm:block text-[10px] text-white/40 mt-1">Step 01</span>
                            </div>
                        </div>

                        <div className={`h-[2px] flex-1 sm:flex-none sm:w-16 transition-all duration-700 ${step >= 2 ? 'bg-green-500' : 'bg-white/10'}`}></div>

                        {/* Step 2 */}
                        <div className={`flex flex-col items-center shrink-0 transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>
                            <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 mb-3 relative transition-all duration-500 ${step > 2 ? 'border-green-500 bg-green-500 text-white' :
                                step === 2 ? 'border-secondary bg-secondary text-white shadow-[0_0_20px_rgba(199,138,59,0.4)]' : 'border-white/20'
                                }`}>
                                {step > 2 ? <i className="fas fa-check text-base sm:text-xl"></i> : <i className="fas fa-calendar-alt text-base sm:text-xl"></i>}
                                {step === 2 && <span className="absolute inset-0 rounded-full animate-ping bg-secondary/30"></span>}
                            </div>
                            <div className="text-center">
                                <span className={`block text-[10px] sm:text-xs font-bold uppercase tracking-widest ${step === 2 ? 'text-secondary' : 'text-white/60'}`}>Schedule</span>
                                <span className="hidden sm:block text-[10px] text-white/40 mt-1">Step 02</span>
                            </div>
                        </div>

                        <div className={`h-[2px] flex-1 sm:flex-none sm:w-16 transition-all duration-700 ${step >= 3 ? 'bg-green-500' : 'bg-white/10'}`}></div>

                        {/* Step 3 */}
                        <div className={`flex flex-col items-center shrink-0 transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-40'}`}>
                            <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 mb-3 relative transition-all duration-500 ${step === 3 ? 'border-secondary bg-secondary text-white shadow-[0_0_20px_rgba(199,138,59,0.4)]' : 'border-white/20'
                                }`}>
                                <i className="fas fa-shield-check text-base sm:text-xl"></i>
                                {step === 3 && <span className="absolute inset-0 rounded-full animate-ping bg-secondary/30"></span>}
                            </div>
                            <div className="text-center">
                                <span className={`block text-[10px] sm:text-xs font-bold uppercase tracking-widest ${step === 3 ? 'text-secondary' : 'text-white/60'}`}>Confirm</span>
                                <span className="hidden sm:block text-[10px] text-white/40 mt-1">Step 03</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-6 sm:mt-[-3rem] relative z-20 pb-24">

                {/* Step 1: Specialist Selection */}
                {step === 1 && (
                    <div className="animate-fade-in-up">
                        <div className="bg-white rounded-[2rem] shadow-2xl p-4 sm:p-8 border border-gray-100 mb-8 sm:mb-12">
                            <div className="flex flex-col gap-4">
                                {/* Title Section */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <div>
                                        <h2 className="text-base sm:text-xl font-bold text-gray-900 flex items-center">
                                            Clinical Specialist Search <i className="fas fa-search-plus ml-2 text-primary/30 text-xs"></i>
                                        </h2>
                                        <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase tracking-widest">Finding the right doctor for your condition</p>
                                    </div>
                                </div>

                                {/* Filters Row */}
                                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                                    {/* Search Input */}
                                    <div className="relative flex-shrink-0 w-full sm:w-56">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="text"
                                            placeholder="Doctor name..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm h-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                                        />
                                    </div>

                                    {/* Dropdowns */}
                                    <div className="flex gap-4 flex-1 overflow-x-auto no-scrollbar">
                                        <FilterDropdown
                                            label="Specialty"
                                            icon={<UserRound className="w-4 h-4" />}
                                            options={specialties}
                                            selected={specialtyFilter}
                                            onSelect={setSpecialtyFilter}
                                            hasSearch
                                        />
                                        <FilterDropdown
                                            label="Experience"
                                            icon={<Briefcase className="w-4 h-4" />}
                                            options={experienceRanges}
                                            selected={expFilter}
                                            onSelect={setExpFilter}
                                        />
                                    </div>

                                    {/* Reset Button */}
                                    <button
                                        onClick={resetFilters}
                                        disabled={!searchTerm && !specialtyFilter && !expFilter}
                                        className={`flex-shrink-0 w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm transition-all h-12 ${(searchTerm || specialtyFilter || expFilter)
                                            ? 'bg-primary text-white shadow-lg hover:bg-primary-dark'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>

                        {filteredDoctors.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
                                {filteredDoctors.map((doc) => (
                                    <div
                                        key={doc.id}
                                        onClick={() => setSelectedDoctor(doc)}
                                        className={`bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl overflow-hidden border transition-all duration-300 group cursor-pointer flex flex-col h-full ${selectedDoctor?.id === doc.id
                                            ? 'ring-4 ring-secondary border-secondary scale-[1.02] sm:scale-[1.03] z-10'
                                            : 'border-gray-100 hover:shadow-2xl'
                                            }`}
                                    >
                                        <div className="h-64 sm:h-72 lg:h-80 overflow-hidden relative">
                                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute top-4 right-4">
                                                <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md">
                                                    <i className="fas fa-star text-orange-400 text-[10px]"></i>
                                                    <span className="text-xs font-bold text-gray-900">{doc.rating}</span>
                                                </div>
                                            </div>
                                            {selectedDoctor?.id === doc.id && (
                                                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                                    <div className="bg-secondary text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-2xl">
                                                        <i className="fas fa-check text-lg sm:text-xl"></i>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6 sm:p-8 text-center flex-grow flex flex-col">
                                            <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">{doc.name}</h3>
                                            <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6">{doc.specialty}</p>
                                            <div className="mt-auto space-y-3 pt-4 border-t border-gray-50">
                                                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
                                                    <span>Experience</span>
                                                    <span className="text-gray-900">{doc.experience}</span>
                                                </div>
                                                <Button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedDoctor(doc);
                                                        handleNext();
                                                    }}
                                                    className={`w-full rounded-xl sm:rounded-2xl font-bold shadow-lg transition-all ${selectedDoctor?.id === doc.id ? 'bg-secondary hover:bg-secondary/90' : 'bg-primary hover:bg-primary-dark'
                                                        }`}
                                                >
                                                    Select & Continue
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-gray-200">
                                <i className="fas fa-user-md-slash text-4xl text-gray-200 mb-6"></i>
                                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">No Specialists Found</h3>
                                <p className="text-sm text-gray-500 mb-8 px-6">Adjust your search criteria to find available experts.</p>
                                <Button onClick={resetFilters} variant="secondary" className="rounded-full px-10">Reset Filters</Button>
                            </div>
                        )}
                    </div>
                )}

                {/* Step 2: Schedule Selection */}
                {step === 2 && (
                    <div className="animate-fade-in-up">
                        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-2/5 p-6 sm:p-12 bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-100">
                                    <button onClick={handleBack} className="text-gray-400 hover:text-primary font-bold text-xs sm:text-sm mb-8 flex items-center gap-2 group">
                                        <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Back to Specialists
                                    </button>
                                    <div className="flex items-center gap-4 sm:gap-6 mb-12">
                                        <img src={selectedDoctor.image} alt="" className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-xl border-4 border-white" />
                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">{selectedDoctor.name}</h2>
                                            <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest">{selectedDoctor.specialty}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 sm:space-y-6">
                                        <h3 className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest">1. Visit Type</h3>
                                        <div className="space-y-3">
                                            {services.map(service => (
                                                <div
                                                    key={service.id}
                                                    onClick={() => setSelectedService(service)}
                                                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer border-2 transition-all flex justify-between items-center ${selectedService.id === service.id
                                                        ? 'bg-white border-secondary shadow-lg scale-[1.02]'
                                                        : 'bg-transparent border-transparent hover:border-gray-200'
                                                        }`}
                                                >
                                                    <div>
                                                        <div className="font-bold text-sm sm:text-base text-gray-800">{service.name}</div>
                                                        <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">{service.duration} Session</div>
                                                    </div>
                                                    <div className="font-bold text-secondary text-base sm:text-lg">₹{service.price}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-3/5 p-6 sm:p-12">
                                    <div className="mb-10 sm:mb-12">
                                        <h3 className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">2. Appointment Date</h3>
                                        <div className="flex space-x-3 sm:space-x-4 overflow-x-auto no-scrollbar pb-4 sm:pb-6">
                                            {dates.map((d, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setSelectedDate(d.fullDate)}
                                                    className={`flex-shrink-0 w-20 sm:w-24 p-4 sm:p-5 rounded-[1.2rem] sm:rounded-[1.5rem] border-2 text-center transition-all ${selectedDate === d.fullDate
                                                        ? 'bg-primary text-white border-primary shadow-xl -translate-y-1'
                                                        : 'bg-white text-gray-600 border-gray-100 hover:border-primary/30'
                                                        }`}
                                                >
                                                    <div className="text-[9px] sm:text-[10px] font-bold opacity-70 uppercase tracking-widest">{d.day}</div>
                                                    <div className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">{d.date.split(' ')[1]}</div>
                                                    <div className="text-[9px] sm:text-[10px] font-bold mt-1 opacity-50 uppercase">{d.date.split(' ')[0]}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mb-10 sm:mb-12">
                                        <h3 className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">3. Available Slots</h3>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
                                            {timeSlots.map((time, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setSelectedTime(time)}
                                                    className={`py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all ${selectedTime === time
                                                        ? 'bg-secondary text-white border-secondary shadow-lg'
                                                        : 'bg-white text-gray-700 border-gray-100 hover:border-secondary/50'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <Button
                                        size="xl"
                                        onClick={handleNext}
                                        disabled={!selectedTime}
                                        className="w-full rounded-xl sm:rounded-[1.5rem] shadow-2xl"
                                    >
                                        Proceed to Details <i className="fas fa-arrow-right ml-3"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Confirmation Form */}
                {step === 3 && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 animate-fade-in-up">
                        <div className="lg:col-span-2 bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl p-6 sm:p-16 border border-gray-100">
                            <button onClick={handleBack} className="text-gray-400 hover:text-primary font-bold text-xs sm:text-sm mb-12 flex items-center gap-2 group">
                                <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Back to Schedule
                            </button>
                            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Patient Information</h2>
                            <form id="booking-form" onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                    <div className="space-y-2">
                                        <label className="block text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input required type="text" className="w-full px-5 sm:px-6 py-4 rounded-xl sm:rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary transition-all font-medium" value={patientDetails.name} onChange={e => setPatientDetails({ ...patientDetails, name: e.target.value })} placeholder="Patient's legal name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                        <input required type="tel" className="w-full px-5 sm:px-6 py-4 rounded-xl sm:rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary transition-all font-medium" value={patientDetails.phone} onChange={e => setPatientDetails({ ...patientDetails, phone: e.target.value })} placeholder="+91" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <input required type="email" className="w-full px-5 sm:px-6 py-4 rounded-xl sm:rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary transition-all font-medium" value={patientDetails.email} onChange={e => setPatientDetails({ ...patientDetails, email: e.target.value })} placeholder="yourname@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Reason for Visit</label>
                                    <textarea rows={4} className="w-full px-5 sm:px-6 py-4 rounded-xl sm:rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary transition-all font-medium resize-none" value={patientDetails.reason} onChange={e => setPatientDetails({ ...patientDetails, reason: e.target.value })} placeholder="Describe symptoms or medical concern..."></textarea>
                                </div>
                            </form>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-10 border border-gray-100 sticky top-24">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-10 border-b pb-6">Booking Recap</h3>
                                <div className="flex items-center gap-4 sm:gap-5 mb-10 p-4 bg-gray-50 rounded-2xl">
                                    <img src={selectedDoctor.image} alt="" className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover shadow-md" />
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm sm:text-base">{selectedDoctor.name}</div>
                                        <div className="text-[9px] sm:text-[10px] text-primary font-bold uppercase tracking-widest">{selectedDoctor.specialty}</div>
                                    </div>
                                </div>
                                <div className="space-y-5 mb-10 text-xs sm:text-sm">
                                    <div className="flex justify-between items-center"><span className="text-gray-400">Date</span><span className="text-gray-900 font-bold">{selectedDate}</span></div>
                                    <div className="flex justify-between items-center"><span className="text-gray-400">Time</span><span className="text-gray-900 font-bold">{selectedTime}</span></div>
                                    <div className="flex justify-between items-center"><span className="text-gray-400">Visit Type</span><span className="text-gray-900 font-bold">{selectedService.name}</span></div>
                                    <div className="flex justify-between items-center pt-5 border-t border-gray-50"><span className="text-gray-900 font-bold text-base sm:text-lg">Amount</span><span className="text-secondary font-bold text-xl sm:text-2xl">₹{selectedService.price}</span></div>
                                </div>
                                <button type="submit" form="booking-form" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-2xl shadow-xl transition-all disabled:opacity-70 flex justify-center items-center">
                                    {isSubmitting ? <><i className="fas fa-spinner fa-spin mr-3"></i> Securing Visit...</> : <>Confirm Priority Visit <i className="fas fa-check-circle ml-3"></i></>}
                                </button>
                                <p className="text-[9px] sm:text-[10px] text-gray-400 text-center mt-6 font-bold uppercase tracking-widest">Priority Health Pass Generated</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Appointment;
