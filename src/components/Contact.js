import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server or perform validation
    console.log(formData); // For demonstration, logging form data to the console
    // After submission, you may want to clear the form fields
    setFormData({
      name: '',
      message: ''
    });
  };

  return (
    <div className="contact p-6 max-w-md mx-auto my-7 bg-white rounded-xl shadow-2xl space-y-6 ">
      <h1 className="text-2xl font-bold text-center mb-6 ">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-600 text-white font-medium text-sm leading-5 rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
