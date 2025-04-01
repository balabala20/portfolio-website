import React from "react";

function Menu() {
  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  let menu = (
    <div id="menu">
      <label>
        <input type="checkbox" id="menu_checkbox" />
        <div id="menu_icon">
          <div id="top_line" className="menu_lines"></div>
          <div id="middle_line" className="menu_lines"></div>
          <div id="bottom_line" className="menu_lines"></div>
        </div>
        <div id="slidebar">
          <h2>Menu</h2>
          <div id="menu_text">
            <div
              id="mobile_profile"
              className="menu_text"
              onClick={() => handleScrollToSection("profile_section")}
            >
              Profile
            </div>
            <div
              id="mobile_about"
              className="menu_text"
              onClick={() => handleScrollToSection("about_section")}
            >
              About
            </div>
            <div
              id="mobile_skills"
              className="menu_text"
              onClick={() => handleScrollToSection("skills_section")}
            >
              Skills
            </div>
            <div
              id="mobile_resume"
              className="menu_text"
              onClick={() => handleScrollToSection("mobile_resume_section")}
            >
              Resume
            </div>
            <div
              id="mobile_projects"
              className="menu_text"
              onClick={() => handleScrollToSection("mobile_project_section")}
            >
              Projects
            </div>
            <div
              id="mobile_contacts"
              className="menu_text"
              onClick={() => handleScrollToSection("contact_section")}
            >
              Contacts
            </div>
          </div>
        </div>
      </label>
    </div>
  );

  return menu;
}

function MobileHeader() {
  return (
    <div id="header_part">
      <h2 id="portfolio_name">Portfolio</h2>
      <Menu />
    </div>
  );
}

export default MobileHeader;