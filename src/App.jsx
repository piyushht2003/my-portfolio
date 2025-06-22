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
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);

  // GSAP Intro Animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(
        "#home-left h1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .fromTo("#home-left p", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })
      .fromTo("#home-left h3", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })
      .fromTo("#home-right", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
  }, []);

  const handleScrollToTop = () => {
    if (locoScroll.current) {
      locoScroll.current.scrollTo(0, { duration: 1000 });
    }
  };

  const velocity = 100;

  return (
    <>
      <Navbar onScrollTop={handleScrollToTop} />

      <main
        ref={scrollRef}
        data-scroll-container
        className="relative w-full bg-black"
        style={{ scrollBehavior: "smooth" }}
      >
        <Home />

        <div className="bg-zinc-900 z-10 py-10">
          <ScrollVelocity
            texts={["Piyush??"]}
            velocity={velocity}
            className="custom-scroll-text text-yellow-400 mb-3"
          />
        </div>

        <About />
        <Skills />
        <Projects />

        <div
          id="certificates"
          className="min-h-screen bg-[#242724] w-full text-white py-16 px-10"
        >
          <div className="text-start mb-20">
            <h1 className="text-8xl font-bold">
              here are some of my <span className="text-yellow-400">certifications</span>.
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
        </div>

        <Contact />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
