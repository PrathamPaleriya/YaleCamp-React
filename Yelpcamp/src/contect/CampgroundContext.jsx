import React, {createContext, useState} from "react";

export const CampgroundContext = createContext();


export const CampgroundProvider = ({children}) => {
    const [user, setUser] = useState(null);


    return(
        <CampgroundContext.Provider value={{user, setUser}}>
            {children}
        </CampgroundContext.Provider>
    );
};