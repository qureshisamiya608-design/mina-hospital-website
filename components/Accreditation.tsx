
import React from 'react';

const Accreditation: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-white border-b border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl font-bold mb-1">Accreditation & Certification</h3>
          <p className="text-sm text-gray-400 font-light tracking-wide uppercase">Advanced Care For A Healthier Tomorrow In Hyderabad</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { tag: 'GOVT', sub: 'GOVT OF TS' },
            { tag: 'NABH', sub: 'NABH ACCREDITED' },
            { tag: 'TSRTC', sub: 'TSRTC EMPANELED' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-bold mb-3 hover:bg-primary/20 transition-colors shadow-inner">
                {item.tag}
              </div>
              <span className="text-[10px] text-gray-500 font-bold tracking-widest">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
