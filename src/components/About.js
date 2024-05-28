import React from 'react';

const About = () => {
  return (
    <div className="about p-6 max-w-md mx-auto my-7 bg-white sm:bg-white-100 rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-center mb-4">About</h1>
       <div className="space-y-2">
        <p className="text-gray-700">My name is <strong>Singam Madhu</strong>.</p>
        <p className="text-gray-700">I have been working at <strong>TCS</strong> as a frontend developer specializing in React.js for the past 1.5 years.</p>
        <p className="text-gray-700">I am actively seeking a new opportunity in frontend development, focusing on React.js.</p>
        <p className="text-gray-700">Email: <a href="mailto:singammadhu@gmail.com" className="text-yellow-600 hover:underline">singhammaddhu97@gmail.com</a></p>
        <p className="text-gray-700">Phone: <a href="tel:998999999" className="text-yellow-600 hover:underline">9959917263</a></p>
      </div>
      <div className="text-center mt-4">
        <a
          href="/resume.pdf"
          download="Singam_Madhu_Resume.pdf"
          className="inline-block px-4 py-2 bg-yellow-400 text-white font-medium text-sm leading-5 rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
