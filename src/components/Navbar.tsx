import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-black/40 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Sparkles className={`w-7 h-7 ${
                scrolled ? 'text-[#e97c42]' : 'text-white'
              } group-hover:rotate-180 transition-transform duration-500`} />
              <div className="absolute inset-0 animate-ping opacity-30">
                <Sparkles className={`w-7 h-7 ${scrolled ? 'text-[#e97c42]' : 'text-white'}`} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-medium tracking-wide ${
                scrolled ? 'text-[#8B4513]' : 'text-white'
              }`}>
                Winn Star
              </span>
              <span className={`text-sm tracking-widest ${
                scrolled ? 'text-[#e97c42]' : 'text-white'
              }`}>
                NAIL SPA
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative group px-3 py-2 transition-colors duration-300 text-lg font-medium ${
                  scrolled 
                    ? 'text-[#8B4513] hover:text-[#e97c42]' 
                    : 'text-white hover:text-[#e97c42]'
                }`}
              >
                {label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                  isActive(path) ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`} />
              </Link>
            ))}
            <a
              href="https://app.salonrunner.com/customer/login.htm?id=20813"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-full transition-all duration-300 text-lg font-medium ${
                scrolled
                  ? 'bg-[#e97c42] text-white hover:bg-[#8B4513]'
                  : 'bg-white text-[#8B4513] hover:bg-[#e97c42] hover:text-white'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-[#8B4513]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-[#8B4513]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-lg font-medium ${
                  scrolled 
                    ? 'text-[#8B4513] hover:text-[#e97c42]' 
                    : 'text-white hover:text-[#e97c42]'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://app.salonrunner.com/customer/login.htm?id=20813"
              target="_blank"
              rel="noopener noreferrer"
              className={`block mx-4 px-6 py-2.5 text-center rounded-full text-lg font-medium ${
                scrolled
                  ? 'bg-[#e97c42] text-white hover:bg-[#8B4513]'
                  : 'bg-white text-[#8B4513] hover:bg-[#e97c42] hover:text-white'
              }`}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}