
import { NavLink } from 'react-router-dom';
import logo from '../../assets/developer.png'
import DarkModeToggle from '../../DarkMode/DarkModeToggle';

const Navbar = () => {
  const links = <>
 <div className="gap-x-3 lg:flex text-[14px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md ${
            isActive ? "bg-purple-500 text-white" : "text-white"
          } hover:bg-purple-700 hover:text-white`
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/aboutMe"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md ${
            isActive ? "bg-purple-500 text-white" : "text-white"
          } hover:bg-purple-700 hover:text-white`
        }
      >
        <li>About Me</li>
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          `px-3 py-2  rounded-md ${
            isActive ? "bg-purple-500 text-white" : "text-white"
          } hover:bg-purple-700 hover:text-white`
        }
      >
        <li>Skills</li>
      </NavLink>
      <NavLink
        to="/educations"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md ${
            isActive ? "bg-purple-500 text-white" : "text-white"
          } hover:bg-purple-700 hover:text-white`
        }
      >
        <li>Educations</li>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md ${
            isActive ? "bg-purple-500 text-white" : "text-white"
          } hover:bg-purple-700 hover:text-white`
        }
      >
        <li>Projects</li>
      </NavLink>
     
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md ${
            isActive ? "bg-purple-500 text-white" : "text-white"
          } hover:bg-purple-700 hover:text-white`
        }
      >
        <li>Contact</li>
      </NavLink>
      
    </div>
  </>
  const handleDownload = () => {
    const resumePath = '/Resume of Bristy-Akter.pdf'; 
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Bristy_Akter_Resume.pdf'; 
    link.click();
};
    return (
        <div className="navbar dark:bg-[#09122C] text-white px-1 lg:px-6 fixed top-0 left-0 w-full h-16 bg-purple-300 z-50 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content gap-y-3 bg-purple-300 rounded-box  mt-3 w-52 p-2 ">
        
        {links}
      </ul>
    </div>
    <div className="flex items-center space-x-1 lg:space-x-3">
  <img className="lg:w-10 w-7 h-7 lg:h-10 rounded-full" src={logo} alt="Bristy Logo" />
  <a className="font-bold text-[14px] w-[250px] lg:text-[18px] bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text tracking-wide">
    Bristy’s Tech Chronicles
  </a>

</div>

  </div>
  <div className="navbar-center items-center lg:ml-7 hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>

  </div>
 <div className="navbar-end flex items-center gap-2">
  {/* Dark Mode Toggle */}
  <DarkModeToggle />

  {/* Resume Button */}
  <button
    onClick={handleDownload}
    className="lg:btn-md rounded-xl btn-xs bg-purple-800 text-white hover:bg-blue-700"
  >
    Download Resume
  </button>
</div>


</div>

    );
};

export default Navbar;