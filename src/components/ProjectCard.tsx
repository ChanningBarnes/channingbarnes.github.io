// src/components/ProjectCard.tsx
import React from 'react';
// No need to import PropTypes

// Import CSS - Make sure your build process handles CSS imports
import './ProjectCard.css';

// Define the interface for the component's props
// Note: We can directly define the expected props here
// or import/use the 'Project' type if the props match exactly.
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional
  technologies?: string[]; // Optional
  liveUrl?: string; // Optional
  repoUrl?: string; // Optional
}

// Use React.FC (Functional Component) and type the props
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies = [], // Default value for optional array
  liveUrl,
  repoUrl
}) => {
  return (
    <div className="project-card">
      {/* Conditionally render the image */}
      {imageUrl && (
        <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
      )}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {/* Render technologies only if the array is not empty */}
        {technologies.length > 0 && (
          <div className="project-technologies">
            <strong>Technologies:</strong>
            <ul>
              {technologies.map((tech, index) => (
                <li key={index} className="tech-tag">{tech}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-links">
          {/* Conditionally render links */}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live-link">
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link repo-link">
              View Webpage
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// PropTypes are replaced by the TypeScript interface definition
// Default props can be handled via default parameter values in destructuring (as shown for technologies)

export default ProjectCard;