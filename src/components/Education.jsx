import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUniversity, FaSchool, FaUserGraduate } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const headingRef = useRef(null);
  const timelineRefs = useRef([]);
  const lineRef = useRef(null);

  const educationData = [
    {
      year: "2021 – 2025",
      title: "B.Tech in Computer Science",
      icon: <FaUniversity size={20} />,
      institution: "St. Aloysius Institute of Technology, Jabalpur",
      details: "CGPA: 7.31 / 10",
    },
    {
      year: "2020 – 2021",
      title: "Higher Secondary - Science",
      icon: <FaUserGraduate size={20} />,
      institution: "Bharat Jyoti Hr. Sec. School, Mandla",
      details: "Percentage: 92%",
    },
    {
      year: "2018 – 2019",
      title: "High School (10th)",
      icon: <FaSchool size={20} />,
      institution: "Amal Jyoti Hr. Sec. School, Mandla",
      details: "Percentage: 91.4%",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    timelineRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="min-h-screen bg-zinc-950 text-white px-6 sm:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-6xl font-bold text-center mb-20"
        >
          My <span className="text-rose-400">Education Journey</span>
        </h1>

        <div className="relative border-l-5 border-rose-500/40 pl-6">
          <div
            ref={lineRef}
            className="absolute top-0 left-[-4px] w-1 bg-rose-500 origin-top"
            style={{ zIndex: 0 }}
          />

          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (timelineRefs.current[index] = el)}
              className="mb-16 relative group"
            >
              {/* Dots */}
              <div className="flex items-center justify-center absolute left-[-23px] top-0">

              <div className="absolute w-4 h-4 bg-rose-400 rounded-full left-[-11px] top-2 shadow-md shadow-rose-500 animate-pulse z-10" />
              <div className="absolute w-2.5 h-2.5 bg-white rounded-full left-[-8.6px] top-[11px] z-20" />
              </div>

              {/* Card */}
              <div className="backdrop-blur-2xl bg-zinc-800/60 border border-zinc-700/50 shadow-xl hover:shadow-rose-500/30 transition-all duration-500 p-6 rounded-3xl overflow-hidden">
                <div className="flex items-center gap-3 text-rose-400 font-semibold mb-2">
                  {edu.icon}
                  <span>{edu.year}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {edu.title}
                </h2>
                <p className="text-zinc-300 mb-1">{edu.institution}</p>
                <p className="text-zinc-400 text-sm">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
