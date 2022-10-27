import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideBar from "../SideBar/LeftSideBar/LeftSideBar";
import RightSideBar from "../SideBar/RightSideBar/RightSideBar";

const Courses = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col lg="2" className="d-none d-lg-block">
          <LeftSideBar></LeftSideBar>
        </Col>
        <Col lg="10">
          <RightSideBar></RightSideBar>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
