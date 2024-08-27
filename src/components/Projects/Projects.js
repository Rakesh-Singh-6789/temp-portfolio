import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bulletin from "../../Assets/Projects/BulletinProjectFrame.png";
import moviePedia from "../../Assets/Projects/MoviePediaProjectFrame.png";
import videoPlatform from "../../Assets/Projects/VideoPlatform.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{
              justifyContent: "center",
              paddingTop: "30px",
            }}>
        <h1 className="project-heading">
          My <strong className="orange">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviePedia}
              title="Smart Intrusion/Suspect Detection"
              description="The project developed a cloud-based, real-time facial recognition system for smart intrusion and suspect detection. Utilising React, Node.js, and AWS Rekognition APIs, detection accuracy improved by 20%. Hosted on AWS EC2 with 99.9% uptime, the system also featured IoT integration with a Raspberry Pi 3 for real-time photo and video capture."
              ghLink="https://github.com/Rakesh-Singh-6789/Smart-Intrusion-Suspect-Detection-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoPlatform}
              title="Decentralized YouTube"
              description="This project created a decentralized, blockchain-based video-sharing app with a focus on user data control, censorship resistance, and transparency. Core features were built using Truffle, Solidity, and IPFS for secure content management. The UI was designed in Figma and implemented with HTML5/CSS3 and Next.js for an engaging user experience." 
              ghLink="https://github.com/Rakesh-Singh-6789/web3-youtube"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bulletin}
              title="Bulletin"
              description="A well-featured and professional-looking News Android application which fetches news from newsApi.org. News can be categorized as technology, business, sports etc. and has sharing and bookmarking features, using Java and Room for the offline database."
              ghLink="https://github.com/Rakesh-Singh-6789/Bulletin"
              demoLink="https://drive.google.com/file/d/1lhliv8xkiBblzbFQKFkcXuAt9bEifBoV/view?usp=sharing"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviePedia}
              title="MoviePedia"
              description="An Android Application which fetches the APIs from TheMovieDB. We have the option to sort movies through ratings and recent ones.
              It has a decent and attractive UI; I have used Android Architecture Components (Room, Live Data and View Model)."
              ghLink="https://github.com/Rakesh-Singh-6789/MovieMate"
              readmeLink="https://github.com/Rakesh-Singh-6789/MovieMate#readme"
              demoLink="https://drive.google.com/file/d/1wXyhTpKwIyF4ODt1DfvAMNW17QRhqzg7/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoPlatform}
              title="Video-API-platform"
              description="The Video API platform allows feature-rich, real-time communication capabilities, including 1:1 consultation, group video chat and large-scale broadcasts to tens of hundreds of people, all possibilities using Node.js, Express, PeerJs, HTML, CSS and JavaScript."
              PS="Features in development: Screen sharing and session recording."
            />
          </Col>

          
          <h1 className="orange">More coming soon...</h1>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
