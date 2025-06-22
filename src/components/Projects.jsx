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
            title: "Connectly Chat App",
            img: "https://i.pinimg.com/originals/8d/74/27/8d7427b09ed22b0113bac8814042237c.jpg",
            desc: "A real-time MERN stack chat app with Socket.io, Zustand, JWT, and error handling.",
            github: "https://github.com/piyushht2003/connectly",
            live: "https://connectly-chat.vercel.app/",
          },
          {
            title: "Uber Clone",
            img: "https://leannekchin.com/wp-content/uploads/2020/12/hero-2-e1607060979486.jpg",
            desc: "Full-stack Uber clone with live ride tracking and Firebase integration.",
            github: "https://github.com/piyushht2003/uber-clone",
            live: "https://uber-clone.vercel.app/",
          },
          {
            title: "Cynthia Ugwu Portfolio Clone",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/source/e6d46f57094643.59c8f2e9828ad.jpg",
            desc: "Animated portfolio inspired by Cynthia Ugwu using GSAP and React.",
            github:
              "https://github.com/piyushht2003/cynthia-ugwu-portfolio-clone",
            live: "https://cynthia-ugwu-clone-hza3.vercel.app/",
          },
        ].map((project, i) => (
          <div
            key={i}
            className="relative bg-zinc-900 border border-zinc-700 p-5 rounded-2xl shadow-lg group hover:bg-rose-500 transition-all duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-xl md:text-2xl font-semibold group-hover:text-black">
              {project.title}
            </h2>
            <div className="opacity-0 group-hover:opacity-100 text-sm mt-2 text-zinc-200 group-hover:text-black transition-all duration-300">
              {project.desc}
            </div>
            <div className="mt-6 flex justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white group-hover:text-black font-semibold underline"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white group-hover:text-black font-semibold underline"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
      <div
        id="projects"
        className="min-h-screen bg-zinc-900 w-full text-white py-12 mt-20 px-4 sm:px-6 md:px-"
      >
        <div className="text-start mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 sm:mb-16">
            <span className="text-[#f77409]">frontend </span>
            projects
          </h1>
        </div>

        <div className="w-full flex flex-col">
          {/* Item 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white px-4 py-6 sm:py-4 justify-center items-center border-b font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl relative overflow-hidden group">
            <div className="text-center sm:text-left">2024</div>
            <div className="text-center z-10 group-hover:text-black transition-all duration-300">
              Developer and Technology Job Simulation
            </div>
            <div className="text-center sm:text-right z-10 group-hover:text-black transition-all duration-300">
              Accenture
            </div>
            <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white px-4 py-6 sm:py-4 border-b justify-center items-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl relative overflow-hidden group">
            <div className="text-center sm:text-left">2024</div>
            <div className="text-center z-10 group-hover:text-black transition-all duration-300">
              Solutions Architecture Job Simulation
            </div>
            <div className="text-center sm:text-right z-10 group-hover:text-black transition-all duration-300">
              AWS
            </div>
            <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white px-4 py-6 sm:py-4 border-b justify-center items-center mb-12 sm:mb-20 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl relative overflow-hidden group">
            <div className="text-center sm:text-left">2024</div>
            <div className="text-center z-10 group-hover:text-black transition-all duration-300">
              Cybersecurity Job Simulation
            </div>
            <div className="text-center sm:text-right z-10 group-hover:text-black transition-all duration-300">
              MasterCard
            </div>
            <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
