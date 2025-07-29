import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Senior Developer, TCS",
    content:
      "Piyush is a passionate developer. His ability to solve complex problems and collaborate with the team was impressive.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Verma",
    role: "UI/UX Designer, Freelance",
    content:
      "Working with Piyush was a delight. His design sense and coding skills made our project shine!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Arjun Patel",
    role: "Project Manager, StartX Labs",
    content:
      "He’s a reliable, skilled, and enthusiastic team player who consistently delivers beyond expectations.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonial = ({ image, name, role, content }) => (
  <div className="bg-zinc-800 p-6 rounded-2xl shadow-xl max-w-md transition hover:scale-105">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 rounded-full border-2 border-rose-400 shadow-md"
      />
      <div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-rose-300">{role}</p>
      </div>
    </div>
    <p className="text-zinc-300 text-base leading-relaxed">{content}</p>
  </div>
);

const Testimonials = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-zinc-900 py-20 px-4 sm:px-6 md:px-10 min-h-screen"
    >
      <h2
        ref={titleRef}
        className="text-4xl sm:text-5xl md:text-6xl text-center text-rose-500 font-bold mb-16"
      >
        Testimonials
      </h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center flex-wrap">
        {testimonials.map((t, i) => (
          <Testimonial key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
