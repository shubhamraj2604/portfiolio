import React from "react";
import Second from "../assets/SecondPage.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-6 flex flex-col gap-8">
        {/* Section Title */}
        <div className="w-full text-center md:text-left mb-6 ml-2">
          <h1 className="text-4xl font-extrabold text-sky-400 border-b-4 inline-block">
            About Me
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            A passionate developer striving to create impactful solutions.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Profile Image with Scroll Animation */}
          <motion.img
            src={Second}
            alt="About Me"
            className="w-2/3 md:w-1/3 rounded-2xl border-4 border-sky-500 shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the element is visible
          />

          {/* Text Content with Scroll Animation */}
          <motion.div
            className="text-md text-gray-300 leading-relaxed space-y-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p>
              Hello! I'm{" "}
              <span className="font-bold text-sky-300">Shubham Raj</span>, a
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
              creativity, learning, and making an impact. Whether it's creating
              responsive designs or delving into complex algorithms, I am
              dedicated to delivering the best.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
