import { motion } from "framer-motion";
import Icons from "./Icons";

const Skills = () => {
  const proficientSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "JWT",
  ];

  const familiarSkills = [
    "Next.js",
    "Redux",
    "Framer Motion",
   "Axios",
    "Stripe Integration",
    "REST API",
   
    "Context API",
  ];

  return (
    <div className="px-6 py-20 bg-gradient-to-b min-h-screen from-[#f8f4fe] to-[#cebef8] dark:from-[#1c1242] dark:to-[#0f0c29]">
      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-center mb-12 text-indigo-700 dark:text-[#8CABFF] drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Technical Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Proficient With */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700 dark:text-indigo-300">
            Proficient With
          </h3>
          <div className="flex flex-wrap gap-4">
            {proficientSkills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#4f46e5",
                  color: "#ffffff",
                  boxShadow: "0px 4px 20px rgba(79, 70, 229, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-white text-sm font-medium shadow-sm cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Familiar With */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-green-700 dark:text-green-300">
            Familiar With
          </h3>
          <div className="flex flex-wrap gap-4">
            {familiarSkills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#16a34a",
                  color: "#ffffff",
                  boxShadow: "0px 4px 20px rgba(22, 163, 74, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-4 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-700 dark:text-white text-sm font-medium shadow-sm cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tools */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-16"
      >
        <h4 className="text-2xl font-bold text-center mb-4 text-indigo-700 dark:text-indigo-300">
          Tools & Technologies I Use
        </h4>
        <Icons />
      </motion.div>
    </div>
  );
};

export default Skills;
