import React from "react";

const Timeline = () => {
  const education = [
    {
      heading: "B.Tech",
      schoolName: "Birla Institute of Technology, Mesra",
      marks: 85,
      passingYear: 2027,
      degree: "Bachelor of Technology",
      board: "Computer Science and Engineering",
    },
    {
      heading: "Higher Secondary",
      schoolName: "Sapphire International School, Noida",
      marks: 92.5,
      passingYear: 2027,
      degree: "Class 12",
      board: "CBSE",
    },
    {
      heading: "Secondary",
      schoolName: "Baldwin Boys High School, Bengaluru",
      marks: 90,
      passingYear: 2020,
      degree: "(Class 10)",
      board: "ICSE",
    },
    
  ];

  return (
    <div id="education"
     className=" min-h-screen p-8 bg-gradient-to-b from-black via-gray-800 to-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-sky-400 text-center md:text-left mb-12 border-b-4 inline-block ">Education</h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-300">
          {education.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
              <div className="bg-gray-900   p-6 border-l-8  border-sky-400 rounded-lg shadow-lg ">
                <h4 className="text-xl text-white font-semibold">{item.heading}</h4>
                <h3 className="font-bold text-lg text-sky-600 mb-2">{item.schoolName}</h3>
                <p className="text-gray-400">
                  Degree: {item.degree} <br />
                  Board/Branch: {item.board} <br />
                  Marks: {item.marks}% <br />
                  Passing Year: {item.passingYear}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
