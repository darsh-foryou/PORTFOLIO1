import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDocker,
} from "react-icons/di";
import {
  SiSqlite,
  SiC,
  SiExpress,
  SiFirebase,
  SiSolidity,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://www.javascript.com/"> 
        <DiJavascript1 />
          </a>
        
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a
        
        href="https://nodejs.org/en/docs"><DiNodejs /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://react.dev/learn">
        <DiReact />  
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://docs.soliditylang.org/en/v0.8.21/">
        <SiSolidity />  
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://www.mongodb.com/docs/manual/core/document/">
        <DiMongodb />  
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://www.sqlite.org/docs.html">
          <SiSqlite />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://expressjs.com/en/5x/api.html">
        <SiExpress />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://docs.docker.com/reference/">
          <DiDocker/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://devdocs.io/c/">
          <SiC />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://firebase.google.com/docs">
        <SiFirebase />  
        </a>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://docs.python.org/3/">
        <DiPython/>  
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
        href="https://docs.oracle.com/en/java/">
        <DiJava /> 
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
