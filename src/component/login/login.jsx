import React, { useRef } from 'react';
import './login.css';

function Login() {
  const email = useRef();
  const pass = useRef();
  const log = ()=>{
    if(!localStorage.getItem("Store")){
     alert("Please Do Sign Up !")
      return;
    }
    const ele =JSON.parse(localStorage.getItem("Store"));
    if(email.current.value === ele['email'] && pass.current.value === ele["pass"]){
      alert('Login Successfull');
      ele['check'] = true;
      localStorage.setItem("Store",JSON.stringify(ele));
      email.current.value = "";
      pass.current.value = "";
    }else{
      alert('Not matching');
    }
  }
  return (
    <div>
        <div className="main_login">
            <div className="common-background">
                <form action="#">
                    <b>Login</b>
                    <p>Email</p>
                    <input type="email" name='email' ref={email} placeholder='abc@example.com'/>
                    <p>Password</p>
                    <input type="password" name="pass" ref={pass} id="pass" autoComplete='off'/>
                    <button className="loginButton" type="button" onClick={log}>Login</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login;
