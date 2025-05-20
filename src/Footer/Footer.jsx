import { Link } from 'react-router-dom';
import logo from '../assets/developer.png';

const Footer = () => {
  return (
    <footer className="footer bg-purple-300 dark:bg-[#09122C] text-base-content dark:text-gray-200 py-10 px-4 md:px-32 flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Logo & Title */}
      <aside className="flex flex-col items-start">
        <img className="w-20 h-20 rounded-full mb-2" src={logo} alt="Developer Logo" />
        <p className="text-2xl font-bold text-indigo-600 dark:text-[#5F85DB]">
          Bristy’s Tech Chronicles
        </p>
      </aside>

      {/* Services Section */}
      <nav>
        <h6 className="footer-title text-lg font-semibold dark:text-white">Services</h6>
        <ul className="space-y-1">
          <li><Link to="/" className="link link-hover hover:text-purple-600 dark:hover:text-purple-400">Home</Link></li>
          <li><Link to="/projects" className="link link-hover hover:text-purple-600 dark:hover:text-purple-400">Projects</Link></li>
          <li><Link to="/skills" className="link link-hover hover:text-purple-600 dark:hover:text-purple-400">Skills</Link></li>
        </ul>
      </nav>

      {/* More Info Section */}
      <nav>
        <h6 className="footer-title text-lg font-semibold dark:text-white">More Information</h6>
        <ul className="space-y-1">
          <li><Link to="/aboutMe" className="link link-hover hover:text-purple-600 dark:hover:text-purple-400">About Me</Link></li>
          <li><Link to="/educations" className="link link-hover hover:text-purple-600 dark:hover:text-purple-400">Educations</Link></li>
          <li><Link to="/contact" className="link link-hover hover:text-purple-600 dark:hover:text-purple-400">Contact</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
