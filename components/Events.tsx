
import React from 'react';
import { useNavigate } from 'react-router-dom';

const eventList = [
  { 
    title: 'Emergency Symposium Workshop 2025', 
    description: 'A dedicated workshop for handling critical trauma cases effectively for medical professionals.',
    date: 'Jan 15, 2025'
  },
  { 
    title: 'Independence Day Celebrations', 
    description: 'Celebrating freedom and health with our community staff, patients and their families.',
    date: 'Aug 15, 2025'
  },
  { 
    title: 'Healing Beyond Borders', 
    description: 'Success stories and outreach session of our acclaimed international patient program.',
    date: 'Nov 20, 2024'
  },
];

const Events: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white" id="events">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl font-bold text-gray-800 mb-4 inline-block relative pb-4">
          Events & Workshops
          <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-primary rounded-full"></span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mt-6 mb-16 text-lg">Stay updated with our latest healthcare workshops, community outreach programs, and hospital celebrations.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {eventList.map((event, idx) => (
            <div key={idx} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all text-left flex flex-col h-full">
              <div className="h-52 bg-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-primary/5 transition-colors overflow-hidden relative">
                <i className="fas fa-image text-5xl"></i>
                <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">{event.date}</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-primary mb-4 leading-tight group-hover:text-primary-dark transition-colors">{event.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{event.description}</p>
                <a href="#" className="text-primary font-bold text-sm flex items-center hover:text-secondary transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button 
            onClick={() => navigate('/events')}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-12 rounded-full transition-all text-lg"
          >
            View All Events <i className="fas fa-calendar-alt ml-3"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
