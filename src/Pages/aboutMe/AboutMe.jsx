import Lottie from "lottie-react";
import aboutMeImg from "../../assets/Animation - 1736022092183.json";

const AboutMe = () => {
  return (
    <div className="w-full min-h-screen pt-16 dark:bg-[#09122C] mx-auto px-6 lg:px-20">
      <div className="hero">
        <div className="hero-content flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-[300px] max-w-md">
            <Lottie animationData={aboutMeImg} loop={true} />
          </div>
          <div className="w-full lg:w-[600px] text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-indigo-600 dark:text-[#8CABFF] mb-6">
              About Me
            </h1>
            <h3 className="text-[22px] font-semibold dark:text-white mb-5">
              Hi! I’m Bristy Akter — a passionate MERN Stack Developer & Next.js enthusiast.
            </h3>
            <p className="text-md dark:text-gray-300 mb-5 leading-relaxed">
              I build full-stack web applications from front-end to back-end, crafting <strong>responsive, performant, and scalable</strong> digital experiences.
              From creating dynamic React interfaces to designing robust Node.js APIs and MongoDB databases, I’ve developed projects that solve real problems.
            </p>
            <p className="text-md dark:text-gray-300 mb-5 leading-relaxed">
              I also love exploring Next.js for building modern, SEO-friendly React applications with server-side rendering and static site generation.
            </p>
            <p className="text-md dark:text-gray-300 mb-5 leading-relaxed">
              When not coding, I’m constantly learning new technologies, brainstorming creative solutions, and staying updated with the latest trends in web development.
            </p>
            <p className="text-md dark:text-gray-300 mb-5 leading-relaxed">
              I’m eager to collaborate and take on challenging projects that push boundaries. Let’s connect and build something impactful together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
