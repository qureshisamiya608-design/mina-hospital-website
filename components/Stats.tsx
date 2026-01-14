
import React from 'react';

const stats = [
  { label: 'Patients', value: '6L+', icon: 'fa-users' },
  { label: 'Surgeries', value: '1L+', icon: 'fa-check-circle' },
  { label: 'Happy Patients', value: '90%', icon: 'fa-smile' },
  { label: 'Awards', value: '5+', icon: 'fa-award' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center px-4 ${index === 0 ? '' : 'border-l'}`}>
              <div className="mb-3">
                <i className={`fas ${stat.icon} text-3xl text-secondary opacity-90`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-sm tracking-widest uppercase text-white/70 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
