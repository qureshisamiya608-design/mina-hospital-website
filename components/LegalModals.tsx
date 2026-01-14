
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const LegalModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-gray-100 relative">
           <div className="bg-primary px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-white font-display">{title}</h3>
            <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <div className="px-6 py-6 max-h-[70vh] overflow-y-auto text-sm text-gray-600 leading-relaxed space-y-4">
            {children}
          </div>
          <div className="bg-gray-50 px-6 py-4 flex flex-row-reverse">
            <button onClick={onClose} className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const PrivacyPolicyModal: React.FC<{isOpen: boolean, onClose: () => void}> = ({isOpen, onClose}) => (
    <LegalModal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
        <p className="text-xs text-gray-400 mb-4">Last Updated: October 2024</p>
        <p>At <strong>Mina Multi Speciality Hospital</strong>, we are deeply committed to protecting your privacy and ensuring the security of your personal health information. This Privacy Policy outlines how we collect, use, and safeguard your data in accordance with Indian healthcare regulations.</p>
        
        <h4 className="font-bold text-gray-800 mt-4 text-base">1. Information Collection</h4>
        <p>We collect personal information including name, contact details, medical history, and insurance information when you book appointments, visit our facility, or use our digital services. This includes data provided during registration, consultation, and treatment.</p>
        
        <h4 className="font-bold text-gray-800 mt-4 text-base">2. Use of Information</h4>
        <ul className="list-disc pl-5 space-y-1">
            <li>To provide medical care and treatment.</li>
            <li>To process payments and coordinate with insurance providers.</li>
            <li>To communicate appointment reminders and health updates.</li>
            <li>To improve our hospital facilities and services.</li>
        </ul>
        <p>We do not sell your personal data to third parties.</p>
        
        <h4 className="font-bold text-gray-800 mt-4 text-base">3. Data Security</h4>
        <p>We employ industry-standard security measures, including encryption and restricted access controls, to protect your electronic health records (EHR). Access is restricted to authorized medical and administrative personnel only.</p>

        <h4 className="font-bold text-gray-800 mt-4 text-base">4. Your Rights</h4>
        <p>You have the right to access your medical records, request corrections to your data, and withdraw consent for marketing communications at any time.</p>
    </LegalModal>
);

export const TermsOfServiceModal: React.FC<{isOpen: boolean, onClose: () => void}> = ({isOpen, onClose}) => (
    <LegalModal isOpen={isOpen} onClose={onClose} title="Terms of Service">
        <p className="text-xs text-gray-400 mb-4">Effective Date: January 2024</p>
        <p><strong>Welcome to Mina Multi Speciality Hospital.</strong> By accessing our website or utilizing our healthcare services, you agree to comply with and be bound by the following terms and conditions.</p>
        
        <h4 className="font-bold text-gray-800 mt-4 text-base">1. Medical Disclaimer</h4>
        <p>The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition.</p>
        
        <h4 className="font-bold text-gray-800 mt-4 text-base">2. Appointment Booking</h4>
        <p>Online appointments are subject to doctor availability. While we strive to honor all scheduled times, the hospital reserves the right to reschedule appointments in case of emergency duties or unforeseen circumstances.</p>
        
        <h4 className="font-bold text-gray-800 mt-4 text-base">3. Payment & Billing</h4>
        <p>Payments for services are due at the time of service unless prior arrangements (e.g., insurance cashless authorization) have been made. We accept cash, credit cards, and verified insurance policies.</p>

        <h4 className="font-bold text-gray-800 mt-4 text-base">4. Code of Conduct</h4>
        <p>Patients and visitors are expected to treat hospital staff and other patients with dignity and respect. Any form of verbal abuse, harassment, or violence will not be tolerated and may result in denial of non-emergency services.</p>
    </LegalModal>
);
