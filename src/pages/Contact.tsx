import React, { useState, useRef } from 'react';
import { MapPin, Mail, Clock, Instagram, Facebook, Phone } from 'lucide-react';
import { ScrollAnimation } from '../components/ScrollAnimation';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setStatus('sending');
      await emailjs.sendForm(
        'service_1bascuj',
        'template_0tkzojh',
        formRef.current,
        '5VrBSQM1NvNPjne5W'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      setStatus('error');
      console.error('Failed to send email:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation>
          <div className="bg-[#FFF8F3] p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-light text-center mb-12 text-[#8B4513]">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#e97c42]" />
                  <div>
                    <h2 className="font-medium text-[#8B4513]">Location</h2>
                    <p>9630 Westview Dr, Coral Springs, FL 33076</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#e97c42]" />
                  <div>
                    <h2 className="font-medium text-[#8B4513]">Phone</h2>
                    <a href="tel:954-575-3366" className="hover:text-[#e97c42] transition-colors">
                      (954) 575-3366
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#e97c42]" />
                  <div>
                    <h2 className="font-medium text-[#8B4513]">Email</h2>
                    <a href="mailto:hello@winnstarnailspa.com" className="hover:text-[#e97c42] transition-colors">
                      hello@winnstarnailspa.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-[#e97c42]" />
                  <div>
                    <h2 className="font-medium text-[#8B4513]">Hours</h2>
                    <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sun: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h2 className="font-medium text-[#8B4513] mb-3">Follow Us</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#e97c42] hover:text-[#8B4513] transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-[#e97c42] hover:text-[#8B4513] transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-light mb-6 text-[#8B4513]">Send Us a Message</h2>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      className="w-full p-3 rounded border border-[#e97c42]/20 focus:outline-none focus:border-[#e97c42]"
                    />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      required
                      className="w-full p-3 rounded border border-[#e97c42]/20 focus:outline-none focus:border-[#e97c42]"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={4}
                      className="w-full p-3 rounded border border-[#e97c42]/20 focus:outline-none focus:border-[#e97c42]"
                    />
                    <button 
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-[#e97c42] text-white py-3 rounded hover:bg-[#8B4513] transition disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && (
                      <p className="text-green-600 text-center">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                      <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                    )}
                  </form>
                </div>
                
                <div className="text-center mt-8">
                  <a
                    href="https://app.salonrunner.com/customer/login.htm?id=20813"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-[#e97c42] rounded-full text-white font-medium 
                      hover:bg-[#8B4513] transform hover:scale-105 
                      transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}