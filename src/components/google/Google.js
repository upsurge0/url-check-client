export default function Google() {
    const googleLogin = () => {
        window.open("http://localhost:8000/auth/google", "_self");
    };

    return (
        <>
            <button onClick={googleLogin}>Log in with Google</button>
        </>
    );
}
