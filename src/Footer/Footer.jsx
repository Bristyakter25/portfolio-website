import { Link } from 'react-router-dom';
import logo from '../assets/developer.png'

const Footer = () => {
    return (
        <footer className="footer bg-purple-300 text-base-content py-10 px-32">
  <aside>
    <img className='w-20 h-20 rounded-full mr-3' src={logo} alt="" />
    <p className='text-2xl font-bold text-indigo-600'>
    Bristy’s Tech Chronicles
      
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link to='/'><a className="link link-hover hover:text-purple-600">Home</a></Link>
    <Link  to='/projects'><a className="link link-hover hover:text-purple-600">Projects</a></Link>
    <Link to='/skills'><a className="link link-hover hover:text-purple-600">Skills</a></Link>
    
  </nav>
  <nav>
    <h6 className="footer-title">More Information</h6>
   <Link to='/aboutMe'><a className="link link-hover hover:text-purple-600">About Me</a></Link>
   <Link to='/educations'><a className="link link-hover hover:text-purple-600">Educations</a></Link>
   <Link to='/contact'><a className="link link-hover hover:text-purple-600">Contact</a></Link>
   
  </nav>
  
</footer>
    );
};

export default Footer;