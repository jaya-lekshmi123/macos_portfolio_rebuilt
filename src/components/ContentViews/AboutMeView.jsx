import React from 'react';
import './AboutMeView.css';
import { UserCircle, Linkedin, Github, Mail, Briefcase } from 'lucide-react'; // Example icons

const AboutMeView = () => {
  // Placeholder data for About Me section
  const aboutMeData = {
    name: "Your Name Here",
    title: "Frontend Developer & UI/UX Enthusiast",
    bio: "Passionate about creating intuitive, beautiful, and accessible user experiences. With a strong foundation in modern web technologies and a keen eye for design, I strive to build products that not only function flawlessly but also delight users. I'm always eager to learn new things and take on challenging projects that push the boundaries of what's possible on the web.",
    profileImageUrl: '/assets/profile-placeholder.png', // Placeholder image path
    contact: {
      email: 'your.email@example.com',
      linkedin: 'https://linkedin.com/in/yourprofile',
      github: 'https://github.com/yourusername',
    },
    experience: [
      {
        role: 'Senior Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: '2021 - Present',
        description: 'Led development of key features for a flagship SaaS product, mentored junior developers, and contributed to UI/UX design decisions.'
      },
      {
        role: 'Frontend Developer',
        company: 'Web Wizards LLC',
        period: '2018 - 2021',
        description: 'Developed and maintained responsive websites and web applications for various clients, focusing on performance and user experience.'
      }
    ],
    education: [
      {
        degree: 'B.S. in Computer Science',
        institution: 'University of Technology',
        period: '2014 - 2018'
      }
    ]
  };

  return (
    <div className="content-view-modern about-me-view-modern">
      <div className="content-view-header">
        <h2>About Me</h2>
      </div>
      <div className="about-me-content-modern">
        <div className="about-me-main-info">
          <div className="profile-image-container">
            {aboutMeData.profileImageUrl ? 
              <img src={aboutMeData.profileImageUrl} alt={aboutMeData.name} className="profile-image" /> :
              <UserCircle size={120} strokeWidth={1} className="profile-icon-placeholder" />
            }
          </div>
          <div className="profile-details">
            <h1>{aboutMeData.name}</h1>
            <h3>{aboutMeData.title}</h3>
            <p className="bio">{aboutMeData.bio}</p>
            <div className="contact-links">
              <a href={`mailto:${aboutMeData.contact.email}`} title="Email"><Mail size={20} /></a>
              <a href={aboutMeData.contact.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
              <a href={aboutMeData.contact.github} target="_blank" rel="noopener noreferrer" title="GitHub"><Github size={20} /></a>
            </div>
          </div>
        </div>

        <div className="about-me-section experience-section">
          <h4><Briefcase size={22} /> Experience</h4>
          {aboutMeData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h5>{exp.role} at {exp.company}</h5>
              <p className="period">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="about-me-section education-section">
          <h4><Briefcase size={22} /> Education</h4> {/* Using Briefcase for consistency, could be School icon */}
          {aboutMeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h5>{edu.degree}</h5>
              <p className="institution">{edu.institution}</p>
              <p className="period">{edu.period}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AboutMeView;

