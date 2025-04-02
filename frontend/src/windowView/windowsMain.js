import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faPython,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faLinkedin,
  faGithub,
  faReact,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faComments,
  faDatabase,
  faEnvelope,
  faLocationDot,
  faPhone,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import webdesign_photo from "../img/7706581-removebg-preview.png";
import webdev_photo from "../img/webdevelopment.png";
import coding_photo from "../img/coading.png";
import profile_photo from "../img/photo.jpg";
import plcScadaCertificate from "../img/plc-scada-certificate.jpg";
import project1 from "../img/project1.png";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div id="profile">
      <div id="photo">
        <img src={profile_photo} alt="img" />
      </div>
      <div id="name">
        <h2>Balasiva Dopathi</h2>
      </div>
      <div id="work">Web Developer</div>
      <div id="details">
        <div id="email">
          <div className="icons">
            <div id="skills_fa">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="mailto:dopathibalasiva@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div>
          </div>
          <div id="email_text">
            Email
            <br />
            dopathibalasiva@gmail.com
          </div>
        </div>
        <div id="phone">
          <div className="icons">
            <div id="skills_fa">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="tel:8179403820"
              >
                <FontAwesomeIcon icon={faPhone} />
              </Link>
            </div>
          </div>
          <div id="phone_text">
            Phone
            <br />
            8179403820
          </div>
        </div>
        <div id="location">
          <div className="icons">
            <div id="skills_fa">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="https://maps.app.goo.gl/MVUbkaywoSGRpN4o6"
              >
                <FontAwesomeIcon icon={faLocationDot} />
              </Link>
            </div>
          </div>
          <div id="location_text">
            Location
            <br />
            Vizag, Andhra Pradesh, India
          </div>
        </div>
        <div id="contact">
          <span className="contact_icons">
            <div id="skills_fa">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="https://www.linkedin.com/in/balasiva-dopathi-06a613309/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bvhn%2BakqTT6Cpoho0zqzuwA%3D%3D"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </span>
          <span className="contact_icons">
            <div id="skills_fa">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="https://github.com/balabala20"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </span>
          <span className="contact_icons">
            <div id="skills_fa">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="https://wa.me/8179403820"
              >
                <FontAwesomeIcon icon={faSquareWhatsapp} />
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <div>
        <h2 id="about_heading">About Me</h2>
      </div>
      <div id="about_text">
        <p>
          As an Electrical and Electronics Engineering student with a passion
          for coding and web development, I'm excited to share my projects and
          experiences with you. With a strong foundation in electronics and a
          growing expertise in full-stack development, I'm always looking for
          innovative ways to bridge the gap between technology and design.
        </p>
        <h4>My Goals</h4>
        <ul>
          <li>
            To leverage my technical skills to create innovative solutions that
            make a positive impact.
          </li>
          <li>
            To continuously learn and adapt to emerging technologies and
            industry demands.
          </li>
          <li>
            To collaborate with like-minded individuals on exciting projects
            that push the boundaries of what's possible.
          </li>
        </ul>
      </div>
      <div>
        <h2 id="about_heading2">My Interests</h2>
        <div id="skills_layout">
          <div id="webdesign" className="web">
            <img src={webdesign_photo} alt="img" />
            <div id="webdesign_text">
              <h3>Web Design</h3>
              <p>
                The most modern and high-quality design model at a professional
                input
              </p>
            </div>
          </div>
          <div id="webdevelopment" className="web">
            <img src={webdev_photo} alt="img" id="imgphoto1" />
            <div id="webdevelopment_text">
              <h3>Web Development</h3>
              <p>High-Quality Development skills</p>
            </div>
          </div>
          <div id="coding" className="web">
            <img src={coding_photo} alt="img" />
            <div id="coding_text">
              <h3>Coading</h3>
              <p>Good at Coading </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="overskills">
      <div>
        <h2 id="skills_heading">Skills</h2>
      </div>
      <h4>Programming skills</h4>
      <div id="programming_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faJava} />
          </div>
          <h3>Java</h3>
          <p>Object-Oriented Programming Language.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faPython} />
          </div>
          <h3>Python</h3>
          <p>Powerful scripting & AI development.</p>
        </div>
      </div>

      <h4>Professional skills</h4>
      <div id="professional_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <h3>Communication Skills</h3>
          <p>the ability to effectively convey information,idea and emotion</p>
        </div>
        <div className="skills">
          <h3>Problem solving</h3>
          <p>I am good at finding solutions</p>
        </div>
        <div className="skills">
          <h3>DSA</h3>
          <p>Powerful scripting & AI development.</p>
        </div>
      </div>

      <h4>Frontend skills</h4>
      <div id="frontend_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <h3>HTML</h3>
          <p>Structuring the web pages.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faCss3Alt} />
          </div>
          <h3>CSS</h3>
          <p>Styling and design for the web.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faJs} />
          </div>
          <h3>JavaScript</h3>
          <p>Interactive and dynamic web development.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <h3>React</h3>
          <p>
            framework of JavaScript, to make responsive and dynamic webpages
          </p>
        </div>
      </div>

      <h4>Backend skills</h4>
      <div id="backend_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faNodeJs} />
          </div>
          <h3>Node.js</h3>
          <p>Backend development using JavaScript.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faServer} />
          </div>
          <h3>Express.js</h3>
          <p>Fast and lightweight web framework.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <h3>MongoDB</h3>
          <p>NoSQL database for scalable apps.</p>
        </div>
      </div>

      <h4>Technical skills</h4>
      <div id="backend_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <h3>Github</h3>
          <p>collebration and connections</p>
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div id="resume_page">
      <div id="resume_heading">
        <h2>Resume</h2>
      </div>
      <FontAwesomeIcon id="education_icons" icon={faBook} />
      <h3 id="education_heading">Education</h3>
      <div id="education">
        <div id="education_decoration">
          <div id="dot1" className="dot"></div>
          <div id="dot2" className="dot"></div>
          <div id="dot3" className="dot"></div>
        </div>
        <div id="education_details">
          <div id="btech">
            <h4>B.Tech</h4>
            <p>
              Electrical and Electronics Engineering
              <br />
              2022-2026
              <br />
              Wellfare institute of Engineering|Pendhurthi,Vizag
            </p>
          </div>
          <div id="inter">
            <h4>Intermidiate</h4>
            <p>
              MPC
              <br />
              2020-2022
              <br />
              Sri Basara jn.College|Isakathota,Vizag
            </p>
          </div>
          <div id="school">
            <h4>High School</h4>
            <p>
              SSC
              <br />
              2015-2020
              <br />
              ZPHigh School|Thotagaruvu,Vizag
            </p>
          </div>
        </div>
      </div>
      <div id="certifications">
        <h3 id="certifications_heading">certifications</h3>
        <div id="certifications_set">
          <div className="certifications">
            PLC-SCADA certificate
            <img src={plcScadaCertificate} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects_page">
      <div id="projects_heading">
        <h2>Projects</h2>
      </div>
      <div id="projects_set">
        <div className="projects">
          <h3>Portfolio Website</h3>
          <Link to="">
            <img src={project1} alt="img" />
          </Link>
          <p>Technologies used: React,Express,MongoDB</p>
        </div>
      </div>
    </div>
  );
}

