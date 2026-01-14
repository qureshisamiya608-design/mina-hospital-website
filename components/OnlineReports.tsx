
import React from 'react';

const OnlineReports: React.FC = () => {
  return (
    <section id="reports" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
           <div className="md:w-2/5 bg-primary p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
              
              <h2 className="font-display text-3xl font-bold mb-6 relative z-10">Patient Portal</h2>
              <p className="mb-8 opacity-90 leading-relaxed relative z-10">
                Access your medical records, lab results, discharge summaries, and upcoming appointments securely from anywhere.
              </p>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <i className="fas fa-file-medical-alt"></i>
                   </div>
                   <span className="font-medium">Lab Reports</span>
                </div>
                <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <i className="fas fa-file-prescription"></i>
                   </div>
                   <span className="font-medium">Prescriptions</span>
                </div>
                <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <i className="fas fa-shield-alt"></i>
                   </div>
                   <span className="font-medium">Secure Access</span>
                </div>
              </div>
           </div>
           
           <div className="md:w-3/5 p-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-gray-800 font-bold text-2xl font-display">Download Reports</h3>
                <i className="fas fa-laptop-medical text-3xl text-gray-300"></i>
              </div>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                 <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">UHID / Patient ID</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-id-card text-gray-400"></i>
                      </div>
                      <input type="text" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Enter your Patient ID" />
                    </div>
                 </div>
                 
                 <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Registered Mobile Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-mobile-alt text-gray-400"></i>
                      </div>
                      <input type="tel" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Enter 10-digit mobile number" />
                    </div>
                 </div>
                 
                 <div className="pt-2">
                   <button className="w-full bg-secondary hover:bg-yellow-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex justify-center items-center group">
                      Get OTP <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                   </button>
                 </div>
                 
                 <p className="text-center text-xs text-gray-500 mt-4">
                   By accessing this portal, you agree to our <a href="#" className="text-primary hover:underline">Terms of Use</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                 </p>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineReports;
