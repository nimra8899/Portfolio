import React, { useState } from 'react';
import profilepic from '../assets/dev.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleContactClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would usually handle form submission, such as sending data to a server
    setResponseMessage('Your message has been received.');
  };

  return (
    <div className="border-b border-neutral-800 pb-12">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              className="text-white font-semibold tracking-tighter text-5xl md:text-7xl mt-10 mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              Nimra Jabbar
            </motion.h1>
            <motion.span
              className="text-transparent bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-3xl md:text-4xl font-medium mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              Frontend Developer
            </motion.span>
            <motion.p
              className="text-neutral-400 leading-relaxed text-lg md:text-xl max-w-lg mb-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              Passionate about crafting responsive and user-centric web applications. Skilled in React.js, Tailwind CSS, and JavaScript, with hands-on experience transforming design concepts into functional prototypes. Currently aspiring to delve into full-stack development to create innovative solutions.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            >
              <a
                onClick={handleContactClick}
                className="border border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white px-6 py-3 rounded-md text-lg shadow-lg transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </a>
              <a
                href="/CVNimraJabbar.pdf"
                download
                className="border border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white px-6 py-3 rounded-md text-lg shadow-lg transition-all duration-300 cursor-pointer"
              >
                Download CV
              </a>
            </motion.div>

            {/* Conditional Rendering of Links or Contact Form */}
            {showForm ? (
              <div className="text-white mt-6 space-y-4">
                <a
                  href="mailto:khannimrajabbar@gmail.com"
                  className="border border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white px-6 py-3 rounded-md text-lg shadow-lg transition-all duration-300 "
                >
                  Email Me
                </a>
              
                <a
                   href="https://www.linkedin.com/in/nimra-jabbar-/"
            target="_blank"
                  className="border border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white px-6 py-3 rounded-md text-lg shadow-lg transition-all duration-300 "
                >
                  LinkedIn
                </a>
                <a
                href="https://github.com/nimra8899"
                 target="_blank"
                  className="border border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white px-6 py-3 rounded-md text-lg shadow-lg transition-all duration-300 "
                >
                  GitHub
                </a>
              </div>
            ) : (
              <>
               
              </>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 px-6">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          >
            <img
              src={profilepic}
              alt="Profile"
              className="rounded-lg shadow-lg max-w-xs sm:max-w-md lg:max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
