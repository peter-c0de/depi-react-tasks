import { useEffect, useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect( () => {
        // Save login state in cookie/localstorage
    }, [isLoggedIn])

    return(
        <UserContext value={{ isLoggedIn, setIsLoggedIn, myName: "Peter" }}>
            {children}
        </UserContext>
    );
}

export default UserProvider;










