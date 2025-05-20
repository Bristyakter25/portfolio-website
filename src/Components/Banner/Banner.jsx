import { motion } from "framer-motion";
import bannerImage from '../../assets/banner image/Coding.gif';

const Banner = () => {
    const handleDownload = () => {
        const resumePath = '/Resume_of_Bristy_Akter.pdf'; 
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Bristy_Akter_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const socialLinks = [
        { href: "https://github.com/Bristyakter25", src: "https://img.icons8.com/ios-filled/50/github.png", alt: "GitHub" },
        { href: "https://www.facebook.com/aazeen.zaira/", src: "https://img.icons8.com/color/48/facebook-circled--v1.png", alt: "Facebook" },
        { href: "https://www.linkedin.com/in/bristy-akter25/", src: "https://img.icons8.com/color/48/linkedin.png", alt: "LinkedIn" },
        { href: "https://wa.me/8801910628025", src: "https://img.icons8.com/color/48/whatsapp.png", alt: "WhatsApp" } 
    ];

    return (
        <div className="hero bg-[#F5EFFF] w-full dark:bg-[#09122C] pt-24 pb-10">
            <div className="lg:flex justify-between lg:flex-row-reverse">
                {/* Animated Image */}
                <motion.img
                    src={bannerImage}
                    className="w-[350px] bg-[#F5EFFF] lg:ml-20 ml-2 rounded-lg shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
                
                <motion.div 
                    className="lg:w-[600px] w-[380px] mx-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='my-5'>
                        <p className="py-4 text-2xl dark:text-white font-semibold">This is me</p>
                        <h1 className="text-5xl dark:text-[#8CABFF] text-indigo-600 font-extrabold my-3">Bristy Akter</h1>
                        <p className="lg:text-xl dark:text-white text-[16px] mb-5">
                            A passionate Front-End Developer specializing in creating intuitive, responsive, and visually stunning web experiences. Let’s build the web, one pixel at a time!
                        </p>

                        {/* Animated Download Button */}
                        <motion.button 
                            onClick={handleDownload} 
                            className="btn bg-purple-800 text-white hover:bg-blue-700 px-5 py-2 rounded-md font-semibold"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Download Resume
                        </motion.button>
                    </div>

                    {/* Animated Social Links */}
                    <div className="flex gap-x-3 my-5">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <img width="50" height="50" src={link.src} alt={link.alt} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
