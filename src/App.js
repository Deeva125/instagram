import Home from "./components/Home";
import Create from "./components/Create";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Search from "./components/Search";
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
            <Route path="search" element={<Search />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
