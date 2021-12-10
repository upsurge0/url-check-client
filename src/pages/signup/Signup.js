import Google from "../../components/google/Google";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { registerCall } from "../../apiCalls";
import { useNavigate } from "react-router";
import Logo from "../../components/logo/Logo";
import "./Signup.scss";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorDiv, setErrorDiv] = useState("");
    document.body.style.overflow = "hidden";

    const { isFetching, dispatch } = useContext(AuthContext);
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
        <div className="registerWrapper">
            <Logo />
            <h1>Sign Up</h1>
            <div className="inputArea">
                <form onSubmit={register}>
                    <div className="inputContainer">
                        <label for="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputContainer">
                        <label for="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputContainer">
                        <label for="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            minLength="8"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputContainer">
                        <label for="cpassword">Confirm Password</label>
                        <input
                            id="cpassword"
                            type="password"
                            value={confirmPassword}
                            minLength="8"
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                            "Create Free Account"
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
                Already have an account?{" "}
                <Link className="link" to="/login">
                    Log In
                </Link>
            </span>
        </div>
    );
}
