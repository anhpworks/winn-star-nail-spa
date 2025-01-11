import React from 'react';

const Services = () => {
  const services = {
    manicures: [
      { name: "Classic Manicure", price: "22", description: "Nail shaping, cuticle care, hand massage, polish" },
      { name: "Gel Manicure", price: "35", description: "Classic manicure with long-lasting gel polish" },
      { name: "Royal Manicure", price: "37", description: "Extended massage, premium products, paraffin treatment" },
      { name: "Dip Powder", price: "45", description: "Durable, chip-resistant alternative to traditional polish" }
    ],
    pedicures: [
      { name: "Classic Pedicure", price: "33", description: "Foot soak, callus removal, nail care, massage" },
      { name: "Deluxe Pedicure", price: "50", description: "Extended massage, premium scrub, hot towel wrap" },
      { name: "Royal Spa Pedicure", price: "60", description: "Premium treatment with paraffin, mask, extended massage" },
      { name: "Gel Pedicure", price: "48", description: "Long lasting LED cured premium polish"}
    ],
    enhancements: [
      { name: "Acrylic Full Set", price: "40reg/50gel", description: "Classic acrylic nail extensions" },
      { name: "Gel-X Set", price: "60", description: "Natural-looking gel nail extensions" },
      { name: "Acrylic Fill", price: "30reg/40gel", description: "Maintenance for acrylic nails" },
      { name: "Nail Repair", price: "4+", description: "Per nail fix or replacement" }
    ],
    waxing: [
      { name: "Eyebrows", price: "12", description: "Precise shaping and grooming" },
      { name: "Upper Lip", price: "8", description: "Gentle hair removal" },
      { name: "Chin", price: "10", description: "Thorough hair removal" },
      { name: "Full Face", price: "40", description: "Complete facial hair removal treatment" }
    ],
    additional: [
      { name: "French Tips", price: "7/10", description: "Classic white tips addition" },
      { name: "Nail Art", price: "3+", description: "Per nail, varies by design" },
      { name: "Gel Polish Removal", price: "15+", description: "Safe removal of gel polish" },
      { name: "Paraffin Treatment", price: "13+", description: "Moisturizing wax treatment" }
      
    ],
    kids: [
      { name: "Mini Mani", price: "20", description: "Hand care including gentle cuticle cleaning, nail filing, and polish"},
      { name: "Mini Gel Mani", price: "32", description: "Mini mani with long lasting cured gel polish"},
      { name: "Mini Pedi", price: "30", description: "Foot care including a moisturizer, a scrub, and nail polish "},
      { name: "Mini Gel Pedi", price: "40", description:"Mini pedi with long lasting cured gel polish"}
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
        <ServiceSection title="Waxing Services" items={services.waxing} />
        <ServiceSection title="Additional Services" items={services.additional} />
        <ServiceSection title="Kid Menu" items={services.kids} />
        
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