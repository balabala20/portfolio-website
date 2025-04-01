import React from "react";

function Header({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <header>
      <nav className="nav">
        <div
          className="nav_buttons"
          id="about"
          onClick={() => handleNavClick("about")}
        >
          About
        </div>
        <div
          className="nav_buttons"
          id="skills"
          onClick={() => handleNavClick("skills")}
        >
          Skills
        </div>
        <div
          className="nav_buttons"
          id="resume"
          onClick={() => handleNavClick("resume")}
        >
          Resume
        </div>
        <div
          className="nav_buttons"
          id="projects"
          onClick={() => handleNavClick("projects")}
        >
          Projects
        </div>
        <div
          className="nav_buttons"
          id="contact"
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </div>
      </nav>
    </header>
  );
}

export default Header;