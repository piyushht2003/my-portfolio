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
    <div id='contact' className="bg-[#1a1d1a] relative text-zinc-800 min-h-screen flex items-center justify-center p-6">
      <div className="bg-zinc-200 absolute z-10 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-zinc-800 text-zinc-100 py-2 px-4 rounded-md hover:bg-zinc-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;