import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function AboutCard() {
  const navigate = useNavigate();
  return (
    <Card className="quote-card-view">
        <blockquote className="blockquote mb-0">
          <span style={{ textAlign: "justify" }}>
            <span>
            <ul className="list-unstyled">
                <li>Hello, Myself <span className="orange">Rakesh Singh </span>
                    from <span className="orange"> Fullerton, California, USA.</span>
                    <br />As a Master’s in Computer Science pursuing student with <span className="orange">2</span> years of full-time work experience as a <span className="orange">Software Engineer-I/II</span>. I'm elated to share my experience with you.
                    <br />
                    <ul>
                        <li> I worked previously with <a className="text-start orange" target={"_blank"} href="https://wingify.com/">
              Wingify Software Pvt. Ltd.</a>; I worked as Software Engineer I/II in the Application Delivery team. 
              As part of the application delivery team, I got a chance to solve technical problems of immense complexity and scope. 
              I built reusable and business logic components at the front-end for <a className="orange text-start" target={"_blank"} href="https://app.vwo.com/">(VWO)</a> using the <span className="orange">AngularJs framework</span>, 
              which reduced the application response time by 38%.</li>
                        <li>
              I built highly scalable features and helped improve <a className="orange text-start" target={"_blank"} href="https://app.vwo.com/">VWO's</a> user experience. My work greatly influences how the users/customers perceive our product.</li>
              <li>
                  I also voluntarily initiated and took full ownership (including writing design, tech docs, and implementation) of phase 1 of an automated portal for mundane tasks for internal developers using the ReactJs library, which increased the internal developers' productivity by twice (100%).
                </li>
                <li>

                At Wingify, I often collaborated with inter-teams and helped them with their AngularJs and JavaScript-related issues, which helped them to achieve their sprint targets easily. 
                </li>
                <li>
              I also mentored four interns and three full-time software engineers, which enhanced their learning and understanding of the application.

                </li>
                
                <li>
              As I grow in my career, applying my skills to help others and make an impact on the world becomes more important.

                </li>
                    </ul>
                </li>
                
                <li className="text-start">
                  <br/>
                    Please find my <span className="astext orange" onClick={()=>{navigate('/resume')}}><b>
                    <u>resume</u></b></span> in the navbar for my Android Application Development Intern, <span className="astext orange" onClick={()=>{navigate('/projects')}}><b>
                    <u>projects</u></b></span> and <span className="astext orange text-start" onClick={()=>{navigate('/certis')}}><b>
                    <u>achievements and certifications</u></b></span>.
                </li>
              </ul>
            </span>
            <span className="orange">"Thank you :)"</span>
          </span>
        </blockquote> 
    </Card>
  );
}

export default AboutCard;
