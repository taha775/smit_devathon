import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Adminpanel from "../Components/Admin/Adminpanel";
import Userpanel from "../Components/Userpanel";
import Home from "../Components/Home";
import Edit_course from "../Components/Admin/Edit_course";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/admins" element={<Adminpanel />}></Route>
        <Route path="/users" element={<Userpanel />}></Route>
        <Route path="/edit_course/:id" element={<Edit_course />}></Route>
      </Routes>
    </div>
  );
};

export default Navigation;
