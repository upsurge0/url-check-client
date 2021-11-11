import Google from "../../components/google/Google";
import { useState, useContext } from "react";
import Axios from "axios";
import { myContext } from "../../AuthContext";

export default function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [userObject, setUserObject] = useContext(myContext);

    const login = () => {
        Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:8000/auth/login",
        }).then((res) => {
            setUserObject(res.data);
            window.location.href = "/";
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                placeholder="username"
                onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
                placeholder="password"
                onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={login}>Submit</button>

            <Google />
        </div>
    );
}
