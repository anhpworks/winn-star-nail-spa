import React from 'react';
import { Phone } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="bg-[#8B4513] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#e97c42]" />
            <a href="tel:954-575-3366" className="text-xl hover:text-[#e97c42] transition-colors">
              (954) 575-3366
            </a>
          </div>
          <a
            href="https://app.salonrunner.com/customer/login.htm?id=20813"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#e97c42] rounded-full text-white font-medium 
              hover:bg-white hover:text-[#e97c42] transform hover:scale-105 
              transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Online
          </a>
        </div>
      </div>
    </div>
  );
}