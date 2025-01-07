import React from 'react';
import { MapPin, Mail, Clock, Instagram, Facebook, Phone, Star, Award, Users, Sparkles } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Gallery from '../components/Gallery';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { ParallaxSection } from '../components/ParallaxSection';

const Home = () => {
  const features = [
    { icon: Star, title: "Premium Service", description: "Luxurious treatments using high-end products" },
    { icon: Award, title: "Expert Staff", description: "Skilled technicians with years of experience" },
    { icon: Users, title: "Happy Clients", description: "Thousands of satisfied customers" },
    { icon: Sparkles, title: "Pristine Space", description: "Clean, modern, and relaxing environment" }
  ];

  return (
    <>
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1610992015734-11c37ee1ff8d?auto=format&fit=crop&q=80"
        className="h-screen"
      >
        <div className="absolute inset-0 bg-black/40" />
        <ScrollAnimation className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-light mb-4 text-center">Winn Star Nail Spa</h1>
          <p className="text-xl mb-8 text-center max-w-2xl">Experience luxury nail care in a serene environment. Where beauty meets relaxation.</p>
          <a 
            href="https://app.salonrunner.com/customer/login.htm?id=20813"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-white text-[#e97c42] px-8 py-3 rounded-full hover:bg-[#e97c42] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Book Your Experience
          </a>
        </ScrollAnimation>
      </ParallaxSection>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-lg bg-[#FFF8F3] hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-[#e97c42] mb-4" />
                  <h3 className="text-xl font-medium text-[#8B4513] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-4xl font-light text-[#8B4513]">Welcome to Luxury</h2>
                <p className="text-lg text-gray-600">At Winn Star Nail Spa, we believe in providing more than just nail care – we create experiences. Our dedicated team of professionals ensures that every visit leaves you feeling refreshed, renewed, and beautiful.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#e97c42]" />
                    <p className="text-gray-600">Complimentary beverage service</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#e97c42]" />
                    <p className="text-gray-600">Sanitized equipment for each client</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#e97c42]" />
                    <p className="text-gray-600">Relaxing massage chairs</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80" 
                  alt="Spa Interior" 
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600971522957-20c653185f52?auto=format&fit=crop&q=80" 
                  alt="" 
                  className="rounded-lg w-full h-48 object-cover mt-8"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" id="services">
        <ScrollAnimation>
          <h2 className="text-4xl font-light text-center mb-16 text-[#8B4513]">Popular Services</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Royal Manicure",
              price: "37",
              description: "Luxurious hand treatment with premium products and perfect polish",
              image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80"
            },
            {
              title: "Deluxe Pedicure",
              price: "50",
              description: "Rejuvenating foot treatment with extended massage",
              image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80"
            },
            {
              title: "Gel-X Extensions",
              price: "60",
              description: "Custom-designed gel extensions for lasting beauty",
              image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80"
            }
          ].map((service, index) => (
            <ScrollAnimation key={index}>
              <ServiceCard {...service} />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#FFF8F3] py-20 px-4" id="gallery">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-light text-center mb-16 text-[#8B4513]">Our Artistry</h2>
          </ScrollAnimation>
          <ScrollAnimation>
            <Gallery />
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" id="contact">
        <ScrollAnimation>
          <div className="bg-[#FFF8F3] p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-light text-center mb-12 text-[#8B4513]">Visit Us</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#e97c42]" />
                  <p>9630 Westview Dr, Coral Springs, FL 33076</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#e97c42]" />
                  <p>hello@winnstarnailspa.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-[#e97c42]" />
                  <div>
                    <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sun: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="text-[#e97c42] hover:text-[#8B4513] transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-[#e97c42] hover:text-[#8B4513] transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex items-center justify-center gap-4 text-[#8B4513]">
                  <Phone className="w-8 h-8 text-[#e97c42]" />
                  <a href="tel:954-575-3366" className="text-2xl hover:text-[#e97c42] transition-colors">
                    (954) 575-3366
                  </a>
                </div>
                <div className="text-center">
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
      </section>
    </>
  );
};

export default Home;