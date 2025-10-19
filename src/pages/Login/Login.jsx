import { useState } from "react";
import './Login.css';

// Controlled Component
const userInitialValues = {
    username: "ramy71",
    email: "ramy@email.com",
    password: "123",
};
function Login() {

    const [userData, setUserData] = useState(userInitialValues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log({name, value});
        setUserData((prev)=>({...prev, [name]: value}));
    };
    // console.log("userData: ", userData);

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("handleSubmit");
        // Sending Data
        // ...
        // Reset Data
        setUserData(userInitialValues);
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