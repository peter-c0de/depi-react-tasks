import { NavLink } from "react-router";
import { Container, Nav } from "react-bootstrap";

// import "./TheHeader.css"
import classes from "./TheHeader.module.css"
import { useContext } from "react";
import UserContext from "@/context/user/UserContext";

const navLinks = [
    { path:'/', name:"Home"},
    { path:'/cart', name:"Cart"},
    // { path:'/product-details', name:"Product Details"},
    { path:'/category', name:"Category"},
    { path:'/login', name:"Login"},
    { path:'/register', name:"Register"},
    { path:'/admin', name:"Admin"},
]

function TheHeader(){
    const all = useContext(UserContext); // hook
    // console.log("TheHeader ~ all:", all);
    return (
        // <header className="hamada">
        <header className={classes["header"]}>
            <Container>
                <Nav>
                    <ul className="nav-list">
                        {navLinks.map(({path,name}) => (
                            <li key={path} className="nav-item">
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </Nav>
            </Container>
        </header>
      );
}

export default TheHeader;