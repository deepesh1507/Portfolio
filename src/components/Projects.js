import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
    const projects = [
        {
            title: 'Jumping-game',
            image: require('../img/project-1-jump-game.png'), // Add local image using require
            link: 'https://github.com/deepesh1507/jumping-game', // Link of the project
        },
        {
            title: 'E-farming store',
            image: require('../img/project-2-E-farm.png'), // Replace with relevant image
            link: 'https://github.com/deepesh1507/E-farm-store', // Link of the project
        },
        {
            title: 'currency-converter',
            image: require('../img/project-3-currency-con.png'), // Replace with relevant image
            link: 'https://github.com/deepesh1507/currency-converter', // Link of the project
        },
        {
            title: 'Unity-3D Game',
            image: require('../img/project-4-unity-blender.png'), // Replace with relevant image
            link: ' ', // Link of the project
        },
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;