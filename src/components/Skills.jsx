import React from "react";

const Skills = () => {
  return (
    <div className="bg-[#111111] text-white py-16 px-10">
      <div className="text-start mb-16">
        <h1 className="text-8xl font-bold">
          Things I'm <span className="text-cyan-400">good</span> at
        </h1>
        <p className="text-4xl mt-4 text-gray-300">
          skills, interests, passion and hobbies
        </p>
      </div>

      <div className="flex justify-start mb-10">
        <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 text-lg">
          development
        </button>
      </div>

      <div className="flex gap-28 w-full items-center justify-evenly mb-10 ">
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-20 w-16 object-fit" title="Next.js" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-20 w-16 object-fit" title="React" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-20 w-16 object-fit" title="Node.js" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="h-20 w-16 object-fit" title="HTML5" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="h-20 w-16 object-fit" title="CSS3" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-20 w-16 object-fit" title="JavaScript" />
        </div>
      </div>
      <div className="flex gap-16 items-center  w-full justify-evenly">
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-16 h-20 object-fit" title="MongoDB" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-16 h-20 object-fit" title="Express" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-16 h-20 object-fit" title="GitHub" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className="w-16 h-20 object-fit" title="Redux" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-16 h-20 object-fit" title="MySQL" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-16 h-20 object-fit" title="Java" />
        </div>
        <div className="bg-white border rounded-lg flex items-center justify-center p-1 w-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-16 h-20 object-fit" title="Bootstrap" />
        </div>
      </div>
    </div>
  );
};

export default Skills;