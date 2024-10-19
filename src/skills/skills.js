import React from 'react';
import './Skills.css';

const skills = [
  'fab fa-html5',
  'fab fa-css3-alt',
  'fab fa-js',
  'fab fa-react',
  'fab fa-node-js',
  'fab fa-git-alt',
  'fab fa-npm',
  // 'fab fa-docker',
  // 'fab fa-python',
  // 'fab fa-java',
  'fab fa-angular',
   'fas fa-leaf',
   

  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="skills-container">
      {skills.map((icon, index) => (
        <div key={index} className="skill-item">
          <i className={icon}></i>
        </div>
      ))}
    </div>
    
  );
};

export default Skills;
