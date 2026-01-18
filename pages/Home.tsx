
import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import { Users, Leaf, BrainCircuit } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Key Focus Areas */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Our Triple Mission</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We believe health and environment are interconnected. By addressing one, we strengthen the other.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Users className="text-pink-600 w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">Female Health</h3>
              <p className="text-gray-600">Access to reproductive care, hygiene education, and safe maternal resources for every woman.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <Leaf className="text-emerald-600 w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">Climate Action</h3>
              <p className="text-gray-600">Restoring local ecosystems and teaching communities how to build resilience against a changing climate.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <BrainCircuit className="text-blue-600 w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mental Wellness</h3>
              <p className="text-gray-600">Safe spaces for healing, professional counseling, and breaking the stigma around mental health struggles.</p>
            </div>
          </div>
        </div>
      </section>

      <Carousel />

      {/* Stats Section */}
      <section className="py-24 bg-blue-900 text-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">50k+</h3>
            <p className="text-blue-100 uppercase tracking-widest text-sm">Lives Touched</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">12</h3>
            <p className="text-blue-100 uppercase tracking-widest text-sm">Countries Active</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">100k</h3>
            <p className="text-blue-100 uppercase tracking-widest text-sm">Trees Planted</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">150</h3>
            <p className="text-blue-100 uppercase tracking-widest text-sm">Health Clinics</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
