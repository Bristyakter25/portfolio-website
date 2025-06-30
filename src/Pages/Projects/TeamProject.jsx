import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TeamProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Projects/teamProject.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="py-10 ">
       <h2 className="text-2xl lg:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 drop-shadow-lg mt-10 mb-16">
   Team Project
</h2>

      <div className="px-10 ">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col justify-between dark:bg-transparent bg-white/30 backdrop-blur-lg rounded-xl shadow-2xl hover:shadow-violet-500 transition-all duration-500 p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            {/* Image with hover badge */}
            <figure className="relative w-full flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full  rounded-2xl"
              />
              <div className="absolute -top-10  bg-purple-700 text-white text-[16px] w-full p-3 text-center rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                Full Stack Project
              </div>
            </figure>

            {/* Text Content */}
            <div className="mt-4">
              <h2 className="text-2xl h-10 font-semibold text-gray-800 dark:text-white my-5 text-center">
                {item.title}
              </h2>
              <p className="text-gray-700 my-4 dark:text-gray-300 text-sm">
                {item.description}
              </p>

              {/* Details Button */}
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/team-project-details/${item.id}`}
                  className="btn w-full glass bg-purple-700 hover:bg-indigo-500 text-white"
                >
                  Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamProject;
