import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import laptopImg from "../../Assets/about.svg";
import myImg2 from "../../Assets/casual2.jpg";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { avatarImg } from "./Home";
import { FiExternalLink } from "react-icons/fi";


function Home2() {
  const navigate = useNavigate();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="orange"> quickly introduce </span> myself.
            </h1>
            <p className="home-about-body">
            A Software Engineer, Graduated with a Master of Science, in Computer Science.
            <br></br>

            I bring a <span className="orange">robust experience</span> developing complex and sophisticated mobile and web applications like A/B Testing Tool &nbsp;
              <a className="orange" target={"_blank"} href="https://app.vwo.com/">
                (VWO) <FiExternalLink />
              </a> 
            <br></br>
            I am proficient in <span className="orange">modern web-dev frameworks</span> using JavaScript, TypeScript, Node.js, Java, React, AngularJS, HTML, CSS, and more. My experience includes building high-quality systems, collaborating with cross-functional teams, and delivering features to production efficiently.
            
              <br/> 
              <br/> 
               <span className="orange">TDLR;</span> A Software Engineer with <span className="orange">"make it happen"</span> mindset.
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg2} className="img-fluid" style={{...avatarImg, maxWidth: '75%'}} alt="avatar" />
              <img src={laptopImg} alt="about" style={{marginTop: '20px'}} className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
