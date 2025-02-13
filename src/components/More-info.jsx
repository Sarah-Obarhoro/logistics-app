import React from 'react';
import { motion } from 'framer-motion';

const MoreInfo = () => (
  <div className="relative">
    {/* Top Section with Navy Background */}
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-[#001A3F] text-white py-16"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[50px] font-[700] source-sans-3 mb-6"
          >
            Your Goods, Our Priority.
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[16px] md:text-[25px] font-[500] source-sans-3"
          >
            Combining safety and efficiency to redefine your delivery experience.
          </motion.p>
        </div>
      </div>
    </motion.section>

    {/* Bottom Section with Container Image */}
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        <img 
          src="/assets/lastmile.png" 
          alt="Container yard"
          className="w-full object-cover h-[500px]"
        />
        {/* Play Button */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
          </div>
        </div> */}
      </div>
    </motion.section>
  </div>
);

export default MoreInfo;