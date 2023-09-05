import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="col-3 side-bar">
            <Sidebar />
          </div>
          <div
            className="col-6 feed overflow-scroll"
            style={{ height: "98vh" }}
          >
            <Outlet />
          </div>
          <div className="col-3 search"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
