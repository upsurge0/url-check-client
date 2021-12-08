import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
    const { user } = useContext(AuthContext);

    console.log(user);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
