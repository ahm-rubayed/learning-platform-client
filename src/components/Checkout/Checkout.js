import React from "react";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();
  const { title, image_url, price } = course[0];
  const rating = course[0].rating.badge;
  console.log(course);
  return (
    <div className="position-relative top-50 mt-5 pt-5">
      <Card style={{ width: "50%", margin: "auto" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Checkout;
