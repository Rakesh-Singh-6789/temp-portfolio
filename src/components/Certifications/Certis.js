import { Card, Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import googleUdacity from "../../Assets/../Assets/certis/GoogleUdacity.png";
import awsML from "../../Assets/../Assets/certis/awsML.png";
import CCA1 from "../../Assets/../Assets/certis/CCA1.png";
import CCA2 from "../../Assets/../Assets/certis/CCA2.png";
import CodeJam from "../../Assets/../Assets/certis/CodeJam.png";
import codingBlocks from "../../Assets/../Assets/certis/codingBlocks.png";
import EcellMsit from "../../Assets/../Assets/certis/EcellMsit.png";
import IEO from "../../Assets/../Assets/certis/IEO.png";
import internship from "../../Assets/../Assets/certis/internship.png";
import Udemy from "../../Assets/../Assets/certis/Udemy.png";
import kickStart from "../../Assets/../Assets/certis/kickStart.png";

const certificationPaths = [
    {
        name: "Google-udacity",
        path: googleUdacity,
        description: "Achieved Nanodegree Scholarship from Google Udacity (2018). Secured 19th rank among 15000+ contestants in India."
    },
    {
        name: "Google Kickstart",
        path: kickStart,
        description: "Google Kickstart 2019, formerly known as APAC. Secured Global Rank: 926 in Round C and Qualified for Round D."
    },
    {
        name: "Google CodeJam",
        path: CodeJam,
        description: "Google Code Jam 2019. Secured Global Rank: 3897 and Qualified till Round 1C."
    },
    {
        name: "AWS Fundamental Machine Learning",
        path: awsML,
        description: "AWS Machine Learning fully funded scholarship provided by Udacity."
    },
    {
        name: "CCA JAVA 1",
        path: CCA1,
        description: "Qualified JAVA Level 1 at The Cambridge Certification Authority."
    },
    {
        name: "CCA JAVA 2",
        path: CCA2,
        description: "Qualified JAVA Level 2 at The Cambridge Certification Authority."
    },
    {
        name: "IEO 2019",
        path: IEO,
        description: "Qualified IEO (Indian Engineering Olympiad) 2019."
    },
    {
        name: "Android Internship",
        path: internship,
        description: "Android internship at W3Dev Pvt. Ltd. completion certificate."
    },
    {
        name: "Udemy",
        path: Udemy,
        description: "Udemy Android Course Completion Certificate."
    },
    {
        name: "DS Algo",
        path: codingBlocks,
        description: "Coding Blocks JAVA Data Structure Course Completion Certificate."
    },
    {
        name: "Google-udacity",
        path: EcellMsit,
        description: " E-Cell Society active member (2017-2018) certificate."
    }
];

function Certis() {
    return (
        <Container fluid className="project-section">
        <Particle />
        <Container style={{
            justifyContent: "center",
            paddingTop: "30px",
          }}>
            <h1 className="project-heading">
                <strong className="orange">Certifications</strong>
            </h1>
            <p style={{ color: "white" }}>
                Here are a few of my certifications.
            </p>
        </Container>

        <Row className="project-section d-flex justify-content-center">{certificationPaths.map((certi,index) => {
            return(
                    <Col key={index}  md={4} className="project-card">
                    <Card className="project-card-view">
                    <Card.Img variant="bottom" src={certi.path} alt="card-img" loading={"lazy"}/>
                    <Card.Body>
                        <Card.Title>{certi.name}</Card.Title>
                        <Card.Text style={{ textAlign: "justify" }}>
                            {certi.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>   
            );
        })}</Row>
      </Container>
        
    );
}

export default Certis;
