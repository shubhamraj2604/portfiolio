import React from 'react';
import { 
  DiJavascript, 
  DiReact, 
  DiHtml5, 
  DiCss3, 
  DiNodejs
} from "react-icons/di";
import { SiPython } from "react-icons/si";  
import { SiExpress, SiMongodb, SiMysql, SiReact ,  SiDocker  , SiNextdotjs, SiPandas } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsArray = [
    {
      id: 1,
      name: 'JavaScript',
      icon: <DiJavascript size={120} color="yellow"  />
    },
    {
      id: 2,
      name: 'React',
      icon: <DiReact size={120} color="#61DAFB"  />
    },
    {
      id: 3,
      name: 'HTML5',
      icon: <DiHtml5 size={120} color="#E34F26"  />
    },
    {
      id: 4,
      name: 'CSS3',
      icon: <DiCss3 size={120} color="#1572B6"  />
    },
    {
      id: 5,
      name: 'NodeJS',
      icon: <DiNodejs size={120} color="#68A063"  />
    },
    {
      id: 6,
      name: 'Express',
      icon: <SiExpress size={120} color="white"  />
    },
    {
      id: 7,
      name: 'GitHub',
      icon: <FaGithub size={120} color="white"  />
    },
    {
      id: 8,
      name: 'MongoDB',
      icon: <SiMongodb size={120} color="#4DB33D"  />
    },
    {
        id: 9,
        name: 'MySQL',
        icon: <SiMysql size={120} color="#4479A1"  />
      },
      {
        id: 10,
        name: 'Python',
        icon: <SiPython size={120} color="#3776AB"  />
      },
      {
        id: 10,
        name: 'Docker',
        icon: <SiDocker size={120} color="#2496ED"  />
      },
      {
  id: 11,
  name: 'Next.js',
  icon: <SiNextdotjs size={120} color="white" />
},
{
  id: 12,
  name: 'Pandas',
  icon: <SiPandas size={120} color="#150458" />
},

      
      

  ];

  return (
    <div id="skills" 
    className="min-h-screen p-10 text-white bg-gradient-to-b from-black via-gray-800 to-gray-800">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-sky-400 text-center md:text-left mb-12 border-b-4 border-white inline-block">
          SKILLS
        </h2>

        {/* Grid to display skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {skillsArray.map(({ id, name, icon }) => (
            <motion.div 
              key={id} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              {icon}
              <p className="mt-4 text-xl">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
