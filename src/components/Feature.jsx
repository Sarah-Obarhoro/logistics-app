import React from 'react';
import { motion } from 'framer-motion';
// import { ChevronRight, Map, Shield, Truck, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, imageUrl, reverse }) => (
    <motion.div 
      initial={{ x: reverse ? 100 : -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-8 md:p-6 my-12 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="flex-1 text-center">
        {/* <div className="mb-4">
          <Icon className="w-12 h-12 text-blue-600" />
        </div> */}
        <h3 className="text-[30px] md:text-[40px] mb-4 text-[#494949] source-sans-3 font-[700]">{title}</h3>
        <p className="text-[#494949] source-sans-3 text-[16px] md:text-[24px] font-[400]">{description}</p>
      </div>
      <motion.div 
        className="flex-1"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={imageUrl} alt={title} className="rounded-[30px] shadow-xl w-full" />
      </motion.div>
    </motion.div>
  );

export default FeatureCard;