export const LoginStart = () => ({
    type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});
export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error,
});
export const isAuthenticated = (user) => ({
    type: "IS_AUTHENTICATED",
    payload: user,
});
export const LogoutStart = () => ({
    type: "LOGOUT_START",
});
export const LogoutSuccess = () => ({
    type: "LOGOUT_SUCCESS",
    payload: null,
});
export const LogoutFailure = (error) => ({
    type: "LOGOUT_FAILURE",
    payload: error,
});
