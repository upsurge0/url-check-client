import "./result.scss";
import NavBar from "../../components/navBar/NavBar";
import { useState } from "react";

export default function Result({ res }) {
    // eslint-disable-next-line
    const [result, setResult] = useState(res || false);
    document.body.style.overflow = "auto";

    const Passed = () => {
        return (
            <>
                <h1 className="resultmessage">
                    Safety Check <span className="Passed">Passed</span>
                </h1>
                <p className="contextResult">
                    The link entered by you doesn’t hold any malicious content.
                    Read more about our algorithm here.
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
                    The link entered by you may hold malicious content. Read
                    more about our algorithm here. Check another link below:
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
                {result === false ? <Failed /> : <Passed />}
                <div className="urlInput">
                    <div className="inputContainerResult">
                        <input
                            id="url"
                            type="text"
                            placeholder="Enter URL here"
                            required
                        />
                        <button className="button" type="submit">
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
