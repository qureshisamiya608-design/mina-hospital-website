
import React, { useState } from 'react';

const faqs = [
  {
    question: "What are the outpatient consultation timings?",
    answer: "Our outpatient department is open from 9:00 AM to 9:00 PM, Monday through Saturday. Emergency services are available 24/7. Specific doctor schedules may vary, so we recommend booking an appointment."
  },
  {
    question: "How can I access my lab reports online?",
    answer: "You can easily download your lab reports by visiting the 'Online Reports' section on our website. Enter your Patient ID (UHID) and registered mobile number to receive an OTP and access your records."
  },
  {
    question: "Do you facilitate cashless insurance claims?",
    answer: "Yes, Mina Hospitals has tie-ups with major insurance providers and TPAs for cashless treatments. Please visit our insurance desk with your policy card and ID proof for assistance."
  },
  {
    question: "What facilities are available for international patients?",
    answer: "We offer comprehensive support for international patients, including visa assistance, airport transfers, language interpreters, and dedicated guest relation officers to ensure a comfortable stay and treatment."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Common Queries</span>
            <h2 className="font-display text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
         </div>
         
         <div className="max-w-3xl mx-auto">
            {faqs.map((item, index) => (
               <div key={index} className="mb-4 border-b border-gray-100 last:border-0">
                  <button 
                     className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                     <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-gray-700 group-hover:text-primary'}`}>
                        {item.question}
                     </span>
                     <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-primary/10'}`}>
                        <i className="fas fa-chevron-down text-sm"></i>
                     </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                     <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default FAQ;
