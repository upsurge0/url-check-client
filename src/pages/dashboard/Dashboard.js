import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logoutCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./Dashboard.scss";
import UrlResult from "../../components/urlResult/UrlResult";

export default function Dashboard() {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        logoutCall(dispatch);
        navigate("/");
    };

    useEffect(() => {
        const check = async () => {
            const res = await axios.post("/url/user", {
                withCredentials: true,
            });
            console.log(res.data);
        };

        check();
    }, []);

    return (
        <div className="DashboardWrapper">
            <div className="resultsContainer">
                <UrlResult />
                <UrlResult />
                <UrlResult />
                <UrlResult />
            </div>
        </div>
    );
}
