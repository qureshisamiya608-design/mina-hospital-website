
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Subtle Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Establishing Standards</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-primary leading-tight">
                A Landmark of Trust in <span className="text-secondary italic">Hyderabad.</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Mina Multi Speciality Hospital is more than a medical facility; it is a symbol of compassion and clinical excellence. We bridge the gap between high-end healthcare and affordable accessibility.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                  <i className="fas fa-hands-holding-heart text-secondary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Patient-Centric</h4>
                  <p className="text-sm text-gray-500 mt-1">Every treatment plan is personalized to your unique needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <i className="fas fa-coins text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Affordable Quality</h4>
                  <p className="text-sm text-gray-500 mt-1">Premium healthcare at transparent, economy-conscious rates.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                size="lg"
                onClick={() => navigate('/about')}
                className="rounded-full px-10 shadow-lg hover:translate-x-2 transition-all duration-300"
              >
                Our Complete Story <i className="fas fa-arrow-right ml-3"></i>
              </Button>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Professional Healthcare" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-[2rem] shadow-2xl z-20 max-w-[280px]">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  25+
                </div>
                <div className="font-bold text-primary leading-tight">Years of Clinical Legacy</div>
              </div>
              <p className="text-xs text-gray-600">Built on a foundation of integrity and thousands of successful outcomes.</p>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-10 -left-10 w-full h-full bg-primary/5 rounded-[2rem] -z-10 rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
