import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Resumecontent from "./ResumeContent";
import pdf from "./pdf/newResume.pdf";
import "./Resume.css";
const Resume = () => {
  const url =
    "https://portfoliodata-77693-default-rtdb.firebaseio.com/message.json/";
  const [cgpa, Setcgpa] = useState(0);
  const [sem, Setsem] = useState(0);
  const [gfg, Setgfg] = useState(0);
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);
        Setcgpa(responseData.cgpa);
        Setsem(responseData.sem);
        Setgfg(responseData.geeksforgeeks);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMarks();
  }, []);

  return (
    <Container fluid className="resume-section">
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          className="boton"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <BsBoxArrowUpRight />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer in Appifinity"
              date="Jan23 - Present"
              content={[
                "Appifinity (https://www.appifinity.com/) - A Platform for converting your websites to PWAs.",
                "Developed the website from scratch and converted it to PWA.",
                "Wrote the service workers for fetching notifications, caching assets and making it work in offline mode.",
                "Collaborated closely with design team for UI/UX elements.",
                "Conducted performance audits using tools such as Lighthouse and Chrome Dev Tools for optimizations and identify bottlenecks."
              ]}
            />
            <Resumecontent
              title="Front End Web Developer in BabyCodePvt.Ltd"
              date="Nov 2021 - Mar 2022 · 5 mos"
              content={[
                "Created the frontend UI of the entire website from scratch using reactjs.", " Implemented various functionalities such as chatting and authentication using firebase.", "Spearheaded the integration of Firebase Authentication, enabling seamless login and registration processes for users, and real-time chat implementation for users", " Handled errors and worked with APIs implementations and various reactjs functionalities,npm packages, and components.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="GSSOC contributor 2022"
              content={[
                "Contributed on few open source projects",
              ]}
            />
            <Resumecontent
              title="Web Developer [Hack4Bengal Hackathon]"
              content={[
                "Worked on building the complete MERN project.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Uem Web Battle Hackathon]"
              content={[
                "Worked on building front-end UI design using HTML, CSS, JavaScript ,React.",
              ]}
            />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Schooling-Methodist School Dankuni,Hoogly"
              date="2007- 2020"
              content={["ISC Marks-92.5%"]}
            />
            <Resumecontent
              title="University Of Engineering And Management "
              date="2020 - Present"
              content={[`CGPA: 8.35 (Till 7th Sem)`]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent title="" content={[`Solved Over 600 problems across Leetcode and 250 problems in GFG`]} />
            <Resumecontent title="" content={[`Ranked Top 22% in Leetcode Contest`]} />
            <Resumecontent title="" content={[`Secured 2785 out of 19437 in Leetcode Biweekly Contest`]} />
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          className="boton"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <BsBoxArrowUpRight />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
};
export default Resume;
