import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="bottom" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
          {props.readmeLink ? <span> <a rel="noreferrer" target={"_blank"} href={props.readmeLink} className="orange"> Learn more.. </a></span> : ""}
          {props.PS ? <><br/><span>{props.PS}</span></> : ""}
        </Card.Text>
       {props.ghLink ? <div className="project-card-footer">
        <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;GitHub
          </Button>
          {"\n"}
          {"\n"}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
       </div>:<></>} 
       
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
