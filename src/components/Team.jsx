import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full p-4 md:p-8">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto rounded-2xl bg-gray-900 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="w-full md:w-1/2 px-6 md:px-32 py-20 md:py-24 flex flex-col justify-center space-y-6 md:space-y-8 text-center md:text-left">
            <motion.h2 
              variants={itemVariants}
              className="text-[30px] md:text-[40px] font-bold text-[#FAFAFB] source-sans-3 tracking-tight"
            >
              Join Our Team
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-[16px] md:text-[24px] font-[400] source-sans-3 leading-relaxed"
            >
              we're not just a company—we're a family. Join a team where innovation 
              meets collaboration, and your skills drive the future of logistics. 
              Together, let's redefine excellence in delivery solutions.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="pt-2 md:pt-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#004EBE] text-white px-8 py-[14px] rounded-lg text-[16px] source-sans-3 font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Explore Career Opportunities
              </motion.button>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-1/2 h-[280px] md:h-auto mt-6 md:mt-0"
          >
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="/assets/team.png"
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;