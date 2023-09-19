import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setusername] = useState("");
  const [user_password, setuser_password] = useState("");
  const [displayname, setdisplayname] = useState("");
  const navigate = useNavigate();

  async function signup(e) {
    e.preventDefault();
    console.log("Deeva");
    let response = await fetch(
      `https://apex.oracle.com/pls/apex/deeva/post/signup?username=${username}&user_password=${user_password}&displayname=${displayname}`,
      { method: "POST" }
    );
    if (response.status == 200) {
      navigate("/instagram");
    }
  }

  return (
    <form onSubmit={signup} className="container">
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
            value={displayname}
            onChange={(e) => setdisplayname(e.target.value)}
            type="text"
            className="displayname form-control my-1"
            id="inputname"
            placeholder="Name"
            required
          />
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            type="text"
            id="inputusername"
            className="username form-control my-1"
            placeholder="Username"
            required
          />
          <input
            value={user_password}
            onChange={(e) => setuser_password(e.target.value)}
            type="text"
            id="inputpassword"
            className="password form-control my-1"
            placeholder="Password"
            required
          />
          <p className="fs-6 fw-light">
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
          </p>
          <p className="fs-6 fw-light">
            By signing up, you agree to our Terms , Privacy Policy and Cookies
            Policy .
          </p>
          <button type="submit" className="btn btn-primary w-100 my-3">
            Sign Up
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-5 col-sm-6 col-12 border m-auto my-3">
          <p className="text-center my-2">
            Have an account? <Link to="/instagram">Log In</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
