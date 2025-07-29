import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const fullStackHeadingRef = useRef(null);
  const frontendHeadingRef = useRef(null);
  const certificateHeadingRef = useRef(null);
  const fullStackCardsRef = useRef([]);
  const projectCardsRef = useRef([]);
  const certItemsRef = useRef([]);

  useEffect(() => {
    // Animate certificates
    gsap.fromTo(
      certItemsRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: certItemsRef.current[0],
          start: "top 90%",
        },
      }
    );
  }, []);


  const certificates = [
    {
      year: "2024",
      title: "Developer and Technology Job Simulation",
      company: "Accenture",
    },
    {
      year: "2024",
      title: "Cyber security Simulation",
      company: "MasterCard",
    },
    {
      year: "2024",
      title: "Solutions Architecture Job Simulation",
      company: "AWS APAC",
    },
  ];

  return (
    <>

      {/* Certificates Section */}
      <div
        className="bg-zinc-900 text-white py-10 px-4 sm:px-8 md:px-10 lg:px-16"
      >
        <div className="bg-zinc-900 w-full text-white py-12 mb-20 px-4 sm:px-6">
          <div className="text-start mb-12 sm:mb-20">
            <h1 
            ref={certificateHeadingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 sm:mb-16">
              Here are my <br /> <span className="text-[#f77409]">certificates</span>
            </h1>
          </div>

          <div className="w-full flex flex-col">
            {certificates.map((cert, i) => (
              <div
                key={i}
                ref={(el) => (certItemsRef.current[i] = el)}
                className="flex sm:grid-cols-3 border-t border-white px-4 py-6 sm:py-8 justify-between items-center border-b font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl relative overflow-hidden group"
              >
                <div className="text-center sm:text-left">{cert.year}</div>
                <div className="text-center z-10 group-hover:text-black md:flex sm:hidden hidden transition-all duration-300">
                  {cert.title}
                </div>
                <div className="text-center sm:text-right z-10 group-hover:text-black transition-all duration-300">
                  {cert.company}
                </div>
                <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
