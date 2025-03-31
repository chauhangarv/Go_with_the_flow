import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        fullname: {  // Fix: changed from fullName to fullname
            firstname: "",  // Fix: changed from firstName to firstname
            lastname: ""   // Fix: changed from lastName to lastname
        },
        email: ""
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;
