import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import "./Login.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { login, handleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider()

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;

    login(email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });
  };

  const handleGoogleSignIn = () => {
    handleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => console.error(e));
  };

  const handleGithubSignIn = () => {
    handleLogin(gitHubProvider)
    .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true });
    })
    .catch(e => console.error(e))
  }

  return (
    <div className="login">
      <div className="bg-white shadow text-center login-item rounded mt-3 p-5 mx-auto position-absolute top-50 start-50 translate-middle">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleSubmit} className="mt-5">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-control d-inline-block w-100 my-3 border-0 border-bottom text-muted"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-control d-inline-block w-100 border-0 border-bottom text-muted mb-3"
          />

          <span className="text-danger">{error}</span>
          <input
            type="submit"
            value="Login"
            className="bg-none btn-submit mt-5 w-100 border-0 text-white py-2 rounded"
          />
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="bg-none mt-4 w-100 border py-2 rounded-pill d-flex justify-content-center align-items-center">
          <FaGoogle className="me-3" />
          Google
        </button>
        <button onClick={handleGithubSignIn} className="bg-none mt-2 w-100 border py-2 rounded-pill d-flex justify-content-center align-items-center">
          <FaGithub className="me-3" />
          GitHub
        </button>

        <p className="mt-5">
          Don't have an account?
          <Link to="/register" className="fw-bold">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;