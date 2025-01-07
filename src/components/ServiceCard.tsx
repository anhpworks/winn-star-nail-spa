import React from 'react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <div 
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-[#8B4513]">{title}</h3>
          <span className="text-[#e97c42] text-xl">${price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
        <a
          href="https://app.salonrunner.com/customer/login.htm?id=20813"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full bg-[#e97c42] text-white py-2 rounded hover:bg-[#8B4513] transition inline-block text-center"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;