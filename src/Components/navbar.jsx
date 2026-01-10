import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
function Navbar() {
  const [nav, setNav] = useState(false);
  const [select , selectedlink] = useState("home");

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "education" },
    { id: 4, link: "projects" },
    { id: 5, link: "skills" },
    { id: 6, link: "contact" },
  ];

  return (
    <div className="fixed w-full h-20 px-4 flex justify-between items-center bg-black text-white z-50">
      {/* Logo with smooth scroll */}
      <div>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="text-5xl text-sky-300 font-signature ml-2 cursor-pointer"
        >
          Shubham
        </Link>
      </div>

      {/* Desktop Navbar */}
      <ul className="hidden lg:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 py-2 cursor-pointer capitalize font-medium transition-all duration-300 relative group ${link == select ? "text-sky-400" : "text-gray-300 hover:text-sky-300" }`}
          >
            <Link
              to={link}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onSetActive={() => selectedlink(link)}
              onClick={() => {setNav(false)}}
            >
              {link}
               {select === link && (
    <motion.span
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
)}

               
              <span className="absolute inset-0 bg-sky-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-500 lg:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Navbar */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500 lg:hidden">
          {links.map(({ id, link }) => (
            <motion.li 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -20 }}
                transition={{ delay: id * 0.1 }}
                key={id} className="px-4 cursor-pointer capitalize py-4 text-3xl">
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </motion.li>
          ))}

          {/* Social Media Links */}
          <li className="px-4 py-4 flex space-x-6">
            <a
              href="https://github.com/shubhamraj2604"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-raj26/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300"
            >
              <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
