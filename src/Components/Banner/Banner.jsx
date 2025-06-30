import { motion } from "framer-motion";
import bannerImage from "../../assets/bannerAnimation.json";
import Lottie from "lottie-react";

const Banner = () => {
  const handleDownload = () => {
    const resumePath = "/Resume_of_Bristy_Akter.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Bristy_Akter_Resume.pdf";
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
    <div className=" lg:w-full px-7 bg-[#F5EFFF] w-full dark:bg-[#09122C] pt-44 pb-10">
      <div className="lg:flex justify-between">
        <div className="lg:w-[600px] w-[380px]">
          <motion.div
            className=""
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="my-5">
       <h1 className="text-3xl mb-6 font-bold bg-gradient-to-r from-purple-400 to-blue-600 text-transparent bg-clip-text">
  I'm Bristy Akter — MERN Stack Developer.
</h1>
<p className="lg:text-[15px] mb-6 mr-8  dark:text-white text-[13px] mt-4 ">
  A passionate developer dedicated to building fast, scalable, and user-focused web applications using MongoDB, Express, React, and Node.js.  
  Let’s turn ideas into powerful digital experiences.
</p>


              {/* Animated Download Button */}
              <motion.button
                onClick={handleDownload}
                className="btn mb-10 bg-purple-800 text-white hover:bg-blue-700 px-5 py-2 rounded-md font-semibold"
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
          <div className="w-[400px]">
                 <Lottie animationData={bannerImage} />
             </div>
      </div>
    </div>
  );
};

export default Banner;
