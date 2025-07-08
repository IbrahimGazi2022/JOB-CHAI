import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

const textVariant = (delay) => ({
    hidden: { y: 50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay,
        },
    },
});

const footerVariants = (direction) => ({
    hidden: {
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        y: direction === 'up' ? 100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 10,
            delay: direction === 'left' ? 0.1 : direction === 'right' ? 0.3 : 0.2,
        },
    },
});

const Footer = () => {
    return (
        <motion.footer
            id="footer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full bg-gradient-to-r from-gray-900 to-[#081838] text-white"
        >
            <motion.div
                variants={staggerContainer(0.1, 0.2)}
                className="max-w-7xl mx-auto px-4 py-12"
            >
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
                >
                    {/* Brand Info */}
                    <motion.div variants={footerVariants('left')} className="space-y-4">
                        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                            <img
                                src="/img/footer-logo.png"
                                alt="IbraBlogs Logo"
                                width={180}
                                height={60}
                                className="object-contain"
                            />
                        </motion.div>
                        <motion.p variants={textVariant(0.4)} className="text-gray-300 text-sm leading-relaxed">
                            Job Chai is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
                        </motion.p>
                        <motion.div variants={textVariant(0.6)} className="flex space-x-4 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    whileHover={{ y: -3 }}
                                    href="#"
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={footerVariants('up')} className="space-y-4">
                        <motion.h3 variants={textVariant(0.2)} className="text-lg font-semibold border-b border-gray-700 pb-2">
                            Quick Links
                        </motion.h3>
                        <motion.ul variants={staggerContainer(0.1, 0.3)} className="space-y-2">
                            {['Home', 'Browse Jobs', 'Employers', 'Contact', 'Candidates'].map((item, index) => (
                                <motion.li key={index} variants={fadeIn('up', 'spring', index * 0.1, 0.5)} whileHover={{ x: 5 }}>
                                    <a
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Categories */}
                    <motion.div variants={footerVariants('up')} className="space-y-4">
                        <motion.h3 variants={textVariant(0.2)} className="text-lg font-semibold border-b border-gray-700 pb-2">
                            Categories
                        </motion.h3>
                        <motion.ul variants={staggerContainer(0.1, 0.3)} className="space-y-2">
                            {['Communication', 'Design & Creative', 'Development & IT', 'Finance & Accounting', 'Healthcare'].map((category, index) => (
                                <motion.li key={index} variants={fadeIn('up', 'spring', index * 0.1, 0.5)} whileHover={{ x: 5 }}>
                                    <a
                                        href={`/category/${category.toLowerCase()}`}
                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                                    >
                                        {category}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={footerVariants('right')} className="space-y-4">
                        <motion.h3 variants={textVariant(0.2)} className="text-lg font-semibold border-b border-gray-700 pb-2">
                            Contact Us
                        </motion.h3>
                        <motion.div variants={staggerContainer(0.1, 0.3)} className="space-y-3">
                            <motion.div variants={fadeIn('up', 'spring', 0.2, 0.5)} className="flex items-start space-x-3">
                                <Mail className="text-gray-300 mt-1 flex-shrink-0" size={16} />
                                <span className="text-gray-300 text-sm">coder.ibrahimgazi@gmail.com</span>
                            </motion.div>
                            <motion.div variants={fadeIn('up', 'spring', 0.4, 0.5)} className="flex items-start space-x-3">
                                <Phone className="text-gray-300 mt-1 flex-shrink-0" size={16} />
                                <span className="text-gray-300 text-sm">+880 1732 570530</span>
                            </motion.div>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 'spring', 0.6, 0.5)} className="pt-2">
                            <h4 className="text-sm font-medium mb-2">Subscribe to Newsletter</h4>
                            <div className="flex">
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="email"
                                    placeholder="Your email"
                                    className="px-3 py-2 bg-gray-800 text-white text-sm rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r text-sm font-medium transition-colors duration-300"
                                >
                                    Join
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Copyright */}
                <motion.div variants={fadeIn('up', 'tween', 0.8, 1)} className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.p whileHover={{ scale: 1.02 }} className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
                            <a
                                href="https://ibrahim-the-coder.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors duration-300"
                            >
                                © {new Date().getFullYear()} Job Chai | All rights reserved - Ibrahim - The Coder
                            </a>
                        </motion.p>
                        <motion.div variants={staggerContainer(0.1, 0.3)} className="flex space-x-4">
                            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item, index) => (
                                <motion.div key={index} variants={fadeIn('up', 'spring', index * 0.1 + 0.2, 0.5)}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
