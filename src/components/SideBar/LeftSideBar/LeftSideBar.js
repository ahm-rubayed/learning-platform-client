import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://courseella-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="position-relative top-25 mt-5 pt-5">
      <h3 className="mt-5">Course Category</h3>
      <div className="mt-4">
        {categories.map((category) => (
          <p>
            <Link
              className="text-decoration-none text-dark"
              to={`/category/${category.id}`}>
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
