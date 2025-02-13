import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              ${hasScrolled && !isOpen ? 'text-gray-800' : 'md:text-gray-800 text-gray-500'}`}
            onClick={() => handlePageChange("Home")}
          >
            <span className={`font-baloo transition-colors duration-300 
              ${hasScrolled && !isOpen ? 'text-[#004EBE]' : 'md:text-[#004EBE] text-gray-500'}`}>
              k&a
            </span>
            <span className={`transition-colors duration-300 
              ${hasScrolled && !isOpen ? 'text-gray-800' : 'md:text-gray-800 text-gray-500'}`}>
              Dispatch
            </span>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`z-50 transition-colors duration-300 text-gray-500`}
            >
              {isOpen ? 
                <span className="flex items-center text-gray-500 text-sm font-medium">
                  Close <X className="w-6 h-6 ml-2" />
                </span> : 
                <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </nav>
      <div className="hidden md:block h-16"></div>
    </div>
  );
};

export default Navbar;
