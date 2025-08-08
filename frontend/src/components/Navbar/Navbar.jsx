import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import logo from "/img/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Browse Jobs", path: "/jobs" },
    { id: 3, name: "Employers", path: "/employers" },
    { id: 4, name: "Candidates", path: "/candidates" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
      backgroundColor: "#9777fa",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const navItemVariants = {
    hover: {
      y: -3,
      color: "#7d5be6",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full flex justify-center bg-white shadow-sm sticky top-0 z-50">
      <motion.nav
        className="w-full max-w-[1280px] flex justify-between items-center px-4 sm:px-6 lg:px-4 py-3 md:py-4 gap-[100px]"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="flex items-center gap-[100px]">
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Job Chai Logo"
              className="h-10 md:h-12 lg:h-14"
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex space-x-6 lg:space-x-8"
            variants={container}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                variants={item}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to={item.path}
                  className="text-sm lg:text-base tracking-wider text-gray-800 font-medium relative"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7d5be6]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span
            className="w-6 h-0.5 bg-[#7d5be6]"
            animate={isMobileMenuOpen ?
              { rotate: 45, y: 6 } :
              { rotate: 0, y: 0 }
            }
          />
          <motion.span
            className="w-6 h-0.5 bg-[#7d5be6]"
            animate={isMobileMenuOpen ?
              { opacity: 0 } :
              { opacity: 1 }
            }
          />
          <motion.span
            className="w-6 h-0.5 bg-[#7d5be6]"
            animate={isMobileMenuOpen ?
              { rotate: -45, y: -6 } :
              { rotate: 0, y: 0 }
            }
          />
        </button>

        {/* Right Side Buttons */}
        <motion.div
          className="hidden md:flex items-center gap-2 sm:gap-4"
          variants={container}
        >
          <motion.div
            className="flex items-center"
            variants={item}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              className="h-2 w-2 mr-[-4px] rounded-full bg-[#7d5be6] shadow-[0_0_8px_#9777FA]"
              variants={dotVariants}
              animate="animate"
            />
            <motion.button
              className="text-[#7d5be6] font-bold tracking-wide text-lg sm:text-xl md:text-md px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors"
              variants={buttonVariants}
              whileTap="tap"
              onClick={() => navigate("/login")}

            >
              Apply Now
            </motion.button>
          </motion.div>

          <SignedOut>
            <motion.button
              className="border bg-[#7d5be6] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base md:text-base whitespace-nowrap"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate("/login")}
            >
              Sign In
            </motion.button>
          </SignedOut>

          {/* user avatar */}
          <SignedIn>
            <UserButton afterSignOutRedirectUrl="/" appearance={{ elements: { avatarBox: "h-32 w-32" } }} />
          </SignedIn>

        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="w-full md:hidden bg-white shadow-md absolute top-full left-0 z-40"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={mobileItemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className="block py-2 text-lg text-gray-800 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-4 pt-4">
                <motion.button
                  className="flex-1 text-[#7d5be6] font-bold py-2 rounded-md border border-[#7d5be6]"
                  whileHover={{ backgroundColor: "#f5f0ff" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/login")}
                >
                  Apply Now
                </motion.button>
                <SignedOut>
                  <motion.button
                    className="flex-1 bg-[#7d5be6] text-white py-2 rounded-md"
                    whileHover={{ backgroundColor: "#9777fa" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </motion.button>
                </SignedOut>

                <SignedIn>
                  <UserButton afterSignOutRedirectUrl="/" appearance={{ elements: { avatarBox: "h-32 w-32" } }} />
                </SignedIn>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;