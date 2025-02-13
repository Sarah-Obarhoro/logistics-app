import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Freight Delivery (B2B)",
    description: "Reliable bulk goods transport for manufacturers and retailers. Trust us for efficient, professional large-scale deliveries.",
    image: "/assets/truck.png",
    alt: "Semi truck on highway"
  },
  {
    title: "Last-Mile Delivery (B2C)",
    description: "Seamless door-to-door delivery for individuals and retailers. We bring convenience and speed to your customers' doorsteps.",
    image: "/assets/goods.png",
    alt: "Stacked delivery boxes"
  },
  {
    title: "Consultancy Services",
    description: "Expert assistance with dispatch operations, securing goods, hiring drivers, and optimizing logistics for maximum efficiency.",
    image: "/assets/meeting.png",
    alt: "Team meeting with sticky notes"
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-[#0A0D14] py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold source-sans-3 text-white text-center mb-16"
        >
          What We Deliver
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-[600] mb-4 source-sans-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 source-sans-3 font-[400] text-[16px]">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="text-[#004EBE] source-sans-3 font-[400] text-[16px] hover:text-blue-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;