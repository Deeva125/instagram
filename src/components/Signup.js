import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-sm-6 col-12 border m-auto">
          <h1 className="my-4 text-center">Instagram</h1>
          <h5 className="text-center">
            Sign up to see photos and videos from your friends.
          </h5>
          <button className="btn btn-primary w-100 my-3">
            <i className="bi bi-facebook mx-1"></i>Log in with Facebook
          </button>
          <div className="d-flex justify-content-between">
            <hr className="w-50"></hr>
            <span className="mx-3">OR</span>
            <hr className="w-50"></hr>
          </div>
          <input
            className="display_name form-control my-1"
            placeholder="Name"
          ></input>
          <input
            className="username form-control my-1"
            placeholder="Username"
          ></input>
          <input
            className="password form-control my-1"
            placeholder="Password"
          ></input>
          <p className="fs-6 fw-light">
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
          </p>
          <p className="fs-6 fw-light">
            By signing up, you agree to our Terms , Privacy Policy and Cookies
            Policy .
          </p>
          <button className="btn btn-primary w-100 my-3">Sign Up</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-5 col-sm-6 col-12 border m-auto my-3">
          <p className="text-center my-2">
            Have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
