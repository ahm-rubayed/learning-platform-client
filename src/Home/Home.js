import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <div className="home-item text-white">
          <small className="text-uppercase fw-bold fst-italic">
            Welcome to courseella
          </small>
          <h1 className="fw-bold mt-2">Learn without limits...</h1>
          <p className="desc-color">
            Start, switch, or advance your career with more than 5,200 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
            <Button className="btn-color border-0 mt-2 d-block d-sm-inline">
              <Link to="/courses" className="text-white text-decoration-none">
                Get started now <FaArrowRight />{" "}
              </Link>
            </Button>
            <Button className="mt-2 btn-color border-0 ms-0 ms-sm-2">
              <Link to="/courses" className="text-white text-decoration-none">
                View Course <FaArrowRight />
              </Link>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
