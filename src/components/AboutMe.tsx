import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section">
      <div className="about-me-content">
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>Hi, I'm Channing Barnes. Welcome to my personal webpage!</p>
          <p>
            I’m a passionate developer with experience in web technologies like React, TypeScript, and Node.js.
            I love building user-friendly applications and learning new things every day.
          </p>
          <ul>
            <li>💻 JavaScript / TypeScript</li>
            <li>⚛️ React</li>
            <li>🌐 Node.js</li>
            <li>🎨 UI/UX Enthusiast</li>
          </ul>
          <p>
            <a href="https://github.com/channingbarnes" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href="https://linkedin.com/in/channing-barnes" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
            “I can do all this through him who gives me strength.” – Philippians 4:13
        </div>
        <img 
          src="imgs/CroppedShot.png" 
          alt="Channing Barnes headshot" 
          className="about-me-img"
        />
      </div>
    </section>
  );
}

export default AboutMe;
