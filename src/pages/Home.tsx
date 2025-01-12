import React from 'react';
import { MapPin, Mail, Clock, Instagram, Facebook, Phone, Star, Award, Users, Sparkles, Heart, Gem, Scissors, Quote } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Gallery from '../components/Gallery';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { ParallaxSection } from '../components/ParallaxSection';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    { icon: Star, title: "Premium Service", description: "Luxurious treatments using high-end products" },
    { icon: Award, title: "Expert Staff", description: "Skilled technicians with years of experience" },
    { icon: Users, title: "Happy Clients", description: "Thousands of satisfied customers" },
    { icon: Sparkles, title: "Pristine Space", description: "Clean, modern, and relaxing environment" }
  ];

  const testimonials = [
    {
      text: "Best nail salon in Coral Springs!",
      author: "Sarah M."
    },
    {
      text: "Exceptional service every time",
      author: "Jennifer K."
    },
    {
      text: "True luxury experience",
      author: "Michael R."
    }
  ];

  const specialties = [
    { icon: Heart, title: "Personalized Care", description: "Tailored treatments for your unique needs" },
    { icon: Gem, title: "Premium Products", description: "Using only the finest quality materials" },
    { icon: Scissors, title: "Expert Techniques", description: "Advanced methods for perfect results" }
  ];

  return (
    <>
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80"
        className="min-h-screen relative"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        
        {/* Content container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left column - Main content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <Sparkles className="w-6 h-6 text-[#e97c42]" />
                    <span className="text-[#e97c42] tracking-wider font-medium">LUXURY NAIL CARE</span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-5xl md:text-7xl font-light leading-tight"
                  >
                    Elevate Your <br />
                    <span className="text-[#e97c42]">Beauty</span> Experience
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl md:text-2xl text-white/90 max-w-xl"
                  >
                    Where artistry meets relaxation. Experience premium nail care in a serene environment designed for your comfort.
                  </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://app.salonrunner.com/customer/login.htm?id=20813"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#e97c42] text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#e97c42] transition-all duration-300 inline-block text-lg font-medium shadow-lg hover:shadow-xl"
                    >
                      Book Your Visit
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="tel:954-575-3366"
                      className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-[#8B4513] transition-all duration-300 inline-block text-lg font-medium"
                    >
                      Call Us
                    </a>
                  </motion.div>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="pt-8"
                >
                  <div className="flex items-center gap-8">
                    <div className="flex -space-x-4">
                      {[1, 2, 3, 4].map((_, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 rounded-full border-2 border-white bg-[#e97c42] flex items-center justify-center text-white font-medium"
                        >
                          {i === 3 ? "99+" : <Star className="w-6 h-6" />}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-lg font-medium">Trusted by 1000+ clients</p>
                      <p className="text-white/80"></p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right column - Testimonials */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="hidden lg:block"
              >
                <div className="grid gap-4">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 + index * 0.2 }}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                    >
                      <div className="flex gap-4">
                        <Quote className="w-8 h-8 text-[#e97c42]" />
                        <div>
                          <p className="text-white text-lg mb-2">{testimonial.text}</p>
                          <p className="text-[#e97c42]">{testimonial.author}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-xl bg-white hover:shadow-xl transition-all duration-300 border border-[#e97c42]/10"
                >
                  <feature.icon className="w-12 h-12 text-[#e97c42] mb-6" />
                  <h3 className="text-xl font-medium text-[#8B4513] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#8B4513]/10" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-5xl font-light text-[#8B4513]">Welcome to Luxury</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  At Winn Star Nail Spa, we believe in providing more than just nail care – we create experiences. 
                  Our dedicated team of professionals ensures that every visit leaves you feeling refreshed, 
                  renewed, and beautiful.
                </p>
                <div className="space-y-6 mt-8">
                  {specialties.map((specialty, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm"
                    >
                      <specialty.icon className="w-8 h-8 text-[#e97c42]" />
                      <div>
                        <h3 className="font-medium text-[#8B4513]">{specialty.title}</h3>
                        <p className="text-gray-600">{specialty.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="grid grid-cols-2 gap-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80" 
                  alt="Spa Interior" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1600971522957-20c653185f52?auto=format&fit=crop&q=80" 
                  alt="Nail Art" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg mt-12"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-[#FFF8F3] to-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-5xl font-light text-center mb-16 text-[#8B4513]">Popular Services</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dip Powder Set",
                price: "45",
                description: "Beautiful, durable, revitalizing.",
                image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80"
              },
              {
                title: "Deluxe Pedicure",
                price: "50",
                description: "Rejuvenating foot treatment with extended massage",
                image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80"
              },
              {
                title: "Acrylic Sets",
                price: "40/50",
                description: "Acrlyic extensions for lasting beauty",
                image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <ScrollAnimation key={index}>
                <motion.div whileHover={{ y: -10 }}>
                  <ServiceCard {...service} />
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1522337094846-8a818d7aad7a?auto=format&fit=crop&q=80"
        className="py-24 relative"
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <ScrollAnimation>
            <h2 className="text-5xl font-light text-center mb-16 text-[#8B4513]">Our Artistry</h2>
          </ScrollAnimation>
          <ScrollAnimation>
            <Gallery />
          </ScrollAnimation>
        </div>
      </ParallaxSection>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#FFF8F3]" id="contact">
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white p-12 rounded-2xl shadow-xl">
              <h2 className="text-5xl font-light text-center mb-12 text-[#8B4513]">Visit Us</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  {[
                    { icon: MapPin, text: "9630 Westview Dr, Coral Springs, FL 33076" },
                    { icon: Mail, text: "hello@winnstarnailspa.com" },
                    { icon: Clock, text: "Mon-Sat: 9:00 AM - 7:00 PM\nSun: 10:00 AM - 5:00 PM" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[#FFF8F3] transition-colors"
                    >
                      <item.icon className="w-6 h-6 text-[#e97c42] mt-1" />
                      <div className="whitespace-pre-line">{item.text}</div>
                    </motion.div>
                  ))}
                  <div className="flex space-x-4 pt-4">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      href="#"
                      className="text-[#e97c42] hover:text-[#8B4513] transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      href="#"
                      className="text-[#e97c42] hover:text-[#8B4513] transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center space-y-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center gap-4 text-[#8B4513] p-6 rounded-xl bg-[#FFF8F3]"
                  >
                    <Phone className="w-8 h-8 text-[#e97c42]" />
                    <a href="tel:954-575-3366" className="text-2xl hover:text-[#e97c42] transition-colors">
                      (954) 575-3366
                    </a>
                  </motion.div>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href="https://app.salonrunner.com/customer/login.htm?id=20813"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-5 bg-[#e97c42] rounded-full text-white font-medium 
                          hover:bg-[#8B4513] transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                      >
                        Book Online
                      </a>
                    </motion.div>
                  </div>
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