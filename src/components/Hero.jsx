import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate the hero section when component mounts (no scroll trigger)
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        delay: 0.4, // slight delay after nav
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col py-32 md:hidden bg-black text-white font-sans"
    >
      {/* Left Side */}
      <div className="w-full flex flex-col justify-center items-start p-10">
        <h1 className="text-4xl font-bold mb-4">
          Hi I'm <span className="text-rose-500">Piyush</span>
        </h1>
        <p className="text-lg text-gray-400">
          Full Stack Developer | Creative Coder
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full flex items-center justify-center p-10">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Turning ideas into{' '}
            <span className="text-yellow-300">interactive</span> digital
            experiences.
          </h2>
          <p className="text-gray-400 text-md">
            I build clean, responsive websites that merge design and
            functionality. Let’s make the web beautiful together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
