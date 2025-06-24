import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    return (
        <UserContext.Provider >
            {children}
        </UserContext.Provider>     
    )
}

export default UserContextProvider