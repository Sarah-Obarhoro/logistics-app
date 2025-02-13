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
            className="text-[30px] md:[40px] font-[900] mb-8 source-sans-3 text-[#494949]"
          >
            About us
          </motion.h1>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[16px] md:text-[24px] md:[40px] font-[700] mb-8 source-sans-3 text-[#494949]"
          >
            Your Trusted Partner in Seamless Delivery Solutions
          </motion.h3>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[16px] md:text-[24px] mb-12 font-[400] source-sans-3 text-center text-[#494949]"
          >
            we are passionate about delivering excellence in logistics and transportation. As a customer-focused company, we specialize in providing freight delivery and last-mile solutions tailored to meet the unique needs of businesses and individuals. Our mission is to simplify logistics, ensuring your goods are handled with care and precision from start to finish.

            Every delivery is more than a job—it’s a commitment to building lasting partnerships. Whether you’re a small business looking to streamline your supply chain or an individual needing secure delivery services, we are here to make logistics stress-free and efficient for you.
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
            src="/assets/abouthero.png" // Replace with your actual image
            alt="Logistics consultation"
            className="rounded-[30px] shadow-xl w-full hidden md:block"
          />

            <img 
            src="/assets/aboutheromobile.png" 
            alt="Logistics consultation"
            className="rounded-[30px] shadow-xl w-full block md:hidden"
          />
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default Hero;