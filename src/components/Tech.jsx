import { RiReactjsLine } from 'react-icons/ri';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiMysql, SiJavascript, SiGit, SiGithub, SiFigma, SiCanva, SiAdobeillustrator, SiApache } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

// Reusable float animation
const floatAnimation = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10], // Moves up and down
    transition: {
      duration, // Duration of the animation
      repeat: Infinity, // Infinite loop
      ease: 'easeInOut', // Smooth easing
      repeatType: 'reverse', // Alternate directions
    },
  },
});

// Reusable MotionWrapper component
const MotionWrapper = ({ children, duration }) => (
  <motion.div variants={floatAnimation(duration)} initial="initial" animate="animate" className="rounded-2xl border-2 border-white p-4">
    {children}
  </motion.div>
);

const Tech = () => {
  return (
    <div className="border-b border-neutral-100 pb-10">
      <h1 className="my-20 text-center text-4xl text-white font-semibold">Skills & Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <MotionWrapper duration={2.5}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </MotionWrapper>
        <MotionWrapper duration={2}>
          <AiFillHtml5 className="text-7xl text-orange-500" />
        </MotionWrapper>
        <MotionWrapper duration={1.5}>
          <DiCss3 className="text-7xl text-blue-500" />
        </MotionWrapper>
        <MotionWrapper duration={2}>
          <SiTailwindcss className="text-7xl text-teal-400" />
        </MotionWrapper>
        <MotionWrapper duration={2}>
          <SiMysql className="text-7xl text-blue-600" />
        </MotionWrapper>
        <MotionWrapper duration={2}>
          <SiJavascript className="text-7xl text-yellow-500" />
        </MotionWrapper>
        <MotionWrapper duration={2}>
          <BsBootstrapFill className="text-7xl text-purple-600" />
        </MotionWrapper>
        <MotionWrapper duration={2.5}>
          <SiGit className="text-7xl text-orange-500" />
        </MotionWrapper>
        <MotionWrapper duration={3}>
          <SiGithub className="text-7xl text-white" />
        </MotionWrapper>
        <MotionWrapper duration={2.5}>
          <SiFigma className="text-7xl text-pink-500" />
        </MotionWrapper>
        <MotionWrapper duration={1}>
          <SiCanva className="text-7xl text-blue-400" />
        </MotionWrapper>
        <MotionWrapper duration={2}>
          <SiAdobeillustrator className="text-7xl text-orange-600" />
        </MotionWrapper>
        <MotionWrapper duration={1.5}>
          <SiApache className="text-7xl text-red-500" />
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Tech;
