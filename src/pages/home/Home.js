import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeImage from "../../components/homeImage/HomeImage";
import NavBar from "../../components/navBar/NavBar";
import "./home.scss";

export default function Home({ url, setUrl, res, setRes }) {
    document.body.style.overflow = "hidden";
    const navigate = useNavigate();
    const [errorDiv, setErrorDiv] = useState("");

    const checkUrl = async (e) => {
        e.preventDefault();
        const re =
            // eslint-disable-next-line
            /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
        if (re.test(url)) {
            setErrorDiv("");
            const res1 = await axios.post("/url", {
                url: url,
            });
            setRes(res1.data);
            setUrl("");
            navigate("/result");
        } else {
            setErrorDiv("Please enter a valid url.");
        }
    };

    return (
        <>
            <NavBar />
            <div className="homeWrapper">
                <div className="homeWrapperContainer">
                    <h1 className="heroTitle">
                        Detect Malicious
                        <br /> and Phishing Websites
                    </h1>
                    <h2 className="heroDescription">
                        Our website helps you protect yourself
                        <br /> from dangerous phishing scams
                    </h2>
                    <form className="inputContainerHome" onSubmit={checkUrl}>
                        <input
                            id="url"
                            type="text"
                            placeholder="Enter URL here"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                        <button className="button" type="submit">
                            Verify
                        </button>
                    </form>
                    <span className="errorDiv">{errorDiv}</span>
                </div>
                <div className="separator">
                    <HomeImage />
                </div>
            </div>
        </>
    );
}
