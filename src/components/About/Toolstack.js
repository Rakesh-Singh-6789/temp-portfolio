import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiIntellij } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiMacos,
  SiJira,
  SiWindows,
  SiAtlassian,
  SiSentry,
  SiAmazonaws,
  SiJenkins,
} from "react-icons/si";
import { MdReadMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Toolstack() {
  const navigate = useNavigate();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="font30">VsCode</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSentry />
        <span className="font30">Sentry.io</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="font30">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <span className="font30">Jira</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij />
        <span className="font30">Intellij</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <span className="font30">Jenkins</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <span className="font30"></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" 
       onClick={()=>navigate("/resume")}>
        <MdReadMore />
        <span className="font16">More in resume</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
