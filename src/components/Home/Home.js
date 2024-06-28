import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
//import myImg from "../../Assets/avatar1.png";
import myImg from "../../Assets/casual.jpg";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const avatarImg = {
  borderRadius : '50%'
}

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
                <h1 className="">
                  Myself
                  <strong className="main-name"> Rakesh Singh </strong>
                </h1>
              <div style={{ paddingTop: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={3} style={{ marginTop: '100px', paddingRight: '80px'}}>
                <img src={myImg} className="img-fluid" style={avatarImg} alt="avatar" />
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
            <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
}

export default Home;
