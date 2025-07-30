import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// Components
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Hero from "./components/Hero";
import HyperSpeed from "./components/Animation/HyperSpeed";
import Education from "./components/Education";
import Stats from "./components/Stats";
import Certificate from "./components/Certificate";
import ErrorBoundary from "./components/ErrorBoundary";

// Styles
import "remixicon/fonts/remixicon.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenis = useRef(null);

   useEffect(() => {
    const lenis = new Lenis();
    window.lenis = lenis; // Make globally accessible

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

   useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.0, // Reduced for better mobile control
      gestureOrientation: "vertical",
    });

    // Lenis scroll event updates ScrollTrigger
    lenis.current.on("scroll", ScrollTrigger.update);

    // Use gsap's ticker to drive Lenis raf
    gsap.ticker.add((time) => {
      lenis.current.raf(time * 1000); // time in milliseconds
    });

    // Disable lag smoothing for better sync
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.current.destroy();
      gsap.ticker.remove(lenis.current.raf);
    };
  }, []);

  const scrollToTop = () => {
    if (lenis.current) {
      lenis.current.scrollTo(0);
    }
  };

  return (
    <>
      <Navbar onScrollTop={scrollToTop} />
      <main className="relative w-full bg-black text-white">
        <ErrorBoundary>
          {/* Animated background effect */}
          {/* <HyperSpeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
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
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          /> */}

          {/* Main sections */}
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Stats />
          <Certificate />
          <Contact />
          {/* <Footer /> */}
        </ErrorBoundary>
      </main>
    </>
  );
}

export default App;
