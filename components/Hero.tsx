
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Layer 0: Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/seed/ngo-hero/1920/1080")',
          transform: isVisible ? 'scale(1)' : 'scale(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        {/* Layer 1: Small Badge / Pre-title */}
        <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm font-bold border border-emerald-500/30 backdrop-blur-sm">
            Nurturing Life, Restoring Earth
          </span>
        </div>

        {/* Layer 2: Main Title */}
        <h1 className={`text-4xl md:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Empowering Communities <br />
          <span className="text-emerald-400">Through Care & Climate</span>
        </h1>

        {/* Layer 3: Subtitle and CTA */}
        <div className={`space-y-8 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We provide holistic support for female healthcare, mental wellness, 
            and proactive environmental solutions for a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
              Our Missions <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
