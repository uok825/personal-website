import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Navbar";
import projects from "../data/data.json";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  body: string;
  imgSrc: string;
  link: string;
  linkshortcut: string;
}

interface CarouselProps {
  data: Project[];
}

const DesktopCarousel: React.FC<CarouselProps> = ({ data }) => {
  const [flag, setFlag] = useState<number>(0);

  const scrollRight = () => {
    setFlag((flag + 1) % data.length);
  };

  const scrollLeft = () => {
    setFlag((flag - 1 + data.length) % data.length);
  };

  const getScaleClass = (index: number) => {
    return index === 1 ? "scale-100" : "scale-90";
  };

  const visibleProjects = data
    .slice(flag, flag + 3)
    .concat(data.slice(0, Math.max(0, flag + 3 - data.length)));

  return (
    <div className="relative flex items-center justify-center w-full mt-20 sm:mt-40 h-fit">
      <button
        onClick={scrollLeft}
        className="z-10 size-16 -translate-x-4 sm:-translate-x-8"
        aria-label="Scroll Left"
      >
        <img src="arrow_back.png" alt="Scroll Left" />
      </button>
      <div className="flex flex-row justify-center items-center space-x-4 sm:space-x-6 overflow-x-hidden transition-transform duration-500">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id || index}
            className={`relative bg-white rounded-3xl shadow-lg w-[300px] sm:w-[400px] md:w-[500px] h-[400px] sm:h-[500px] md:h-[600px] p-4 transition-transform duration-500 transform ${getScaleClass(
              index
            )}`}
          >
            <img
              className="rounded-2xl mx-auto border-2 border-solid border-black"
              src={project.imgSrc}
              alt={project.title || "Project image"}
            />

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 mt-4 sm:mt-12 text-center text-gray-900">
              {project.title}
            </h2>
            <p className="text-gray-700 text-center leading-6 text-sm sm:text-md md:text-lg flex-grow px-1">
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
        aria-label="Scroll Right"
      >
        <img src="arrow_back.png" alt="Scroll Right" />
      </button>
    </div>
  );
};

const MobileCarousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {data.map((project, index) => (
          <CarouselItem key={project.id || index}>
            <div className="p-1">
              <div className="relative bg-white rounded-3xl shadow-lg w-full h-[400px] sm:h-[500px] md:h-[600px] p-4">
                <img
                  className="rounded-2xl mx-auto border-2 border-solid border-black"
                  src={project.imgSrc}
                  alt={project.title || "Project image"}
                />

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 mt-4 sm:mt-12 text-center text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-center leading-6 text-sm sm:text-md md:text-lg flex-grow px-1">
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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const Projects: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const data: Project[] = projects.experiences;

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <h1 className="text-white font-bold font-poppins text-[40px] sm:text-[50px] md:text-[70px] mb-12 sm:mb-24 md:mb-6 text-center">
        Projects
      </h1>

      {isDesktop ? (
        <DesktopCarousel data={data} />
      ) : (
        <MobileCarousel data={data} />
      )}
    </div>
  );
};

export default Projects;
