// ProjectCards.jsx
import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-zinc-900 text-white py-20 px-4 sm:px-8 md:px-10 lg:px-16"
    >
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 font-bold leading-tight">
        Some of my <span className="text-rose-500">projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {/* Project Card */}
        {[
          {
            title: "Worktrack",
            img: "images/worktrack.png",
            desc: "An employee management application to keep track of the assignments and tasks of the employees. (Visit Github)",
            github: "https://github.com/piyushht2003/WorkTrack-Employee-Management-System",
            live: "https://work-track-employee-management-syst.vercel.app/",
          },
          {
            title: "Lazarev Clone",
            img: "images/laravez.png",
            desc: "An award winning website Larazev clone to showcase the my animation ability.",
            github: "https://github.com/piyushht2003/Lazarev",
            live: "https://lazarev-gray-sigma.vercel.app//",
          },
          {
            title: "Time-Capsule | Personal Blog",
            img: "images/Time-capsule.png",
            desc: "A personal blog website where I post my thoughts, experiences, and insights throughout my journey.",
            github:"https://github.com/piyushht2003/Time-capsule",
            live: "https://time-capsule-tau.vercel.app/",
          },
        ].map((project, i) => (
          <div
            key={i}
            className="relative bg-zinc-900 border border-zinc-700 p-5 rounded-2xl shadow-lg group hover:bg-zinc-800 transition-all duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-48 object-cover object-bootom"
            />
            <h2 className="text-xl md:text-2xl font-semibold group-hover:text-white">
              {project.title}
            </h2>
            <div className="opacity-0 group-hover:opacity-100 text-sm mt-2 text-zinc-200 group-hover:text-zinc-500 transition-all duration-300">
              {project.desc}
            </div>
            <div className="mt-6 flex justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white group-hover:text-zinc-400 font-semibold underline"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white group-hover:text-zinc-400 font-semibold underline"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
      <div
        id="projects"
        className="bg-zinc-900 w-full text-white py-12 mt-20 px-4 sm:px-6 md:px-"
      >
        <div className="text-start mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 sm:mb-16">
            Here are my <br /> <span className="text-[#f77409]">certificates </span>
          </h1>
        </div>

        <div className="w-full flex flex-col">
          {/* Item 1 */}
          <div className="flex sm:grid-cols-3 border-t border-white px-4 py-6 sm:py-8 justify-between items-center border-b font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl relative overflow-hidden group">
            <div className="text-center sm:text-left">2024</div>
            <div className="text-center z-10 group-hover:text-black md:flex sm:hidden hidden transition-all duration-300">
              Developer and Technology Job Simulation
            </div>
            <div className="text-center sm:text-right z-10 group-hover:text-black transition-all duration-300">
              Accenture
            </div>
            <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
          </div>

          {/* Item 2 */}
          <div className="flex sm:grid-cols-3 border-t border-white px-4 py-6 sm:py-8 justify-between items-center border-b font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl relative overflow-hidden group">
            <div className="text-center sm:text-left">2024</div>
            <div className="text-center z-10 group-hover:text-black md:flex sm:hidden hidden transition-all duration-300">
              Cyber security Job Simulation 
            </div>
            <div className="text-center sm:text-right z-10 group-hover:text-black transition-all duration-300">
              MasterCard
            </div>
            <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
          </div>

          {/* Item 3 */}
          <div className="flex sm:grid-cols-3 border-t border-white px-4 py-6 sm:py-8 justify-between items-center border-b font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl relative overflow-hidden group">
            <div className="text-center sm:text-left">2024</div>
            <div className="text-center z-10 group-hover:text-black md:flex sm:hidden hidden transition-all duration-300">
              Solutions Architecture Job Simulation 
            </div>
            <div className="text-center sm:text-right z-10 group-hover:text-black transition-all duration-300">
              AWS APAC 
            </div>
            <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
