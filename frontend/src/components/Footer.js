import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Brand */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Manish.tech
          </h3>

          {/* Tagline */}
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Building the future through technology, one algorithm at a time.
          </p>

          {/* Made with love */}
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 fill-current animate-pulse" />
            <Code size={16} className="text-blue-400" />
            <span>and</span>
            <Coffee size={16} className="text-yellow-400" />
            <span>in San Francisco</span>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {currentYear} Manish. All rights reserved. •
              <span className="text-gray-400"> Building tomorrow's tech today</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;