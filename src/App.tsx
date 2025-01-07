import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Winn Star Nail Spa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}