
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const allEvents = [
  { 
    title: 'Emergency Symposium Workshop 2025', 
    description: 'A dedicated workshop for handling critical trauma cases effectively for medical professionals. Featuring guest lectures from top surgeons.',
    date: 'Jan 15, 2025',
    category: 'Medical Education',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Free Cardiology Screening Camp', 
    description: 'Community health outreach program providing free ECG, blood pressure checks, and doctor consultations for senior citizens.',
    date: 'Feb 10, 2025',
    category: 'Community',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Independence Day Celebrations', 
    description: 'Celebrating freedom and health with our community staff, patients and their families. Flag hoisting and health pledge.',
    date: 'Aug 15, 2025',
    category: 'Celebration',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Healing Beyond Borders Conference', 
    description: 'Success stories and outreach session of our acclaimed international patient program. Networking for medical tourism partners.',
    date: 'Nov 20, 2024',
    category: 'Tourism',
    status: 'Past',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'World Diabetes Day Awareness', 
    description: 'Special seminar on managing lifestyle and diet for diabetic patients. Expert dieticians and endocrinologists speaking.',
    date: 'Nov 14, 2024',
    category: 'Awareness',
    status: 'Past',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Pediatric Vaccination Drive', 
    description: 'Protecting the next generation. A week-long focus on childhood immunizations with expert pediatric counseling.',
    date: 'Oct 05, 2024',
    category: 'Public Health',
    status: 'Past',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  }
];

const EventsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block animate-fade-in-up">Community & Excellence</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">Events & Workshops</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Stay engaged with our journey of clinical innovation and community well-being in Hyderabad.
          </p>
        </div>
      </div>

      {/* Events Listing */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allEvents.map((event, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-secondary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {event.date}
                    </span>
                    <span className={`text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg ${event.status === 'Upcoming' ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{event.category}</span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                    {event.description}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-50 mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full rounded-2xl border-primary text-primary hover:bg-primary hover:text-white font-bold transition-all h-12"
                    >
                      {event.status === 'Upcoming' ? 'Register Now' : 'View Recap'} <i className="fas fa-arrow-right ml-2 text-xs"></i>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggestion CTA */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-4xl font-bold text-gray-900">Want us to host a health camp in your area?</h2>
            <p className="text-gray-500 text-lg">We are committed to taking quality healthcare beyond our hospital walls. Share your requests for community programs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="xl" className="rounded-full px-12 shadow-xl hover:scale-105 transition-transform" onClick={() => navigate('/appointment')}>
                Partner with us
              </Button>
              <Button size="xl" variant="outline" className="rounded-full px-12 border-primary text-primary hover:bg-primary/5">
                Contact Public Relations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
