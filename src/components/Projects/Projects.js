import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import bulletin from "../../Assets/Projects/BulletinProjectFrame.png";
import moviePedia from "../../Assets/Projects/MoviePediaProjectFrame.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={leaf}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
