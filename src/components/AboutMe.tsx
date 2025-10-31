import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-me-section">
      <div className="about-me-content">

        <div className="about-me-intro">
        <div className="about-me-intro-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm Channing Barnes. Welcome to my personal webpage!
            </p>
            <p>
              I am a versatile and passionate software developer with a strong foundation in both front-end and back-end technologies. My journey in tech is driven by a love for building intuitive, user-friendly applications and a relentless curiosity for learning.
            </p>
          </div>
          <img
            src="imgs/CroppedShot.png"
            alt="Channing Barnes headshot"
            className="about-me-img"
          />
        </div>

        <div className="skills-and-links">
          <h3 className="skills-header">Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <ul>
                {/* Added unique classNames below */}
                <li className="skill-js"><i className="fab fa-js-square"></i> JavaScript / TypeScript</li>
                <li className="skill-python"><i className="fab fa-python"></i> Python</li>
                <li className="skill-java"><i className="fab fa-java"></i> Java</li>
                <li className="skill-csharp"><i className="fas fa-terminal"></i> C++ / C#</li>
                <li className="skill-html"><i className="fab fa-html5"></i> HTML / <i className="fab fa-css3-alt"></i> CSS</li>
                <li className="skill-sql"><i className="fas fa-database"></i> SQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li className="skill-react"><i className="fab fa-react"></i> React</li>
                <li className="skill-angular"><i className="fab fa-angular"></i> Angular</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li className="skill-node"><i className="fab fa-node-js"></i> Node.js</li>
                <li className="skill-aspnet"><i className="fa-brands fa-microsoft"></i> ASP.NET</li>
                <li className="skill-spring"><i className="fas fa-leaf"></i> Spring Boot</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Databases & Tools</h4>
              <ul>
                <li className="skill-mongo"><i className="fas fa-leaf"></i> MongoDB</li>
                <li className="skill-git"><i className="fab fa-git-alt"></i> Git & GitHub</li>
                <li className="skill-agile"><i className="fas fa-users-cog"></i> Agile / Scrum</li>
                <li className="skill-wireshark"><i className="fa-solid fa-wifi"></i> Wireshark</li>
                <li className="skill-excel"><i className="fas fa-file-excel"></i>Microsoft Excel Certified</li>
              </ul>
            </div>
          </div>

          <div className="social-links">
            {/* Added unique classNames to links */}
            <a href="https://github.com/channingbarnes" target="_blank" rel="noopener noreferrer" className="social-github"><i className="fab fa-github"></i> GitHub</a>
            <a href="https://linkedin.com/in/channing-barnes" target="_blank" rel="noopener noreferrer" className="social-linkedin"><i className="fab fa-linkedin"></i> LinkedIn</a>
          </div>

          <p className="quote">
            “I can do all this through him who gives me strength” – Philippians 4:13
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;