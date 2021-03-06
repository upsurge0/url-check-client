import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Result from "./pages/results/result";

function App() {
    const { user } = useContext(AuthContext);
    const [url, setUrl] = useState("");
    const [res, setRes] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Home
                            url={url}
                            setUrl={setUrl}
                            res={res}
                            setRes={setRes}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/dashboard" /> : <Login />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/result"
                    element={
                        <Result
                            url={url}
                            setUrl={setUrl}
                            res={res}
                            setRes={setRes}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
