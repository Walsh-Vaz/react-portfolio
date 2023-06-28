import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul >
      <li>
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={() => handlePageChange('displayProjects')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'displayProjects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#footer"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('contactInfo')}
          className={currentPage === 'contactInfo' ? 'nav-link active' : 'nav-link'}
        >
          Contact Info
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
