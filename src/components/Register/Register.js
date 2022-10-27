import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        navigate(from, {replace: true});

      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    handleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        setError("")
        navigate(from, {replace: true});
      })
      .catch((e) =>{
        console.error(e)
        setError(e.message)
      });
  };

  return (
    <div className="login">
      <div className="bg-white shadow text-center login-item rounded mt-3 p-5 mx-auto position-absolute top-50 start-50 translate-middle">
        <h1 className="text-center">Register</h1>
        <form onSubmit={handleSubmit} className="mt-5">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="form-control d-inline-block w-100 my-3 border-0 border-bottom text-muted"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-control d-inline-block w-100 mb-3 border-0 border-bottom text-muted"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-control d-inline-block w-100 border-0 border-bottom text-muted mb-3"
            required/>
          <input
            type="submit"
            value="Sign Up"
            className="bg-none btn-submit mt-4 w-100 border-0 text-white py-2 rounded"
          />
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="bg-none mt-4 w-100 border py-2 rounded-pill d-flex justify-content-center align-items-center"
        >
          <FaGoogle className="me-3" />
          Google
        </button>
        <button className="bg-none mt-2 w-100 border py-2 rounded-pill d-flex justify-content-center align-items-center">
          <FaGithub className="me-3" />
          GitHub
        </button>
        <span className="text-danger d-inline-block mt-3">{error}</span>

        <p className="mt-5">
          Already have an account?
          <Link to="/login" className="fw-bold">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
