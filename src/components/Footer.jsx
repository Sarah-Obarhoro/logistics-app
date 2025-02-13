import React, { useState } from 'react';
import {  ChevronDown  } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000915] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-[600] source-sans-3 mb-8 text-[24px] md:text-[40px]">
            <span className="baloo">k&a</span>Dispatch
          </h1>
          <div className="mb-12">
            <h2 className="text-24px font-[600] source-sans-3 mb-6">
              Stay Updated on Dispatch Trends
            </h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col md:flex-row items-center relative">
              <div className="relative flex-1 w-full">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 20.5C3.95 20.5 3.47933 20.3043 3.088 19.913C2.69667 19.5217 2.50067 19.0507 2.5 18.5V6.5C2.5 5.95 2.696 5.47933 3.088 5.088C3.48 4.69667 3.95067 4.50067 4.5 4.5H20.5C21.05 4.5 21.521 4.696 21.913 5.088C22.305 5.48 22.5007 5.95067 22.5 6.5V18.5C22.5 19.05 22.3043 19.521 21.913 19.913C21.5217 20.305 21.0507 20.5007 20.5 20.5H4.5ZM12.5 13.5L4.5 8.5V18.5H20.5V8.5L12.5 13.5ZM12.5 11.5L20.5 6.5H4.5L12.5 11.5ZM4.5 8.5V6.5V18.5V8.5Z"
                    fill="#FAFAFB"
                  />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Input your email"
                  className="w-full pl-10 pr-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors mb-4 md:mb-0 md:mr-2"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-[24px] text-[600] source-sans-3 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[16px] text-[500] source-sans-3">
              <li><a onClick={() => handlePageChange("Home")} className="hover:text-blue-400 transition-colors cursor-pointer">Home</a></li>
              <li><a onClick={() => handlePageChange("About")} className="hover:text-blue-400 transition-colors cursor-pointer">About Us</a></li>
              <li>
                <div className="relative">
                  <a 
                    onClick={() => setShowServicesDropdown(!showServicesDropdown)} 
                    className="hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    Services 
                    <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`} />
                  </a>
                  {showServicesDropdown && (
                    <ul className="mt-2 ml-4 space-y-2">
                      <li><a onClick={() => handlePageChange("Delivery")} className="hover:text-blue-400 transition-colors cursor-pointer block">Delivery</a></li>
                      <li><a onClick={() => handlePageChange("Freight")} className="hover:text-blue-400 transition-colors cursor-pointer block">Freight</a></li>
                      <li><a onClick={() => handlePageChange("Logistics")} className="hover:text-blue-400 transition-colors cursor-pointer block">Logistics</a></li>
                    </ul>
                  )}
                </div>
              </li>                 
              <li><a href="#" className="hover:text-blue-400 transition-colors">Get a Quote</a></li>
            </ul>
          </div>
          {/* <div className="space-y-4">
            <h3 className="text-[24px] text-[600] source-sans-3 mb-4">Contact Information</h3>
            <ul className="text-[16px] text-[500] source-sans-3 space-y-2">
              <li>+1(23)456-709-78</li>
              <li>info@k&adispatch.com</li>
            </ul>
          </div> */}
          <div className="space-y-4">
            <h3 className="text-[24px] text-[600] source-sans-3 mb-4">Legal Information</h3>
            <ul className="space-y-2 text-[16px] text-[500] source-sans-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-[24px] text-[600] source-sans-3 mb-4">Contact Information</h3>
            <ul className="text-[16px] text-[500] source-sans-3 space-y-2">
              <li>+1(23)456-709-78</li>
              <li>info@k&adispatch.com</li>
            </ul>
          </div>

          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-[24px] text-[600] source-sans-3 mb-4 ml-20 md:ml-0">Socials</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-400 transition-transform hover:scale-110">
              <svg width="40" height="41" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.9217 3.265C28.0658 3.10019 28.176 2.90861 28.2461 2.70119C28.3162 2.49377 28.3448 2.27458 28.3301 2.05613C28.3155 1.83768 28.258 1.62425 28.1609 1.42803C28.0638 1.2318 27.929 1.05663 27.7642 0.9125C27.5994 0.768374 27.4078 0.658121 27.2004 0.588036C26.9929 0.517951 26.7737 0.489406 26.5553 0.504031C26.3368 0.518656 26.1234 0.576166 25.9272 0.673275C25.731 0.770384 25.5558 0.905191 25.4117 1.07L16.895 10.8033L9.66667 1.16667C9.51142 0.959673 9.31012 0.791667 9.07869 0.675954C8.84726 0.560242 8.59208 0.5 8.33333 0.5H1.66667C1.35715 0.5 1.05374 0.586191 0.790449 0.748915C0.527156 0.91164 0.314377 1.14447 0.175955 1.42131C0.0375338 1.69815 -0.0210613 2.00807 0.00673528 2.31634C0.0345319 2.62461 0.147622 2.91905 0.333334 3.16667L11.0617 17.47L2.07833 27.7367C1.93421 27.9015 1.82396 28.0931 1.75387 28.3005C1.68378 28.5079 1.65524 28.7271 1.66987 28.9455C1.68449 29.164 1.742 29.3774 1.83911 29.5736C1.93622 29.7699 2.07102 29.945 2.23583 30.0892C2.40064 30.2333 2.59223 30.3435 2.79964 30.4136C3.00706 30.4837 3.22625 30.5123 3.4447 30.4976C3.66315 30.483 3.87658 30.4255 4.07281 30.3284C4.26903 30.2313 4.44421 30.0965 4.58833 29.9317L13.105 20.1967L20.3333 29.8333C20.4886 30.0403 20.6899 30.2083 20.9213 30.324C21.1527 30.4398 21.4079 30.5 21.6667 30.5H28.3333C28.6429 30.5 28.9463 30.4138 29.2096 30.2511C29.4728 30.0884 29.6856 29.8555 29.824 29.5787C29.9625 29.3018 30.0211 28.9919 29.9933 28.6837C29.9655 28.3754 29.8524 28.0809 29.6667 27.8333L18.9383 13.53L27.9217 3.265Z" fill="#FAFAFB"/>
              </svg>
              </a>

              <a href="#" className="hover:text-blue-400 transition-transform hover:scale-110">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.7008 3H5.49062C3.89453 3 2.5 4.14844 2.5 5.72578V35.0008C2.5 36.5867 3.89453 38 5.49062 38H34.6922C36.2969 38 37.5 36.5773 37.5 35.0008V5.72578C37.5094 4.14844 36.2969 3 34.7008 3ZM13.3492 32.1742H8.33516V16.5844H13.3492V32.1742ZM11.0156 14.2141H10.9797C9.375 14.2141 8.33594 13.0195 8.33594 11.5242C8.33594 10.0016 9.40234 8.83516 11.043 8.83516C12.6836 8.83516 13.6875 9.99297 13.7234 11.5242C13.7227 13.0195 12.6836 14.2141 11.0156 14.2141ZM31.6742 32.1742H26.6602V23.65C26.6602 21.6078 25.9305 20.2125 24.1164 20.2125C22.7305 20.2125 21.9102 21.15 21.5453 22.0633C21.4086 22.3914 21.3719 22.8383 21.3719 23.2945V32.1742H16.3578V16.5844H21.3719V18.7539C22.1016 17.7148 23.2414 16.2195 25.8937 16.2195C29.1852 16.2195 31.675 18.3891 31.675 23.0664L31.6742 32.1742Z" fill="#FAFAFB"/>
                </svg>
              </a>

              <a href="#" className="hover:text-blue-400 transition-transform hover:scale-110">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.8105 6.1001H7.1897C6.76811 6.1001 6.36379 6.26757 6.06568 6.56568C5.76757 6.86379 5.6001 7.26811 5.6001 7.6897V33.3109C5.6002 33.7324 5.76773 34.1366 6.06582 34.4347C6.36392 34.7327 6.76818 34.9001 7.1897 34.9001H20.9829V23.7473H17.2297V19.4009H20.9829V16.1953C20.9829 12.4753 23.2549 10.4501 26.5733 10.4501C28.1629 10.4501 29.5289 10.5681 29.9273 10.6213V14.5089L27.6257 14.5101C25.8209 14.5101 25.4717 15.3677 25.4717 16.6261V19.4013H29.7757L29.2153 23.7477H25.4717V34.9001H32.8109C33.2324 34.9 33.6366 34.7325 33.9347 34.4344C34.2327 34.1363 34.4001 33.732 34.4001 33.3105V7.6897C34.4001 7.26811 34.2326 6.86379 33.9345 6.56568C33.6364 6.26757 33.2321 6.1001 32.8105 6.1001Z" fill="#FAFAFB"/>
                </svg>
              </a>

              <a href="#" className="hover:text-blue-400 transition-transform hover:scale-110">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_122_143)">
                  <path d="M19.9609 0.65625C25.3516 0.65625 26.0156 0.695312 28.125 0.773438C30.1953 0.851562 31.6406 1.20312 32.9297 1.71094C34.2578 2.21875 35.3516 2.88281 36.4453 3.97656C37.5391 5.07031 38.2031 6.16406 38.7109 7.49219C39.2188 8.78125 39.5703 10.2266 39.6484 12.2969C39.7266 14.4062 39.7656 15.0703 39.7656 20.4609C39.7656 25.8516 39.7266 26.5156 39.6484 28.625C39.5703 30.6953 39.2188 32.1406 38.7109 33.4297C38.2031 34.7578 37.5391 35.8516 36.4453 36.9453C35.3516 38.0391 34.2578 38.7031 32.9297 39.2109C31.6406 39.7188 30.1953 40.0703 28.125 40.1484C26.0156 40.2266 25.3516 40.2656 19.9609 40.2656C14.5703 40.2656 13.9062 40.2266 11.7969 40.1484C9.72656 40.0703 8.28125 39.7188 6.99219 39.2109C5.66406 38.7031 4.57031 38.0391 3.47656 36.9453C2.38281 35.8516 1.71875 34.7578 1.21094 33.4297C0.703125 32.1406 0.351562 30.6953 0.273438 28.625C0.195312 26.5156 0.15625 25.8516 0.15625 20.4609C0.15625 15.0703 0.195312 14.4062 0.273438 12.2969C0.351562 10.2266 0.703125 8.78125 1.21094 7.49219C1.71875 6.16406 2.38281 5.07031 3.47656 3.97656C4.57031 2.88281 5.66406 2.21875 6.99219 1.71094C8.28125 1.20312 9.72656 0.851562 11.7969 0.773438C13.9062 0.695312 14.5703 0.65625 19.9609 0.65625ZM19.9609 3.23438C14.3359 3.23438 13.6719 3.27344 11.4844 3.35156C9.45312 3.42969 8.32031 3.82031 7.57812 4.09375C5.66406 4.875 4.375 6.16406 3.59375 8.07812C3.32031 8.82031 2.92969 9.95312 2.85156 11.9844C2.77344 14.1719 2.73438 14.8359 2.73438 20.4609C2.73438 26.0859 2.77344 26.75 2.85156 28.9375C2.92969 30.9688 3.32031 32.1016 3.59375 32.8438C4.375 34.7578 5.66406 36.0469 7.57812 36.8281C8.32031 37.1016 9.45312 37.4922 11.4844 37.5703C13.6719 37.6484 14.3359 37.6875 19.9609 37.6875C25.5859 37.6875 26.25 37.6484 28.4375 37.5703C30.4688 37.4922 31.6016 37.1016 32.3438 36.8281C34.2578 36.0469 35.5469 34.7578 36.3281 32.8438C36.6016 32.1016 36.9922 30.9688 37.0703 28.9375C37.1484 26.75 37.1875 26.0859 37.1875 20.4609C37.1875 14.8359 37.1484 14.1719 37.0703 11.9844C36.9922 9.95312 36.6016 8.82031 36.3281 8.07812C35.5469 6.16406 34.2578 4.875 32.3438 4.09375C31.6016 3.82031 30.4688 3.42969 28.4375 3.35156C26.25 3.27344 25.5859 3.23438 19.9609 3.23438ZM19.9609 28.3906C24.3359 28.3906 27.8906 24.8359 27.8906 20.4609C27.8906 16.0859 24.3359 12.5312 19.9609 12.5312C15.5859 12.5312 12.0312 16.0859 12.0312 20.4609C12.0312 24.8359 15.5859 28.3906 19.9609 28.3906ZM19.9609 10.3047C25.5859 10.3047 30.1172 14.8359 30.1172 20.4609C30.1172 26.0859 25.5859 30.6172 19.9609 30.6172C14.3359 30.6172 9.80469 26.0859 9.80469 20.4609C9.80469 14.8359 14.3359 10.3047 19.9609 10.3047ZM32.9297 9.91406C32.9297 11.2422 31.8359 12.2578 30.5078 12.2578C29.1797 12.2578 28.1641 11.2422 28.1641 9.91406C28.1641 8.58594 29.1797 7.49219 30.5078 7.49219C31.8359 7.49219 32.9297 8.58594 32.9297 9.91406Z" fill="#FAFAFB"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_122_143">
                  <rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 text-sm text-gray-400">
          © {currentYear} K&A Dispatch Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
