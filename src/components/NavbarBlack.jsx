import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const serviceDisplayNames = {
    'Delivery': 'Last-Mile Delivery (B2C)',
    'Freight': 'Freight Delivery (B2B)',
    'Logistics': 'Consultancy Services'
  };

  const handleMobileServiceClick = (service) => {
    handlePageChange(service);
    setMobileServicesOpen(false);
    setIsOpen(false); 
  };

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsOpen(false);
        setShowServicesDropdown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    setShowServicesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (service, e) => {
    e.stopPropagation(); 
    handlePageChange(service); 
  };
    
  const isActive = (page) => currentPage === page;
  const isServicePage = (page) => ['Delivery', 'Freight', 'Logistics'].includes(page);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      setShowServicesDropdown(false);
    }
  };

  return (
    <div className="relative">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        md:bg-[#FAFAFB] md:shadow-md md:py-2
        ${isOpen ? 'h-full' : hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className={`py-4 px-8 flex justify-between items-center ${isOpen ? 'bg-transparent' : ''}`}>
          <div 
            className={`font-[600] source-sans-3 text-[32px] cursor-pointer transition-colors duration-300
              ${hasScrolled && !isOpen ? 'text-gray-800' : 'md:text-gray-800 text-gray-500'}`}
            onClick={() => handlePageChange("Home")}
          >
            <span className={`baloo transition-colors duration-300 
              ${hasScrolled && !isOpen ? 'text-[#004EBE]' : 'md:text-[#004EBE] text-gray-500'}`}>
              k&a
            </span>
            <span className={`transition-colors duration-300 source-sans-3
              ${hasScrolled && !isOpen ? 'text-gray-800' : 'md:text-gray-800 text-gray-500'}`}>
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1">
                  {['Delivery', 'Freight', 'Logistics'].map((service) => (
                    <a
                      key={service}
                      onClick={() => handlePageChange(service)}
                      className={`block px-4 py-2 cursor-pointer transition-colors duration-200 ${
                        isActive(service) 
                          ? "bg-gray-100 text-gray-900" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {serviceDisplayNames[service]}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a 
                onClick={() => handlePageChange("FAQ")} 
                className={`cursor-pointer transition-colors duration-200 ${
                  isActive("FAQ") ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                FAQs
              </a>
            </li>
          </ul>
          
          <div className="hidden md:block">
            <button 
              onClick={scrollToContact} 
              className="px-6 py-2 bg-[#FAFAFB] text-[#004EBE] text-[16px] font-[600] source-sans-3 rounded-md shadow-md hover:bg-blue-700 hover:text-white transition-colors duration-200">
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
                <Menu className="w-6 h-6 text-gray-500" />
              }
            </button>
          </div>
        </div>

        
      {/* Mobile menu */}
      {isOpen && (
          <div 
            className="md:hidden h-full w-full fixed top-0 left-0 bg-black/60 backdrop-blur-sm"
            style={{
              backgroundImage: "url('/assets/navbackground.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
            onClick={handleBackdropClick}
          >
            <div className="px-8 pt-24 pb-8 flex flex-col h-full" onClick={(e) => e.stopPropagation()}>
              <ul className="space-y-6 text-white text-lg font-medium">
                <li>
                  <a onClick={() => handlePageChange("Home")} className="block">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={() => handlePageChange("About")} className="block">
                    About
                  </a>
                </li>
                <li className="relative">
            <button
              onClick={() => {
                setMobileServicesOpen(!mobileServicesOpen);
              }}
              className="flex items-center w-full text-left text-white"
            >
              <span>Services</span>
              <ChevronDown
                className={`ml-2 w-4 h-4 transform transition-transform ${
                  mobileServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {mobileServicesOpen && (
              <ul className="mt-2 space-y-2 pl-4">
                {['Delivery', 'Freight', 'Logistics'].map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => handleMobileServiceClick(service)}
                      className="block w-full text-left py-2 text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {serviceDisplayNames[service]}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
                <li>
                  <a onClick={() => handlePageChange("FAQ")} className="block">
                    FAQs
                  </a>
                </li>
              </ul>
              <div className="mt-auto flex flex-col items-center text-white space-y-4">
                <a href="mailto:info@kadispatchbusiness.com" className="text-center">
                  info@kadispatchbusiness.com
                </a>
                <a href="tel:+1 (435) 264 4145" className="text-center">
                +1 (435) 264 4145
                </a>
                <a 
                  href="tel:+14352644145" 
                  className="px-8 py-2 border border-white rounded-full text-white hover:bg-white hover:text-[#004EBE] transition-colors duration-200"
                >
                  Make a call
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="hidden md:block h-16"></div>
    </div>
  );
};

export default Navbar;