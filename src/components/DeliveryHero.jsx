import React from 'react';
import { motion } from 'framer-motion';

const DeliveryHero = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative min-h-screen"
  >
    {/* Background Image Container */}
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
      <img 
        src="/assets/deliveryhero.png" 
        alt="Logistics consultation background"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="relative z-20 container mx-auto px-6 py-16 pt-32">
      <div className="flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[30px] md:text-[40px] font-[900] mb-8 source-sans-3 text-white"
          >
            Last-Mile Delivery
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl text-[16px] md:text-[24px] mb-12 font-[400] source-sans-3 text-center text-white"
          >
            Looking for a hassle-free last-mile delivery? We’ve got you covered! Whether it's delivering online orders directly to your customers or transporting products to local stores, we ensure your packages arrive on time and in perfect condition. 
            <br />
            <br />
            With real-time tracking and a focus on reliability, we make the final stretch of delivery smooth and stress-free. 
            You can count on us to handle the details while you focus on keeping your customers happy!
          </motion.p>
        </div>
      </div>
    </div>
  </motion.section>
);

export default DeliveryHero;