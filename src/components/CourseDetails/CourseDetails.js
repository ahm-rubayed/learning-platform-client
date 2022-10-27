import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useReactToPrint } from "react-to-print";
import { FaFilePdf } from "react-icons/fa";

const CourseDetails = () => {
  const user = useLoaderData();
  const { title, image_url, details, courses_id } = user[0];

  // PDF file
  const componenetRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componenetRef.current,
    documentTitle: "course",
    onAfterPrint: () => console.log("Print success"),
  });

  return (
    <div ref={componenetRef} className="container mx-auto my-5 pt-5 w-75">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Title>{title}</Card.Title>
          <Button
            onClick={handlePrint}
            className="btn-submit"
            title="Print the file">
            <FaFilePdf />
          </Button>
        </Card.Header>
        <Card.Img
          variant="top"
          style={{ width: "100%", height: "100%" }}
          src={image_url}/>
        <Card.Body>
          <Card.Text>{details}</Card.Text>
          <Button className="btn-submit">
            <Link
              to={`/checkout/${courses_id}`}
              className="text-white text-decoration-none">
              Enroll Course
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
