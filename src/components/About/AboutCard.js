import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Darshil Modi </span>
            from <span className="purple"> Mumbai, India.</span>
            <br /> I am currently a first-year student pursuing a Master's degree in Computer Science at Syracuse University, where I am actively engaged in expanding my knowledge and skills in the field of computer science.
            <br />
            In addition, I am actively exploring the fascinating realms of blockchain technology, further augmenting my understanding and proficiency in cutting-edge technological advancements.
            <br />
            <br />
            Life apart from coding !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't Dream Your Life, Live Your Dream"{" "}
          </p>
          <footer className="blockquote-footer">Darshil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
