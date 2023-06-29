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

const styles = {
    card : {
        margin: 40,
        background: "yellow",
        padding: 60
    },

    header: {
        background: "blue",
        minHeight: 50,
        lineHeight: 1.3,
        fontSize: "1.7rem",
        color: "white",
        padding: "0 20px",
    },

    content: {
        background: "grey",
        color: "white",
        //padding: 20,
    },
};

function displayProjects() {

    return (
    <div style={styles.card}>
        {projects.map((project) => {
            return (
                <div>
                <h1 style={styles.header}> My Projects</h1>
                    <a style={styles.content}> {project.name}</a>
                    <a style={styles.content}>{project.description}</a>
                    <a href={project.github} style={styles.content}> github link: {project.github}</a>
                </div>
            )
        })}
    </div>
    );
}

export default displayProjects;



