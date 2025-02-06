import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import AboutMe from "../Pages/aboutMe/AboutMe";
import Skills from "../Pages/skills/Skills";
import Educations from "../Pages/Educations/Educations";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/contact/Contact";
import FullstackProjectDetails from "../Pages/Projects/FullstackProjectDetails";
import FrontendProjectDetails from "../Pages/Projects/FrontendProjectDetails";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement: <h2>404: Not found!</h2>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'aboutMe',
            element:<AboutMe></AboutMe>
        },
        {
            path:'skills',
            element:<Skills></Skills>

        },
        {
            path:'educations',
            element:<Educations></Educations>
        },
        {
            path:'projects',
            element:<Projects></Projects>
        },
        {
          path:'project-details/:id',
          element:<FullstackProjectDetails></FullstackProjectDetails>
        },
        {
          path:'frontend-project-details/:id',
          element:<FrontendProjectDetails></FrontendProjectDetails>
        },
        {
            path:'contact',
            element:<Contact></Contact>
        }
      ]
    },

  ]);