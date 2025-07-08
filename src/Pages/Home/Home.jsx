import Banner from "../../Components/Banner/Banner";
import ScrollInView from "../../Components/ScrollInView";
import AboutMe from "../aboutMe/AboutMe";
import Contact from "../contact/Contact";
import Educations from "../Educations/Educations";
import Projects from "../Projects/Projects";
import Skills from "../skills/Skills";



const Home = () => {
    return (
        <div className="dark:bg-[#09122C]">
             <Banner />

            <div className="w-full  max-w-[1240px] mx-auto px-4">
               
                <ScrollInView>
                    <AboutMe />
                </ScrollInView>
</div>
                <div>
                    <ScrollInView delay={0.1}>
                    <Skills />
                </ScrollInView>
                </div>

                <div className="w-full  max-w-[1240px] mx-auto px-4">
                    <ScrollInView delay={0.2}>
                    <Educations />
                </ScrollInView>

                <ScrollInView delay={0.3}>
                    <Projects />
                </ScrollInView>

                <ScrollInView delay={0.4}>
                    <Contact />
                </ScrollInView>
                </div>
            </div>
       
    );
};

export default Home;
