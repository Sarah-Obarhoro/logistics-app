import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative min-h-screen bg-gray-50"
  >
    <div className="container mx-auto px-6 py-16 pt-32">
      <div className="flex flex-col items-center">
        {/* Text Content */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[30px] md:text-[40px] font-[900] mb-8 source-sans-3 text-[#494949]"
          >
            Expert guidance to streamline operations, secure goods,
            <br className="hidden md:block" />
            and boost efficiency at every step.
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[16px] md:text-[24px] mb-12 font-[400] source-sans-3 text-center text-[#494949]"
          >
            We don’t just deliver goods; we deliver solutions. Our consultancy services are designed to empower businesses with the tools and strategies they need to succeed in today’s fast-paced logistics landscape. Whether you're a startup looking to establish efficient dispatch systems or a growing company aiming to optimize existing processes, we’re here to help.
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-6xl mx-auto"
        >
          <img 
            src="/assets/logisticshero.png" 
            alt="Logistics consultation"
            className="rounded-[30px] shadow-xl w-full hidden md:block"
          />

          <img 
            src="/assets/logisticsheromobile.png" // Replace with your actual image
            alt="Logistics consultation"
            className="rounded-[30px] shadow-xl w-full block md:hidden"
          />
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default Hero;