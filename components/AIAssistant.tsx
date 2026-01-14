
import React, { useState, useRef, useEffect } from 'react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to Mina Multi-Speciality Hospitals. I am your priority healthcare assistant. How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const { GoogleGenAI } = await import("@google/genai");
      const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : undefined;
      
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview', // Updated to the recommended model
        contents: userMessage,
        config: {
          systemInstruction: `You are "Mina Assistant," the priority digital concierge for Mina Multi-Speciality Hospital in Hyderabad. 
          
          Hospital Values: Healthcare Excellence, Compassion, Integrity, and Affordability.
          
          Your tone: Sophisticated, professional, warm, and highly efficient.
          
          Branch Locations:
          1. Mehdipatnam Branch: Main hub for specialized surgeries and outpatient care. Located behind Hukas Complex.
          2. Shivarampally Branch: Super Speciality Unit focusing on trauma and critical care near PVNR Expressway (Pillar 254).
          
          Priorities:
          - EMERGENCY: If life-threatening symptoms are mentioned, provide the 24/7 Hotline: 040 2353 1881 immediately.
          - BOOKING: Encourage users to book appointments via our streamlined system.
          - TRANSPARENCY: Mention our affordable consultation fees (approx ₹150 - ₹250).
          `
        }
      });

      const aiText = response.text || "I apologize, I am experiencing a temporary connection issue. Please call our 24/7 helpdesk at 040 2353 1881.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm currently resting. For immediate assistance, please call our 24/7 helpdesk at 040 2353 1881." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* FAB */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'} transition-all duration-500 bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-primary-dark group ring-4 ring-white/50`}
      >
        <i className="fas fa-comment-medical text-2xl group-hover:scale-110 transition-transform"></i>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
        </span>
      </button>

      {/* Chat Window */}
      <div className={`${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'} transition-all duration-400 fixed bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100`}>
        {/* Header */}
        <div className="bg-primary p-6 flex items-center justify-between text-white relative">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center ring-1 ring-white/20">
              <i className="fas fa-heart-pulse text-xl text-secondary"></i>
            </div>
            <div>
              <h3 className="font-bold text-base leading-none mb-1">Priority Care Assistant</h3>
              <p className="text-[10px] text-white/60 tracking-widest uppercase">Mina Hospitals Hyderabad</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full transition-colors flex items-center justify-center">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto bg-[#F8FAFC] space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-primary text-white rounded-tr-none font-medium' 
                : 'bg-white text-gray-700 rounded-tl-none border border-gray-100'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-3xl rounded-tl-none shadow-sm border border-gray-100 flex space-x-2">
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How can we prioritize your health today?"
              className="w-full pl-5 pr-14 py-4 bg-gray-50 border-none rounded-[1.5rem] text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all placeholder:text-gray-400"
            />
            <button 
              onClick={handleSend}
              className="absolute right-3 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-all disabled:opacity-50"
              disabled={!input.trim()}
            >
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
