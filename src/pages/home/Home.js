import Axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../AuthContext";

const style = {
    display: "flex",
    flexDirection: "column",
};

export default function Home() {
    const [userObject, setUserObject] = useContext(myContext);

    const logout = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8000/auth/logout",
        }).then((res) => {
            setUserObject(null);
        });
    };

    return (
        <div style={style}>
            {userObject ? (
                <>
                    {userObject.username}
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    Not Logged in
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </div>
    );
}
