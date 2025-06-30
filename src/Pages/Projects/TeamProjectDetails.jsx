import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const TeamProjectDetails = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/Projects/teamProject.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((item) => item.id === parseInt(id));
        setProject(selectedProject);
      });
  }, [id]);

  if (!project) {
    return <div className="text-center text-xl dark:text-white">Loading...</div>;
  }

  return (
    <div className="dark:bg-[#09122C] pt-16 pb-10 min-h-screen">
      <motion.h2
        className="lg:text-3xl font-bold text-center text-2xl mt-5 dark:text-indigo-400 text-indigo-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Team Project Details
      </motion.h2>

      <div className="max-w-4xl space-y-6 mx-auto px-6 py-8 bg-white dark:bg-[#0d1a3a] shadow-lg rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-lg object-cover"
        />

        <h2 className="text-3xl font-bold text-center dark:text-white text-indigo-700">
          {project.title}
        </h2>

        <p className="dark:text-gray-300 text-gray-800 whitespace-pre-line">
          {project.description}
        </p>
         <p className="text-indigo-500 text-xl dark:text-indigo-300 font-semibold">Role: {project.role}</p>

        <p className="dark:text-white text-black font-semibold">
          Tech Stack:
        </p>
        <ul className="list-disc list-inside dark:text-gray-300 text-gray-700">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <p className="dark:text-white text-black font-semibold">My Contributions:</p>
        <ul className="list-disc list-inside dark:text-gray-300 text-gray-700">
          {project.contribution.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p className="dark:text-white text-black font-semibold">Challenges:</p>
        <ul className="list-disc list-inside dark:text-gray-300 text-gray-700">
          {project.challenges.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

       

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={project.liveLink}
            className="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>

          {project.githubLink && (
            <a
              href={project.githubLink}
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamProjectDetails;
