import { Link } from "react-router-dom";

const style = {
    display: "flex",
    flexDirection: "column",
};

export default function Home() {
    return (
        <div style={style}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    );
}
