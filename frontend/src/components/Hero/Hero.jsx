import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants 
  const tipVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const tipVariants2 = {
    animate: {
      x: [0, -10, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };


  return (
    <section className="relative w-full overflow-hidden mt-12">
      <div className="relative z-10 max-w-[1280px] mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 py-8 md:py-0">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-black flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-0">
              <span className="w-[13px] h-[13px] bg-[#9061F9] rounded-full"></span>
              <p className="text-sm sm:text-lg font-bold uppercase text-[#e74c3c]">
                Best jobs place
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] xl:text-[70px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight uppercase">
              The Easiest Way to Get Your New Job
            </h1>

            <p className='text-[#37404e]'>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>

            {/* Search Box */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-[0px_18px_40px_rgba(25,_15,_9,_0.1)]">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img
                      src="/img/icon-job.svg"
                      alt="Job icon"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    />
                  </div>
                  <input
                    type="text"
                    id="job-title"
                    placeholder="Job Title"
                    className="w-full text-sm sm:text-base pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img
                      src="/img/icon-location-2.svg"
                      alt="Location icon"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    />
                  </div>
                  <input
                    type="text"
                    id="location"
                    placeholder="Location"
                    className="w-full text-sm sm:text-base pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-end">
                  <button className="bg-[#7d5be6] hover:bg-[#9061F9] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-lg font-medium w-full sm:w-auto transition-colors">
                    Find Jobs
                  </button>
                </div>
              </div>
            </div>
            <p className='text[#37404e]'>
              <span className='font-bold'>
                Popular Searches
              </span>
              : Designer, Developer, Web, Engineer, Senior,</p>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end relative">
            <motion.div
              className="absolute top-[300px] left-10 z-20"
              variants={tipVariants}
              animate="animate"
            >
              <img
                src="/img/tip-2.png"
                alt="Tip 1"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-[270px] md:h-full"
              />
            </motion.div>
            <motion.div
              className="absolute top-[400px] right-0 z-20"
              variants={tipVariants2}
              animate="animate"
              initial={{ y: -10 }}
            >
              <img
                src="/img/tip-1-1.png"
                alt="Tip 2"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-[270px] md:h-full"
              />
            </motion.div>

            {/* Main Hero Image */}
            <img
              src="/img/girl-hero.png"
              alt="girl-hero image"
              className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[80vh] object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;