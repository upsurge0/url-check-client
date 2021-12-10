import "./Google.scss";
import google from "./google.png";

export default function Google() {
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
