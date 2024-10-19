import { useEffect, useState } from 'react';
import './Home.css'; // Create a separate CSS file for the Home component if needed
import { data } from './data';
import NavTab from './NavTab/NavTab';
import { Link } from "react-router-dom";

function Home() {
  const [projects, setProjects] = useState(data);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [projects]);

  const getTabs = () => {
    const tabs = ["All"];
    data.forEach((item) => {
      if (!tabs.includes(item.group)) {
        tabs.push(item.group);
      }
    });
    return tabs;
  };

  const setProject = (group) => {
    if (group === "All") {
      setProjects(data);
    } else {
      const newProjects = data.filter((item) => item.group === group);
      setProjects(newProjects);
    }
  };

  return (
    <div className="Home">
      <button className='btn btn__primary about'>
        <Link to="/about">About Me</Link>
      </button>
      
      <NavTab tabs={getTabs()} onChange={setProject} />
      
      <div className='project__container'>
        {projects.map(({ image, title, github, demo }, index) => (
          <div className={`project__item ${load ? "zoom_in" : ""}`} key={index}>
            <div className="project_item_image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='project_item_button'>
              <a href={github} className='btn' target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={demo} className='btn btn__primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
