import React from "react";
import errorImage from "../../assets/error.png";

const ErrorRoute = () => {
  return (
    <div>
      <img src={errorImage} className="img-fluid mx-auto d-flex" alt="" />
    </div>
  );
};

export default ErrorRoute;
