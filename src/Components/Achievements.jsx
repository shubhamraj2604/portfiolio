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
        <section id='achievements' className='section-shell'>
            <div className="absolute right-[10%] top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute bottom-16 left-[6%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className='section-inner relative z-10'>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title mb-12"
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
                            className='glass-panel group relative overflow-hidden rounded-2xl border-cyan-300/20 p-10 transition-all duration-300 hover:border-cyan-200/40'
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-cyan-500/0 transition-all duration-500 group-hover:from-cyan-500/15 group-hover:via-blue-500/10 group-hover:to-cyan-500/15"
                            />
                            
                            <div className="relative z-10">
                                <motion.div
                                    className="text-center mb-6"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {icon}
                                </motion.div>
                                <h3 className='mb-3 text-center text-2xl font-bold text-white transition-colors group-hover:text-cyan-100'>
                                    {title}
                                </h3>
                                <p className='text-center text-lg font-semibold text-cyan-200 transition-colors group-hover:text-cyan-100'>
                                    {description}
                                </p>
                                
                                <div className="mt-6 flex justify-center gap-2">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="h-2 w-2 rounded-full bg-cyan-300"
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

                            <motion.div
                                className="absolute inset-0 rounded-2xl border-2 border-cyan-500/0 group-hover:border-cyan-200/30"
                                animate={{
                                    boxShadow: [
                                        "0 0 0px rgba(34, 211, 238, 0)",
                                        "0 0 22px rgba(34, 211, 238, 0.28)",
                                        "0 0 0px rgba(34, 211, 238, 0)",
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
