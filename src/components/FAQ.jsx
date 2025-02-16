import React, { useState } from 'react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);
  
  const faqItems = [
    {
      question: 'What services does K&A Dispatch Inc. offer?',
      answer: 'We specialize in freight delivery, last-mile delivery, and logistics consultancy, ensuring secure and efficient transportation solutions across the U.S.'
    },
    {
      question: 'How do I book a delivery?',
      answer: 'You can book a delivery by visiting our Contact Page, filling out the request form, or calling our support team.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We currently operate across multiple states in the U.S., focusing on efficient last-mile and freight delivery solutions. Contact us for specific locations.'
    },
    {
      question: 'What types of goods do you transport?',
      answer: 'We handle a variety of goods, including retail products, e-commerce shipments, and B2B freight. We do not transport hazardous or restricted items.'
    },
    {
      question: 'How can I track my shipment?',
      answer: 'Currently, tracking is available upon request. We are working on a client portal to provide real-time tracking soon. Stay tuned!'
    },
    {
      question: 'What are your pricing and payment options?',
      answer: 'Pricing varies based on distance, package size, and urgency. We accept major credit cards, bank transfers, and business invoices.'
    },
    {
      question: 'How do I become a partner or driver with K&A Dispatch Inc.?',
      answer: 'We are always looking for reliable partners and drivers! Visit our Careers Page or email us at info@kadispatchbusiness.com'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-[28px] sm:text-[32px] font-[600] mt-12 sm:mt-20 mb-8 sm:mb-16 source-sans-3 text-center">FAQs</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-[#E1E1E1CC] rounded-3xl bg-[#FAFAFB] px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 lg:py-32">
        {/* Left Column - Header and Contact */}
        <div className="lg:pr-6 xl:pr-12">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-4 source-sans-3 text-[#5F5F5F]">Have Questions?</h2>
          <p className="text-[#000000] text-[18px] sm:text-[20px] lg:text-[22px] font-[400] source-sans-3 mb-6">
            Got questions? We've got answers! Below are some of the most common inquiries about our dispatch and logistics services.
          </p>
          <button className="bg-[#004EBE] text-white font-semibold text-[16px] sm:text-[18px] lg:text-[20px] source-sans-3 px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 rounded-lg mt-4 sm:mt-6 hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>

        {/* Right Column - FAQ Questions */}
        <div className="space-y-4 bg-[#FFFFFF] px-4 sm:px-6 py-8 sm:py-12 lg:py-16 rounded-2xl">
          {faqItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                className="w-full text-left p-3 sm:p-4 bg-white border border-[#E1E1E14D] rounded-lg shadow-sm hover:bg-gray-50 transition-colors flex justify-between items-center"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="font-normal text-[14px] sm:text-[16px] source-sans-3 text-[#9F9F9F] pr-4">{item.question}</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`min-w-[18px] transition-transform ${openItem === index ? 'rotate-180' : ''}`}>
                    <path d="M9.75 4.5C9.75 4.30109 9.67098 4.11032 9.53033 3.96967C9.38968 3.82902 9.19891 3.75 9 3.75C8.80109 3.75 8.61032 3.82902 8.46967 3.96967C8.32902 4.11032 8.25 4.30109 8.25 4.5V8.25H4.5C4.30109 8.25 4.11032 8.32902 3.96967 8.46967C3.82902 8.61032 3.75 8.80109 3.75 9C3.75 9.19891 3.82902 9.38968 3.96967 9.53033C4.11032 9.67098 4.30109 9.75 4.5 9.75H8.25V13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61032 14.171 8.80109 14.25 9 14.25C9.19891 14.25 9.38968 14.171 9.53033 14.0303C9.67098 13.8897 9.75 13.6989 9.75 13.5V9.75H13.5C13.6989 9.75 13.8897 9.67098 14.0303 9.53033C14.171 9.38968 14.25 9.19891 14.25 9C14.25 8.80109 14.171 8.61032 14.0303 8.46967C13.8897 8.32902 13.6989 8.25 13.5 8.25H9.75V4.5Z" fill="#9F9F9F"/>
                </svg>
              </button>
              
              {/* Answer Container */}
              {openItem === index && (
                <div className="mt-2 bg-white border-[#E1E1E14D] rounded-[10px] shadow-sm p-4 sm:p-6 relative border">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenItem(null);
                    }}
                    className="absolute top-4 left-4 p-1 sm:p-2 hover:bg-gray-100 rounded-full"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16" stroke="#5F5F5F" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <div className="ml-8">
                    <p className="text-[#5F5F5F] font-normal text-[14px] sm:text-[16px] source-sans-3">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;