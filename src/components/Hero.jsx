import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};


  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 text-white font-sans">
      
      {/* Left side */}
      <div className="flex-1 text-center md:text-left space-y-6 py-12 md:py-0 flex flex-col justify-center items-center md:items-start">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-8xl font-semibold tracking-wide"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Hi, I'm <span className="font-azonix text-rose-600">Piyush</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Web Developer | UI/UX Explorer | GSAP + MERN Enthusiast
        </motion.p>

        <motion.p
          className="text-sm sm:text-base text-gray-400 max-w-md mx-auto md:mx-0"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          I build fast, responsive & animated web apps using modern frontend tools. Currently exploring the power of Java, MERN, and UI logic-building.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center md:justify-start"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a
            href="#projects"
            className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#projects");
              if (target && window.lenis) {
                window.lenis.scrollTo(target, { offset: -40 });
              } else {
                target?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#contact");
              if (target && window.lenis) {
                window.lenis.scrollTo(target, { offset: -40 });
              } else {
                target?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="flex gap-6 text-2xl text-gray-400 mt-6 justify-center md:justify-start"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a
            href="https://github.com/piyushht2003"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/piyush-singh-thakur-4ab855231/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:piyushsinghthakur.work@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* Right side - hidden on smaller screens */}
      <div className="hidden md:flex flex-1 justify-center items-center py-12 md:py-0 relative">
        <div className="perspective-600">
          <div className="cube rotateAnimation w-40 h-40 relative">
            {["JS", "React", "Node", "MERN", "GSAP", "Tailwind"].map((tech, i) => (
              <div
                key={i}
                className={`face face${i + 1} flex justify-center items-center text-rose-400 font-bold text-xl`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .perspective-600 {
            perspective: 600px;
          }
          .cube {
            position: relative;
            width: 160px;
            height: 160px;
            transform-style: preserve-3d;
            animation: rotateCube 10s infinite linear;
          }
          .face {
            position: absolute;
            width: 160px;
            height: 160px;
            background: rgba(244, 63, 94, 0.15);
            border: 2px solid #f43f5e;
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(244, 63, 94, 0.4);
          }
          .face1 { transform: rotateY(0deg) translateZ(80px); }
          .face2 { transform: rotateY(60deg) translateZ(80px); }
          .face3 { transform: rotateY(120deg) translateZ(80px); }
          .face4 { transform: rotateY(180deg) translateZ(80px); }
          .face5 { transform: rotateY(240deg) translateZ(80px); }
          .face6 { transform: rotateY(300deg) translateZ(80px); }

          @keyframes rotateCube {
            from { transform: rotateX(-20deg) rotateY(0deg); }
            to { transform: rotateX(-20deg) rotateY(360deg); }
          }
        `}</style>
      </div>
    </section>
  );
}
