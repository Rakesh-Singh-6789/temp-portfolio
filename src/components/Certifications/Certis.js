import { Card } from "react-bootstrap";
 /Certifications/certis/Google-udacity.pdf

const certificationPaths = [
    {
        name: "",
        certiPath: "https://github.com/Rakesh-Singh-6789/temp-portfolio/blob/master/src/Assets/Projects/BulletinProjectFrame.png",
        description: ""
    }
];

function Certis() {
    return (
        <>
            {   
                <Card className="project-card-view">
                <Card.Img variant="top" src={Google-uda} alt="certification-loading"/>
            </Card>}
        </>  
    );
}

export default Certis;
