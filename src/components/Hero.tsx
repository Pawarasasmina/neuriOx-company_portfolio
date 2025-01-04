import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import bgimage from "../assets/background.jpg";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
        }}
      ></motion.div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 opacity-20 blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-500 via-gray-600 to-black rounded-full opacity-10 blur-2xl -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Title */}
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            <motion.span
              className="block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Transform Your Ideas Into
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-black via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Digital Reality
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="mt-5 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We craft innovative software solutions that drive business growth
            and enhance user experience.
          </motion.p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-x-6">
            <motion.a
              href="#contact"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#services"
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-x-2 hover:text-gray-700 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
