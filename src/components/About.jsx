import React, { useEffect } from 'react'
import DecayCard from './Animation/DecayCard'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const About = () => {
  

  return (
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
  height={450}
  image="https://avatars.githubusercontent.com/piyushht2003"
  className="mx-auto my-8"
  textClassName="text-white drop-shadow-md"
  baseFrequency={0.02}
  filterSeed={7}
>
  <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
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
  )
}

export default About
