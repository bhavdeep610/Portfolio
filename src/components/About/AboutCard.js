import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhavdeep Singh Rajora </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I have completed B.Sc in Maths and currently pursuing MCA from MLSU, Udaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new Tech Stacks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Innovation is the ability to see change as an opportunity, not a threat." — Steve Jobs
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
