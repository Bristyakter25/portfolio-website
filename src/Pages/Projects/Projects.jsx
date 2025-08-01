
import FrontEndProjects from "./FrontEndProjects";
import FullStackProject from "./FullStackProject";
import { motion } from "framer-motion";
import TeamProject from "./TeamProject";

const Projects = () => {
  return (

    <div className="dark:bg-[#09122C] bg-white mt-5">
      <motion.h2
          className="lg:text-4xl  pt-12 md:pt-20 lg:pt-24 text-2xl font-extrabold text-center lg:mb-16 dark:text-[#8CABFF] text-indigo-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What I’ve Built
        </motion.h2>
      <div className="w-full bg-gradient-to-b from-[#f8f4fe] to-[#cebef8] dark:from-[#1c1242] rounded-2xl dark:to-gray-900 ">
      <div className="lg:max-w-[1240px] w-full mx-auto px-4">
    
       

        {/* Projects Grid */}
        <div className="space-y-5">
          <FullStackProject />
          <FrontEndProjects />
          <TeamProject></TeamProject>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
