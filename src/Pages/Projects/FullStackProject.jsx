import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FullStackProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Projects/fullStackProjects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="py-10 ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 ">
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
                className="w-[300px] h-[250px] object-cover rounded-2xl"
              />
              <div className="absolute -top-2  bg-purple-700 text-white text-[16px] w-full p-4 text-center rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                Full Stack Project
              </div>
            </figure>

            {/* Text Content */}
            <div className="mt-4">
              <h2 className="text-2xl h-10 font-semibold text-gray-800 dark:text-white my-5 text-center">
                {item.title}
              </h2>
              <p className="text-gray-700 h-[180px] dark:text-gray-300 text-sm">
                {item.description}
              </p>

              {/* Details Button */}
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/project-details/${item.id}`}
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

export default FullStackProject;
