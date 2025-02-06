
import FrontEndProjects from "./FrontEndProjects";
import FullStackProject from "./FullStackProject";
import { motion } from "framer-motion";

const Projects = () => {
    return (
      <div>
        <motion.h2
                className="text-5xl font-bold text-center mb-12 text-indigo-700 drop-shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
               My Works
            </motion.h2>
       <div  className="bg-gradient-to-b from-[#f8f4fe] to-[#cebef8]">
        
          
          
            <div className="lg:w-[1024px] w-[380px]  mx-auto my-10 py-10">
           <FullStackProject></FullStackProject>
            <FrontEndProjects></FrontEndProjects>
            </div>
            </div>
            </div>
        
        
    );
};

export default Projects;