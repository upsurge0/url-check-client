import Google from "../../components/google/Google";
import { useState, useContext } from "react";
import { myContext } from "../../AuthContext";
import Axios from "axios";

export default function Register() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [userObject, setUserObject] = useContext(myContext);

    const register = () => {
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:8000/auth/register",
        }).then((res) => {
            setUserObject(res.data);
            window.location.href = "/";
        });
    };

    return (
        <div>
            <h1>Register</h1>
            <input
                placeholder="username"
                onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
                placeholder="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={register}>Submit</button>

            <Google />
        </div>
    );
}
