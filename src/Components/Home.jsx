import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import First from '../assets/Firstpage.jpg';

const lines = [
  "Web Developer",
  "Tech Enthusiast",
  "Competitive Programmer"
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" 
    className='w-full flex flex-col justify-center h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col items-center text-center'
        >
          <h1 className='text-6xl font-extrabold text-white'>
            Hello, I am <span className='text-sky-600 mt-6 font-sans'>Shubham Raj</span>
          </h1>
          <p id="animatedText" className='text-2xl font-medium mt-3'>
            <span className='text-gray-400 font-bold'>{lines[index]}</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col justify-center'
        >
          <img 
            src={First} 
            alt='Profilepic' 
            className='border-4 border-sky-500 rounded-2xl bg-cover w-3/5 mx-auto md:w-3/4'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
