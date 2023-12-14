import React, { useState } from "react";
import pic from '../components/V.png';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCPass] = useState('');
    const [name, setName] = useState('');
    const [pno, setPno] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div  className="container">
        <div>
            <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" id="email" name="email" />
            <label htmlFor="email">Phone No.</label>
            <input value={pno} onChange={(e) => setPno(e.target.value)} id="pno" name="Phone No" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <label htmlFor="password">Confirm Password</label>
            <input value={cpass} onChange={(e) => setCPass(e.target.value)} type="password" id="cpassword" name="cpassword" />
            <button type="submit">Create Account</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? click here to login.</button>
    </div>
        <div>
            <img src={pic} alt='hi' height={500} width={500} style={{alignSelf: 'center', paddingTop: '110px', paddingLeft: '2px'}}/>
        </div>
        
    </div>
    )
}
