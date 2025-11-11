import React from 'react';
import './Experience.css'; // Your main experience styles

// Define a type for a single experience item
interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
  logo: string;
}

// Array containing your experience details
const experiencesData: ExperienceItem[] = [
  {
    id: 1,
    title: 'Technology Analyst',
    company: 'Wells Fargo',
    location: 'Charlotte, NC',
    dates: 'August 2025 - Present',
    description: [
      'Contribute to full-stack development within the Wealth Investment Management Technology sector.',
      'Develop and maintain front-end interfaces using Angular, creating responsive user experiences.',
      'Build and support robust back-end services and APIs with Spring Boot.',
      'Design and manage database schemas and queries using Oracle SQL.',
    ],
    logo: '/imgs/wf.jpg',
  },
  {
    id: 2,
    title: 'Software Engineer Intern',
    company: 'Wells Fargo',
    location: 'Charlotte, NC',
    dates: 'June 2024 - August 2024',
    description: [
      'Worked in a fast-paced Agile/Scrum team within credit card servicing operations.',
      'Led a project utilizing VB.NET and SQL responsible for providing conversion account data for 2.4 million credit card accounts.',
      'Enhanced existing internal applications according to business needs, using SQL stored procedures and internal software used by stakeholders.',
      'Completed research documentation for internal software applications.',
    ],
    logo: '/imgs/wf.jpg',
  },{
   id: 3,
    title: 'Undergraduate Research Assistant - IoT Cybersecurity Testbed',
    company: 'North Carolina Agricultural and Technical State University',
    location: 'Greensboro, NC',
    dates: 'January 2023 - May 2025',
    description: [
      'Lead a research project with other students under Associate Professor Dr. Kelvin Bryant.',
      'Utilize various penetration testing methods to test Bluetooth-enabled smart Locks including Man-in-the-middle attacks and manipulating the network and app environments.',
      'Test different approaches using Wireshark, Bluetooth HCI logs, Android Debug Bridge, and Gattacker.',
      'Document findings to be presented at various research conferences and events.',
      'Completed a paper surveying the current state of IoT testbed research.',
    ],
    logo: '/imgs/ncat.png',
  },
  {
    id: 4,
    title: 'Enterprise Application Services Student Technician',
    company: 'North Carolina Agricultural and Technical State University',
    location: 'Greensboro, NC',
    dates: 'September 2023 - May 2024',
    description: [
      'Managed and organized ticketing software for the Enterprise Application Services team at North Carolina A&T.',
      'Created dynamic forms for North Carolina A&T’s websites and services. Utilized APIs to receive information from students to prefill forms.',
      'Assisted customers with their hardware and network issues daily.',
      'Utilized HTML, CSS, and JavaScript to create programs for tracking ticket data and increasing the efficiency of work processes.',
    ],
    logo: '/imgs/ncat.png',
  },
];

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div>
        {experiencesData.map((exp) => (
          <article key={exp.id} className="experience-item">
            {/* Company Logo and Job Details */}
            <header className="experience-header">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="company-logo"
              />
              <div className="job-details">
                <h3 className="job-title">{exp.title}</h3>
                <p className="company-name">{exp.company}</p>
              </div>
              <p className="job-location-dates">
                <span>{exp.location}</span><span>{exp.dates}</span>
              </p>
            </header>
            <ul className="responsibilities-list">
              {exp.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;