import aboutme from '../assets/dev2.jpg';

const About = () => {
    return (
        <>
        <div className="bg-gray-900 border-b border-neutral-100 pb-8">
            <h1 className="text-white text-4xl text-center font-semibold my-20">About Me</h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center lg:justify-start">
                        <img src={aboutme} alt="About Me" className="rounded-lg shadow-lg max-w-xs sm:max-w-md lg:max-w-lg" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-4 py-6 text-xs lg:text-base max-w-full text-neutral-300'>
                            I am a dedicated final-year Computer Science student with a strong foundation in frontend web development, specializing in HTML, CSS, Tailwind CSS, JavaScript, and React.js. My academic journey has been enriched by practical experience through my internship at Devlogix, where I honed my skills in building responsive, user-friendly web applications and collaborating with cross-functional teams. I have contributed to real-world projects, transforming Figma designs into functional prototypes, developing scalable modules, and ensuring seamless user experiences. Beyond web development, I have a growing interest in UI/UX design, utilizing tools like Figma and Canva to create visually appealing interfaces. With a GPA of 3.54 and expertise in MySQL, I aim to broaden my horizons by exploring full-stack development, combining my technical expertise with creativity to deliver innovative solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;
