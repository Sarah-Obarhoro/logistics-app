import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formState, setFormState] = React.useState({
      fullName: '',
      email: '',
      message: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log('Form submitted:', formState);
    };
  
    return (
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Take the Next Step</h2>
          <p className="text-md font-normal text-center mb-12">Fill out the form to connect with us for quotes, consultations, or service details. We're here to support your delivery needs!</p>
          
          {/* Added flex container for form and map */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-0">
            {/* Form container */}
            <div className="w-full md:w-1/2 bg-[#E1E1E126] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none shadow-lg shadow-[#7C7C7C26] px-6 md:px-0">
              <form onSubmit={handleSubmit} className="space-y-6 md:px-20 md:py-16 py-8">
                <div>
                  <label className="block text-[#494949] mb-1 -sans-3 text-[16px]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    value={formState.fullName}
                    onChange={(e) => setFormState(prev => ({ ...prev, fullName: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#494949] mb-1 source-sans-3 text-[16px]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#494949] mb-1 t-[16px]">
                    Phone number <span className="text-[#494949] text-sm italic">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    value={formState.phoneNumber}
                    onChange={(e) => setFormState(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-[#494949] mb-1 source-sans-3 text-[16px]">
                    Service of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
                    value={formState.serviceOfInterest}
                    onChange={(e) => setFormState(prev => ({ ...prev, serviceOfInterest: e.target.value }))}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#494949] mb-1 source-sans-3 text-[16px]">Write your message here</label>
                  <textarea
                    rows={6}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={formState.subscribeToEmails}
                    onChange={(e) => setFormState(prev => ({ ...prev, subscribeToEmails: e.target.checked }))}
                  />
                  <label className="text-sm text-[#494949]">
                    By submitting this form, I acknowledge that I am subscribing to emails related to k&a Dispatch solutions and services.
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-[50%] bg-[#004EBE] ml-[5rem] md:ml-28 mt-20 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors"
                >
                  Submit
                </motion.button>
              </form>
            </div>

            {/* Map container */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-[117vh]">
              <img 
                src="/assets/map.png" 
                alt="Location map"
                className="w-full h-full object-cover md:rounded-md"
              />
            </div>
          </div>
        </div>
      </motion.section>
    );
  };

export default ContactForm;