import React from 'react';
import './SkillsView.css';
import { Zap, Code, Database, Cloud, Users, BarChart3 } from 'lucide-react'; // Example icons

const SkillsView = () => {
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: <Code size={28} strokeWidth={1.5} />,
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React & Next.js', level: 92 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      name: 'Backend Development',
      icon: <Database size={28} strokeWidth={1.5} />,
      skills: [
        { name: 'Node.js & Express', level: 85 },
        { name: 'Python (Flask/Django)', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
        { name: 'SQL & NoSQL Databases', level: 80 },
      ],
    },
    {
      name: 'UI/UX Design',
      icon: <Zap size={28} strokeWidth={1.5} />,
      skills: [
        { name: 'Figma & Sketch', level: 90 },
        { name: 'User Research', level: 80 },
        { name: 'Prototyping', level: 85 },
        { name: 'Usability Testing', level: 78 },
        { name: 'Design Systems', level: 82 },
      ],
    },
    {
      name: 'DevOps & Cloud',
      icon: <Cloud size={28} strokeWidth={1.5} />,
      skills: [
        { name: 'Git & GitHub/GitLab', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'AWS / Google Cloud', level: 65 },
        { name: 'CI/CD Pipelines', level: 70 },
      ],
    },
    {
      name: 'Soft Skills',
      icon: <Users size={28} strokeWidth={1.5} />,
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Teamwork & Collaboration', level: 92 },
        { name: 'Adaptability', level: 88 },
        { name: 'Time Management', level: 85 },
      ],
    },
  ];

  return (
    <div className="content-view-modern skills-view-modern">
      <div className="content-view-header">
        <h2>Skills</h2>
      </div>
      <div className="skills-content-modern">
        {skillCategories.map(category => (
          <div key={category.name} className="skill-category-modern">
            <div className="skill-category-header">
              <span className="skill-category-icon">{category.icon}</span>
              <h3 className="skill-category-title">{category.name}</h3>
            </div>
            <ul className="skills-list-modern">
              {category.skills.map(skill => (
                <li key={skill.name} className="skill-item-modern">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsView;

