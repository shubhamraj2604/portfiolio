import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
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
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="section-shell min-h-screen pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-28 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-[10%] top-40 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="section-inner relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-center md:text-left"
        >
          <span className="section-kicker">Available for internships</span>

          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Build. Iterate.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300 bg-clip-text text-transparent">
              Ship with purpose.
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-300 md:text-2xl">
            Hi, I am <span className="font-semibold text-cyan-200">Shubham Raj</span>
          </p>

          <p className="mt-2 text-base md:text-lg">
            <AnimatePresence mode="wait">
              <motion.span
                key={lines[index]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="font-semibold tracking-wide text-cyan-200"
              >
                {lines[index]}
              </motion.span>
            </AnimatePresence>
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-slate-300">
            I design and develop scalable web applications with a strong focus on
            clean architecture, polished UI, and performance-first engineering.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-7 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {["React", "Next.js", "Node.js", "PostgreSQL", "Docker"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.08 }}
                className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-700/30 transition hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer rounded-xl border border-cyan-200/40 bg-slate-900/60 px-6 py-3 text-sm font-bold uppercase tracking-wider text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
            <img
              src={First}
              alt="Profile"
              className="h-[24rem] w-full rounded-[1.5rem] object-cover"
            />

            <div className="absolute bottom-5 left-5 rounded-xl border border-cyan-200/20 bg-slate-950/70 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">Current Focus</p>
              <p className="mt-1 text-sm font-semibold text-slate-100">Full-Stack Developer </p>
            </div>
          </div> 

          <motion.div
            animate={{ y: [-4, 8, -4] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 -top-6 rounded-2xl border border-cyan-200/20 bg-slate-900/80 px-4 py-3 text-sm text-slate-200 shadow-xl backdrop-blur"
          >
            6+ Projects shipped
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
