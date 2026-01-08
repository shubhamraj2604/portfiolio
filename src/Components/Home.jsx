import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import First from '../assets/Firstpage.jpg';

const lines = [
  "Full-Stack Web Developer",
  "Tech Enthusiast",
  "Competitive Programmer",
  "Problem Solver"
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 gap-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Hello, I’m{' '}
            <span className="text-sky-500 font-sans">
              Shubham Raj
            </span>
          </h1>

          <p className="text-2xl mt-4">
            <span className="text-gray-400 font-semibold">
              {lines[index]}
            </span>
          </p>

          {/* Short Intro */}
          <p className="text-gray-300 max-w-xl mt-6 leading-relaxed">
            I build <span className="text-white font-semibold">scalable web applications</span> and
            love solving <span className="text-white font-semibold">real-world problems</span> using
            modern technologies. Passionate about clean code, performance,
            and continuous learning.
          </p>

          {/* Tech Stack Line */}
          <p className="text-sm text-gray-400 mt-4">
            Tech Stack: <span className="text-white">React, Next.js, Node.js, PostgreSQL, Docker</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition font-semibold"
            >
              View Projects
            </a>
{/* 
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-black transition font-semibold"
            >
              Resume
            </a> */}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={First}
            alt="Profile"
            className="border-4 border-sky-500 rounded-2xl w-3/5 md:w-80 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
