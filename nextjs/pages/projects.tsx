import React, { useState } from "react";
import Navbar from "../components/Navbar";
import projects from "../data/data.json";

export default function Projects() {
  const [flag, setFlag] = useState(0);
  const data = projects.experiences;
  const scrollRight = () => {
    setFlag((flag + 3) % data.length);
  };

  const scrollLeft = () => {
    setFlag((flag - 3 + data.length) % data.length);
  };

  const visibleProjects = data
    .slice(flag, flag + 3)
    .concat(data.slice(0, Math.max(0, flag + 3 - data.length)));

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <h1 className="text-white font-bold font-poppins text-[70px] mb-12 text-center">
        Projects
      </h1>

      <div className="relative flex items-center justify-center w-full mt-40 h-fit">
        <button onClick={scrollLeft} className="z-10 size-16 -translate-x-8">
          <img src="arrow_back.png"></img>
        </button>
        <div className="flex flex-row justify-center items-center space-x-8 overflow-x-hidden">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg w-[500px] h-[500px] p-2"
            >
              <img
                className="rounded-t-lg h-[90px] mx-auto mt-12"
                src={project.imgSrc || "ETHGlobal.png"}
                alt=""
              />

              <h2 className="text-2xl font-bold mb-4 mt-12 text-center text-gray-900">
                {project.title}
              </h2>
              <p className="text-gray-600 text-center leading-6 flex-grow">
                {project.body}
              </p>
              <a
                href={project.link}
                target="blank"
                className="absolute bottom-4 left-1/2 p-[10px] text-center  -translate-x-1/2 text-white font-bold bg-black border rounded-lg border-black w-[256px] h-[48px]"
              >
                {project.linkshortcut}
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={scrollLeft}
          className="z-10 size-16 translate-x-8 rotate-180"
        >
          <img src="arrow_back.png"></img>
        </button>
      </div>
    </div>
  );
}
