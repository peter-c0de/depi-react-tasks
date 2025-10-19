import "./Register.css";

function Register() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("handleSubmit - data:", data);
        // Sending Data
        // ...
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Register;