import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import logo from "./logoo.png"; // Import logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-6 left-0 right-0 mx-auto w-11/12 bg-black/90 backdrop-blur-lg z-50 shadow-lg rounded-full transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} alt="logo" className="h-8 w-auto" /> {/* Displaying logo */}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-center items-center space-x-6">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer"
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer"
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer"
              >
                Contact
              </ScrollLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black rounded-lg shadow-md mt-2">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
}
