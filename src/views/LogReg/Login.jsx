import React, { useRef } from 'react';
import '../../css/Login.css';
import { change } from '../store/reducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogin, guestLogin } from '../../controller/LogReg/Login';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passRef = useRef();
    const login = () => {
            handleLogin(emailRef.current.value, passRef.current.value, dispatch, change, navigate);
            emailRef.current.value = "";
            passRef.current.value = "";
    };

    return (
        <div className="main_login">
            <div className="common-background">
                <form action="#">
                    <b>Login</b>
                    <p>Email</p>
                    <input type="email" name="email" ref={emailRef} placeholder="abc@example.com" />
                    <p>Password</p>
                    <input type="password" name="pass" ref={passRef} autoComplete="off" />
                    <button className="loginButton" type="button" onClick={login}>Login</button>
                    <button className="loginButton" type="button" onClick={() => guestLogin(login)}>Guest Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
