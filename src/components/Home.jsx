import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
const Home = () => {
  const colors = ["text-rose-600", "text-yellow-300", "text-cyan-400"];
  const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
  ];
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div
      id="home"
      className="bg-zinc-950 min-h-screen w-full px-4 py-10 md:px-10 md:py-16 lg:px-20 lg:py-16 flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-7xl bg-[url('/images/profile.jpg')] bg-center bg-cover bg-no-repeat bg-scroll sm:bg-fixed bg-blend-overlay bg-zinc-900/75 rounded-3xl shadow-2xl px-4 py-8 md:p-10 lg:p-4 flex flex-col justify-center items-center">
        <section className="w-full flex flex-col lg:flex-row justify-start items-center gap-6 md:gap-10">
          {/* Left Section */}
          <div
            id="home-left"
            className="flex flex-col text-white gap-4 p-4  w-full sm:p-8 md:p-16 lg:p-28 justify-start items-start rounded-3xl shadow-xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl mb-2 sm:mb-3 leading-tight text-left">
              Hi, I'm Piyush
            </h1>
            <h3 className="text-base sm:text-xl md:text-3xl lg:text-4xl flex flex-wrap gap-2 text-zinc-400 font-bold text-left">
              <Typewriter
                options={{
                  strings: roles.map(
                    (role) => `<span class='${getRandomColor()}'>${role}</span>`
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
            className="w-full h-auto flex justify-center items-center mt-6 lg:mt-0"
          >
            <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10 md:py-20 flex flex-col gap-4 justify-center items-start">
              {/* Optional right section content */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
