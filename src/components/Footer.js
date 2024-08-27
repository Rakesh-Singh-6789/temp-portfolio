import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Row>
      <Col md={12} className="home-about-social">
        <p>
          Feel free to <span className="orange"> ping or connect </span>with me
        </p>
        <ul className="home-about-social-links">
        <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/rakesh-r-singh/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="mailto:worksinghrakesh@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <SiGmail />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://github.com/Rakesh-Singh-6789"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/rakesh_rawat678"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Footer;