const base_url =`http://localhost:5000`;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const userHandler = async (e) => {
    e.preventDefault();

    // Input validation
    if (!name || !email || !message) {
      setFeedback("All fields are required.");
      setTimeout(() => {
        setFeedback("");
      }, 2000);
      return;
    }

    try {
      const user = { name, email, message }; // Define user object here
      const response = await fetch(`${base_url}/users/adduser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fixed typo
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setFeedback("User added successfully!");
        setTimeout(() => {
          setFeedback("");
        }, 2000);
      } else {
        setFeedback("this user is already contact us");
        setTimeout(() => {
          setFeedback("");
        }, 2000);
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <form id="form" onSubmit={userHandler}>
        <div>
          <h2>Contact me</h2>
          <br />
        </div>
        <div id="txtmail">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              id="fname"
              name="firstname"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email address"
              id="mailid"
              name="mailid"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <textarea
              placeholder="text message"
              id="msg"
              cols={10}
              rows={3}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <br />{" "}
          <div>
            <input type="submit" id="submit" value="Submit" />
          </div>
        </div>
        <p>{feedback}</p>
      </form>
    </div>
  );
}

function Content({ currentPage }) {
  let content;
  if (currentPage === "about") {
    content = <About />;
  } else if (currentPage === "skills") {
    content = <Skills />;
  } else if (currentPage === "resume") {
    content = <Resume />;
  } else if (currentPage === "projects") {
    content = <Projects />;
  } else if (currentPage === "contact") {
    content = <Contact />;
  }
  return <div id="content">{content}</div>;
}

function Main({ currentPage }) {
  return (
    <main id="main">
      <Profile />
      <Content currentPage={currentPage} />
    </main>
  );
}

export default Main;
