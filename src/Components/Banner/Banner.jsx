import { motion } from "framer-motion";
import bannerImage from "../../assets/bannerAnimation.json";
import Lottie from "lottie-react";

const Banner = () => {
  const handleDownload = () => {
    const resumePath = "/Resume of Bristy-Akter.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Resume of Bristy-Akter";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      href: "https://github.com/Bristyakter25",
      src: "https://img.icons8.com/ios-filled/50/github.png",
      alt: "GitHub",
    },
    {
      href: "https://www.facebook.com/aazeen.zaira/",
      src: "https://img.icons8.com/color/48/facebook-circled--v1.png",
      alt: "Facebook",
    },
    {
      href: "https://www.linkedin.com/in/bristy-akter25/",
      src: "https://img.icons8.com/color/48/linkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "https://wa.me/8801910628025",
      src: "https://img.icons8.com/color/48/whatsapp.png",
      alt: "WhatsApp",
    },
  ];

  return (
    <div className="w-full bg-[#F5EFFF] dark:bg-[#09122C] pt-28 pb-12 px-4 sm:px-8 md:px-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* LEFT: Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 text-transparent bg-clip-text mb-6">
            I'm Bristy Akter — MERN Stack Developer.
          </h1>
          <p className="text-sm sm:text-base mb-6 text-gray-800 dark:text-white">
            A passionate developer dedicated to building fast, scalable, and user-focused web applications using MongoDB, Express, React, and Node.js.  
            Let’s turn ideas into powerful digital experiences.
          </p>

          {/* Download Resume Button */}
          <motion.button
            onClick={handleDownload}
            className="btn mb-6 bg-purple-800 text-white hover:bg-blue-700 px-5 py-2 rounded-md font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download Resume
          </motion.button>

          {/* Social Links */}
          <div className="flex gap-4">
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
                <img width="40" height="40" src={link.src} alt={link.alt} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Animation Section */}
        <div className="w-full lg:w-1/2 max-w-sm sm:max-w-md lg:max-w-lg">
          <Lottie animationData={bannerImage} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
