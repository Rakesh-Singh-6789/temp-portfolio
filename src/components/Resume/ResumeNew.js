import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import image from "../../Assets/../Assets/error.png"
import { FiExternalLink } from "react-icons/fi";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const gDrivelink = 'https://drive.google.com/file/d/1adNhepCoErgfkLLiddBmXP6JMT3wzdUk/view?usp=sharing';

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={gDrivelink}
            target="_blank"
            style={{ maxWidth: "25%" }}
          >
           
            &nbsp;Download Resume: Google Drive Link&nbsp;
            <FiExternalLink style={{marginTop: '-5px'}}/>
          </Button>
        </Row>

        <Row className="resume resumeView" style={{margin: "auto"}}>
          <img src={image} loading={"lazy"}></img>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={gDrivelink}
            target="_blank"
            style={{ maxWidth: "25%" }}
          >
            &nbsp;Download Resume: Google Drive Link&nbsp;
            <FiExternalLink style={{marginTop: '-5px'}}/>
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
