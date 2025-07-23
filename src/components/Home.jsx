import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";

const Home = () => {
  const colors = ["text-zinc-400"];
  const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
  ];

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl.fromTo(
      leftRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, delay: 1 } // Wait for navbar to finish
    ).fromTo(
      rightRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1 },
      "-=0.8" // Overlap a bit for smooth flow
    );
  }, []);

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="hidden md:flex w-full">
      <div
        id="home"
        className="bg-zinc-950 min-h-screen w-full px-4 py-10 md:px-10 md:py-16 lg:px-20 lg:py-16 flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-7xl bg-[url('https://www.wallpaperflare.com/static/999/280/939/sky-planet-comet-space-wallpaper.jpg')] bg-left bg-cover bg-no-repeat bg-scroll sm:bg-fixed bg-blend-overlay bg-zinc-900/80  rounded-3xl shadow-2xl px-4 py-8 md:p-10 lg:p-4 flex flex-col justify-center items-center">
          <section className="w-full flex flex-col lg:flex-row justify-start items-center gap-6 md:gap-10">
            {/* Left Section */}
            <div
              id="home-left"
              ref={leftRef}
              className="flex flex-col text-white gap-4 p-4 w-full sm:p-8 md:p-16 lg:p-28 justify-start items-start rounded-3xl shadow-xl"
            >
              <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-9xl mb-2 sm:mb-3 leading-tight text-left">
                Hi, I'm <br />
                <span className="text-cyan-500">Piyush</span>
              </h1>
              <h3 className="text-base sm:text-xl md:text-3xl lg:text-4xl flex flex-wrap gap-2 text-zinc-400 font-bold text-left">
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

            {/* Right Section */}
            <div
              id="home-right"
              ref={rightRef}
              className="w-full h-auto flex justify-center items-center mt-6 lg:mt-0"
            >
              <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10 md:py-20 flex flex-col gap-4 justify-center items-start">
                <div className="w-full flex items-center justify-center p-10 border-2 border-zinc-700 bg-transparent rounded-3xl shadow-lg">
                  <div className="max-w-lg">
                    <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
                      Turning ideas into{" "}
                      <span className="text-yellow-300">interactive</span>{" "}
                      digital experiences.
                    </h2>
                    <p className="text-gray-400 text-md">
                      I build clean, responsive websites that merge design and
                      functionality. Let’s make the web beautiful together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;