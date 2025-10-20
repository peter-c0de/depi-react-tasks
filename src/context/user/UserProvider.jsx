import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <UserContext value={{ isLoggedIn, setIsLoggedIn, myName: "Peter" }}>
            {children}
        </UserContext>
    );
}

export default UserProvider;










