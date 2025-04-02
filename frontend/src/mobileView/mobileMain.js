import React, { useState } from "react";
import profile_photo from "../img/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import plcScadaCertificate from "../img/plc-scada-certificate.jpg";
import project1 from "../img/project1.png";
import { Link } from "react-router-dom";
import {
  faLinkedin,
  faGithub,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";


function Profile() {
  let profile = (
    <div id="profile_section">
      <div id="photo">
        <img src={profile_photo} alt="img" />
      </div>
      <div id="mobile_name">
        <h2>Balasiva Dopathi</h2>
      </div>
      <div id="work">Web Developer</div>
      <div id="details">
        <div id="email">
          <div className="contact_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="mailto:dopathibalasiva@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
          <div id="email_text">
            Email
            <br />
            dopathibalasiva@gmail.com
          </div>
        </div>
        <div id="phone">
          <div className="contact_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="tel:8179403820"
            >
              <FontAwesomeIcon icon={faPhone} />
            </Link>
          </div>
          <div id="phone_text">
            Phone
            <br />
            8179403820
          </div>
        </div>
        <div id="location">
          <div className="contact_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="https://maps.app.goo.gl/MVUbkaywoSGRpN4o6"
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </Link>
          </div>
          <div id="location_text">
            Location
            <br />
            Vizag, Andhra Pradesh, India
          </div>
        </div>
        <div id="social_icons">
          <span className="social_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="https://www.linkedin.com/in/balasiva-dopathi-06a613309/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bvhn%2BakqTT6Cpoho0zqzuwA%3D%3D"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </span>
          <span className="social_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="https://github.com/balabala20"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </span>
          <span className="social_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="https://wa.me/8179403820"
            >
              <FontAwesomeIcon icon={faSquareWhatsapp} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
  return profile;
}

function About() {
  let about = (
    <div id="about_section">
      <div id="mobile_about_heading">
        <h2>About</h2>
      </div>
      <div id="mobile_about_text">
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
        What I'am good at:
        <ul>
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Coding</li>
        </ul>
      </div>
    </div>
  );
  return about;
}
function Skills() {
  let skills = (
    <div id="skills_section">
      <div id="mobile_skills_heading">
        <h2>Skills</h2>
      </div>
      <div id="mobile_skills_set">
        <div className="mobile_skills">
          <h3>Programming Skills</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="mobile_skills">
          <h3>Professional Skills</h3>
          <ul>
            <li>Communication skills</li>
            <li>Problem Solving</li>
            <li>DSA</li>
          </ul>
        </div>
        <div className="mobile_skills">
          <h3>Frontend Skills</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React (js framework)</li>
          </ul>
        </div>
        <div className="mobile_skills">
          <h3>Backend Skills</h3>
          <ul>
            <li>Nodejs (backend language)</li>
            <li>Express.js (framework)</li>
            <li>MongoDB (DataBase)</li>
          </ul>
        </div>
        <div className="mobile_skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
  return skills;
}
function Resume() {
  let resume = (
    <div id="mobile_resume_section">
      <div id="mobile_resume_heading">
        <h2>Resume</h2>
      </div>
      <div id="mobile_resume_set">
        <FontAwesomeIcon id="education_icons" icon={faBook} />
        <h3 id="education_heading">Education</h3>
        <div id="education">
          <div id="mobile_education_decoration">
            <div id="dot1" className="dot"></div>
            <div id="dot2" className="dot"></div>
            <div id="dot3" className="dot"></div>
          </div>
          <div id="education_details">
            <div id="btech">
              <h4>B.Tech</h4>
              <p>
                | Electrical and Electronics Engineering
                <br />
                | 2022-2026
                <br />| Wellfare institute of Engineering|Pendhurthi,Vizag
              </p>
            </div>
            <div id="inter">
              <h4>Intermidiate</h4>
              <p>
                | MPC
                <br />
                | 2020-2022
                <br />| Sri Basara jn.College|Isakathota,Vizag
              </p>
            </div>
            <div id="school">
              <h4>High School</h4>
              <p>
                | SSC
                <br />
                | 2015-2020
                <br />| ZPHigh School|Thotagaruvu,Vizag
              </p>
            </div>
          </div>
        </div>
        <div id="certifications">
          <h2 id="certifications_heading">certifications</h2>
          <div className="mobile_certifications">
            <h6>PLC-Scada certificate</h6>
            <img src={plcScadaCertificate} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
  return resume;
}
function Projects() {
  let projects = (
    <div id="mobile_project_section">
      <div id="mobile_project_heading">
        <h2>Projects</h2>
      </div>
      <div id="project_set">
        <div className="project">
          <h3>Portfolio Website</h3>
          <Link to="">
            <img src={project1} alt="img" />
          </Link>
          <p>Technologies used: React,Express,MongoDB</p>
        </div>
      </div>
    </div>
  );
  return projects;

}
const base_url = `http://localhost:5000`;

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
      return;
    }

    try {
      const user = { name, email, message }; // Define user object here
      const response = await fetch(`${base_url}/api/users/add-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fixed typo
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setFeedback("User added successfully!");
      } else {
        setFeedback("Email is already contact us, Check your email");
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
    }
  };

  let contact = (
    <div id="contact_section">
      <form id="mobile_form" onSubmit={userHandler}>
        <div>
          <h2>Contact me</h2>
          <br />
        </div>
        <div id="textmail">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              id="Fname"
              className="formText"
              name="firstname"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="email"
              placeholder="Email address"
              id="Mailid"
              className="formText"
              name="mailid"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <br />
          <div>
            <textarea
              placeholder="text message"
              id="msg"
              cols={10}
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <br />
        <input type="Submit" value="Send Message" id="mobile_submit" />
        <p>{feedback}</p>
      </form>
    </div>
  );
  return contact;
}
function MobileMain() {
  return (
    <main id="mobileMain">
      <Profile />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
}

export default MobileMain;
