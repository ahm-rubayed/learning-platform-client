import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Course = (course) => {
  const { title, image_url, details, courses_id } = course.course;;

  return (
    <div className="col mt-5">
      <Card className="border-0 shadow" style={{ width: "20rem", height: "100%", margin: "auto" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">
            {details.length > 100 ? (
              <>
                {details.slice(0, 100) + "..."}
                <Link to={`/course/${courses_id}`}>Read More</Link>
              </>
            ) : (
              details
            )}
          </Card.Text>
          <Button className="btn-color">
            <Link
              className="text-white text-decoration-none"
              to={`/course/${courses_id}`}>
              Course Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
