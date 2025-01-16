import React, { useState } from "react";
import videoBackground from "../assets/video.mp4"; // Adjust path as needed
import { motion } from "framer-motion";

const Services = () => {
  const [expanded, setExpanded] = useState(false);

  const circleRadius = 250; // Size of the circle when expanded
  const angleStep = 360 / 6; // Adjust based on services length

  const services = [
    { title: "Software Development", icon: "💻" },
    { title: "Web Development", icon: "🌐" },
    { title: "Mobile Development", icon: "📱" },
    { title: "Database Solutions", icon: "🗄️" },
    { title: "Cloud Services", icon: "☁️" },
    { title: "IT Consulting", icon: "⚙️" },
  ];

  return (
    <div id="services" className="relative bg-black text-white py-48">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center mt-12">
          {/* Circle Button */}
          <motion.div
            className={`${
              expanded ? "w-[500px] h-[500px]" : "w-40 h-40"
            } bg-black text-white rounded-full flex justify-center items-center absolute transition-all duration-500 ease-in-out cursor-pointer border border-white shadow-lg hover:scale-105`}
            onHoverStart={() => setExpanded(true)}
            onHoverEnd={() => setExpanded(false)}
            title="Hover to view services" // Tooltip text for hover
          >
            <motion.div
              className="text-center font-bold text-2xl"
              animate={{ opacity: expanded ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              Our Services
            </motion.div>
          </motion.div>

          {/* Service Icons */}
          {expanded &&
            services.map((service, index) => {
              const angle = index * angleStep;
              const x = circleRadius * Math.cos((angle * Math.PI) / 180);
              const y = circleRadius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={index}
                  className="absolute flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: expanded ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {/* Change background to gray and text to gray */}
                  <div className="p-12 bg-gray-900 rounded-full shadow-md">
                    <span className="text-4xl text-gray-800">{service.icon}</span> {/* Increased icon size */}
                  </div>
                  {/* Change text color to gray and increase text size */}
                  <p className="mt-2 text-lg font-bold text-gray-400">{service.title}</p> {/* Increased text size */}
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Services;
