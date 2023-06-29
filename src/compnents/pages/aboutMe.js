import React from "react";

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
        fontSize: "1.2rem",
        color: "white",
        padding: "0 20px",
    },

    content: {
        background: "green",
        color: "white",
        padding: 20,
    },
};

function aboutMe() {

    return (
        <div style={styles.card}> 
            <h1 style={styles.header}> About Me</h1>
            <p style={styles.content}>Hello Everyone, My name is Walsh Vaz. I am currently studying web development at the
               Carleton University bootcamp. I have done my undergrad in Computer Science at Carleton 
               University and Im currently doing this bootcamp to upgrade myself and land a job in my
               field.  
            </p>
        </div>
    );
}

export default aboutMe;