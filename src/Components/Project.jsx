import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "I have built a personal portfolio using React.js and Tailwind CSS, featuring a sleek, responsive, and visually appealing design. It offers smooth navigation, optimized performance, and a modern user experience across all devices.",
      image: project1,
      link: "https://casarthakmodi.netlify.app/",
    },
    {
      id: 2,
      title: "WEATHER-APP",
      description:
        "I built a weather application using HTML, CSS, and JavaScript, integrating the OpenWeather API to provide accurate and real-time weather updates. The app allows users to search for any city and view essential weather details.",
      image: project2,
      link: "https://weather-app-bay-delta-80.vercel.app/",
    },
  ];

  return (
    <motion.div 
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-10 bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-400 text-center md:text-left mb-12 border-b-4 border-white inline-block">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-10 p-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              className="flex flex-col border-4 rounded-lg border-sky-400 bg-black w-80 md:w-96 transition-all duration-300 hover:animate-pulse"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>

              <div className="border-b-2 border-white"></div>

              <div className="p-4 text-white">
                <h3 className="text-center text-2xl text-blue-400 font-extrabold">
                  {project.title}
                </h3>
                <p className="text-sm mt-2 text-gray-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
