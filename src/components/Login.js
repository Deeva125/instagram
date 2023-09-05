import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  // not a secure way of authentication
  const authenticate = async () => {
    console.log("authenticating...");
    let response = await fetch(
      "https://apex.oracle.com/pls/apex/deeva/post/getUsers"
    );
    let data = await response.json();
    data = data.items;
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (data[i].username === username) {
        // validate password
        if (data[i].user_password === password) {
          localStorage.setItem("username", username);
          localStorage.setItem("authenticated", true);
          navigate("/home");
          return;
        }
      }
    }
    localStorage.setItem("username", username);
    localStorage.setItem("authenticated", false);
    alert("Incorrect pasword");
  };

  // useState -> saves information
  // useNavigate -> navigate to different routes
  // useEffect -> runs the moment you load the page once if ( dependecy array is empty )

  useEffect(() => {
    if (localStorage.getItem("authenticated") === true) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-6 col-12 border m-auto">
            <h1 className="my-4 text-center">Instagram</h1>
            <input
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="username form-control my-1"
              placeholder="Username"
            ></input>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="password form-control my-1"
              placeholder="Password"
            ></input>
            <button
              onClick={authenticate}
              className="btn btn-primary w-100 my-3"
            >
              Log in
            </button>

            <div className="d-flex justify-content-between">
              <hr className="w-50"></hr>
              <span className="mx-3">OR</span>
              <hr className="w-50"></hr>
            </div>
            <p className="text-center text-primary">
              <i className="bi bi-facebook mx-2"></i>Log in with Facebook
            </p>
            <p className="text-center">Forgot Password?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-6 col-12 border m-auto my-3">
            <p className="text-center my-2">
              Dont have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
