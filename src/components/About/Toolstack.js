import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiIntellij } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiMacos,
  SiJira,
  SiWindows,
  SiAtlassian,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="font30">VsCode</span>
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
    </Row>
  );
}

export default Toolstack;
