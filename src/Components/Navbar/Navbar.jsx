
import { NavLink } from 'react-router-dom';
import logo from '../../assets/developer.png'
const Navbar = () => {
  const links = <>
 <div className="gap-x-4 lg:flex text-xl">
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
          `px-3 py-2 rounded-md ${
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
    const resumePath = '/Resume of Bristy Akter.pdf'; 
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Bristy_Akter_Resume.pdf'; 
    link.click();
};
    return (
        <div className="navbar text-white px-14 fixed top-0 left-0 w-full h-16 bg-purple-300 z-50 shadow-md">
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
        className="menu menu-sm dropdown-content gap-y-3 bg-purple-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
        {links}
      </ul>
    </div>
    <img className='w-10 h-10 rounded-full mr-3' src={logo} alt="" />
    <a className=" lg:text-2xl text-indigo-600 font-bold text-xs">Bristy’s Tech Chronicles</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <button onClick={handleDownload} className="lg:btn-md rounded-xl btn-xs bg-purple-800 text-white hover:bg-blue-700">Download Resume</button>
  </div>
</div>
    );
};

export default Navbar;