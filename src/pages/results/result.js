import "./result.scss";
import NavBar from "../../components/navBar/NavBar";

const style = {
    display: "flex",
    flexDirection: "column",
};


export default function Home() {
    document.body.style.overflow = "auto";

    return (
        <>
         <NavBar />
        <div className="resultArea">
            <h1 class = "resultmessage">Saftey Check <span class="Passed">Passed</span></h1>
<p class = "contextResult">The link entered by you doesn’t hold any malicious content. Read more about our algorithm here.
<br></br><br></br>
Check another link below:</p>
<div class="urlInput">
                            <div className="inputContainerResult">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter URL here"
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
