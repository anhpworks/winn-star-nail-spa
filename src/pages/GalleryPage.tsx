import React from 'react';
import { ScrollAnimation } from '../components/ScrollAnimation';

export default function GalleryPage() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80",
      title: "Nail Polish Collection",
      category: "Products"
    },
    {
      url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80",
      title: "Luxury Pedicure",
      category: "Pedicure"
    },
    {
      url: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80",
      title: "Gel Extensions",
      category: "Nails"
    },
    {
      url: "https://images.unsplash.com/photo-1600970189362-4294e5d94d60?auto=format&fit=crop&q=80",
      title: "Nail Art Design",
      category: "Art"
    },
    {
      url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80",
      title: "Manicure Process",
      category: "Manicure"
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80",
      title: "Spa Ambiance",
      category: "Spa"
    },
    {
      url: "https://images.unsplash.com/photo-1610992015734-11c37ee1ff8d?auto=format&fit=crop&q=80",
      title: "Relaxation",
      category: "Spa"
    },
    {
      url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80",
      title: "Foot Treatment",
      category: "Pedicure"
    },
    {
      url: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80",
      title: "Professional Finish",
      category: "Nails"
    }
  ];

  const categories = Array.from(new Set(images.map(img => img.category)));

  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation>
          <h1 className="text-4xl font-light text-center mb-12 text-[#8B4513]">Our Gallery</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === 'All'
                  ? 'bg-[#e97c42] text-white'
                  : 'bg-[#FFF8F3] text-[#8B4513] hover:bg-[#e97c42] hover:text-white'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#e97c42] text-white'
                    : 'bg-[#FFF8F3] text-[#8B4513] hover:bg-[#e97c42] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <ScrollAnimation key={index}>
              <div className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-medium mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Book Now Button */}
        <ScrollAnimation>
          <div className="text-center mt-16">
            <a
              href="https://app.salonrunner.com/customer/login.htm?id=20813"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#e97c42] rounded-full text-white font-medium 
                hover:bg-[#8B4513] transform hover:scale-105 
                transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Now
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}