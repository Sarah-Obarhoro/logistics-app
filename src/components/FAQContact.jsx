import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen relative">
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
              <h3 className="text-xl md:text-[28px] font-bold mb-4 text-white source-sans-3">Didn't find the answer you want?</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full p-2 md:p-3 rounded-lg text-[#9F9F9F] font-normal text-[16px] source-san-3"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-2 md:p-3 rounded-lg text-[#9F9F9F] font-normal text-[16px] source-san-3"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 md:p-3 rounded-lg text-[#9F9F9F] font-normal text-[16px] source-san-3"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#00275F] text-white px-6 py-3 source-sans-3 font-semibold text-base rounded hover:bg-gray-700 transition-colors duration-200"
                >
                  Submit Now
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