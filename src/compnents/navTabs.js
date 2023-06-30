import React from 'react';

const styles = {
  ul : {
      display: "flex",
      flexDirection: "row",
      float: "right",
      padding: "3px, 10px"
      
  },

  li: {
     //background: "blue",
     display: "block",
     fontSize: "1.5rem",
     marginLeft: 30,
     //marginUp: 60,
     marginRight: 40,

     
  },

  content: {
      background: "green",
      color: "white",
      padding: 20,
  },
};



function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    <ul style = {styles.ul}>
      <li style={styles.li}>
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          

          className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          Walsh Vaz
        </a>
      </li>
      <li style={styles.li}>
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          

          className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li style={styles.li}>
        <a
          href="#projects"
          onClick={() => handlePageChange('displayProjects')}
          

          className={currentPage === 'displayProjects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li style={styles.li}>
        <a
          href="#footer"
          

          onClick={() => handlePageChange('contactInfo')}
          className={currentPage === 'contactInfo' ? 'nav-link active' : 'nav-link'}
        >
          Contact Info
        </a>
      </li>

      <li style={styles.li}>
        <a
          href="https://onedrive.live.com/edit.aspx?resid=24A26146364404F2!4588&ithint=file%2cdocx&ct=1683838261012&wdOrigin=OFFICECOM-WEB.MAIN.EDGEWORTH&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=f00c3118-e81a-4254-9569-844f5d4db87d"
          

          //onClick={() => handlePageChange('contactInfo')}
          //className={currentPage === 'contactInfo' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
