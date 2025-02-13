import React from "react";
import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const CallToAction = () => (
  <section 
    className="flex flex-col items-center justify-center text-center py-16 text-white h-[120vh]" 
    style={{
      backgroundImage: "url('/assets/trucks.png')",
      backgroundBlendMode: "overlay",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    }}
  >
    <div className="max-w-4xl px-4">
      <h2 className="text-[30px] md:text-[40px] font-[700] source-sans-3 text-center mb-10">Why Choose K&A Dispatch Inc. for Your Freight Delivery Needs?</h2>
      <motion.p 
            variants={slideIn}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[16px] md:text-[24px] mb-12 font-[400] source-sans-3 text-center text-white"
          >
            At K&A Dispatch Inc., we’re here to make freight delivery simple, reliable, and tailored to your needs. From on-time deliveries to personalized logistics plans, we ensure your goods get where they need to be—safely and efficiently. With real-time tracking, a team of seasoned professionals, and scalable services, we’ve got the expertise to support your business every step of the way. Let us handle the logistics while you focus on what matters most—growing your business.
            4o
          </motion.p>
    </div>
  </section>
);

export default CallToAction;