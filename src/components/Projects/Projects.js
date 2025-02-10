import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FITLIFE from "../../Assets/Projects/FITLIFE.png";
import PICTORIA from "../../Assets/Projects/PICTORIA.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FITLIFE}
              isBlog={false}
              title="FIT-LIFE"
              description="A React and Tailwind CSS-based gym website offering exercise guides with a responsive, user-friendly design and engaging fitness content."
              ghLink="https://github.com/bhavdeep610/Gym_Web"
              demoLink="https://gym-fit-life.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PICTORIA}
              isBlog={false}
              title="PICTORIA"
              description="Pictoria is a blog app which allows users to perform CRUD operations.
Frontend is made with React and Backend is made with Appwrite."
              ghLink="https://github.com/bhavdeep610/BlogX-BlogApp"
              demoLink="https://pictoria-app.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
