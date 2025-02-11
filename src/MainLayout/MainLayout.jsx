

import Footer from "../Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="overflow-x-hidden w-full">
            <Navbar></Navbar>
           
            <Outlet></Outlet>

            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;