import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: { 
    _id: "663110a4232982a092049d98",
    username: "john",
    email:"john@gmail.com",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: ["66305968a8b069a3d916c03f"],
    following: []
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider 
        value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch,
            }}>
        
        {children}
        </AuthContext.Provider>
    )
}