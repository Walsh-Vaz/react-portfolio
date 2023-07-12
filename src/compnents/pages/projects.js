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
    },

    {
        id: 2,
        name: 'coding conference',
        text: 'A site for viewing talks',
        technologies: 'JavaScript, html, css',
        deployed: true,
        github: 'https://github.com/mdeluca13/coding-empire-conference.git',
        description: 'This is a site where the user can view all the talks, the user can add and delete talks as well as ask questions'
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
        flex: 1,
       //padding: 20,
    },

    link: {
        background: "orange",
        color: "blue",
        flex: 1,
       //padding: 20,
    },
};

function DisplayProjects() {

    return (
    <div style={styles.card}>
        <h1 style={styles.header}> My Projects</h1>
        {projects.map((project) => {
            return (
                <div>
                    <h2>{project.id}: {project.name}</h2>
                    <p style={styles.content}>{project.description}</p>
                    <a href={project.github} style={styles.link}> github link: {project.github}</a>
                </div>
            )
        })}
    </div>
    );
}

export default DisplayProjects;



