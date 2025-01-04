import React from "react";
import { motion } from "framer-motion";
import companyLogo from "../assets/companylogo.png"; // Replace with your actual logo file path

export default function LogoSection() {
  return (
    <div
      id="logo"
      className="relative bg-gradient-to-b from-gray-100 via-white to-gray-200 min-h-screen flex items-center justify-center"
    >
      {/* Animated Logo Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-2xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our Trusted Partners
        </motion.h2>

        {/* Logo Animation */}
        <motion.div
          className="mt-12"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src={companyLogo}
            alt="Company Logo"
            className="mx-auto w-48 md:w-64 transition-all duration-300 transform hover:scale-105"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-xl text-gray-600 sm:text-2xl md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          We are proud to work with forward-thinking companies that drive change.
        </motion.p>

        {/* Call to Action */}
        <div className="mt-10 flex justify-center gap-x-6">
          <motion.a
            href="#contact"
            className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </div>
  );
}