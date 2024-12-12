import React from 'react';
import Logo from '../assets/logo.png';
import { AiFillMail, AiFillGithub } from 'react-icons/ai'; // Email and GitHub icons
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon

export default function Navbar() {
  return (
    <nav className=" py-4 px-6 md:px-16">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 b ">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-16 md:h-24 md:w-24 rounded-full border-2  border-white shadow-lg"
          />
        </div>

        {/* Social Icons Section */}
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="mailto:khannimrajabbar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition duration-300"
          >
            <AiFillMail className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/nimra-jabbar-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition duration-300"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/nimra8899"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition duration-300"
          >
            <AiFillGithub className="w-8 h-8" />
          </a>
        </div>
      </div>
    </nav>
  );
}
