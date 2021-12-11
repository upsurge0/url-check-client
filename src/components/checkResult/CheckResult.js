import "./CheckResult.scss";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const CheckResult = ({ passed = true }) => {
    const Passed = () => {
        return (
            <div className="passed">
                Passed <CheckRoundedIcon className="checkIcon" />
            </div>
        );
    };
    const Failed = () => {
        return (
            <div className="failed">
                Failed <CloseRoundedIcon className="checkIcon" />
            </div>
        );
    };

    return <>{passed ? <Passed /> : <Failed />}</>;
};

export default CheckResult;
