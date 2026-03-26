import Second from "../assets/SecondPage.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="section-shell"
    >
      <div className="section-inner">
        <div className="mb-12 text-center md:text-left">
          <span className="section-kicker">Who I am</span>
          <h2 className="section-title">
            About Me
          </h2>
          <p className="mt-3 max-w-2xl text-base md:text-lg">
            A developer focused on building meaningful digital experiences with
            thoughtful engineering and sharp visual detail.
          </p>
        </div>

        <div className="glass-panel grid items-center gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <motion.img
            src={Second}
            alt="About Me"
            className="mx-auto w-full max-w-xs rounded-2xl border border-cyan-300/30 object-cover shadow-xl shadow-cyan-950/25"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />

          <motion.div
            className="space-y-4 text-sm leading-relaxed text-slate-300 md:text-base"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p>
              Hello! I&apos;m{" "}
              <span className="font-bold text-cyan-200">Shubham Raj</span>, a
              passionate web developer with a keen interest in competitive
              programming, front-end design, and solving real-world challenges
              through elegant and efficient code. I strive to build websites
              that are not only functional but also visually appealing.
            </p>
            <p>
              I specialize in working with modern web technologies like React,
              Tailwind CSS, and more, while continually exploring new domains
              like machine learning. Beyond coding, I enjoy collaborating on
              meaningful projects and staying curious about how technology
              shapes our world.
            </p>
            <p>
              My journey in development is driven by a strong passion for
              creativity, learning, and making an impact. Whether it&apos;s creating
              responsive designs or delving into complex algorithms, I am
              dedicated to delivering the best.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
