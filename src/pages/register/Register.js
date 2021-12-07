import Google from "../../components/google/Google";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall, registerCall } from "../../apiCalls";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorDiv, setErrorDiv] = useState("");

    const { error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorDiv("Passwords don't match");
        } else {
            setErrorDiv("");
            const res = await registerCall(
                { email: email, name: name, password: password },
                dispatch
            );

            if (res.message) {
                res.message = res.message.replace("username", "email");
                setErrorDiv(res.message);
            } else {
                setErrorDiv("");
                navigate("/dashboard");
            }
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={register}>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <Google />
            <div>{errorDiv}</div>
        </div>
    );
}
