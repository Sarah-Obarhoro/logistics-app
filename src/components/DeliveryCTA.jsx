import React from "react";
import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const CallToAction = () => (
  <section 
    className="flex flex-col items-center justify-center text-center py-16 text-white h-[150vh] md:h-[120vh]" 
    style={{
      backgroundImage: "url('/assets/lastmile..png')",
      backgroundBlendMode: "overlay",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    }}
  >
    <div className="max-w-4xl px-4">
      <h2 className="text-[30px] md:text-[40px] font-[700] source-sans-3 text-center mb-10">Why Choose Us for Last-Mile Delivery?</h2>
      <motion.p 
            variants={slideIn}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[16px] md:text-[24px] mb-12 font-[400] source-sans-3 text-center text-white"
          >
            When it comes to last-mile delivery, K&A Dispatch Inc. ensures seamless, efficient, and on-time service that you and your customers can rely on. With real-time tracking technology, we provide transparency at every step, so you’re always informed. Our customer-centric approach means we handle deliveries professionally, treating your customers like our own to enhance your brand’s reputation. Whether you need flexible, scalable solutions or eco-friendly options, we tailor our services to meet your unique needs. Trust us to deliver more than just packages—we deliver satisfaction, reliability, and excellence.
          </motion.p>
    </div>
  </section>
);

export default CallToAction;