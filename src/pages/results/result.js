import "./result.scss";
import NavBar from "../../components/navBar/NavBar";
import { useState } from "react";
import axios from "axios";

export default function Result({ res }) {
    // eslint-disable-next-line
    const [result, setResult] = useState(res || { result: false });
    const [url, setUrl] = useState("");
    const [errorDiv, setErrorDiv] = useState("");
    document.body.style.overflow = "auto";

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
            setResult(res1.data);
            setUrl("");
        } else {
            setErrorDiv("Please enter a valid url.");
        }
    };

    const Passed = () => {
        return (
            <>
                <h1 className="resultmessage">
                    Safety Check <span className="Passed">Passed</span>
                </h1>
                <p className="contextResult">
                    The link{" "}
                    <a className="" href={result.url} target="_">
                        {result.url}
                    </a>{" "}
                    doesn’t hold any malicious content.
                    <br></br>
                    <br></br>
                    Check another link below:
                </p>
            </>
        );
    };

    const Failed = () => {
        return (
            <>
                <h1 className="resultmessage">
                    Safety Check <span className="Failed">Failed</span>
                </h1>
                <p className="contextResult">
                    The link{" "}
                    <a className="" href={result.url} target="_">
                        {result.url}
                    </a>{" "}
                    may hold malicious content. Check another link below:
                    <br></br>
                    <br></br>
                    Check another link below:
                </p>
            </>
        );
    };
    return (
        <>
            <NavBar />
            <div className="resultArea">
                {result.result === false ? <Failed /> : <Passed />}
                <div className="urlInput">
                    <form className="inputContainerResult" onSubmit={checkUrl}>
                        <input
                            id="url"
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter URL here"
                            required
                        />
                        <button className="button" type="submit">
                            Verify
                        </button>
                    </form>
                </div>
                <span className="errorDiv">{errorDiv}</span>
            </div>
        </>
    );
}
