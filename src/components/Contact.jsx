import { motion } from "framer-motion";

const Contact = () => {
  const h1SlideDown = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  const buttonJingle = {
    rest: { rotate: 0 },
    hover: { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.8 } },
  };

  return (
    <div className=" border-b border-neutral-700 pb-20">
      <motion.h1
        className="text-white text-5xl text-center mt-8 mb-20 font-bold tracking-wide"
        variants={h1SlideDown}
        initial="hidden"
        animate="visible"
      >
        Contact
      </motion.h1>
      <div className="text-center text-white mt-10 font-medium">
        <p className="my-4 text-lg">03212940332</p>
        <p className="my-4 text-lg">
          <a className="border-b" href="mailto:khannimrajabbar@gmail.com">
            khannimrajabbar@gmail.com
          </a>
        </p>
        <p className="my-4 text-lg">
          <a
            className="border-b"
            href="https://www.linkedin.com/in/nimra-jabbar-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
        <p className="my-4 text-lg">
          <a
            className="border-b"
            href="https://github.com/nimra8899"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </p>

        <a href="/CVNimraJabbar.pdf"    initial="rest"
          whileHover="hover"
          variants={buttonJingle}        className="inline-block mt-8 bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-purple-600 transition duration-300 shadow-lg" download>
  <button>Download My Resume</button>
</a>


        

      </div>
    </div>
  );
};

export default Contact;
