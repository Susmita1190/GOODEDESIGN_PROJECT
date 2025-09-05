import React from 'react';
import './OurProjects.css';

const projectData = [
  { id: 1, image: '/images/webdev.png', title: 'Website Developement' },
  { id: 2, image: '/images/webdesign.png', title: 'Website Design' },
  { id: 3, image: '/images/google.png', title: 'Google Adds' },
  { id: 4, image: '/images/socialmedia.png', title: 'Social Marketing' },
  { id: 5, image: '/images/ecommerce.png', title: 'E-Commerce Website' },
  { id: 6, image: '/images/wordpress.png', title: 'wordpress' },
];

const OurProjects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Our Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
