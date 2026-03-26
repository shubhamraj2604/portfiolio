import { 
  DiJavascript, 
  DiReact, 
  DiHtml5, 
  DiCss3, 
  DiNodejs
} from "react-icons/di";
import { SiPython } from "react-icons/si";  
import { SiExpress, SiMongodb, SiMysql, SiDocker, SiNextdotjs, SiPandas } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsArray = [
    {
      id: 1,
      name: 'JavaScript',
      icon: <DiJavascript size={72} color="yellow" />
    },
    {
      id: 2,
      name: 'React',
      icon: <DiReact size={72} color="#61DAFB" />
    },
    {
      id: 3,
      name: 'HTML5',
      icon: <DiHtml5 size={72} color="#E34F26" />
    },
    {
      id: 4,
      name: 'CSS3',
      icon: <DiCss3 size={72} color="#1572B6" />
    },
    {
      id: 5,
      name: 'NodeJS',
      icon: <DiNodejs size={72} color="#68A063" />
    },
    {
      id: 6,
      name: 'Express',
      icon: <SiExpress size={72} color="white" />
    },
    {
      id: 7,
      name: 'GitHub',
      icon: <FaGithub size={72} color="white" />
    },
    {
      id: 8,
      name: 'MongoDB',
      icon: <SiMongodb size={72} color="#4DB33D" />
    },
    {
        id: 9,
        name: 'MySQL',
        icon: <SiMysql size={72} color="#4479A1" />
      },
      {
        id: 10,
        name: 'Python',
        icon: <SiPython size={72} color="#3776AB" />
      },
      {
        id: 11,
        name: 'Docker',
        icon: <SiDocker size={72} color="#2496ED" />
      },
      {
  id: 12,
  name: 'Next.js',
  icon: <SiNextdotjs size={72} color="white" />
},
{
  id: 13,
  name: 'Pandas',
  icon: <SiPandas size={72} color="#150458" />
},

      
      

  ];

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <h2 className="section-title mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skillsArray.map(({ id, name, icon }) => (
            <motion.div 
              key={id} 
              className="glass-panel flex flex-col items-center gap-4 rounded-2xl border-cyan-300/20 p-5 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: id * 0.03 }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              {icon}
              <p className="text-base font-semibold text-slate-100">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
