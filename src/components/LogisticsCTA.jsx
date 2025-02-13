import React from "react";
import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const CallToAction = () => (
  <section 
    className="flex flex-col items-center justify-center text-center py-16 text-white h-[120vh] md:h-screen" 
    style={{
      backgroundImage: "url('/assets/CTA.png')",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    }}
  >
    <div className="max-w-3xl px-4">
      <h2 className="text-[24px] md:text-[35px] font-[700] source-sans-3">Ready to transform your logistics operations? Let’s make it happen together!</h2>
      <motion.div variants={slideIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <button className="mt-28 md:mt-10 px-8 py-4 bg-[#FAFAFB] text-[#004EBE] rounded-md text-[18px] md:text-[25px] font-[500] source-sans-3 hover:bg-gray-200">
          Schedule Your Free Consultation
        </button>
      </motion.div>
    </div>
  </section>
);

export default CallToAction;