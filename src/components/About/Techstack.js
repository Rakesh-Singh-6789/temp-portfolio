import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiAndroid,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="font16">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <span className="font16 px-1">TypeScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple/>
        <span className="font16">AngularJs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="font16">ReactJs</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
        <span className="font16">HTML</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
        <span className="font16">CSS</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <span className="font16">JAVA</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid/>
        <span className="font16">Android</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="font16">Git</span>
      </Col>
    </Row>
  );
}

export default Techstack;
