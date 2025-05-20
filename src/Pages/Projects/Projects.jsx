
import FrontEndProjects from "./FrontEndProjects";
import FullStackProject from "./FullStackProject";
import { motion } from "framer-motion";

const Projects = () => {
    return (
      <div>
        
       <div  className="bg-gradient-to-b  from-[#f8f4fe] to-[#cebef8] dark:from-[#1c1242] dark:to-gray-900">
        
          
          
            <div className="lg:w-[1240px] w-[350px]  mx-auto mt-10 py-10">
              <motion.h2
                className="text-5xl mt-14 font-bold  text-center mb-12 dark:text-[#8CABFF]   text-indigo-700 drop-shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
               Check Out My Works
            </motion.h2>
           <FullStackProject></FullStackProject>
            <FrontEndProjects></FrontEndProjects>
            </div>
            </div>
            </div>
        
        
    );
};

export default Projects;