import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
              I am pursuing Master of Science in Computer Science (Aug 2022-May 2024) at &nbsp;
              <a target="_blank" className="orange" href="http://www.fullerton.edu/rankings/">
                California State University, Fullerton USA. 
              </a>

              <br/>
              <br/> 

              I am an <span className="orange">experienced</span> web application developer with <span className="orange">2 years</span> of experience developing a complex and sophisticated A/B Testing web application&nbsp;
              <a className="orange" target={"_blank"} href="https://app.vwo.com/">
                (VWO) 
              </a> for&nbsp;
              <a className="orange" target={"_blank"} href="https://wingify.com/">
                Wingify Software Pvt. Ltd.
              </a>
              <br/>
              <br/> 

              Prior to that, I completed my Bachelor of Technology in Computer Science and Engineering with a cumulative GPA of
              <span className="orange"> 9.11/10 = 3.97/4 </span>
              from&nbsp;
              <a target={"_blank"} className="orange" href="http://www.ipu.ac.in/">Guru Gobind Singh Indraprastha University</a>, New Delhi, India.
              {/* <NavLink className="">
                Know more in details. 
              </NavLink> */}
              <br/> 
              <br/> 
              Helping in making this world 🌎 a better place.
              <br/>  
              <br/>  
              <span className="astext orange underline" onClick={()=>{
                navigate('/about');
              }}> <b><u>More about me...!</u></b></span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
