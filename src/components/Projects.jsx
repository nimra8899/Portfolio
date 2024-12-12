import ecommerce from '../assets/ecomerce.jpg';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiMysql, SiApache, SiTailwindcss } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';
import school from '../assets/school.jpg';
import rock from '../assets/rock.png';
import tictac from '../assets/ticktac.jpg';
import { RiReactjsLine } from 'react-icons/ri';
import portfolio from '../assets/portfolio.jpg'
import bank from '../assets/bank.jpg';
import { motion } from 'framer-motion';


const Projects = () => {
  const h1SlideDown = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  };
  return (
    <div className="border-b border-neutral-50 pb-16 ">
      <motion.h1 variants={h1SlideDown}
        initial="hidden"
        animate="visible"  className="text-white font-extrabold text-5xl text-center mt-10 mb-20">Projects</motion.h1>
      <div className="flex flex-wrap justify-center gap-16">
        {[
          {
            img: portfolio,
            title: "My Portfolio",
            description:
              "A visually captivating personal portfolio showcasing my skills, projects, and experience. Built using React.js, Tailwind CSS, and Framer Motion, it features dynamic animations, seamless navigation, and a fully responsive design.",
            codeLink: "https://github.com/nimra8899/portfolio",
            icons: [
              { Icon: RiReactjsLine, color: "text-blue-400" }, // React.js Icon
              { Icon: SiTailwindcss, color: "text-teal-400" }, // Tailwind Icon
              { Icon: () => <span className="text-pink-400 font-bold text-xl">FM</span> }, // Framer Motion Badge
            ],
          },
          
          {
            img: ecommerce,
            title: "Ecommerce Website Layout",
            description:
              "A responsive eCommerce website designed to deliver a seamless user experience. Built with HTML, CSS, JavaScript, and Bootstrap, it includes features such as a dynamic homepage, product sliders, a shopping cart, and a blog. Optimized for cross-device compatibility and performance.",
            codeLink: "https://github.com/nimra8899/ecommerce-layout",
            icons: [
              { Icon: AiFillHtml5, color: "text-orange-500" },
              { Icon: DiCss3, color: "text-blue-500" },
              { Icon: SiJavascript, color: "text-yellow-500" },
              { Icon: BsBootstrapFill, color: "text-purple-600" },
            ],
          },
          {
            img: school,
            title: "Student Management System",
            description:
              "A web-based system for managing student data, built with HTML, CSS, JavaScript, PHP, and MySQL. Includes features like student enrollment, attendance tracking, grading, and backend database integration. Optimized for secure data handling and user-friendly navigation.",
            codeLink: "https://github.com/nimra8899/student_management",
            icons: [
              { Icon: AiFillHtml5, color: "text-orange-500" },
              { Icon: DiCss3, color: "text-blue-500" },
              { Icon: SiJavascript, color: "text-yellow-500" },
              { Icon: SiMysql, color: "text-teal-500" },
              { Icon: SiApache, color: "text-red-500" },
            ],
          },
          {
            img: bank,
            title: "Bank Management System (Database)",
            description:
              "A database-driven system to manage banking operations. Includes comprehensive tables for accounts, transactions, customers, and loans. Designed using MySQL and Apache, showcasing a well-structured relational database design for effective data management.",
            codeLink: null,
            icons: [
              { Icon: SiMysql, color: "text-teal-500" },
              { Icon: SiApache, color: "text-red-500" },
            ],
          },
          {
            img: tictac,
            title: "Tic Tac Toe Game",
            description:
              "A classic Tic Tac Toe game built using HTML, CSS, and JavaScript. Features a grid-based interface, interactive turn management, and automatic win detection. Designed with responsiveness and ease of use in mind, suitable for all screen sizes.",
            codeLink: "https://github.com/nimra8899/tictac_toe",
            icons: [
              { Icon: AiFillHtml5, color: "text-orange-500" },
              { Icon: DiCss3, color: "text-blue-500" },
              { Icon: SiJavascript, color: "text-yellow-500" },
            ],
          },
          {
            img: rock,
            title: "Rock Paper Scissors Game",
            description:
              "A web-based implementation of the Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. Features dynamic game logic, interactive gameplay, and a responsive design that adapts seamlessly to different devices.",
            codeLink: "https://github.com/nimra8899/rock-paper-scissor",
            icons: [
              { Icon: AiFillHtml5, color: "text-orange-500" },
              { Icon: DiCss3, color: "text-blue-500" },
              { Icon: SiJavascript, color: "text-yellow-500" },
            ],
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-4xl flex flex-wrap lg:flex-nowrap gap-6"
          >
            <img
              className="rounded-l-xl w-[300px] h-[300px] object-cover hover:scale-110 transition-transform duration-300"
              src={project.img}
              alt={project.title}
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h6 className="font-bold text-2xl text-white mb-4">{project.title}</h6>
                <p className="text-neutral-400 leading-relaxed mb-6">{project.description}</p>
              </div>
              <div className="flex items-center justify-between">
                {project.codeLink && (
                  <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-500 py-2 px-6 rounded-full text-white font-medium shadow-md transition-all duration-300">
                    <a target="_blank" rel="noopener noreferrer" href={project.codeLink}>
                      Source Code
                    </a>
                  </button>
                )}
                <div className="flex gap-3">
                  {project.icons.map(({ Icon, color }, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-full bg-gray-700 hover:bg-gray-600 ${color} transition-all duration-300`}
                    >
                      <Icon className="text-3xl" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects
