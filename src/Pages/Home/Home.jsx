import Banner from "../../Components/Banner/Banner";
import AboutMe from "../aboutMe/AboutMe";
import Contact from "../contact/Contact";
import Educations from "../Educations/Educations";
import Projects from "../Projects/Projects";

import Skills from "../skills/Skills";



const Home = () => {
    return (
        <div className="dark:bg-[#09122C]">
           <Banner></Banner>
            <div className="lg:w-[1240px] w-[400px] mx-auto">
            
            </div>
            <AboutMe></AboutMe>
            <Skills></Skills>
           <Educations></Educations>
           <Projects></Projects>
           <Contact></Contact>
           
        </div>
    );
};

export default Home;