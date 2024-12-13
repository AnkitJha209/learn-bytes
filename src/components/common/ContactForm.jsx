import React from 'react';

const ContactForm = () => {
  return (
    <form className="bg-white text-black p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
          placeholder="Your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
          rows="5"
          placeholder="Your message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-800 focus:ring-2 focus:ring-teal-700 focus:outline-none"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
