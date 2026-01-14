
import React from 'react';
import { useNavigate } from 'react-router-dom';

const doctors = [
  {
    name: 'Dr. Soheba Shukoor',
    specialty: 'Obstetrics & Gynecology',
    image: 'https://images.unsplash.com/photo-1594824476969-513346381849?auto=format&fit=crop&q=80&w=300&h=350',
    description: 'Senior Consultant with 29+ years experience in High-risk obstetrics & Infertility.'
  },
  {
    name: 'Dr. Hidayatullah Khan',
    specialty: 'Ophthalmology',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7czB8d9Cm0KNnpBY-Pae5x4KerPw_TLb0vg1YxBYk4jqxmCqS6jYi43NuYWCyTk49RQYkEdK71dCPKOucdfn-Ikhv2h0_m0c-a3_QNtoPVDb3332GIKIe61iztMfc2X_gBtjqAXLAK7o5QmtD5mZVXUodxhh27OaFdU51O4o3QL4TWbXvOMdML7iD3CqqLiVLuZy4CJfe9joSla1AtC4z7xhITKOhVJhVK1I8X6hakQzFpiRL2dOD5Hsc3LX53Gh9hEG9HG27Edw',
    description: 'Gold Medalist with 10+ years in Cataract, Lasik, and Glaucoma surgeries.'
  },
  {
    name: 'Dr. Sachin Narkhede',
    specialty: 'Pediatrics & Neonatology',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpCI1YBBz99qmHMvcfuLQbkrDr-SF_Pun4wZqK-YG1x-Wh5Upx-62mKLWGEAgHEk0R29EXDs2rrv5HH3nQAgOQNYF-k92Q1DdpYgXHcPcCJenN2_EmRUibxIG4TOG-uFP5DydjIO2pY8OgUOKunmSdlk1uo99s5JfxIkgm0SmOzVvIzUSz6r5PI7gX1UX-okv8gylSPLjHJn4_EQ7HkMUddvg75m3g5UqpHqSkHqIuNcEe554RrDoTI94hEJLQSXAbnlyei_ngUAQ',
    description: 'Expert in Newborn care, Growth assessment, and Infectious diseases.'
  },
  {
    name: 'Dr. P. Navanith Sagar Reddy',
    specialty: 'Pulmonology',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5JCV2XTMxm8Rx_PGkTbHYdIBZhEPcYtf7CFYnsC__9ZGHWqy_ySAmBwBtq5dUUoE5qrJSwPDWJv0TCr_Pyq3AFqxo65aQOuCe_9RernpNjdnEUxfkTUDFA-mqSXzVXmNAOXxeI2LuiyKJfiD3qFktMhS0bes4ni4AEhcfwnhmdNp4va3sj3TnAlWroENwQ32gexb6HC_Q39I5So6_N3dXguEwD2acpd_idKKqJWspQtD2Wy1a22TqKnmT1ZOv60OHonUb10qUfpc',
    description: 'Highly experienced specialist (45+ Years) for Asthma, TB, and Respiratory failure.'
  },
];

const Specialists: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white" id="doctors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-primary mb-6">Meet Our Skilled Specialists</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We take immense pride in our team of 26+ doctors who lead their fields with compassion, integrity, and extensive clinical experience.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <button 
                onClick={() => navigate('/doctors')}
                className="bg-primary text-white px-8 py-3 rounded font-bold hover:bg-primary-dark transition-all shadow-md"
            >
              View All Doctors
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="group overflow-hidden rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
              <div className="h-[320px] overflow-hidden relative">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm">{doc.description}</p>
                </div>
              </div>
              <div className="p-6 bg-white text-center">
                <h4 className="font-bold text-xl text-gray-800 mb-1">{doc.name}</h4>
                <p className="text-primary font-bold text-sm tracking-wide">{doc.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
