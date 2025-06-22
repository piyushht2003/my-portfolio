import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollVelocity from "./components/Animation/ScrollVelocity";
import Ribbons from "./components/Animation/Ribbons";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "remixicon/fonts/remixicon.css";
import DecayCard from "./components/Animation/DecayCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";

function App() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
    tl.fromTo(
      "#home-left h1",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
      .fromTo(
        "#home-left p",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        "#home-left h3",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        "#home-right",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector("#about .about-section h1");
    if (section) {
      gsap.fromTo(
        section,
        { scale: 0.3, opacity: 0 },
        {
          opacity: 1,
          duration: 3,
          scale: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 60%",
            end: "top 10%",
          },
        }
      );
    }

    const section1 = document.querySelector("#about .relative");
    if (section1) {
      gsap.fromTo(
        section1,
        { scale: 0.5, y: -200, opacity: 0, x: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          scale: 1,
          x: 0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#about .about-section h1",
            start: "top 60%",
            end: "top 10%",
          },
        }
      );
    }

    const section2 = document.querySelector("#about .bio");
    if (section2) {
      gsap.fromTo(
        section2,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#about #decay",
            start: "top 60%",
            end: "top 10%",
          },
        }
      );
    }
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollVelocity); // Register the plugin before using it
  }, []);

  const velocity = 100;

  const colors = ["text-rose-600", "text-yellow-300", "text-cyan-400"];
  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "UI/UX Designer",
  ];
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleNavigation = (href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main
        className="relative w-full bg-black"
        style={{ scrollBehavior: "smooth" }}
      >
        <nav className="navbar fixed top-0 left-0 w-full bg-transparent text-white z-50 px-4 sm:px-6 py-3 flex items-center justify-between flex-wrap overflow-hidden">
          {/* Name Section */}
          <div
            id="nav-p"
            className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold leading-tight"
          >
            <p>Piyush</p>
            <p>Singh Thakur</p>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-3 sm:top-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-xl sm:text-2xl md:text-3xl rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
            >
              <i className="ri-arrow-up-long-line"></i>
            </button>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="mt-4 sm:mt-0 px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold text-white bg-rose-500
    shadow-[0_0_10px_2px_rgba(244,63,94,0.5)]
    hover:shadow-[0_0_15px_3px_rgba(244,63,94,0.7)]
    transition duration-300 whitespace-nowrap"
          >
            get my resume
          </a>
        </nav>

        <div
          id="home"
          className="bg-zinc-950  w-full px-6 py-16 md:px-10 md:py-10"
        >
          <section className="w-full flex flex-col lg:flex-row justify-center relative items-center gap-10">
            <div className="w-full">
              <div
                id="home-left"
                className="flex flex-col text-white gap-4 p-6 md:p-16 lg:p-28 justify-center items-start"
              >
                <h1 className="text-5xl md:text-7xl lg:text-9xl mb-3 leading-tight">
                  Hi, I'm Piyush
                </h1>

                <h3 className="text-xl md:text-3xl lg:text-4xl flex flex-wrap gap-2 text-zinc-400 font-bold">
                  <Typewriter
                    options={{
                      strings: roles.map(
                        (role) =>
                          `<span class='${getRandomColor()}'>${role}</span>`
                      ),
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 30,
                      delay: 50,
                      html: true,
                    }}
                  />
                </h3>
              </div>
            </div>
            <div
              id="home-right"
              className="w-full h-auto lg:h-screen flex justify-center items-center"
            >
              <div className="border rounded-4xl px-10 md:px-16 py-10 md:py-20 border-none bg-zinc-900 text-sky-400 shadow-9xl flex flex-col gap-4 justify-center items-start">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-yellow-400">
                  <i className="ri-edit-circle-fill"></i>developer
                </h1>
                <span className="text-5xl md:text-7xl lg:text-9xl">
                  Portfolio
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* <div className="bg-zinc-900 z-10 py-10">
          <ScrollVelocity
            texts={["Piyush??"]}
            velocity={velocity}
            className="custom-scroll-text mb-3"
          />
        </div> */}

        <section
          id="about"
          className="bg-zinc-900 w-full px-4 sm:px-6 md:px-10 py-10"
        >
          <div className="about-section flex flex-col">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-orange-400 font-bold mt-10 mb-10">
              About Me
            </h1>
            <div
              id="decay"
              className="flex flex-col lg:flex-row gap-10 mb-4 text-white justify-between items-center"
            >
              <div className="w-full lg:w-1/2 flex justify-center">
                <DecayCard
                  width={400}
                  height={400}
                  image="https://avatars.githubusercontent.com/piyushht2003"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl">
                    dev
                    <br />
                    Piyush
                  </h2>
                </DecayCard>
              </div>
              <div className="bio w-full lg:w-1/2 px-2 sm:px-4 md:px-8 lg:px-10">
                <p className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide mb-4">
                  Hi, I’m Piyush Singh Thakur — a passionate Full Stack Web
                  Developer and UI/UX enthusiast with hands-on experience in
                  building fast, responsive, and scalable web applications.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide">
                  When I’m not coding, you’ll find me exploring new design
                  trends, contributing to open-source, or helping others grow
                  through tech communities. Let’s build something amazing
                  together.
                </p>

                <div className="w-full flex flex-col gap-6 justify-start items-start mt-10">
                  <div className="flex flex-col sm:flex-row justify-between w-full">
                    <h3 className="text-lg md:text-xl flex items-center gap-2">
                      <i className="ri-graduation-cap-line text-orange-400 text-2xl"></i>
                      <span className="text-white font-sans font-semibold">
                        Education - B.Tech in Computer Science, RGPV
                      </span>
                    </h3>
                    <span className="text-lg text-gray-100 mt-2 sm:mt-0">
                      2021 - 2025
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between w-full">
                    <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                      <i className="ri-reactjs-fill text-orange-400 text-2xl"></i>
                      Web developer intern | Nivss Heritage
                    </h3>
                    <span className="text-lg text-gray-100 mt-2 sm:mt-0">
                      2024 - 2025
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl flex items-center gap-2">
                    <i className="ri-home-line text-orange-400 text-2xl"></i>
                    <span className="text-white font-sans font-semibold">
                      Madhya Pradesh, India
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div
              id="buttons"
              className="flex justify-around mt-20 mb-10 flex-wrap"
            >
              <a
                href="mailto:piyush@example.com"
                className="px-5 py-3 rounded-full text-base font-bold text-white bg-[#0ea5e9] shadow-[0_0_20px_4px_rgba(14,165,233,0.6)] hover:shadow-[0_0_25px_6px_rgba(14,165,233,0.8)] transition"
              >
                Hire me 👋
              </a>
              <a
                href="https://github.com/piyushht2003"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full flex text-base justify-center gap-2 items-center font-bold text-white bg-[#ef4444] shadow-[0_0_20px_4px_rgba(239,68,68,0.6)] hover:shadow-[0_0_25px_6px_rgba(239,68,68,0.8)] transition"
              >
                Watch my repo<i className="ri-github-fill text-xl"></i>
              </a>
            </div>
          </div>
        </section>

        <div
          id="skills"
          className="bg-[#111111] w-full text-white py-16 px-6 sm:px-10"
        >
          {/* Heading Section */}
          <div className="text-start mt-10 mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              Things I'm <span className="text-cyan-400">good</span> at
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-300">
              skills, interests, passion and hobbies
            </p>
          </div>

          {/* Category Button */}
          <div className="flex justify-start mb-10">
            <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
              development
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {[
              { src: "nextjs", title: "Next.js" },
              { src: "react", title: "React" },
              { src: "nodejs", title: "Node.js" },
              { src: "html5", title: "HTML5" },
              { src: "css3", title: "CSS3" },
              { src: "javascript", title: "JavaScript" },
              { src: "mongodb", title: "MongoDB" },
              { src: "express", title: "Express" },
              { src: "github", title: "GitHub" },
              { src: "redux", title: "Redux" },
              { src: "mysql", title: "MySQL" },
              { src: "java", title: "Java" },
              { src: "bootstrap", title: "Bootstrap" },
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-transparent border border-white rounded-lg flex items-center justify-center p-4"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.src}/${skill.src}-original.svg`}
                  alt={skill.title}
                  className="h-12 w-12 object-contain"
                  title={skill.title}
                />
              </div>
            ))}
          </div>
        </div>

        <Projects />

        <div
          id="projects"
          className="min-h-screen bg-zinc-900 w-full text-white py-12 px-4 sm:px-6 md:px-10"
        >
          <div className="text-start mb-12 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 sm:mb-16">
              <span className="text-[#f77409] drop-shadow-[0_2px_4px_rgba(247,116,9,0.7)]">
                frontend{" "}
              </span>
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

        <div
          id="certificates"
          className="min-h-screen bg-[#242724] w-full text-white py-16 px-10"
        >
          <div className="text-start mb-20">
            <h1 className="text-8xl font-bold">
              here are some of my{" "}
              <span className="text-yellow-400">certifications</span>.
            </h1>
          </div>

          <div className="w-full flex flex-col">
            <div className="grid grid-cols-3 border-t border-white px-4 py-4 justify-center items-center border-b font-semibold text-4xl relative overflow-hidden group">
              <div>2024</div>
              <div className="text-center z-10 group-hover:text-black transition-all duration-300">
                Developer and Technology Job Simulation
              </div>
              <div className="text-right z-10 group-hover:text-black transition-all duration-300">
                Accenture
              </div>
              <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
            </div>

            <div className="grid grid-cols-3 border-t border-white px-4 py-4 border-b justify-center items-center font-semibold text-4xl relative overflow-hidden group">
              <div>2024</div>
              <div className="text-center z-10 group-hover:text-black transition-all duration-300">
                Solutions Architecture Job Simulation
              </div>
              <div className="text-right z-10 group-hover:text-black transition-all duration-300">
                AWS
              </div>
              <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
            </div>

            <div className="grid grid-cols-3 border-t border-white px-4 py-4 border-b justify-center items-center mb-20 font-semibold text-4xl relative overflow-hidden group">
              <div>2024</div>
              <div className="text-center z-10 group-hover:text-black transition-all duration-300">
                Cybersecurity Job Simulation
              </div>
              <div className="text-right z-10 group-hover:text-black transition-all duration-300">
                MasterCard
              </div>
              <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
            </div>
          </div>
        </div>

        <Contact />

        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
