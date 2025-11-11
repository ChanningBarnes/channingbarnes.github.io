// src/components/ProjectCard.tsx
import React from 'react';
import './ProjectCard.css';

// Define the Technology type, or import it from App.tsx
type Technology = {
  name: string;
  iconClass: string;
};

// Update the props interface
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  technologies?: Technology[];
  liveUrl?: string;
  webpageUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies = [],
  liveUrl,
  webpageUrl,
  codeUrl = "#"
}) => {
  return (
    <div className="project-card">
      {imageUrl && (
        <div className="project-image-container">
          <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {technologies.length > 0 && (
          <div className="project-technologies">
            <strong>Technologies:</strong>
            <ul>
              {technologies.map((tech, index) => (
                // Directly use the properties from the tech object
                <li key={index} className="tech-tag">
                  <i className={tech.iconClass}></i> {tech.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live-link">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
          {webpageUrl && (
            <a href={webpageUrl} target="_blank" rel="noopener noreferrer" className="project-link live-link">
              <i className="fas fa-desktop"></i> View Webpage
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;