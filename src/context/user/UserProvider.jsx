import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;










