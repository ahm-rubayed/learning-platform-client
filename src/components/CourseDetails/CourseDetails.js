import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseDetails = () => {
  const user = useLoaderData();
  const { title, image_url, details } = user[0];
  console.log(user);
  return (
    <div className="container mx-auto my-5 pt-5 w-75">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Img
          variant="top"
          style={{ width: "100%", height: "100%" }}
          src={image_url}
        />
        <Card.Body>
          <Card.Text>{details}</Card.Text>
          <Button className="btn-submit">Enroll Course</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
