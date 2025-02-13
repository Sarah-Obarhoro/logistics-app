import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside); 

    return () => window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (page) => currentPage === page;
  const isServicePage = (page) => ['Delivery', 'Freight', 'Logistics'].includes(page);

  return (
    <div className="relative">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        md:bg-[#FAFAFB] md:shadow-md md:py-2
        ${isOpen ? 'h-full' : hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className={`py-4 px-8 flex justify-between items-center ${isOpen ? 'bg-transparent' : ''}`}>
          <div 
            className={`font-[600] source-sans-3 text-[32px] cursor-pointer transition-colors duration-300
              ${hasScrolled && !isOpen ? 'text-gray-800' : 'md:text-gray-800 text-white'}`}
            onClick={() => handlePageChange("Home")}
          >
            <span className={`baloo transition-colors duration-300 
              ${hasScrolled && !isOpen ? 'text-[#004EBE]' : 'md:text-[#004EBE] text-white'}`}>
              k&a
            </span>
            <span className={`transition-colors duration-300 source-sans-3
              ${hasScrolled && !isOpen ? 'text-gray-800' : 'md:text-gray-800 text-white'}`}>
              Dispatch
            </span>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 source-sans-3 text-[16px] font-[600] leading[22.78px]">
            <li>
              <a 
                onClick={() => handlePageChange("Home")} 
                className={`cursor-pointer transition-colors duration-200 ${
                  isActive("Home") ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                onClick={() => handlePageChange("About")} 
                className={`cursor-pointer transition-colors duration-200 ${
                  isActive("About") ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </a>
            </li>
            <li className="relative" ref={dropdownRef}>
              <div 
                className={`flex items-center cursor-pointer transition-colors duration-200 ${
                  isServicePage(currentPage) ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              {showServicesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  {['Delivery', 'Freight', 'Logistics'].map((service) => (
                    <a
                      key={service}
                      onClick={() => {
                        handlePageChange(service);
                        setShowServicesDropdown(false);
                      }}
                      className={`block px-4 py-2 cursor-pointer transition-colors duration-200 ${
                        isActive(service) 
                          ? "bg-gray-100 text-gray-900" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a 
                onClick={() => handlePageChange("Resources")} 
                className={`cursor-pointer transition-colors duration-200 ${
                  isActive("Resources") ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Resources
              </a>
            </li>
          </ul>
          
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-[#FAFAFB] text-[#004EBE] text-[16px] font-[600] source-sans-3 rounded-md shadow-md hover:bg-blue-700 hover:text-white transition-colors duration-200">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`z-50 transition-colors duration-300 ${hasScrolled && !isOpen ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? 
                <span className="flex items-center text-white text-sm font-medium">
                  Close <X className="w-6 h-6 ml-2" />
                </span> : 
                <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden h-full w-full fixed top-0 left-0 bg-black/60 backdrop-blur-sm"
               style={{
                 backgroundImage: "url('/assets/navbackground.png')",
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundBlendMode: 'overlay'
               }}>
            <div className="px-8 pt-24 pb-8 flex flex-col h-full">
              <ul className="space-y-6 text-white text-lg font-medium">
                <li>
                  <a onClick={() => {
                    handlePageChange("Home");
                    setIsOpen(false);
                  }} className="block">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={() => {
                    handlePageChange("About");
                    setIsOpen(false);
                  }} className="block">
                    About
                  </a>
                </li>
                <li>
                  <div onClick={() => setShowServicesDropdown(!showServicesDropdown)} 
                    className="flex items-center">
                    Services
                    <ChevronDown className={`ml-2 w-4 h-4 transform transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`} />
                  </div>
                  {showServicesDropdown && (
                    <ul className="pl-4 mt-4 space-y-4">
                      {['Delivery', 'Freight', 'Logistics'].map((service) => (
                        <li key={service}>
                          <a onClick={() => {
                            handlePageChange(service);
                            setIsOpen(false);
                          }} className="block text-white/80 hover:text-white">
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a onClick={() => {
                    handlePageChange("Resources");
                    setIsOpen(false);
                  }} className="block">
                    Resources
                  </a>
                </li>
              </ul>
              <div className="mt-auto text-center space-y-6">
                <div className="space-y-2 text-white/80">
                  <p>info@k&adispatch.com</p>
                  <p>+1(23)456-709-78</p>
                </div>
                <button className="w-full px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-200">
                  Request a call
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Only show spacer on desktop */}
      <div className="hidden md:block h-16"></div>
    </div>
  );
};

export default Navbar;