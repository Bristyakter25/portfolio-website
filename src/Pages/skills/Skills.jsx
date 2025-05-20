import { motion } from "framer-motion";
import Icons from "./Icons";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: "95%", color: "from-orange-500 to-red-600" },
    { name: "CSS", level: "95%", color: "from-blue-300 to-indigo-600" },
    { name: "JavaScript", level: "82%", color: "from-yellow-300 to-yellow-700" },
    { name: "React", level: "88%", color: "from-sky-300 to-cyan-600" },
    { name: "Firebase", level: "75%", color: "from-yellow-400 to-orange-600" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "85%", color: "from-green-400 to-green-800" },
    { name: "Express.js", level: "80%", color: "from-purple-400 to-purple-800" },
    { name: "MongoDB", level: "75%", color: "from-green-500 to-lime-500" },
  ];

  return (
    <div className="px-8 py-16 bg-gradient-to-b min-h-screen from-[#f8f4fe] to-[#cebef8] dark:from-[#1c1242] dark:to-[#0f0c29] mt-10 transition-colors duration-300">

      <motion.h2
        className="lg:text-5xl text-3xl font-bold text-center mb-12 text-indigo-700 dark:text-[#8CABFF] drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mb-5 text-indigo-700 dark:text-indigo-400">Frontend</h3>
          {frontendSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-6 bg-white/20 dark:bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-xl dark:shadow-indigo-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <p className="text-xl font-medium text-gray-800 dark:text-gray-100">{skill.name}</p>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mt-2 relative">
                <motion.div
                  className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-md dark:shadow-indigo-600`}
                  initial={{ width: "0%" }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mb-5 text-indigo-700 dark:text-indigo-400">Backend</h3>
          {backendSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-6 bg-white/20 dark:bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-xl dark:shadow-green-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <p className="text-xl font-medium text-gray-800 dark:text-gray-100">{skill.name}</p>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mt-2 relative">
                <motion.div
                  className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-md dark:shadow-green-400`}
                  initial={{ width: "0%" }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12"
      >
        <Icons />
      </motion.div>
    </div>
  );
};

export default Skills;
