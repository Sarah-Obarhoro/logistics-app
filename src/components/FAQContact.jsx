import React, { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const FAQSection = () => {
  // const [openItem, setOpenItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceID = "service_f5cnmac";
    const templateID = "template_dm88csg";
    const publicKey = "1p1fu7pMuyIG3CYtB";

    // Set up email parameters using the available fields from FAQ form
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
      to_email: "kadispatch.inc@gmail.com",
    };

    try {
      await emailjs.send(serviceID, templateID, emailParams, publicKey);
      toast.success("Message sent successfully! 🎉", {
        duration: 4000,
        position: "top-center",
      });
      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.", {
        duration: 5000,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='faq-contact-form' className="w-full min-h-screen relative">
      <Toaster position="top-center" reverseOrder={false} />
      <div 
        className="w-full h-[30vh] md:h-[35vh] lg:h-[40vh]" 
        style={{
          background: `url(assets/faq.png) no-repeat center center`,
          backgroundSize: 'cover', 
        }}
      />
    
      <div className="w-full px-4 relative">
        <div className="max-w-lg mx-auto -mt-24 md:-mt-24 lg:-mt-24">
          <div className="p-6 border border-[#004EBE] rounded-3xl bg-[#004EBE] shadow-lg">
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-[28px] font-bold mb-4 text-white source-sans-3">
                Didn't find the answer you want?
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full p-2 md:p-3 rounded-lg text-[#9F9F9F] font-normal text-[16px] source-san-3"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-2 md:p-3 rounded-lg text-[#9F9F9F] font-normal text-[16px] source-san-3"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 md:p-3 rounded-lg text-[#9F9F9F] font-normal text-[16px] source-san-3"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#00275F] text-white px-6 py-3 source-sans-3 font-semibold text-base rounded hover:bg-gray-700 transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
