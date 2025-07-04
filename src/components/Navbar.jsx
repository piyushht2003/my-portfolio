import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = ({ onScrollTop }) => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="navbar fixed top-0 left-0 w-full bg-transparent text-white z-50 px-4 sm:px-6 py-3 flex items-center justify-between flex-wrap overflow-hidden"
    >
      {/* Name Section */}
      <div
        id="nav-p"
        className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold leading-tight"
      >
        <p>Piyush</p>
        <p>Singh Thakur</p>
      </div>

      {/* Scroll To Top Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-3 sm:top-4">
        <button
          data-lenis-prevent
          onClick={onScrollTop}
          className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-xl sm:text-2xl md:text-3xl rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
        >
          <i className="ri-arrow-up-long-line"></i>
        </button>
      </div>

      {/* Resume Button */}
      <a
        href="/resume/resume.pdf"
        download
        className="mt-4 sm:mt-0 px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold text-white bg-rose-500
        shadow-[0_0_10px_2px_rgba(244,63,94,0.5)]
        hover:shadow-[0_0_15px_3px_rgba(244,63,94,0.7)]
        transition duration-300 whitespace-nowrap"
      >
        get my resume
      </a>
    </nav>
  );
};

export default Navbar;
