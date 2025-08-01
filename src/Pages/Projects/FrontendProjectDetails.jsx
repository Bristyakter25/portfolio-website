import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
const FrontendProjectDetails = () => {
  const { id } = useParams(); 
  const [frontendProject,setFrontendProject] = useState(null);

  useEffect(() => {
    fetch("/Projects/frontEndProjects.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((item) => item.id === parseInt(id)); // Find the project
        setFrontendProject(selectedProject);
      });
  }, [id]);

  if (!frontendProject) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
   <div className=" dark:bg-[#09122C] pt-20">
   <motion.h2
                className="lg:text-5xl text-3xl font-bold text-center my-5 dark:text-indigo-400 text-indigo-600"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Project Details
            </motion.h2>
     <div className="max-w-4xl  mx-auto dark:bg-[#09122C] p-6 bg-white shadow-lg rounded-lg">
      <img src={frontendProject.image} alt={frontendProject.title} className="w-full h-full   rounded-lg"/>
      <h2 className="text-3xl dark:text-white h-12 text-center  font-bold mt-4">{frontendProject.title}</h2>
      <div className="gap-y-6">
        <p className=" mt-3 dark:text-white">{frontendProject.description}</p>
      <p className="mt-3 dark:text-white  text-black"><strong>Tech Stack:</strong> {frontendProject.techStack.join(", ")}</p>
      <p className="mt-3 dark:text-white  text-black"><strong>Challenges:</strong> {frontendProject.challenges}</p>
      <p className="mt-3 dark:text-white text-black"><strong>Improvements:</strong> {frontendProject.improvements}</p>
      </div>

      <div className="mt-4">
        <a href={frontendProject.liveLink} className="btn bg-purple-400 text-white glass mr-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={frontendProject.gitHubLink} className="btn glass bg-indigo-500 text-white" target="_blank" rel="noopener noreferrer">GitHub (Client)</a>
        
      </div>
    </div>
   </div>
  );
};

export default FrontendProjectDetails;
