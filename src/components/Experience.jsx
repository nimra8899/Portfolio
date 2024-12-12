import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiGit, SiGithub, SiFigma } from 'react-icons/si';

const Experience = () => {
  // Animation variants
  const h1SlideDown = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  const pSlideLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  const h6SlideRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.div
      className="bg-gray-900 border-b border-neutral-100 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* H1 with slide from up */}
      <motion.h1
        className="font-bold text-white my-16 text-center text-5xl tracking-wide"
        variants={h1SlideDown}
      >
        Experience
      </motion.h1>

      <div className="flex flex-wrap lg:justify-center items-start gap-10 px-5">
        {/* P with slide from left */}
        <motion.div className="w-full lg:w-1/4 text-center sm: flex sm:text-left" variants={pSlideLeft}>
          <p className="font-medium text-purple-500 text-lg ">July 2024 - October 2024</p>
        </motion.div>

        {/* H6 with slide from right */}
        <motion.div className="w-full max-w-3xl lg:w-3/4" variants={h6SlideRight}>
          <h6 className="mb-4 font-semibold text-white text-2xl">
            React JS Developer Intern <br />
            <span className="text-lg text-purple-500">Devlogix</span>
          </h6>
          <p className="text-base mb-6 text-neutral-300 leading-relaxed">
            During my internship at Devlogix as a Frontend Developer, I actively contributed to various
            phases of project development, including requirement gathering, documentation, and module
            creation. I played a pivotal role in designing and developing the Employee and Login modules
            using React.js and Tailwind CSS, focusing on creating scalable and user-friendly interfaces.
            Additionally, I transformed Figma design concepts into functional prototypes, ensuring
            pixel-perfect implementation and seamless user experiences. I also designed responsive email
            templates compatible across diverse email clients, showcasing my attention to detail.
            Collaborating with cross-functional teams, I ensured smooth integration and delivery of
            projects while enhancing my skills in web development and UI/UX design. This experience allowed
            me to sharpen my technical expertise and problem-solving abilities while contributing to
            impactful, real-world solutions.
          </p>
          <div className="flex flex-wrap gap-6">
            {/* Icons */}
            <div className="flex flex-col items-center">
              <RiReactjsLine className="text-4xl text-cyan-400" />
              <span className="text-sm text-neutral-400 mt-2">React</span>
            </div>
            <div className="flex flex-col items-center">
              <AiFillHtml5 className="text-4xl text-orange-500" />
              <span className="text-sm text-neutral-400 mt-2">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <DiCss3 className="text-4xl text-blue-500" />
              <span className="text-sm text-neutral-400 mt-2">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl text-teal-400" />
              <span className="text-sm text-neutral-400 mt-2">Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGit className="text-4xl text-orange-500" />
              <span className="text-sm text-neutral-400 mt-2">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGithub className="text-4xl text-white" />
              <span className="text-sm text-neutral-400 mt-2">GitHub</span>
            </div>
            <div className="flex flex-col items-center">
              <SiFigma className="text-4xl text-pink-500" />
              <span className="text-sm text-neutral-400 mt-2">Figma</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
