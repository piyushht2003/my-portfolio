// ProjectCards.jsx
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="bg-zinc-900 text-white py-20 px-4 sm:px-8 md:px-10 lg:px-16">
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
        github: "https://github.com/piyushht2003/cynthia-ugwu-portfolio-clone",
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
</div>

  );
};

export default Projects;
