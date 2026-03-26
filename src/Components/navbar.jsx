import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [select, selectedlink] = useState("home");

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "education" },
    { id: 4, link: "projects" },
    { id: 5, link: "skills" },
    { id: 6, link: "contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 md:px-6">
      <div className="mx-auto mt-3 flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:px-6">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="cursor-pointer text-4xl text-cyan-200 md:text-5xl font-signature"
        >
          Shubham
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-900/80 p-1 lg:flex">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onSetActive={() => selectedlink(link)}
                onClick={() => setNav(false)}
                className={`relative block cursor-pointer rounded-full px-4 py-2 text-sm font-semibold capitalize tracking-wide transition-colors duration-300 ${
                  link === select
                    ? "text-cyan-100"
                    : "text-slate-300 hover:text-cyan-200"
                }`}
              >
                {link}
                {select === link && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/40 to-blue-500/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setNav(!nav)}
          className="z-50 rounded-xl border border-cyan-200/20 p-2 text-slate-200 transition hover:text-cyan-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {nav && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="mx-auto mt-3 w-[96%] rounded-2xl border border-cyan-300/20 bg-slate-950/95 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-2">
            {links.map(({ id, link }) => (
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: id * 0.08 }}
                key={id}
              >
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  onSetActive={() => selectedlink(link)}
                  onClick={() => setNav(false)}
                  className={`block rounded-xl px-4 py-3 text-lg font-medium capitalize transition ${
                    link === select
                      ? "bg-cyan-500/20 text-cyan-100"
                      : "bg-slate-900/70 text-slate-300 hover:text-cyan-200"
                  }`}
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-center gap-6 border-t border-white/10 pt-4 text-slate-300">
            <a
              href="https://github.com/shubhamraj2604"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-raj26/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
