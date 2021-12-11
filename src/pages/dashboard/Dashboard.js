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
            <div className="registerWrapper">
                
                <div className="inputArea">
                <h1>Detect Malicious and Phishing Websites</h1>
    
                    <div className="separator">
                        <div className="vl"></div>
                        <span>OR</span>
                        <div className="vl"></div>
                    </div>

                </div>
            </div>
        );
    }