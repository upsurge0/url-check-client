import axios from "axios";
import {
    LoginFailure,
    LoginStart,
    LoginSuccess,
    LogoutFailure,
    LogoutStart,
    LogoutSuccess,
} from "./context/AuthActions";

export const loginCall = async (userCredential, dispatch) => {
    dispatch(LoginStart());

    const res = await axios.post("/auth/login", userCredential);
    if (res.data.success === false) {
        dispatch(LoginFailure(res.data));
    } else {
        dispatch(LoginSuccess(res.data.user));
    }
    return res.data;
};

export const registerCall = async (userCredential, dispatch) => {
    dispatch(LoginStart());

    const res = await axios.post("/auth/register", userCredential);
    if (res.data.message) {
        dispatch(LoginFailure(res.data));
    } else {
        dispatch(LoginSuccess(res.data));
    }
    return res.data;
};

export const logoutCall = async (dispatch) => {
    dispatch(LogoutStart());

    try {
        await axios.post("/auth/logout");
        dispatch(LogoutSuccess());
    } catch (err) {
        dispatch(LogoutFailure(err));
    }
};
