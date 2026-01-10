import React from 'react';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: 'Codeforces',
            description: 'Max rating of 1020',
            link: 'https://codeforces.com/profile/shubhamraj1',
            icon: <SiCodeforces className='text-6xl text-blue-600 mx-auto mb-4' />
        },
        {
            id: 2,
            title: 'Leetcode',
            description: 'Solved above 300 questions',
            link: 'https://leetcode.com/u/shubhamraj2604/',
            icon: <SiLeetcode className='text-6xl text-yellow-700 mx-auto mb-4' />
        }
    ];

    return (
        <div id = 'achievements' 
        className='min-h-screen p-8 bg-gradient-to-b from-black via-gray-800 to-gray-800 relative overflow-hidden'>
            {/* Background decoration */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className='max-w-5xl mx-auto relative z-10'>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-4xl font-bold text-sky-400 text-center md:text-left mb-12 border-b-4 border-white inline-block pb-2"
                >
                    Platform Stats
                </motion.h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {achievements.map(({ id, title, description, link, icon }, index) => (
                        <motion.a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className='group relative bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-10 border border-sky-500/30 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 overflow-hidden'
                        >
                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-blue-500/0 to-sky-500/0 group-hover:from-sky-500/20 group-hover:via-blue-500/20 group-hover:to-sky-500/20 transition-all duration-500"
                            />
                            
                            <div className="relative z-10">
                                <motion.div
                                    className="text-center mb-6"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {icon}
                                </motion.div>
                                <h3 className='text-2xl font-bold text-center mb-3 text-white group-hover:text-sky-300 transition-colors'>
                                    {title}
                                </h3>
                                <p className='text-sky-400 text-center text-lg font-semibold group-hover:text-sky-300 transition-colors'>
                                    {description}
                                </p>
                                
                                {/* Decorative elements */}
                                <div className="mt-6 flex justify-center gap-2">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 bg-sky-400 rounded-full"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Animated border */}
                            <motion.div
                                className="absolute inset-0 rounded-xl border-2 border-sky-500/0 group-hover:border-sky-400/50"
                                animate={{
                                    boxShadow: [
                                        "0 0 0px rgba(14, 165, 233, 0)",
                                        "0 0 30px rgba(14, 165, 233, 0.4)",
                                        "0 0 0px rgba(14, 165, 233, 0)",
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
