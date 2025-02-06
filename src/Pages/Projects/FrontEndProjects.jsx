import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FrontEndProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
      fetch("/Projects/frontEndProjects.json")
        .then((res) => res.json())
        .then((data) => setProjects(data)); 
    }, []);
    return (
        <div >
      <h2 className="text-3xl font-bold text-center my-12 text-indigo-600">
        Front-End Projects
      </h2>
     
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className="card card-compact bg-base-100 shadow-xl hover:shadow-violet-400 transform transition duration-500 hover:scale-105"
          >
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="w-[300px] h-[250px] rounded-2xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/frontend-project-details/${item.id}`} className="btn glass bg-purple-700 hover:bg-indigo-500 text-white">
                  Details
                </Link> 
              </div>
            </div>
          </div>
        ))}
      </div>

     
      
    </div>
    );
};

export default FrontEndProjects;