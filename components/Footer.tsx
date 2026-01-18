
import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="text-emerald-500 w-6 h-6" />
            <span className="text-2xl font-bold">EcoHealth</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Advancing female health, mental resilience, and climate stability through community-led solutions and compassionate advocacy.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Our Focus</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">Female Reproductive Health</li>
            <li className="hover:text-white cursor-pointer transition-colors">Mental Wellness Programs</li>
            <li className="hover:text-white cursor-pointer transition-colors">Eco-Resilience Projects</li>
            <li className="hover:text-white cursor-pointer transition-colors">Policy Advocacy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">Donate</li>
            <li className="hover:text-white cursor-pointer transition-colors">Volunteer</li>
            <li className="hover:text-white cursor-pointer transition-colors">Impact Reports</li>
            <li className="hover:text-white cursor-pointer transition-colors">News & Media</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-500" />
              info@ecohealth-ngo.org
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-500" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-500" />
              123 Compassion Way, Green City
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} EcoHealth NGO. All rights reserved. Built for impact.
      </div>
    </footer>
  );
};

export default Footer;
