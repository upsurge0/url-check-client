import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logoutCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

const style = {
    display: "flex",
    flexDirection: "column",
};

export default function Dashboard() {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        logoutCall(dispatch);
        navigate("/");
    };

    return (
        <div style={style}>
            {user && (
                <>
                    {user.name}
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </div>
    );
}
