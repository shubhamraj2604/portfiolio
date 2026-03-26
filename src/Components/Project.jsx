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
      className="section-shell"
    >
      <div className="absolute right-0 top-6 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="section-inner relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-panel group relative flex flex-col overflow-hidden rounded-2xl border-cyan-300/20 transition-all duration-300 hover:border-cyan-200/40"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.45 }}
                />

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
                    className="rounded-lg bg-cyan-500 px-5 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
                  >
                    View Project →
                  </motion.a>
                </motion.div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-3 text-lg font-bold text-cyan-200 transition-colors group-hover:text-cyan-100 md:text-xl">
                  {project.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
                
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-300/0 to-blue-500/0 transition-all duration-500 group-hover:via-cyan-300/10 group-hover:to-blue-500/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
