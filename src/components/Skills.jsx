import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const headingRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate skill icons with stagger
    gsap.fromTo(
      skillsRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current[0], // first element
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div
      id="skills"
      className="bg-[#111111] w-full text-white py-16 px-6 sm:px-10"
    >
      {/* Heading Section */}
      <div className="text-start mt-10 mb-12" ref={headingRef}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          Things I'm <span className="text-cyan-400">good</span> at
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-300">
          skills, interests, passion and hobbies
        </p>
      </div>

      {/* Category Button */}
      <div className="flex justify-start mb-10">
        <button className="border border-gray-500 px-6 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
          development
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {[
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            alt: "Next.js",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: "React",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            alt: "Node.js",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            alt: "HTML5",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            alt: "CSS3",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            alt: "JavaScript",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            alt: "MongoDB",
          },
          {
            src: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
            alt: "Express",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6DXuvit57V1DmjnlLcwst4O-sTL5D37gIQ&s",
            alt: "GitHub",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            alt: "Redux",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            alt: "MySQL",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            alt: "Java",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            alt: "Bootstrap",
          },
        ].map((tech, index) => (
          <div
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4"
          >
            <img
              src={tech.src}
              alt={tech.alt}
              title={tech.alt}
              className="h-12 w-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
