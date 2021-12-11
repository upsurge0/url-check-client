import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import axios from "axios";
import { isAuthenticated } from "./AuthActions";

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        axios.get("/auth/user", { withCredentials: true }).then((res) => {
            if (res.data.isAuth === true) {
                dispatch(isAuthenticated(res.data.user));
            }
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
