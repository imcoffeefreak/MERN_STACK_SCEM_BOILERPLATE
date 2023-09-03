import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "../styles/auth.css";
import { loginControllerObj } from "../controller/login.controller";

function AuthLayout() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    }

    const onPasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const loginUser = async () => {
       try{
        const response = await loginControllerObj.login(email, password);
        if(response){
            window.localStorage.setItem("user", JSON.stringify(response));
            navigate("/home");
        }
       }catch(error){
        alert(error);
       } 
    }


    return(
        <section className="auth-section">
            <h1>Login</h1>
            <form className="auth-form">
                <div className="form-group">
                    <p>Email Address</p>
                    <input type="email" name="email" onChange={onEmailChange} />
                </div>
                <div className="form-group">
                    <p>Password</p>
                    <input type="password" name="password" onChange={onPasswordChange} />
                </div>
                <button type="button" onClick={()=>loginUser()}>Login</button>
            </form>
        </section>
    );
}

export default AuthLayout;