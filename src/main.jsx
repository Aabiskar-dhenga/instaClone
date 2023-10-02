import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import from react-router-dom
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Profile from "./Components/Profile/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:id" element={<Profile />} />

      {/* My doubts that i should ask to mama */}
      {/* //My doubts my we have used useParams
       in the previus route i mean look
        at this i have done without using useParams */}
    </Routes>
  </BrowserRouter>
);
