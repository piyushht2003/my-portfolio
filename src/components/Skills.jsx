import React from "react";

const Skills = () => {
  return (
    <div
  id="skills"
  className="bg-[#111111] w-full text-white py-16 px-6 sm:px-10"
>
  {/* Heading Section */}
  <div className="text-start mt-10 mb-12">
    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
      Things I'm <span className="text-cyan-400">good</span> at
    </h1>
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-300">
      skills, interests, passion and hobbies
    </p>
  </div>

  {/* Category Button */}
  <div className="flex justify-start mb-10">
    <button className="border border-gray-500 px-6 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
      development
    </button>
  </div>

  {/* Skills Grid */}
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        alt="Next.js"
        className="h-12 w-12 object-contain"
        title="Next.js"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className="h-12 w-12 object-contain"
        title="React"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        className="h-12 w-12 object-contain"
        title="Node.js"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
        className="h-12 w-12 object-contain"
        title="HTML5"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
        className="h-12 w-12 object-contain"
        title="CSS3"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className="h-12 w-12 object-contain"
        title="JavaScript"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
        className="h-12 w-12 object-contain"
        title="MongoDB"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        alt="Express"
        className="h-12 w-12 object-contain"
        title="Express"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
        className="h-12 w-12 object-contain"
        title="GitHub"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        alt="Redux"
        className="h-12 w-12 object-contain"
        title="Redux"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        alt="MySQL"
        className="h-12 w-12 object-contain"
        title="MySQL"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="Java"
        className="h-12 w-12 object-contain"
        title="Java"
      />
    </div>

    <div className="bg-transparent border border-gray-500 rounded-lg flex items-center justify-center p-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        alt="Bootstrap"
        className="h-12 w-12 object-contain"
        title="Bootstrap"
      />
    </div>
  </div>
</div>

  );
};

export default Skills;