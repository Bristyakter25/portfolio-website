import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
const FullstackProjectDetails = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/Projects/fullStackProjects.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((item) => item.id === parseInt(id)); // Find the project
        setProject(selectedProject);
      });
  }, [id]);

  if (!project) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
   <div className="mb-10 mt-20">
    <motion.h2
                className="text-5xl font-bold text-center my-5 text-indigo-600"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                This is Full-Stack Project Details
            </motion.h2>
     <div className="max-w-4xl mx-auto  p-6 bg-white shadow-lg rounded-lg">
      <img src={project.image} alt={project.title} className="w-full h-full   rounded-lg"/>
      <h2 className="text-3xl font-bold mt-4">{project.title}</h2>
      <p className="mt-2">{project.description}</p>
      <p className="mt-2 text-black"><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
      <p className="mt-2 text-black"><strong>Challenges:</strong> {project.challenges}</p>
      <p className="mt-2 text-black"><strong>Improvements:</strong> {project.improvements}</p>

      <div className="mt-4">
        <a href={project.liveLink} className="btn bg-purple-400 text-white glass mr-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={project.githubClintSideRepo} className="btn glass bg-indigo-500 text-white" target="_blank" rel="noopener noreferrer">GitHub (Client)</a>
        
      </div>
    </div>
   </div>
  );
};

export default FullstackProjectDetails;
