import React from 'react';
import {Col,Row} from "react-bootstrap"
import {CgCPlusPlus} from "react-icons/cg";
import { DiHtml5,DiBootstrap,DiCss3,DiJavascript1,DiReact,DiGit,DiMongodb } from "react-icons/di";
import {FaNode} from "react-icons/fa"
import { SiFirebase } from "react-icons/si";
import {TbBrandTypescript,TbBrandMysql } from "react-icons/tb";
const TechTools=()=>{
  return(
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <CgCPlusPlus />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiReact />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiBootstrap />
    </Col>

    <Col xs={4} md={2} className="tech-icons">
      <DiGit />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiFirebase />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiMongodb />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaNode />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <TbBrandTypescript />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <TbBrandMysql />
    </Col>
  </Row>
  )
}
export default TechTools
