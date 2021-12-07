import Google from "../../components/google/Google";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import { useNavigate } from "react-router";
import Logo from "../../components/logo/Logo";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorDiv, setErrorDiv] = useState("");

    const { error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        const res = await loginCall(
            { email: email, password: password },
            dispatch
        );
        if (res.success === true) {
            navigate("/dashboard");
        } else if (res.success === false) {
            setErrorDiv("User doesn't exist or wrong credentials");
        }
    };

    return (
        <div>
            <Logo />
            <h1>Login</h1>
            <form onSubmit={login}>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <Google />
            <div>{error && errorDiv}</div>
        </div>
    );
}
