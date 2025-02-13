import React from 'react';
import { motion } from 'framer-motion';
import useWindowSize from '../hooks/useWindowSize';

const FeatureCard = ({ icon: Icon, title, description, images, isReversed, largeImageFirst = false }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768; // Define mobile breakpoint
  
  // Only apply reverse layout on desktop if isReversed is true
  const shouldReverse = !isMobile && isReversed;

  return (
    <motion.div 
      initial={{ x: isReversed ? 100 : -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-4 md:gap-8 p-4 my-4 md:min-h-[600px]`}
    >
      <div className="flex-1 w-full md:max-w-[50%] mb-8 md:mb-0 pt-8">
        <h3 className="text-[28px] md:text-[40px] mb-3 md:mb-4 text-[#494949] source-sans-3 font-[700] text-center">{title}</h3>
        <p className="text-[18px] md:text-[24px] text-[#494949] source-sans-3 font-[400] text-center">{description}</p>
      </div>
      <motion.div 
        className="w-full md:max-w-[50%] relative"
        style={{ 
          height: '700px',
          '@media (max-width: 768px)': {
            height: '500px'
          }
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {images?.length === 2 ? (
          <>
            <img 
              src={images[0]} 
              alt={`${title} first`} 
              className={`absolute 
                ${largeImageFirst 
                  ? 'w-[18rem] md:w-[18rem] h-[45%] z-10 left-10 top-72' 
                  : 'w-[20rem] md:w-[26rem] h-[36rem] z-0 left-0 top-0'} 
                rounded-[30px] shadow-xl object-cover
                sm:object-contain md:object-cover
                max-w-full`}
            />
            <img 
              src={images[1]} 
              alt={`${title} second`} 
              className={`absolute 
                ${largeImageFirst 
                  ? 'w-[20rem] md:w-[26rem] h-[36rem] z-0 right-0 top-0' 
                  : 'w-[18rem] md:w-[18rem] h-[45%] z-10 right-10 top-72'} 
                rounded-[30px] shadow-xl object-cover
                sm:object-contain md:object-cover
                max-w-full`}
            />
          </>
        ) : (
          <img 
            src={images?.[0]} 
            alt={title} 
            className="rounded-[30px] shadow-xl w-full h-full object-cover"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;