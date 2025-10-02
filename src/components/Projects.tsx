// src/App.tsx
import React from 'react';
import ProjectList from './ProjectList';

import './App.css'; // Your main app styles
export type Project = { // Use 'export' if you need this type outside this file (e.g., in App.tsx)
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  technologies?: string[];
  liveUrl?: string;
  repoUrl?: string;
};
// --- Sample Project Data ---
// Explicitly type the array using the Project interface
const myProjects: Project[] = [
  {
    id: 1, // Use string or number
    title: 'Personal Portfolio Website',
    description: 'The website you are currently viewing! Built with React & TypeScript, showcasing my projects and skills.',
    imageUrl: '../imgs/file.png', // Path relative to public folder or absolute URL
    technologies: ['React', 'TypeScript', 'HTML', 'CSS',],
  },
  {
    id: 2, // Example using number ID
    title: 'Bible In A Year',
    description: 'A web application to generate a yearlong Bible reading plan starting from any date',
    imageUrl: '../imgs/bible.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://bibleinayear.github.io', // Replace
  },
  {
    id: 3,
    title: 'Argos (Project Glass Wall)',
    description: 'A simple web application to check the current weather and forecast for a city using a third-party API.',
    imageUrl: '../imgs/argos.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Python', 'Flask','OpenCV', 'YOLOv10'],
    repoUrl: 'https://projectglasswall.github.io', // Replace
  },
  { id: 4,
    title: 'CC\'s Coffee and Cream',
    description: 'A website for a small coffee shop business.',
    imageUrl: '../imgs/cc.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', ],
    repoUrl: 'https://ccscoffeeandcream.com', // Replace
    },
];
// --- End Sample Data ---

// Define the App component using standard function syntax or React.FC
function App(): JSX.Element { // Return type is JSX.Element
  return (
    <div className="App">
      <main>
        <h2>My Projects</h2>
        {/* Pass the typed projects array */}
        <ProjectList projects={myProjects} />

        {/* Example: Render the component without passing props (uses default []) */}
        {/* <h2>Empty List Example</h2> */}
        {/* <ProjectList /> */}
      </main>
    </div>
  );
}

// Alternative using React.FC
// const App: React.FC = () => { ... return (...); };

export default App;