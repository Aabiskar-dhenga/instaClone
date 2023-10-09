import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import from react-router-dom
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import CreateUser from "./Components/CreateUser/CreateUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
