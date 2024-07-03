import React, { useState } from "react";
import Navbar from "../components/Navbar";
import projects from "../data/data.json";

export default function Projects() {
  const [flag, setFlag] = useState(0);
  const data = projects.experiences;

  const scrollRight = () => {
    setFlag((flag + 1) % data.length);
  };

  const scrollLeft = () => {
    setFlag((flag - 1 + data.length) % data.length);
  };

  const getScaleClass = (index: number) => {
    if (index === 1) return "scale-100";
    return "scale-90";
  };

  const visibleProjects = data
    .slice(flag, flag + 3)
    .concat(data.slice(0, Math.max(0, flag + 3 - data.length)));

  return (
    <div className="bg-black text-white min-h-screen min-w-full flex flex-col">
      <Navbar />
      <h1 className="text-white font-bold font-poppins text-[40px] sm:text-[50px] md:text-[70px] mb-12 sm:mb-24 md:mb-32 text-center">
        Projects
      </h1>

      <div className="relative flex items-center justify-center w-full mt-20 sm:mt-40 h-fit">
        <button
          onClick={scrollLeft}
          className="z-10 size-16 -translate-x-4 sm:-translate-x-8"
        >
          <img src="arrow_back.png" alt="Scroll Left" />
        </button>
        <div className="flex flex-row justify-center items-center space-x-4 sm:space-x-6 overflow-x-hidden transition-transform duration-500">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg w-[300px] sm:w-[400px] md:w-[500px] h-[400px] sm:h-[500px] md:h-[600px] p-4 transition-transform duration-500 transform ${getScaleClass(
                index
              )}`}
            >
              <img
                className="rounded-2xl mx-auto border-2 border-solid border-black"
                src={project.imgSrc}
                alt=""
              />

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 mt-4 sm:mt-12 text-center text-gray-900">
                {project.title}
              </h2>
              <p className="text-gray-700 text-center leading-6 text-sm sm:text-md md:text-lg flex-grow pl-1 pr-1">
                {project.body}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 sm:bottom-8 left-1/2 p-[6px] sm:p-[10px] text-center -translate-x-1/2 text-white font-bold bg-black border rounded-lg border-black w-[200px] sm:w-[256px] h-[36px] sm:h-[48px]"
              >
                {project.linkshortcut}
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="z-10 size-16 translate-x-4 sm:translate-x-8 rotate-180"
        >
          <img src="arrow_back.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}
