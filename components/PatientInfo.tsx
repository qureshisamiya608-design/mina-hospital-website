
import React from 'react';

const PatientInfo: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12 uppercase tracking-wide text-center">Patient Rights and Responsibilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-shield-alt text-secondary text-xl"></i>
              </div>
              <h3 className="font-bold text-2xl text-gray-800">Patient Rights</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Right to personal dignity and privacy during clinical examination.',
                'Right to confidentiality about their medical condition and data.',
                'Right to informed consent before treatment or procedures.',
                'Right to protection from physical abuse and neglect.',
                'Right to know the expected cost of treatment upfront.',
                'Right to access his/her clinical record and medical reports.'
              ].map((text, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3 shrink-0"></i>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-user-check text-primary text-xl"></i>
              </div>
              <h3 className="font-bold text-2xl text-gray-800">Patient Responsibilities</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Provide complete & accurate information including full name & history.',
                'Follow the prescribed treatment plan recommended by specialists.',
                'Read all medical forms and consents thoroughly prior to signing.',
                'Follow the rules and regulations regarding hospital visits and smoking.',
                'Treat hospital staff and other patients with courtesy & respect.',
                'Ensure timely payment for services rendered as per hospital policy.'
              ].map((text, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <i className="fas fa-info-circle text-secondary mt-1 mr-3 shrink-0"></i>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;
