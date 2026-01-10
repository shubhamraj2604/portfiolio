import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      heading: "B.Tech",
      schoolName: "Birla Institute of Technology, Mesra",
      marks: 85,
      passingYear: 2027,
      degree: "Bachelor of Technology",
      board: "Computer Science and Engineering",
      icon: "🎓",
    },
    {
      heading: "Higher Secondary",
      schoolName: "Sapphire International School, Noida",
      marks: 92.5,
      passingYear: 2023,
      degree: "Class 12",
      board: "CBSE",
      icon: "📚",
    },
    {
      heading: "Secondary",
      schoolName: "Baldwin Boys High School, Bengaluru",
      marks: 90,
      passingYear: 2020,
      degree: "Class 10",
      board: "ICSE",
      icon: "📖",
    },
  ];

  return (
    <div id="education"
     className="min-h-screen p-8 bg-gradient-to-b from-black via-gray-800 to-gray-800 relative overflow-hidden">
      {/* <div className="absolute top-20 right-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" /> */}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl  font-bold text-sky-400 text-center md:text-left mb-12 border-b-4 border-white inline-block pb-2"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 via-blue-500 to-sky-500 rounded-full" />
          
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="absolute -left-11 top-2 w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full border-4 border-gray-800 shadow-lg shadow-sky-500/50 flex items-center justify-center"
              >
                <span className="text-sm">{item.icon}</span>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-900/80 backdrop-blur-sm p-6 border-l-4 border-sky-400 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-2xl text-white font-bold">{item.heading}</h4>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                    className="px-3 py-1 bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-sky-300 rounded-full text-sm font-semibold border border-sky-500/30"
                  >
                    {item.passingYear}
                  </motion.span>
                </div>
                
                <h3 className="font-bold text-lg text-sky-400 mb-3">{item.schoolName}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 font-semibold">Degree:</span>
                    <span>{item.degree}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 font-semibold">Board/Branch:</span>
                    <span>{item.board}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 font-semibold">Marks:</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="font-bold text-white"
                    >
                      {item.marks}%
                    </motion.span>
                  </div>
                </div>

                {/* Progress bar for marks */}
                {/* <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.6 }}
                  className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.marks}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.7 }}
                    className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"
                  />
                </motion.div> */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
