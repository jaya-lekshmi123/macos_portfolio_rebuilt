import React from 'react';
import './ProjectsView.css';
import { Briefcase, Github, ExternalLink } from 'lucide-react'; // Example icons

const ProjectsView = () => {
  // Placeholder data for projects
  const projects = [
    {
      id: 'project1',
      name: 'Portfolio OS Interface',
      description: 'A web-based portfolio designed to emulate the macOS desktop experience, built with React and modern web technologies.',
      icon: <Briefcase size={48} strokeWidth={1.5} />,
      tags: ['React', 'JavaScript', 'HTML', 'CSS', 'UI/UX'],
      imageUrl: '/assets/project-placeholder-1.png', // Placeholder image path
      liveLink: '#',
      sourceLink: '#',
    },
    {
      id: 'project2',
      name: 'E-commerce Platform Redesign',
      description: 'Led the UI/UX redesign for a major e-commerce platform, focusing on improving user engagement and conversion rates.',
      icon: <Briefcase size={48} strokeWidth={1.5} />,
      tags: ['UI/UX Design', 'Figma', 'User Research', 'A/B Testing'],
      imageUrl: '/assets/project-placeholder-2.png',
      liveLink: '#',
      sourceLink: '#',
    },
    {
      id: 'project3',
      name: 'Mobile Task Management App',
      description: 'Developed a cross-platform mobile application for task management, featuring real-time collaboration and offline support.',
      icon: <Briefcase size={48} strokeWidth={1.5} />,
      tags: ['React Native', 'Firebase', 'iOS', 'Android', 'Mobile App Dev'],
      imageUrl: '/assets/project-placeholder-3.png',
      liveLink: '#',
    },
    // Add more projects as needed
  ];

  return (
    <div className="content-view-modern projects-view-modern">
      <div className="content-view-header">
        <h2>Projects</h2>
      </div>
      <div className="projects-grid-modern">
        {projects.map(project => (
          <div key={project.id} className="project-card-modern">
            <div className="project-card-image-container">
              {project.imageUrl ? 
                <img src={project.imageUrl} alt={project.name} className="project-card-image" /> :
                <div className="project-card-icon-placeholder">{project.icon}</div>
              }
            </div>
            <div className="project-card-content">
              <h3 className="project-card-title">{project.name}</h3>
              <p className="project-card-description">{project.description}</p>
              <div className="project-card-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-card-links">
                {project.liveLink && project.liveLink !== '#' && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.sourceLink && project.sourceLink !== '#' && (
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="project-link source-link">
                    <Github size={16} /> View Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;

