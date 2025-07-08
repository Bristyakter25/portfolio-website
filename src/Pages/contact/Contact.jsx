import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='dark:bg-[#09122C] px-2 sm:px-4'>
      <div className="max-w-5xl mx-auto mt-10 sm:mt-16 py-16 sm:py-20 text-center dark:text-white">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact With Me
        </motion.h2>

        <p className="text-sm sm:text-lg mb-8 text-black dark:text-gray-300">
          Feel free to reach out through any of the following methods:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-4">
          {/* Email */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-3xl sm:text-4xl text-indigo-600" />
            <div className="text-left">
              <h4 className="text-lg font-semibold text-black dark:text-white">Email</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">sabihaakterbristy@gmail.com</p>
              <a
                href="mailto:sabihaakterbristy@gmail.com"
                className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 mt-1 inline-block"
              >
                Send an Email
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <FaWhatsapp className="text-3xl sm:text-4xl text-green-600" />
            <div className="text-left">
              <h4 className="text-lg font-semibold text-black dark:text-white">WhatsApp</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">+880 1910628025</p>
              <a
                href="https://wa.me/01910628025"
                className="text-sm text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 mt-1 inline-block"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="mt-6 sm:mt-8 flex items-start sm:items-center gap-3 sm:gap-4 justify-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-full sm:w-4/5 mx-auto">
          <FaPhone className="text-3xl sm:text-4xl text-blue-600" />
          <div className="text-left">
            <h4 className="text-lg font-semibold text-black dark:text-white">Phone</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">+880 1910628025</p>
            <a
              href="tel:+8801910628025"
              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-1 inline-block"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 w-full sm:w-4/5 mx-auto px-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Or, fill out the contact form below:
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-900 bg-white dark:text-white text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-900 bg-white dark:text-white text-black"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-900 bg-white dark:text-white text-black"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-purple-700 text-white rounded-lg hover:bg-indigo-700 transition dark:bg-purple-800 dark:hover:bg-indigo-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
