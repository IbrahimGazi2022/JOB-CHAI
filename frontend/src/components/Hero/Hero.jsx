import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Item animations
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Floating tip animations
  const tipVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const tipVariants2 = {
    animate: {
      x: [0, -15, 15, 0],
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const tipVariants3 = {
    animate: {
      y: [0, -10, 5, 0],
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Button animation
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#9061F9",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  // Input field animation
  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(125, 91, 230, 0.2)",
      transition: {
        duration: 0.2
      }
    }
  };

  // Main image animation
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto h-full flex items-center px-4 sm:px-6 lg:px-4 py-8 md:py-0">
        <motion.div
          className="w-full flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {/* Left Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-black flex flex-col justify-center"
            variants={container}
          >
            <motion.div
              className="flex items-center gap-2 mb-0"
              variants={item}
            >
              <motion.span
                className="w-[13px] h-[13px] bg-[#9061F9] rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <p className="text-sm sm:text-lg font-bold uppercase text-[#9061F9]">
                Best jobs place
              </p>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] xl:text-[70px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight uppercase"
              variants={item}
            >
              The Easiest Way to Get Your <span className="text-[#7d5be6]">New Job</span>
            </motion.h1>

            <motion.p
              className='text-[#37404e]'
              variants={item}
            >
              Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
            </motion.p>

            {/* Search Box */}
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-[0px_18px_40px_rgba(25,_15,_9,_0.1)]"
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.div
                  className="flex-1 relative"
                  whileFocus="focus"
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <motion.img
                      src="/img/icon-job.svg"
                      alt="Job icon"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                      whileHover={{ rotate: 10 }}
                    />
                  </div>
                  <motion.input
                    type="text"
                    id="job-title"
                    placeholder="Job Title"
                    className="w-full text-sm sm:text-base pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </motion.div>
                <motion.div
                  className="flex-1 relative"
                  whileFocus="focus"
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <motion.img
                      src="/img/icon-location-2.svg"
                      alt="Location icon"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                      whileHover={{ rotate: 10 }}
                    />
                  </div>
                  <motion.input
                    type="text"
                    id="location"
                    placeholder="Location"
                    className="w-full text-sm sm:text-base pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </motion.div>
                <div className="flex items-end">
                  <motion.button
                    className="bg-[#7d5be6] hover:bg-[#9061F9] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-lg font-medium w-full sm:w-auto transition-colors"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Find Jobs
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.p
              className='text[#37404e]'
              variants={item}
            >
              <span className='font-bold'>Popular Searches</span>: Designer, Developer, Web, Engineer, Senior,
            </motion.p>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center md:justify-end relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tip 1 */}
            <motion.div
              className="hidden md:block absolute top-[300px] left-10 z-20"
              variants={tipVariants}
              animate="animate"
            >
              <img
                src="/img/tip-2.png"
                alt="Tip 1"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-[270px] md:h-full"
              />
            </motion.div>

            {/* Tip 2 */}
            <motion.div
              className="hidden md:block absolute top-[400px] right-0 z-20"
              variants={tipVariants2}
              animate="animate"
            >
              <img
                src="/img/tip-1-1.png"
                alt="Tip 2"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-[270px] md:h-full"
              />
            </motion.div>

            {/* Tip 3 */}
            <motion.div
              className="hidden md:block absolute top-40 left-30 z-20"
              variants={tipVariants3}
              animate="animate"
            >
              <img
                src="/img/congratulation.svg"
                alt="Congratulations"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-[270px] md:h-full"
              />
            </motion.div>

            {/* Main Hero Image */}
            <motion.img
              src="/img/girl-hero.png"
              alt="girl-hero image"
              className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[80vh] object-contain relative z-10"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;