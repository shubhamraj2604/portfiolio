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
      className="min-h-screen p-10 bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl  md:text-4xl font-bold text-sky-400 text-center md:text-left mb-12 border-b-4 border-white inline-block pb-2"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col border-2 rounded-xl border-sky-500/50 bg-gray-900/80 backdrop-blur-sm overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-center pb-4"
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-2 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors"
                  >
                    View Project →
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl text-sky-400 font-bold mb-3 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {/* Decorative line */}
                <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/0 to-sky-500/0 group-hover:via-sky-500/10 group-hover:to-sky-500/20 transition-all duration-500 pointer-events-none rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
