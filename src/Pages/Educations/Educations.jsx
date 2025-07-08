import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Educations = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science and Engineering",
      institution: "Institute of Science and Technology",
      year: "Running",
      subject: "Major in Software Engineering"
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Sheikh Borhanuddin Post Graduate College",
      year: "2018",
      subject: "Science"
    }
  ];

  return (
    <div className="dark:bg-[#09122C] bg-[#F3F4F6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-indigo-600 dark:text-[#8CABFF] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Educational Qualifications
        </motion.h2>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5 sm:gap-6 p-5 sm:p-6 bg-white dark:bg-[#151965] rounded-xl shadow-md hover:shadow-indigo-500/40 transition-transform duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <FaGraduationCap className="text-4xl sm:text-5xl text-indigo-600 dark:text-indigo-400 mt-1" />
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-1">
                  {item.degree}
                </h3>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
                  <strong>Institution:</strong> {item.institution}
                </p>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
                  <strong>Year:</strong> {item.year}
                </p>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
                  <strong>Subject:</strong> {item.subject}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
