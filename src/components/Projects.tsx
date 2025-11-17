// src/App.tsx
import React from 'react';
import ProjectList from './ProjectList';
import './App.css';
import './Projects.css'

// Define a type for a single technology object
export type Technology = {
  name: string;
  iconClass: string;
};

// Update the Project type to use the new Technology type
export type Project = {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  technologies?: Technology[]; // This now expects an array of Technology objects
  liveUrl?: string;
  webpageUrl?: string; // Corrected from repoUrl to webpageUrl
  codeUrl?: string;
};

// --- Sample Project Data with Icon Classes ---
const myProjects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description: 'The website you are currently viewing! Built with React & TypeScript, showcasing my projects and skills.',
    imageUrl: '/imgs/file.png',
    technologies: [
      { name: 'React', iconClass: 'fab fa-react' },
      { name: 'TypeScript', iconClass: 'fab fa-js-square' },
      { name: 'HTML', iconClass: 'fab fa-html5' },
      { name: 'CSS', iconClass: 'fab fa-css3-alt' },
    ],
    codeUrl: '#' // Dummy link
  },
  {
    id: 2,
    title: 'Bible In A Year',
    description: 'A web application to generate a yearlong Bible reading plan starting from any date.',
    imageUrl: '/imgs/bible.png',
    technologies: [
      { name: 'HTML', iconClass: 'fab fa-html5' },
      { name: 'CSS', iconClass: 'fab fa-css3-alt' },
      { name: 'JavaScript', iconClass: 'fab fa-js-square' },
    ],
    webpageUrl: 'https://bibleinayear.github.io',
    codeUrl: '#' // Dummy link
  },
  {
    id: 3,
    title: 'Argos (Project Glass Wall)',
    description: 'My senior project at NCAT! A remote object detection inventory management system',
    imageUrl: '/imgs/argos.png',
    technologies: [
      { name: 'HTML', iconClass: 'fab fa-html5' },
      { name: 'CSS', iconClass: 'fab fa-css3-alt' },
      { name: 'Javascript', iconClass: 'fab fa-js-square' },
      { name: 'Python', iconClass: 'fab fa-python' },
      { name: 'Flask', iconClass: 'fas fa-server' },
      { name: 'OpenCV', iconClass: 'fas fa-camera-retro' },
      { name: 'YOLOv10', iconClass: 'fas fa-bullseye' },
    ],
    webpageUrl: 'https://projectglasswall.github.io',
    codeUrl: '#' // Dummy link
  },
  { 
    id: 4,
    title: "CC's Coffee and Cream",
    description: 'A website for a small coffee shop business.',
    imageUrl: '/imgs/cc.png',
    technologies: [
      { name: 'HTML', iconClass: 'fab fa-html5' },
      { name: 'CSS', iconClass: 'fab fa-css3-alt' },
      { name: 'JavaScript', iconClass: 'fab fa-js-square' },
      { name: 'React', iconClass: 'fab fa-react' },
    ],
    webpageUrl: 'https://ccscoffeeandcream.com',
    codeUrl: '#' // Dummy link
  },
  {
    id: 5,
    title: "Abstinent Adolescents",
    description: "A website for a non-profit organization promoting abstinence education.",
    imageUrl: '/imgs/aalogo.png',
    technologies: [
      { name: 'HTML', iconClass: 'fab fa-html5' },
      { name: 'CSS', iconClass: 'fab fa-css3-alt' },
      { name: 'JavaScript', iconClass: 'fab fa-js-square' },
      { name: 'React', iconClass: 'fab fa-react' },
    ],
    webpageUrl: 'https://abstinentadolescents.com',
    codeUrl: '#' // Dummy link
  },
  {
    id: 6,
    title: "Paul's Prayer Points",
    description: "I wanted to make a website where people can pray the prayers that Paul prayed",
    imageUrl: '/imgs/ppp.png',
    technologies: [
      { name: 'HTML', iconClass: 'fab fa-html5' },
      { name: 'CSS', iconClass: 'fab fa-css3-alt' },
      { name: 'JavaScript', iconClass: 'fab fa-js-square' },
    ],
      webpageUrl: 'https://channingbarnes.github.io/paulsprayerpoints/'
  }
];
// --- End Sample Data ---

function App(): JSX.Element {
  return (
    <div className="App">
      <main>
        <h2>My Projects</h2>
        <ProjectList projects={myProjects} />
      </main>
    </div>
  );
}

export default App;