import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Thank you for getting in touch!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    // <div id='contact' className="bg-[#1a1d1a] relative text-zinc-800 min-h-screen flex items-center justify-center p-6">
    //   <div className="bg-zinc-200 absolute z-10 p-8 rounded-lg shadow-lg w-full max-w-md">
    //     <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">Get in Touch</h2>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div>
    //         <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
    //           Name:
    //         </label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           placeholder="Your Name"
    //           value={formData.name}
    //           onChange={handleChange}
    //           required
    //           className="w-full mt-1 p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
    //           Email:
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           placeholder="Your Email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           required
    //           className="w-full mt-1 p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
    //           Message:
    //         </label>
    //         <textarea
    //           id="message"
    //           name="message"
    //           placeholder="Your Message"
    //           rows="5"
    //           value={formData.message}
    //           onChange={handleChange}
    //           required
    //           className="w-full mt-1 p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
    //         ></textarea>
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full bg-zinc-800 text-zinc-100 py-2 px-4 rounded-md hover:bg-zinc-700 transition"
    //       >
    //         Send
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className=" flex flex-col justify-start items-center py-10 px-5 bg-[#1a1d1a]">
      <h1 className="text-white font-bold text-4xl sm:text-4xl md:text-9xl text-center leading-snug">
        you can get in touch<br />
        with me via{" "}
        <a href="mailto:piyushsinghthakur128@gmail.com">
          <span className="text-[#FF6C6C] relative group cursor-pointer">
          mail
          <span className="absolute left-0 top-1/2 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rotate-12"></span>
        </span>{" "}
        </a>
        
        or<br />
        <a href="https://www.instagram.com/piyush_singh.01/">
          <span className="text-[#fbbf24] relative group cursor-pointer">
          instagram
          <span className="absolute left-0 top-1/2 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rotate-12"></span>
        </span>{" "}
        </a>
        or{" "}
        <a href="https://www.linkedin.com/in/piyush-singh-thakur-4ab855231/">

        <span className="text-[#3b82f6] relative group cursor-pointer">
          linkedin
          <span className="absolute left-0 top-1/2 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rotate-12"></span>
        </span>
        </a>.
      </h1>

      <p className="text-white mt-10 text-base sm:text-3xl text-center">
        created with <span className="text-pink-500">❤️</span> by me
      </p>
    </div>
  );
};

export default Contact;