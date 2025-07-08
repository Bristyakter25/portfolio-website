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
            subject: "Science",
        },
    ];

    return (
       <div className="dark:bg-[#09122C] my-16">
         <div className="lg:w-[1140px] w-[350px]  mx-auto lg:px-8 pt-24  ">
            <motion.h2
                className="lg:text-4xl dark:text-[#8CABFF]  text-3xl font-bold text-center mb-12 text-indigo-600"
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
                        className="relative flex items-start gap-6 p-8 dark:bg-[#151965] bg-white/30 backdrop-blur-lg rounded-xl shadow-2xl hover:shadow-violet-500 transform transition duration-500 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <FaGraduationCap className="text-5xl text-indigo-500 drop-shadow-xl" />
                        <div>
                            <h3 className="text-xl font-semibold text-black dark:text-white">{item.degree}</h3>
                            <p className="text-lg dark:text-white text-gray-600">
                                <strong>Institution:</strong> {item.institution}
                            </p>
                            <p className="text-lg dark:text-white text-gray-600">
                                <strong>Year:</strong> {item.year}
                            </p>
                            <p className="text-lg dark:text-white text-gray-600">
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
