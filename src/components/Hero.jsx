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
      <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darker overlay to match image */}
      <img 
        src="/assets/hero.png" 
        alt="Logistics dispatch background"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="relative z-20 container mx-auto px-6 py-16 pt-32">
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[34px] md:text-[72px] text-center md:text-left mb-6 text-white font-[900] source-sans-3 leading-tight"
        >
          Reliable Dispatch Solutions for Businesses and Individuals.
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[18px] md:text-[24px] text-center md:text-left text-white mb-12 max-w-2xl font-[500] source-sans-3"
        >
          From goods delivery to expert dispatch consultancy, we ensure your needs are met with precision and care.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 align-middle justify-center md:justify-start"
        >
          <button className="source-sans-3 font-[600] text-[20px] bg-[#004EBE] hover:bg-blue-700 text-white px-[50px] md:px-14 py-4 md:py-5 rounded-md transition-colors">
            Get a Quote
          </button>
          <button className="source-sans-3 font-[600] text-[20px] bg-transparent text-white px-14 py-5 rounded-md hover:bg-white/10 transition-colors">
            Discover Our Solutions
          </button>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default Hero;