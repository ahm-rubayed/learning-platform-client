import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../../Course/Course";

const RightSideBar = () => {
  const courses = useLoaderData();
  
  return (
    <div className="container mx-auto position-relative top-25 mt-5 pt-5 row justify-content-center">
      {courses.map((course) => (
        <Course key={Course.courses_id} course={course}></Course>
      ))}
    </div>
  );
};

export default RightSideBar;
