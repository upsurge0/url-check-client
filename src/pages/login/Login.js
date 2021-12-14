import Google from "../../components/google/Google";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import { useNavigate } from "react-router";
import Logo from "../../components/logo/Logo";
import "./Login.scss";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorDiv, setErrorDiv] = useState("");
    document.body.style.overflow = "hidden";

    const { isFetching, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        const res = await loginCall(
            { email: email, password: password },
            dispatch
        );
        if (res.success === true) {
            navigate("/dashboard");
        } else if (res.message) {
            res.message = res.message.replace("username", "email");
            setErrorDiv(res.message);
        }
    };

    return (
        <div className="registerWrapper">
            <Logo />
            <h1>Log In</h1>
            <div className="inputArea">
                <form onSubmit={login}>
                    <div className="inputContainer">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            minLength="8"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="button" type="submit">
                        {isFetching ? (
                            <CircularProgress
                                style={{ color: "white" }}
                                size="20px"
                            />
                        ) : (
                            "Log In"
                        )}
                    </button>
                    <div className="errorDiv">{errorDiv}</div>
                </form>

                <div className="separator">
                    <div className="vl"></div>
                    <span>OR</span>
                    <div className="vl"></div>
                </div>

                <Google />
            </div>
            <span className="linkToLogin">
                Don't have an account?{" "}
                <Link className="link" to="/signup">
                    Sign Up
                </Link>
            </span>
        </div>
    );
}
