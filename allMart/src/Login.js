import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://i.ibb.co/qkcYSfP/AllMart.png"/>
            </Link>

            <div className="login__container">
            
                <h1>Sign in</h1>

                <form>

                   

                    {/* <h5>Email</h5> */}
<div>
<TextField type="text" value={email} 
                    onChange={e => setEmail(e.target.value)} id="standard-basic" label="Email" />
</div>
                    
                    {/* <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value)}/> */}
<div>
<TextField style={{marginTop:"15px"}} type="password" value={password}
                    onChange={e => setPassword(e.target.value)} id="standard-basic" label="Password"  />

</div>
                    {/* <h5>Password</h5> */}
                    
                    {/* <input type="password" value={password}
                    onChange={e => setPassword(e.target.value)}/> */}
<Button style={{marginTop:"30px"}} className="login__signinButton" type="submit" onClick={signIn} color="secondary" variant="contained">Login</Button>
                    {/* <button className="login__signinButton" type="submit" onClick={signIn}>Sign in</button> */}
                </form>
                    <p>or</p>
                    <Button type="button" onClick={register} className="login__registerButton" color="primary" variant="contained">Create Account</Button>

                {/* <button type="button" class="btn btn-success" onClick={register} className="login__registerButton">Create your Amazon Account</button> */}
            </div>

        </div>
    )
}

export default Login
