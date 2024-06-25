import React from 'react';

const skills = [
  { tooltip: 'HTML', iconClass: 'fab fa-html5' },
  { tooltip: 'CSS', iconClass: 'fab fa-css3-alt' },
  { tooltip: 'Bootstrap', iconClass: 'fab fa-bootstrap' },
  { tooltip: 'JavaScript', iconClass: 'fab fa-js' },
  { tooltip: 'Node.js', iconClass: 'fab fa-node-js' },
  { tooltip: 'React', iconClass: 'fab fa-react' },
  { tooltip: 'Python', iconClass: 'fab fa-python' },
  { tooltip: 'C', iconClass: 'fa-solid fa-c' },
  { tooltip: 'SQL', iconClass: 'bi bi-filetype-sql'}
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container" data-aos="fade-down">
        <h2 id="skills-title">Skills</h2>
        <div className="row skills-grid">
          {skills.map((skill, index) => (
            <a
              key={index}
              className={`skill-icon col-md-4 ${skill.className || ''}`}
              data-tooltip={skill.tooltip}
            >
              <i className={skill.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
