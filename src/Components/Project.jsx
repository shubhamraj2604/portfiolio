import React from "react";
import { motion } from "framer-motion";
// import project1 from "../assets/project1.jpg";
// import project2 from "../assets/project2.jpg";
import EasyLearn from "../assets/easylearn.png";
import product from "../assets/product.png";
import todo from "../assets/todo.png";
import usdata from "../assets/usdata.png";
import casarthak from "../assets/casarthak.png";

const Project = () => {
  const projects = [
    {
      id: 3,
      title: "Easy Learn - AI learning Management",
      description:
        "An AI-driven LMS platform featuring dynamic course creation, automated notes and quiz generation with feedback, and flashcards. Implements secure authentication, background processing for AI tasks, and a scalable architecture with future cloud deployment in mind.",
      image: EasyLearn,
      link: "https://easy-learn-mg.vercel.app/",
    },

    {
      id: 4,
      title: "Nextonic Store - Ecommerce Store",
      description:
        "A responsive online store platform that delivers a smooth shopping experience with product browsing, filtering, secure login, and cart/checkout workflows, showcasing modern front-end development practices with React",
      image: product,
      link: "https://productstore-2-17ip.onrender.com/",
    },
    {
      id: 5,
      title: "Data Science Jobs Analysis",
      description:
        "Performed an in-depth analysis of Data Science job trends using real job listings. Visualized key insights like skill demands, salary distributions, and location trends using Python and data visualization libraries to help understand the job market landscape.",
      image: usdata,
      link: "https://github.com/shubhamraj2604/Data_Science_Jobs_Analysis",
    },
    {
      id: 6,
      title: "Todo List App",
      description:
        "Built a responsive Todo List application that allows users to add, delete, and edit tasks with real-time UI updates. Implemented clean state management and intuitive interactions for effective task tracking.",
      image: todo,
      link: "https://todolist-nc07.onrender.com/",
    },

    {
      id: 7,
      title: "Freelancing Portfolio – CA Sarthak Modi",
      description:
        "Designed and developed a professional freelancing portfolio for a Chartered Accountant using React.js and Tailwind CSS. The website showcases services, expertise, and contact details with a clean, responsive, and client-focused UI optimized for performance and accessibility.",
      image: casarthak,
      link: "https://casarthakmodi.netlify.app/",
    },

    // {
    //   id: 2,
    //   title: "WEATHER-APP",
    //   description:
    //     "I built a weather application using HTML, CSS, and JavaScript, integrating the OpenWeather API to provide accurate and real-time weather updates. The app allows users to search for any city and view essential weather details.",
    //   image: project2,
    //   link: "https://weather-app-bay-delta-80.vercel.app/",
    // },
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
