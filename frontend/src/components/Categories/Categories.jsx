import React from "react";
import { motion } from "framer-motion";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Communication",
      img: "/img/marketing.svg",
      subTitle: "236 Available Vacancies",
    },
    {
      id: 2,
      title: "Design & Creative",
      img: "/img/content-writer.svg",
      subTitle: "189 Available Vacancies",
    },
    {
      id: 3,
      title: "Development & IT",
      img: "/img/system-analyst.svg",
      subTitle: "312 Available Vacancies",
    },
    {
      id: 4,
      title: "Finance & Accounting",
      img: "/img/business-development.svg",
      subTitle: "145 Available Vacancies",
    },
    {
      id: 5,
      title: "Healthcare",
      img: "/img/proof-reading.svg",
      subTitle: "98 Available Vacancies",
    },
    {
      id: 6,
      title: "Engineering",
      img: "/img/testing.svg",
      subTitle: "174 Available Vacancies",
    },
    {
      id: 7,
      title: "Education",
      img: "/img/marketing-director.svg",
      subTitle: "205 Available Vacancies",
    },
    {
      id: 8,
      title: "Legal",
      img: "/img/content-writer.svg",
      subTitle: "67 Available Vacancies",
    },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
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

  const titleVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const iconHover = {
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.5
    }
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold leading-tight"
            variants={titleVariants}
          >
            Browse by category
          </motion.h2>

          <motion.button
            className="flex items-center gap-2 border bg-[#7d5be6] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base mt-4 sm:mt-0 whitespace-nowrap"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Explore More
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              whileHover={iconHover}
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: false, amount: 0.25 }}  
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center border border-opacity-10 border-[rgba(6,18,36,0.1)]"
              variants={item}
              whileHover={cardHover}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-blue-50 flex items-center justify-center mb-3 sm:mb-4"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(125, 91, 230, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img
                  src={category.img}
                  alt={category.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-1 sm:mt-2">
                {category.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {category.subTitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;