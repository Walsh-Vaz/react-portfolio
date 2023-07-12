import React, {useState} from "react"

const styles = {
    card : {
        margin: 40,
        background: "yellow",
        padding: 60,
    },

    header: {
        //background: "blue",
        minHeight: 50,
        lineHeight: 1.3,
        fontSize: "3rem",
        color: "black",
        padding: "0 20px",
        textAlign: "center",
    },

    content: {
        background: "green",
        color: "white",
        padding: 20,
        textAlign: "center"
    },

    questionAndEmail: {
        //background: "green",
        color: "black",
        padding: 20,
        //textAlign: "center"
    },

    a: {
        color: "blue",
        textAlign: "center",
    }
};


function ContactInfo() {

    const [email, setEmail] = useState("");

    return (
        <div style={styles.card}>
            <h1 style={styles.header}> Contact Me</h1>
            <p style={styles.content}>You can reach me on my email: walshivaz@yahoo.com</p>
            
            <p style={styles.questionAndEmail}>Enter Your email</p>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.textBox}></input>

            <p> Enter Your Questios or inquires</p>
            <input type="text"></input> 

            <button> submit</button>

            <p>Visit my GitHub</p>
            <a href="https://github.com/Walsh-Vaz" style={styles.a}> {"https://github.com/Walsh-Vaz"}</a>
        </div>
    );
}

export default ContactInfo;