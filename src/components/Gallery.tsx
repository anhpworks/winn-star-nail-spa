import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80", // Nail polish collection
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80", // Pedicure setup
    "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80", // Gel nails
    "https://images.unsplash.com/photo-1600970189362-4294e5d94d60?auto=format&fit=crop&q=80", // Nail art
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80", // Manicure process
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80"  // Spa setting
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div 
          key={index}
          className="aspect-square bg-cover bg-center rounded-lg hover:opacity-90 transition cursor-pointer shadow-lg"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Gallery;