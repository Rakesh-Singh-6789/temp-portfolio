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
import { SiTypescript, SiGraphql, SiMysql, SiSqlite, SiPostgresql } from "react-icons/si";
import { MdReadMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RiNextjsLine, RiNodejsFill  } from "react-icons/ri";

function Techstack() {
  const navigate = useNavigate();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
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
        <span className="font16">Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid/>
        <span className="font16">Android</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="font16">Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiNextjsLine />
        <span className="font16">Next.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <span className="font16">GraphQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <span className="font16"></span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <span className="font16">SQLite</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <span className="font16">PostgreSQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiNodejsFill />
        <span className="font16">Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" 
       onClick={()=>navigate("/resume")}>
        <MdReadMore />
        <span className="font16">More in resume</span>
      </Col>
    </Row>
  );
}

export default Techstack;
