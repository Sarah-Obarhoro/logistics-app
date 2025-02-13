import React from 'react';
import { motion } from "framer-motion";

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      {/* Vision Section */}
      <motion.div 
        variants={itemVariants}
        className="group flex md:items-start md:space-x-6 flex-col md:flex-row items-center text-center md:text-left p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
      >
        <motion.div 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-[#00419E] flex-shrink-0 rounded-lg shadow-lg mb-6 md:mb-0"
        />
        <div className="space-y-4">
          <motion.h2 
            className="text-[40px] source-sans-3 font-bold text-gray-800 tracking-tight"
          >
            Vision
          </motion.h2>
          <motion.p 
            className="text-gray-600 leading-relaxed text-[16px] md:text-[24px] font-[400] source-sans-3"
          >
            To be the go-to logistics partner, empowering businesses and individuals 
            with dependable delivery solutions that drive success and growth.
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        variants={itemVariants}
        className="group flex md:items-start md:space-x-6 flex-col md:flex-row items-center text-center md:text-left p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
      >
        <motion.div 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-[#C30D0D] flex-shrink-0 rounded-lg shadow-lg mb-6 md:mb-0"
        />
        <div className="space-y-4">
          <motion.h2 
            className="text-[40px] source-sans-3 font-bold text-gray-800 tracking-tight"
          >
            Mission
          </motion.h2>
          <motion.p 
            className="text-gray-600 leading-relaxed text-[16px] md:text-[24px] font-[400] source-sans-3"
          >
            To redefine logistics by delivering innovative, customer-centric services 
            that connect people and goods with care and precision.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Vision;