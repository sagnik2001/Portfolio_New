import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from ".././components/profile.jpeg"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="purple"> HELLO THERE! </span> 
            </h1>
            <p className="home-about-body">
              I am a Front End Web Developer . Aspiring to be a Software Engineer
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple"> C++,Javascript,and C </b>
              </i>
              <br />
              <br />
              My field of Interest's are creating new &nbsp;
              <i>
                <b className="purple">Websites </b> , <b className="purple">Debugging </b> 
                also in areas related to{" "}
                <b className="purple">
                   Web Design
                </b>
              </i>
              <br />
              <br />
            I have worked on number of projects using <b className="purple">Html Css</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library 
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>
              <i>
                <b >
                  {" "}
                  and also backend languages such as
                </b>
              </i>
              <i>
                <b className="purple"> Node js with MongoDb,MySql as Database</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profile} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel Free To  <span className="purple">connect </span>With Me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sagnik2001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100008649978877"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sagnik-pal-4437b2209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/p.sagnik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
