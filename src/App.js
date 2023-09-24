import { Profiler, useState } from "react";
import Home from "./components/Home";
import Create from "./components/Create";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/instagram" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />}>
            <Route path="" element={<Feed />} />
            <Route path="create" element={<Create />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
