import React, { useEffect } from 'react'
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
          className="bg-zinc-950 min-h-screen w-full  px-6 py-16 md:px-10   md:py-16 lg:px-20 lg:py-16 flex flex-col justify-center items-center"
        >
          <div className="w-full max-w-7xl bg-[url('/images/profile.png')] bg-center bg-cover bg-no-repeat bg-fixed bg-blend-overlay bg-zinc-900/50 rounded-4xl shadow-9xl p-6 md:p-10 lg:p-16 flex flex-col justify-center items-center">

          <section className="w-full flex flex-col lg:flex-row justify-center relative items-center gap-10">
            <div className="w-full">
              <div
                id="home-left"
                className="flex flex-col text-white gap-4 p-6 md:p-16 lg:p-28 justify-center lg:items-start sm:items-center rounded-4xl shadow-9xl"
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
              className="w-full h-auto lg:h-screen  flex justify-center items-center"
            >
              <div className="border px-10 rounded-4xl md:px-16 py-10 md:py-20  text-sky-400 shadow-9xl flex flex-col gap-4 justify-center items-start">
                {/* <h1 className="text-3xl md:text-5xl lg:text-6xl text-yellow-400">
                  <i className="ri-edit-circle-fill"></i>developer
                </h1>
                <span className="text-5xl md:text-7xl lg:text-9xl">
                  Portfolio
                </span> */}
              </div>
            </div>
          </section>
          </div>
        </div>
  )
}

export default Home