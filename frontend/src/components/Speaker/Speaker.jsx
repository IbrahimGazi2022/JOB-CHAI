import React from 'react';
import { motion } from 'framer-motion';

const Speaker = () => {
  // Speaker data
  const speakers = [
    {
      id: 1,
      name: "David Wilson",
      role: "Tech Entrepreneur",
      image: "/img/speakers/speaker-1.jpg",
      gradient: 'linear-gradient(0deg, #FF9A8B 0%, #FF6B95 50%, #FF8E53 100%)'
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "AI Researcher",
      image: "/img/speakers/speaker-2.jpg",
      gradient: 'linear-gradient(0deg, #4FACFE 0%, #00F2FE 100%)'
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Marketing Guru",
      image: "/img/speakers/speaker-3.jpg",
      gradient: 'linear-gradient(0deg, #6A11CB 0%, #2575FC 100%)'
    },
    {
      id: 4,
      name: "Dr. Sarah Johnson",
      role: "Blockchain Expert",
      image: "/img/speakers/speaker-4.jpg",
      gradient: 'linear-gradient(0deg, #F83600 0%, #F9D423 100%)'
    },
    {
      id: 5,
      name: "Roy Rodriguez",
      role: "UX Designer",
      image: "/img/speakers/speaker-5.jpg",
      gradient: 'linear-gradient(0deg, #3BB78F 0%, #0BAB64 50%, #3BB78F 100%)'
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const header = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={header}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl uppercase">
            Meet Our Leaders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Industry leaders sharing their expertise
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              className="flex flex-col items-center text-center"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-60 h-60 rounded-full p-2 mb-6"
                style={{ background: speaker.gradient }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{speaker.role}</p>

              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Leaders
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaker;