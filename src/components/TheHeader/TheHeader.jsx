import { useEffect } from "react";
import './TheHeader.css'

function TheHeader({headerLinks}){
    // console.log(props);
    console.log("Hello from TheHeader Child Component Before useEffect");
    useEffect( ()=>{
        console.log("Hello from TheHeader Child Component useEffect 1");
        // This function will be fired after component unmount or deleted mean removed from DOM
    return () =>
        console.log("Hello from TheHeader Child Component from useEffect 1 After Unmount");
    }, []);
    console.log("Hello from TheHeader Child Component After useEffect");

    return (
        <header>
            <nav>
                <ul>
                    {/* <li>Home</li> */}
                    {/* <li>About</li> */}
                    {/* <li>Contact Us</li> */}
                    {headerLinks.map(({ title,path }) => (
                        <li key={path}>
                            <a href={path}>{title}</a>
                        </li>
                    ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default TheHeader;