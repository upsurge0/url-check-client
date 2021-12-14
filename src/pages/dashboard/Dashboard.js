import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logoutCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./Dashboard.scss";
import UrlResult from "../../components/urlResult/UrlResult";
import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Dashboard() {
    document.body.style.overflow = "auto";
    const { dispatch } = useContext(AuthContext);
    const [urls, setUrls] = useState([]);
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const logout = () => {
        logoutCall(dispatch);
        navigate("/");
    };
    const check = async () => {
        const res = await axios.get("/url/user", {
            withCredentials: true,
        });

        setUrls(res.data.urls.reverse());
    };

    const handleTermChange = (searchTerm) => {
        setTerm(searchTerm);
    };

    useEffect(() => {
        check();
    }, []);

    return (
        <>
            <NavBar isLoggedIn={true} logout={logout} />
            <div className="DashboardWrapper">
                <SearchBar check={check} handleTermChange={handleTermChange} />
                <div className="resultsContainer">
                    {urls.length > 0 &&
                        urls
                            .filter((val) => {
                                if (term === "") {
                                    return val;
                                } else if (
                                    val.url
                                        .toLowerCase()
                                        .includes(term.toLowerCase())
                                ) {
                                    return val;
                                }
                                return null;
                            })
                            .map((url, index) => (
                                <UrlResult
                                    key={url._id}
                                    url={url}
                                    index={index}
                                />
                            ))}
                    {urls.length === 0 && (
                        <span className="noResults">
                            Your results show up here.
                        </span>
                    )}
                </div>
            </div>
        </>
    );
}
