import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Siddhartha Nirvan</span>{" "}
            from <span className="purple">Hapur, UP, India</span>.
            <br />
            I’m currently a <span className="purple">Computer Science Student</span> at{" "}
            <span className="purple">Meerut Institute Of Engineering & Technology</span>.
            <br />I hold a B.Tech degree with a CGPA of{" "}
            <span className="purple">7.0/10</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Active participation in college workshops and technical events
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball in college level sports events
            </li>
            <li className="about-activity">
              <ImPointRight /> Event coordination during college activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Siddhartha Nirvan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
