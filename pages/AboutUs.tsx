
import React from 'react';
import { Target, Shield, HeartHandshake, Globe } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/about-team/800/600" 
              alt="Our Team" 
              className="rounded-[40px] shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-blue-900">Rooted in Care, Growing for Change</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2014, EcoHealth was born from a simple realization: human health cannot thrive in a broken environment, and communities cannot prosper when female health and mental wellness are sidelined.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we operate across three continents, powered by a network of over 2,000 volunteers, medical professionals, and environmental scientists who share one vision: A world where every individual has the health and environment they need to flourish.
            </p>
            <div className="flex gap-4">
              <div className="text-center bg-blue-50 p-4 rounded-2xl flex-1">
                <h5 className="font-bold text-blue-600 text-2xl">10+</h5>
                <p className="text-xs text-gray-500 uppercase">Years Experience</p>
              </div>
              <div className="text-center bg-emerald-50 p-4 rounded-2xl flex-1">
                <h5 className="font-bold text-emerald-600 text-2xl">200+</h5>
                <p className="text-xs text-gray-500 uppercase">Global Partners</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-blue-600 w-8 h-8" />
            </div>
            <h4 className="font-bold text-lg">Mission First</h4>
            <p className="text-gray-500 text-sm">Every action we take is driven by the immediate needs of our target communities.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-emerald-600 w-8 h-8" />
            </div>
            <h4 className="font-bold text-lg">Unwavering Integrity</h4>
            <p className="text-gray-500 text-sm">We maintain the highest standards of financial and ethical accountability.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="text-pink-600 w-8 h-8" />
            </div>
            <h4 className="font-bold text-lg">Compassion Always</h4>
            <p className="text-gray-500 text-sm">We treat every individual with the dignity and empathy they deserve.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-amber-600 w-8 h-8" />
            </div>
            <h4 className="font-bold text-lg">Local Solutions</h4>
            <p className="text-gray-500 text-sm">We empower local leaders to drive their own community's progress.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[40px] p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to make an impact?</h2>
          <p className="text-blue-50 text-lg mb-10 max-w-2xl mx-auto">Whether you want to donate, volunteer, or partner with us, your contribution makes a difference.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all">Join our team</button>
            <button className="bg-emerald-400 text-white border-2 border-emerald-300 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all">Become a Donor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
