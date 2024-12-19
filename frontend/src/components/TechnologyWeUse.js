import React from "react";
import Marquee from "react-fast-marquee";
import { FaFigma, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";
import { SiLaravel, SiFlutter, SiReact, SiMongodb, SiMariadb, SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";

const TechnologyWeUse = () => {
  const technologies = [
    { name: "Figma", icon: <FaFigma className="text-orange-500" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
    { name: "React Native", icon: <SiReact className="text-cyan-400" /> },
    { name: "Java", icon: <DiJava className="text-orange-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MariaDB", icon: <SiMariadb className="text-indigo-500" /> },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Technology We Use
        </h2>
        <Marquee gradient={false} speed={50} className="py-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-8 min-w-[120px] sm:min-w-[150px] space-y-2 hover:scale-110 transition transform duration-300"
            >
              <div className="text-6xl">{tech.icon}</div>
              <p className="text-sm md:text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TechnologyWeUse;
