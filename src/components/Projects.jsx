import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const fullStackHeadingRef = useRef(null);
  const frontendHeadingRef = useRef(null);
  const fullStackCardsRef = useRef([]);
  const projectCardsRef = useRef([]);

  useEffect(() => {
    const animateSection = (trigger, target) => {
      gsap.fromTo(
        target,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger,
            start: "top 80%",
          },
        }
      );
    };

    animateSection(fullStackHeadingRef.current, fullStackHeadingRef.current);
    animateSection(frontendHeadingRef.current, frontendHeadingRef.current);

    gsap.fromTo(
      fullStackCardsRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: fullStackCardsRef.current[0],
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      projectCardsRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectCardsRef.current[0],
          start: "top 90%",
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "Spylt",
      img: "images/spylt.png",
      desc: "This project showcases a premium website that won Awwwards Site of the Day.",
      github: "https://github.com/piyushht2003/Awwards-Spylt",
      live: "https://awwards-spylt.vercel.app/",
    },
    {
      title: "Zentry - The Metagame",
      img: "images/zentry.png",
      desc: "The world's largest shared adventure. This website is themed as an epic MMORPG that unites players.",
      github: "https://github.com/piyushht2003/Awwards",
      live: "https://zentry-the-metagame.vercel.app/",
    },
    {
      title: "Lazarev Clone",
      img: "images/laravez.png",
      desc: "An award winning website Larazev clone to showcase the my animation ability.",
      github: "https://github.com/piyushht2003/Lazarev",
      live: "https://lazarev-gray-sigma.vercel.app/",
    },
  ];

  const fullStack = [
    {
      title: "QuickStay",
      img: "images/quickstay.png",
      desc: "A Hotel management application where you can book your hotel rooms and manage your hotel business.",
      github: "https://github.com/piyushht2003/hotel-management-app",
      live: "https://quickstay-rose.vercel.app/",
    },
    {
      title: "Worktrack",
      img: "images/worktrack.png",
      desc: "An employee management application to keep track of the assignments and tasks of the employees. (Visit Github)",
      github: "https://github.com/piyushht2003/WorkTrack-Employee-Management-System",
      live: "https://work-track-employee-management-syst.vercel.app/",
    },
  ];

  const Card = ({ data, innerRef }) => (
    <div
      ref={innerRef}
      className="relative bg-zinc-900 border border-zinc-700 p-5 rounded-2xl shadow-md group transform transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:bg-zinc-800"
    >
      <img
        src={data.img}
        alt={data.title}
        className="rounded-xl mb-4 w-full h-48 object-cover object-center group-hover:brightness-110 transition-all duration-300"
      />
      <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-zinc-200 transition-colors duration-300">
        {data.title}
      </h2>
      <p className="opacity-0 group-hover:opacity-100 text-sm mt-2 text-zinc-400 transition-opacity duration-500">
        {data.desc}
      </p>
      <div className="mt-6 flex justify-between">
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white group-hover:text-zinc-300 font-semibold underline transition-all duration-300"
        >
          GitHub
        </a>
        <a
          href={data.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white group-hover:text-zinc-300 font-semibold underline transition-all duration-300"
        >
          Live
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* FullStack Projects */}
      <section id="projects" className="bg-zinc-900 text-white py-20 px-4 sm:px-8 md:px-10 lg:px-16">
        <h1
          ref={fullStackHeadingRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 font-bold leading-tight"
        >
          Functional <span className="text-sky-500 block">projects</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20 gap-8 md:gap-10">
          {fullStack.map((proj, i) => (
            <Card key={i} data={proj} innerRef={(el) => (fullStackCardsRef.current[i] = el)} />
          ))}
        </div>
      </section>

      {/* Frontend Projects */}
      <section className="bg-zinc-950 text-white py-20 px-4 sm:px-8 md:px-10 lg:px-16">
        <h1
          ref={frontendHeadingRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 font-bold leading-tight"
        >
          Animated <span className="text-rose-500 block">projects</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20 gap-8 md:gap-10">
          {projects.map((proj, i) => (
            <Card key={i} data={proj} innerRef={(el) => (projectCardsRef.current[i] = el)} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
