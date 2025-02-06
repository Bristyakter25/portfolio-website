import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto my-5 px-4 py-14 text-center">
      <motion.h2
                className="text-5xl font-bold text-center my-5 text-indigo-600"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Contact With Me
            </motion.h2>
      <p className="text-lg mb-8">Feel free to reach out through any of the following methods:</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email */}
        <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition">
          <FaEnvelope className="text-4xl text-indigo-600 mr-4" />
          <div>
            <h4 className="text-xl font-semibold">Email</h4>
            <p className="text-gray-700">sabihaakterbristy@gmail.com</p>
            <a
              href="mailto:sabihaakterbristy@gmail.com"
              className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block"
            >
              Send an Email
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition">
          <FaWhatsapp className="text-4xl text-green-600 mr-4" />
          <div>
            <h4 className="text-xl font-semibold">WhatsApp</h4>
            <p className="text-gray-700">+880 1910628025</p>
            <a
              href="https://wa.me/01910628025"
              className="text-green-600 hover:text-green-800 mt-2 inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Phone Number */}
        
        </div>
        <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition">
          <FaPhone className="text-4xl text-blue-600 mr-4" />
          <div>
            <h4 className="text-xl font-semibold">Phone</h4>
            <p className="text-gray-700">+880 1910628025</p>
            <a
              href="tel:+8801910628025"
              className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
            >
              Call Now
            </a>
          </div>
      </div>

      {/* Optional: Contact Form */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Or, fill out the contact form below:</h3>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-purple-700 glass text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
