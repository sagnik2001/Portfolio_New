import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight } from "react-icons/im"
const AboutCard = () => {
   return (
      <Card className="quote-card-view">
         <Card.Body>
            <blockquote className="blockquote mb-0">
               <p style={{ textAlign: "justify" }}>
                  Hello Guys, I am <span className="purple"> Sagnik Pal </span>
                  from <span className="purple"> Kolkata,India </span>
                  <br />
                  I am an engineer currently learning to master the art of creating scalable websites and applications. My interest lies in crafting exceptional user experiences and delivering meaningful impact through my work.
                  <br />
                  <br />
                  I also like a bunch of other activities to do!
               </p>
               <ul>
                  <li className="about-activity">
                     <ImArrowRight />  Painting
                  </li>
                  <li className="about-activity">
                     <ImArrowRight />  Reading Books
                  </li>
                  <li className="about-activity">
                     <ImArrowRight /> Travelling
                  </li>
               </ul>
            </blockquote>
         </Card.Body>
      </Card>
   )
}
export default AboutCard
