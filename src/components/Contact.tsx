import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and public key
    const serviceID = "service_dm98yfc";
    const templateID = "template_3lwqq3p";
    const userID = "DeYF0zW-dRm7b-3iC";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Let's discuss your next project
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <a
                href="mailto:neurioxit@gmail.com"
                className="flex items-start space-x-4 hover:text-gray-700 transition"
              >
                <Mail className="h-6 w-6 text-black" />
                <div>
                  <h3 className="text-lg font-medium text-black">Email</h3>
                  <p className="mt-1 text-gray-600">neurioxit@gmail.com</p>
                </div>
              </a>
              <a
                href="https://wa.me/94712954545"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 hover:text-gray-700 transition"
              >
                <Phone className="h-6 w-6 text-black" />
                <div>
                  <h3 className="text-lg font-medium text-black">Phone</h3>
                  <p className="mt-1 text-gray-600">+94 71 295 4545</p>
                </div>
              </a>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-black" />
                <div>
                  <h3 className="text-lg font-medium text-black">Location</h3>
                  <p className="mt-1 text-gray-600">Sri Lanka</p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
