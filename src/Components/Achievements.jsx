import React from 'react';
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
        className='min-h-screen p-8 bg-gradient-to-b from-black via-gray-800 to-gray-800'>
            <div className='max-w-4xl mx-auto'>
                <h2 className="text-4xl font-bold text-sky-400 text-center md:text-left mb-12 border-b-4 inline-block">Platform Stats</h2>
                <div className='grid md:grid-cols-2 gap-10 '>
                    {achievements.map(({ id, title, description, link, icon }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-gray-900 rounded-lg shadow-2xl p-10 transform hover:scale-105 transition duration-300'
                        >
                            <div className="text-center">{icon}</div>
                            <h3 className='text-xl font-semibold text-center mb-2 text-white'>{title}</h3>
                            <p className='text-blue-400 text-center'>{description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
