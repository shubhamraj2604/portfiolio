import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Google Form action URL
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScGTrRFQXI760Cbeb7AKd8bv_gMef7Kv9gmocXoeVMJlWW7pQ/formResponse";
    
    // Google Form Entry IDs (replace these with actual IDs)
    const formEntries = new URLSearchParams();
    formEntries.append("entry.890432005", formData.name);    // Name Field
    formEntries.append("entry.500373926", formData.email);   // Email Field
    formEntries.append("entry.1311731411", formData.message); // Message Field

    // Submit form data to Google Form
    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formEntries,
    }).then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    });
  };

  return (
    <div id="contact" className="min-h-screen p-8 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-sky-400 text-center md:text-left mb-12 border-b-4 border-sky-400 inline-block"
        >
          Contact
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 p-8 rounded-xl shadow-lg"
        >
          <div className="mb-6">
            <label className="block text-gray-300 text-lg mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-lg mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-lg mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">Or email me at:</p>
          <a href="mailto:raj669682@gmail.com" className="text-sky-400 hover:underline">
            raj669682@gmail.com
          </a>
        </div>

        {/* Social Media Links */}
        <motion.div
          className="mt-8 flex justify-center space-x-6 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="https://github.com/shubhamraj2604" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/shubham-raj26/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">
            <FaLinkedin size={30} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
