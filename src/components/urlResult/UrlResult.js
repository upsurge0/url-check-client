import "./UrlResult.scss";
import CheckResult from "../checkResult/CheckResult";

const UrlResult = ({ props }) => {
    return (
        <div className="urlResult">
            <div>
                <span className="number">1</span>
                <span className="url">www.google.com</span>
            </div>
            <CheckResult />
        </div>
    );
};

export default UrlResult;
