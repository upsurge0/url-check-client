import { Link } from "react-router-dom";
import "./result.scss";

const style = {
    display: "flex",
    flexDirection: "column",
};


export default function Home() {
    document.body.style.overflow = "auto";

    return (
        <div className="registerWrapper">
        <div className="inputArea">
            <div class="yooyo">
            <h1 class="herotitle">Detect Malicious and Phishing Websites</h1>
            <h2 class="herodescription">Our website helps you protect yourself from dangerous phishing scams</h2>
            <div class = "urlinput">
            <div className="inputContainer">
                        <input id="email" type="email" placeholder="Enter URL here"/>
                        <button className="button" type="submit">Verify</button>
                    </div>
            </div>

            
            </div>
            <div className="separator">
                <img src="https://imgur.com/j4UwLrk.png"></img>
            </div>
        </div>

    </div>
    );
}