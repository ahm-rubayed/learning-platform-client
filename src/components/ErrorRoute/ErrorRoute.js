import React from 'react';
import errorImage from "../../assets/error.png"

const ErrorRoute = () => {
    return (
        <div>
            <img src={errorImage} className="w-50 mx-auto d-flex" alt="" />
        </div>
    );
};

export default ErrorRoute;