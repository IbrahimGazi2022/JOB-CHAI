import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/img/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Browse Jobs", path: "/jobs" },
    { id: 3, name: "Employers", path: "/employers" },
    { id: 4, name: "Candidates", path: "/candidates" },
  ];

  // Animation variants
  const dotVariants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const navItemVariants = {
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="w-full flex justify-center bg-white shadow-sm">
      <nav className="w-full max-w-[1280px] flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 md:py-4 gap-[100px]">
        <div className="flex items-center gap-[100px]">
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Job Chai Logo"
              className="h-10 md:h-12 lg:h-14 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                variants={navItemVariants}
                whileHover="hover"
              >
                <Link
                  to={item.path}
                  className="text-sm lg:text-base tracking-wider text-gray-800 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <motion.div 
            className="flex items-center"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              className="h-2 w-2 mr-[-4px] rounded-full bg-[#7a53ef] shadow-[0_0_8px_#9777FA]"
              variants={dotVariants}
              animate="animate"
            />
            <motion.button 
              className="text-[#9777FA] font-bold tracking-wide text-lg sm:text-xl md:text-md px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors hover:text-[#7d5be6]"
              variants={buttonVariants}
            >
              Apply Now
            </motion.button>
          </motion.div>
          
          <motion.button 
            className="border bg-[#6D4BD3] text-white hover:bg-[#4D1AE6] px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base md:text-base transition-colors whitespace-nowrap"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Sign In
          </motion.button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;