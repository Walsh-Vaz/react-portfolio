import React from "react";

const projects = [
    {
        id: 1,
        name: 'Pet Adoption',
        text: 'A pet aboption site',
        technologies: 'JavaScript, html, css',
        deployed: true,
        github: 'https://github.com/JSinc98/Petadoptionassistance.git',
        description: 'This is a site where the user can view all the cats and dogs up for adoption the user can view all the infomation can search based on the name or breed.'
    }
];

function displayProjects() {

    return (
    <div>
        {projects.map((project) => {
            return (
                <div>
                <h1> My Projects</h1>
                    <a> {project.name}</a>
                    <a>{project.description}</a>
                    <a href={project.github}> github link: {project.github}</a>
                </div>
            )
        })}
    </div>
    );
}

export default displayProjects;



