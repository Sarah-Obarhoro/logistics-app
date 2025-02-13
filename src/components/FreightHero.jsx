import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative min-h-screen"
  >
    {/* Background Image Container */}
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
      <img 
        src="/assets/freighthero.png" 
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
            className="text-[34px] md:text-[40px] font-[900] mb-8 source-sans-3 text-white"
          >
            Freight Delivery (B2B Transport Solutions)
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl text-[16px] md:text-[24px] mb-12 font-[400] source-sans-3 text-center text-white"
          >
            At K&A Dispatch Inc., we specialize in Freight Delivery tailored to meet the needs of businesses. 
            Our B2B transport solutions are designed to ensure the seamless and efficient movement of goods, providing manufacturers, retailers, and wholesalers with reliable and cost-effective logistics support. 
            <br />
            <br />
            Whether you need to transport bulk goods across the country or distribute smaller shipments locally, we’ve got you covered.
          </motion.p>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Hero;