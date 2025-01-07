import React from 'react';

const Services = () => {
  const services = {
    manicures: [
      { name: "Classic Manicure", price: "25", description: "Nail shaping, cuticle care, hand massage, polish" },
      { name: "Gel Manicure", price: "35", description: "Classic manicure with long-lasting gel polish" },
      { name: "Deluxe Manicure", price: "45", description: "Extended massage, premium products, paraffin treatment" },
      { name: "Dip Powder", price: "45", description: "Durable, chip-resistant alternative to traditional polish" }
    ],
    pedicures: [
      { name: "Classic Pedicure", price: "35", description: "Foot soak, callus removal, nail care, massage" },
      { name: "Deluxe Pedicure", price: "55", description: "Extended massage, hot stone, premium scrub" },
      { name: "Luxury Spa Pedicure", price: "75", description: "Premium treatment with paraffin, mask, extended massage" },
      { name: "Kids Pedicure", price: "25", description: "Gentle care for children under 12" }
    ],
    enhancements: [
      { name: "Acrylic Full Set", price: "45", description: "Classic acrylic nail extensions" },
      { name: "Gel Extensions", price: "55", description: "Natural-looking gel nail extensions" },
      { name: "Acrylic Fill", price: "35", description: "Maintenance for acrylic nails" },
      { name: "Nail Repair", price: "5", description: "Per nail fix or replacement" }
    ],
    additional: [
      { name: "French Tips", price: "10", description: "Classic white tips addition" },
      { name: "Nail Art", price: "5+", description: "Per nail, varies by design" },
      { name: "Gel Polish Removal", price: "15", description: "Safe removal of gel polish" },
      { name: "Paraffin Treatment", price: "15", description: "Moisturizing wax treatment" }
    ]
  };

  const ServiceSection = ({ title, items }: { title: string, items: any[] }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-light mb-6 text-[#8B4513] border-b-2 border-[#e97c42]/20 pb-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-medium text-[#8B4513]">{service.name}</h4>
              <span className="text-[#e97c42] font-medium">${service.price}</span>
            </div>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFF8F3] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 text-[#8B4513]">Our Services</h2>
        <ServiceSection title="Manicures" items={services.manicures} />
        <ServiceSection title="Pedicures" items={services.pedicures} />
        <ServiceSection title="Nail Enhancements" items={services.enhancements} />
        <ServiceSection title="Additional Services" items={services.additional} />
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Prices may vary based on length, design complexity, or additional services</p>
          <a 
            href="https://app.salonrunner.com/customer/login.htm?id=20813"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#e97c42] text-white px-8 py-3 rounded-full hover:bg-[#8B4513] transition"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;