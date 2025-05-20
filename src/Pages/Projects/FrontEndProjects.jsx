import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FrontEndProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Projects/frontEndProjects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="py-16 my-10">
      <motion.h2
        className="text-3xl lg:text-5xl font-bold text-center mb-12 dark:text-indigo-400 text-indigo-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Front-End Projects
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col justify-between dark:bg-transparent bg-white/30 backdrop-blur-lg rounded-xl shadow-2xl hover:shadow-violet-500 transition-all duration-500 p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <figure className="w-full flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-[300px] h-[250px] object-cover rounded-2xl"
              />
            </figure>
            <div className="mt-4">
              <h2 className="text-2xl h-10 font-semibold text-gray-800 dark:text-white my-5 text-center">
                {item.title}
              </h2>
              <p className="text-gray-700 h-[200px] dark:text-gray-300">{item.description}</p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/frontend-project-details/${item.id}`}
                  className="btn glass w-full bg-purple-700 hover:bg-indigo-500 text-white"
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

export default FrontEndProjects;
