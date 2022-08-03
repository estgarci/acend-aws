import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { fetchUser, loginUser, logoutUser } from "../redux/actionCreators";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const auth = useSelector(state => state.auth)
    const [user, setUser] = useLocalStorage("user", null);

    const value = useMemo(
        () => ({
            user,
            auth
        }),
        [user, auth]
    );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};