import React, { useEffect, useRef } from "react";
import DecayCard from "./Animation/DecayCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const bioRef = useRef(null);
  const cardRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
  const elements = [headingRef, bioRef, cardRef, buttonsRef];

  gsap.set(elements.map(ref => ref.current), { y: 50, opacity: 0 });

  ScrollTrigger.batch(elements.map(ref => ref.current), {
    start: "top 85%",
    onEnter: batch => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  return (
    <section id="about" className="bg-zinc-900 w-full px-4 sm:px-6 md:px-10 py-16">
      <div className="about-section flex flex-col">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-400 font-extrabold mt-10 mb-10"
        >
          <span className="text-white">About</span> Me
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 text-white justify-between items-center">
          {/* Decay Card - Optional Visual Flair */}
          <div ref={cardRef} className="w-full lg:w-1/2 hidden md:flex justify-center">
            <DecayCard
              width={400}
              height={450}
              image="https://avatars.githubusercontent.com/piyushht2003"
              className="mx-auto my-8"
              textClassName="text-white drop-shadow-md"
              baseFrequency={0.02}
              filterSeed={7}
            />
          </div>

          {/* Bio Content */}
          <div ref={bioRef} className="w-full lg:w-1/2 px-2 sm:px-4 md:px-8 lg:px-10">
            <p className="text-lg md:text-xl text-zinc-500 text-justify lg:text-2xl font-medium tracking-wide mb-4">
               <span className="text-5xl text-gray-300">Hi, I’m Piyush Singh Thakur</span>  a Full Stack Web Developer with a knack for building intuitive, fast, and responsive web applications. My focus lies in crafting seamless user experiences with clean, scalable code.
            </p>
            <p className="text-lg md:text-xl text-zinc-500 text-justify lg:text-2xl font-medium tracking-wide">
              With hands-on experience in <span className="text-gray-400">MERN stack, REST APIs, and UI/UX design,</span> I love exploring new technologies and contributing to open-source projects. I'm currently sharpening my skills in Java and aiming to crack top tech companies like Google.
            </p>

            {/* Info Boxes */}
            <div className="mt-10 space-y-6">
              <div className="flex justify-between text-sm sm:text-base md:text-lg">
                <span className="flex items-center gap-2">
                  <i className="ri-graduation-cap-line text-rose-400 text-xl"></i>
                  <span className="text-gray-400">B.Tech in Computer Science, RGPV</span>
                </span>
                <span className="text-gray-400">2021 - 2025</span>
              </div>

              <div className="flex justify-between text-sm sm:text-base md:text-lg">
                <span className="flex items-center text-gray-400 gap-2">
                  <i className="ri-code-s-slash-line text-rose-400 text-xl"></i>
                  Web Developer Intern | Nivss Heritage
                </span>
                <span className="text-gray-400">2024 - 2025</span>
              </div>

              <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                <i className="ri-home-line text-rose-400 text-xl"></i>
                <span className="text-gray-400">Madhya Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex justify-center md:justify-around gap-4 mt-16 flex-wrap"
        >
          <a
            href="mailto:piyushsinghthakur128@gmail.com"
            className="px-6 py-3 rounded-full text-base font-bold text-white bg-rose-500 shadow-[0_0_20px_4px_rgba(244,63,94,0.6)] hover:shadow-[0_0_25px_6px_rgba(244,63,94,0.8)] transition"
          >
            Hire me 👋
          </a>
          <a
            href="https://github.com/piyushht2003"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full flex items-center gap-2 text-base font-bold text-white bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 transition"
          >
            Watch my repo <i className="ri-github-fill text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
