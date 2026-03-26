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
      passingYear: 2022,
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
    <section
      id="education"
      className="section-shell"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[8%] top-16 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="section-inner relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title mb-12"
        >
          Education
        </motion.h2>

        <div className="relative pl-1">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-cyan-300/70 via-blue-400/40 to-transparent" />
          
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8 ml-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="absolute -left-10 top-4 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200/40 bg-slate-900 shadow-lg"
              >
                <span className="text-xs">{item.icon}</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-panel rounded-2xl border-cyan-300/15 p-6 transition-all duration-300 hover:border-cyan-200/35"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h4 className="text-2xl font-bold text-white">{item.heading}</h4>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                    className="rounded-full border border-cyan-200/20 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-100"
                  >
                    {item.passingYear}
                  </motion.span>
                </div>
                
                <h3 className="mb-4 text-lg font-bold text-cyan-200">{item.schoolName}</h3>
                
                <div className="grid grid-cols-1 gap-3 text-slate-300 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-cyan-200">Degree:</span>
                    <span>{item.degree}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-cyan-200">Board/Branch:</span>
                    <span>{item.board}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-cyan-200">Marks:</span>
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
