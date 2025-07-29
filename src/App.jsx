import React, { useEffect, useRef } from "react";
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
import About from "./components/About";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";
import HyperSpeed from "./components/Animation/HyperSpeed";
import Education from "./components/Education";
import Stats from "./components/Stats";
import Certificate from "./components/Certificate";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const lenis = useRef(null); // already declared

  useEffect(() => {
  lenis.current = new Lenis({
    duration: 1.2, // Slightly lower for better mobile performance
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: true, // ✅ Enable smooth scrolling on smartphones
    touchMultiplier: 1.5, // ✅ Make touch scroll more responsive
    gestureOrientation: 'vertical', // Ensure it's vertical scroll only
  });

  function raf(time) {
    lenis.current.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.current.destroy();
  };
}, []);


  const scrollToTop = () => {
    console.log("Scrolling to top...");
    if (lenis.current) {
      lenis.current.scrollTo(0); // ✅ now this will work
    }
  };

  const velocity = 100;

  return (
    <>
      <Navbar onScrollTop={scrollToTop} />

      <main
        className="relative w-full bg-black"
        style={{ scrollBehavior: "smooth" }}
      >
        <ErrorBoundary />
        <HyperSpeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
        {/* <Hero /> */}
        {/* <Home /> */}

        {/* <div className="bg-zinc-900 z-10 py-10">
          <ScrollVelocity
            texts={["who is it??"]}
            velocity={velocity}
            className="custom-scroll-text text-red-500 hidden md:flex  mb-3"
          />
        </div> */}

        <About />
        <Skills />
        <Education />
        <Projects />
        <Stats />
        <Certificate />
        {/* <div
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
            {[
              ["Developer and Technology Job Simulation", "Accenture"],
              ["Solutions Architecture Job Simulation", "AWS"],
              ["Cybersecurity Job Simulation", "MasterCard"],
            ].map(([title, company], i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-t border-white px-4 py-4 justify-center items-center border-b font-semibold text-4xl relative overflow-hidden group"
              >
                <div>2024</div>
                <div className="text-center z-10 group-hover:text-black transition-all duration-300">
                  {title}
                </div>
                <div className="text-right z-10 group-hover:text-black transition-all duration-300">
                  {company}
                </div>
                <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
              </div>
            ))}
          </div>
        </div> */}

        <Contact />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
