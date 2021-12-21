import "./navBar.scss";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import userAvatar from "./userAvatar.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NavBar = ({ isLoggedIn = false, logout }) => {
    const { user } = useContext(AuthContext);
    const NavLoggedIn = () => {
        return (
            <div className="rightSideUser">
                <span>{user ? user.name : "Username"}</span>
                <div className="dropdown">
                    <Avatar className="avatar" src={userAvatar} />

                    <div className="dropdown-content">
                        <button onClick={logout}>Sign out</button>
                    </div>
                </div>
            </div>
        );
    };
    const NavNotLoggedIn = () => {
        return (
            <div className="rightSide">
                {/* <Link className="link" to="/products">
                    Products
                </Link> */}
                <Link className="link" to="/login">
                    Log In
                </Link>

                <Link to="/signup">
                    <button className="button">Sign Up</button>
                </Link>
            </div>
        );
    };

    return (
        <div className="navBar">
            <Link className="logoLink" to="/">
                <Logo nav={true} />
            </Link>

            {isLoggedIn ? <NavLoggedIn /> : <NavNotLoggedIn />}
        </div>
    );
};

export default NavBar;
