// src/components/ProjectList.tsx
import React from 'react';
import ProjectCard from './ProjectCard';



// Import CSS
import './ProjectList.css';

export type Technology = {
  name: string;
  iconClass: string;
};
export type Project = { // Use 'export' if you need this type outside this file (e.g., in App.tsx)
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  technologies?: Technology[];
  liveUrl?: string;
  webpageUrl?: string;
  codeUrl?: string;
};

// Define the interface for the component's props
interface ProjectListProps {
  projects?: Project[]; // The list of projects is optional
}

// Use React.FC and type the props
// Provide a default value for projects in case the prop is omitted
const ProjectList: React.FC<ProjectListProps> = ({ projects = [] }) => {

  // Handle empty or undefined projects array
  if (projects.length === 0) {
    return <p>No projects to display.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

// Default props handled by default parameter value: ({ projects = [] })

export default ProjectList;