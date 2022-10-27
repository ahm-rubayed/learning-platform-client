import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const {title} = course[0];
    console.log(course)
    return (
     <div className="position-absolute top-50 start-50 translate-middle mt-5">
        <h4>{title}</h4>
     </div>
    );
};

export default Checkout;