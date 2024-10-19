import React from 'react';
import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="container">
      {/* Name with Animation */}
      <div className="header">
        <h1 className="name">Sangam Shinde</h1>
        <p className="profession">Full Stack Developer</p>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {/* Replace these with your actual skills */}
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">Angular</span>
          <span className="skill">Node.js</span>
          <span className="skill">CSS</span>
          <span className="skill">HTML</span>
          <span className="skill">Express</span>
          <span className="skill">MongoDB</span>
          <span className="skill">Tailwind CSS</span>
          <span className="skill">RESTful API's</span>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h2 className="section-title"> Work Experience</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <h3>Predrag System LLP (Jr. UI Developer) [Aug'23 – till Date]</h3>
            <ul>
              <li>Utilized React JS to maintain Parent and Child elements, leveraging State and Props to optimize component interactions.</li>
              <li>Wrote high-quality, maintainable code using HTML, CSS, and JavaScript, designing reusable components for efficient development.</li>
              <li>Built a scalable single-page web app using HTML5, CSS3, React JS, jQuery, and Bootstrap, integrating with backend services via RESTful API.</li>
              <li>Integrated third-party React libraries, managing Redux store data and ensuring seamless state management.</li>
              <li>Leveraged Node Packet Manager, MongoDB, and React JS library functions to drive logical implementation and data storage.</li>
              <li>Implemented secure verification hash code generation using Node JS, enforcing user validations and permissions.</li>
              <li>Designed and developed reusable React components (multi-field form elements) and background file uploads, enhancing company project functionality.</li>
              <li>Conducted manual testing of React components, ensuring optimal system performance and user experience.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Predrag System LLP (Software Intern) [Feb'23 – July'23]</h3>
            <ul>
              <li>Designed and developed user interfaces for web applications using HTML, CSS, and JavaScript, ensuring seamless user experience.</li>
              <li>Crafted clean, efficient, and maintainable code using React, adhering to industry best practices.</li>
              <li>Implemented UI/UX design principles to enhance product functionality and user engagement.</li>
              <li>Troubleshot and debugged issues, staying up-to-date with the latest trends and technologies in UI development.</li>
              <li>Authored reports and documentation to facilitate knowledge sharing and collaboration with the developer team.</li>
              <li>Contributed innovative ideas and suggestions to enhance product functionality and design, driving business growth.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resume Button */}
      <div className="resume-button-container">
        <a href="/sangam_shinde_resume.pdf" download className="btn btn__primary">Download Resume</a>
      </div>


      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p>Let's connect and discuss how I can help you with your next project!</p>
        <div className="contact-grid">
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope fa-2x"></i>
              <a className="white" href="mailto:sangampshinde@gmail.com">sangampshinde@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-phone fa-2x"></i>
              <a className="white" href="tel:(+91) 9823448966">(+91) 9823448966</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              Nanded, India
            </p>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/sangamshinde/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/sangampshinde" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            {/* Add more social media links or a contact form here */}
          </div>
        </div>
      </div>

      
      {/* Back button */}
      <div className="back-button-container">
        <button onClick={handleBackClick} className="btn btn__secondary">Back to Portfolio</button>
      </div>

    </div>
  );
}

export default About;