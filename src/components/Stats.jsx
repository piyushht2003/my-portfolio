import React, { useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="stats"
      className="bg-gradient-to-b from-[#111111] via-[#1a1d1a] to-[#1a1d1a] text-white py-20 px-4 sm:px-10 lg:px-24"
    >
      <h1
        ref={titleRef}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-16 sm:mb-20 text-center sm:text-left"
      >
        My GitHub <br />
        <span className="text-emerald-400">Stats</span>
      </h1>

      <div className="flex flex-col items-center gap-16">
        {/* GitHub Contribution Calendar */}
        <div className="w-full overflow-x-auto">
          <div className="flex justify-center min-w-[320px] sm:min-w-0">
            <GitHubCalendar
              username="piyushht2003"
              blockSize={16}
              blockMargin={5}
              colorScheme="dark"
              theme={{
                light: ['#ebedf0', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981'],
                dark: ['#161b22', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981'],
              }}
            />
          </div>
        </div>

        {/* GitHub Stats Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 mt-4">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=piyushht2003&theme=dark&hide_border=true&date_format=j%20M%5B%20Y%5D"
            alt="GitHub Streak"
            className="rounded-xl shadow-xl w-[90vw] max-w-[400px]"
          />

          <img
            src="https://github-readme-stats.vercel.app/api?username=piyushht2003&show_icons=true&theme=dark&hide_border=true"
            alt="GitHub Stats"
            className="rounded-xl shadow-xl w-[90vw] max-w-[400px]"
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=piyushht2003&layout=compact&theme=dark&hide_border=true"
            alt="Languages Used"
            className="rounded-xl shadow-xl w-[90vw] max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
