import "./Google.scss";
import google from "./google.png";

export default function Google() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const googleLogin = () => {
        window.open("http://localhost:8000/auth/google", "_self");
    };

    return (
        <button onClick={googleLogin} className="google">
            <img className="googleIcon" src={google} alt="google" />
            Log in with Google
        </button>
    );
}
