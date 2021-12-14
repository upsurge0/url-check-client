const style1 = {
    color: "#0052FF",
    fontSize: "55px",
    fontWeight: "700",
};
const style2 = {
    color: "#0052FF",
    fontSize: "28px",
    fontWeight: "700",
};

const Logo = ({ nav = false }) => {
    const NavBarLogo = () => {
        return <div style={style2}>url.check</div>;
    };

    const NormalLogo = () => {
        return <div style={style1}>url.check</div>;
    };

    return <>{nav ? <NavBarLogo /> : <NormalLogo />}</>;
};

export default Logo;
