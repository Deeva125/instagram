import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  function logOut() {
    localStorage.setItem("username", null);
    localStorage.setItem("authenticated", false);
    navigate("/");
  }
  return (
    <div className="row">
      <div className="col-12">
        <h1>Instagram</h1>
      </div>
      <div className="col-12 my-2">
        <Link className="text-dark text-decoration-none" to="/home">
          <i className="bi bi-house-door-fill mx-3"></i>Home
        </Link>
      </div>
      <div className="col-12 my-2 text-secondary">
        <i className="bi bi-search mx-3"></i>Search
      </div>
      <div className="col-12 my-2 text-secondary">
        <i className="bi bi-compass mx-3"></i>Explore
      </div>
      <div className="col-12 my-2 text-secondary">
        <i className="bi bi-film mx-3"></i>Reels
      </div>
      <div className="col-12 my-2 text-secondary">
        <i className="bi bi-messenger mx-3"></i>
        Messages
      </div>
      <div className="col-12 my-2 text-secondary">
        <i className="bi bi-suit-heart mx-3"></i>Notifications
      </div>
      <div className="col-12 my-2">
        <Link className="text-dark text-decoration-none" to="/home/create">
          <i className="bi bi-plus-square mx-3"></i>Create
        </Link>
      </div>
      <div className="col-12 my-2">
        <i className="bi bi-person-fill mx-3"></i>Profile
      </div>
      <div className="col-12 my-2">
        <button onClick={logOut} className="bg-white border-0 px-0">
          <i className="bi bi-box-arrow-left mx-3"></i>Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
