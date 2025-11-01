import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import projects from "../data/data.json";

interface Project {
  id: number;
  title: string;
  body: string;
  imgSrc: string;
  link: string;
  linkshortcut: string;
}

const Projects: React.FC = () => {
  const data: Project[] = projects.experiences;
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen min-w-full">
      <Navbar />
      <div className="p-6 sm:p-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-bold font-poppins text-[40px] sm:text-[50px] md:text-[70px] mb-8 sm:mb-12 text-center animate-fade-in">
            Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
            {data.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                className={`group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 ${
                  visibleCards.has(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                style={{
                  transitionDelay: `${(index % 3) * 150}ms`,
                }}
              >
                <div className="aspect-video w-full overflow-hidden bg-zinc-800">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col h-[200px]">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 flex-grow overflow-hidden">
                    {project.body}
                  </p>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/50 transform hover:-translate-y-0.5"
                  >
                    {project.linkshortcut}
                    <svg 
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
