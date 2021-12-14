import "./UrlResult.scss";
import CheckResult from "../checkResult/CheckResult";
import { Scrollbars } from "react-custom-scrollbars";

const UrlResult = ({ url, index }) => {
    return (
        <div className="urlResult">
            <div>
                <span className="number">{index + 1}</span>
                <Scrollbars
                    autoHide
                    style={{
                        maxWidth: "400px",
                        marginLeft: "85px",
                        marginTop: "-20px",
                        height: "100%",
                    }}
                >
                    {url.url}
                </Scrollbars>
            </div>
            <CheckResult passed={url.result} />
        </div>
    );
};

export default UrlResult;
