import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNotepadplusplus,
  SiAtom,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://code.visualstudio.com/docs">
        <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://github.com/atom/atom">
        <SiAtom />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://npp-user-manual.org/">
        <SiNotepadplusplus />  
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
