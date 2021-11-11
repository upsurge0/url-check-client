import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const myContext = createContext();
export default function Context(props) {
    const [userObject, setUserObject] = useState();

    useEffect(() => {
        axios
            .get("http://localhost:8000/user", { withCredentials: true })
            .then((res) => {
                if (res.data) {
                    setUserObject(res.data);
                }
            });
    }, []);

    return (
        <myContext.Provider value={[userObject, setUserObject]}>
            {props.children}
        </myContext.Provider>
    );
}
