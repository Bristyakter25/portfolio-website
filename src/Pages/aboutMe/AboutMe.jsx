import Lottie from "lottie-react";
import aboutMeImg from "../../assets/Animation - 1736022092183.json";
const AboutMe = () => {
  return (
    <div className="md:max-w-6xl mx-auto my-10">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <Lottie animationData={aboutMeImg} />
          <div className="ml-2 lg:ml-5">
            <h1 className="lg:text-5xl text-3xl font-bold my-7 text-indigo-600">About Me</h1>
            <h3 className="text-2xl font-semibold">
              Hi there! I’m Bristy Akter, a passionate web developer dedicated to crafting beautiful and functional digital experiences.
            </h3>
            <p className="text-[18px] my-3">
              My journey in programming began during university when I built a weather forecast app for a presentation. That small project sparked my curiosity, leading me to dive deeper into web development.
            </p>
            <p className="text-[18px] my-3">
  I specialize in front-end development, blending creativity with logic to build 
  <strong> responsive, user-friendly interfaces </strong> using 
  <strong> React, React.js, Node.js, and MongoDB </strong>. Bringing designs to life excites me, and I love making the web more interactive.
</p>

            <p className="text-[18px] my-3">
              When I’m not coding, I enjoy brainstorming new project ideas and staying updated with the latest tech trends. My goal is to create impactful solutions that enhance user experiences and solve real-world problems.
            </p>
            <p className="text-[18px] my-3">
              Always eager to learn and collaborate, I’m open to exciting opportunities in web development. Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default AboutMe;


