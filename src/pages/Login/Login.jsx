import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import './Login.css';
import UserContext from "@/context/user/UserContext";

// Controlled Component
const userInitialValues = {
    username: "ramy71",
    email: "ramy@email.com",
    password: "123",
};
function Login() {

    const navigate = useNavigate();
    // const {isLoggedIn, setIsLoggedIn, myName} = useContext(UserContext);
    // console.log(isLoggedIn, setIsLoggedIn, myName);
    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
    console.log("isLoggedIn:", isLoggedIn);
    const [userData, setUserData] = useState(userInitialValues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log({name, value});
        setUserData((prev)=>({...prev, [name]: value}));
    };
    // console.log("userData: ", userData);

    const handleSubmit=(e)=>{
        console.log("Redirect to product-details after 2s");
        e.preventDefault();
        // console.log("handleSubmit");
        // Sending Data
        // ...
        // Reset Data
        setUserData(userInitialValues);
        setIsLoggedIn(true);
        setTimeout( ()=>{
            navigate('/product-details/20');
        }, 2000);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={handleChange} value={userData.username} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={handleChange} value={userData.email} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={userData.password} />
            </div>
            <button>Submit</button>
        </form>
    )

}

export default Login;