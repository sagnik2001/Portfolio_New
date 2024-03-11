import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard.js";
import project1 from "./Project-videos/Project-youtube.mp4";
import project2 from "./Project-videos/Project2-Chatapp.mp4";
import project3 from "./Project-videos/Project3-Pregbuddy.mp4";
import project4 from "./Project-videos/Project4-codeeditor.mp4";
import "./Projects.css";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>A Dive into few of my Recent Projects</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={project3}
              title="PregBuddy"
              description="Pregbuddy is a simple platform to book your appointments and track them. . Connection with doctors and appointment bookings are made simpler. Throughout it will build connections with your doctors."
              link="https://prega-tracker-web.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={project1}
              title="My React Youtube-Player"
              description="A youtube-player created by reactjs where you can  play videos like your youtube"
              link="https://github.com/sagnik2001/my-youtube-react-app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={project2}
              title="Chatify-A Web Chat Application"
              description="Web Application For Chat Using ReactJs and Firebase. Users can authenticate, and send messages synchronized with Firebase Realtime Database."
              link="https://chatifyus.netlify.app/"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={project4}
              title="A Online Code Editor"
              description="A online code editor for HTML,CSS and Js where you can code and live preview"
              link="https://editor-online-code.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
      
    </Container>
  );
};
export default Projects;
