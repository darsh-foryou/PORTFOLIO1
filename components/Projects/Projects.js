import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";
import tindog from "../../Assets/Tindog.PNG"
import amazon from "../../Assets/Amazon.PNG";
import blog from "../../Assets/Blog.PNG";
import todo from "../../Assets/TODO.PNG"

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
              imgPath={amazon}
              isBlog={false}
              title="BuyIt 🛍️"
              description="BuyIt is an Amazon clone utilizing React.js, Node.js, MongoDB, and several APIs. This project incorporates features enabling users to browse a wide range of products and seamlessly add them to their shopping carts."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Bloggy"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="Tindog 🐶"
              description="Tindog is a Tinder-like platform for dog owners, developed with React.js and Node.js, enabling users to match their dogs with other local dogs and arrange meetups."             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="DAILY NOTEPAD 📝"
              description="Daily Notepad is a simple task management website created using HTML, CSS, and JavaScript. It empowers users to input and track their daily tasks, facilitating more organized daily planning."   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
