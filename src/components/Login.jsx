import React, { useState } from "react";
import pic from '../components/V.png';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
            <center><h2>Login</h2></center> 
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
                <button type="submit">Log In</button>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account?click here to Register.</button>
            </form>
            <div>
            <img src={pic} alt='hi' height={300} width={300} style={{alignSelf: 'center',paddingTop: '50px', paddingLeft: '2px'}}/>
            </div>
            </div>
    )
}