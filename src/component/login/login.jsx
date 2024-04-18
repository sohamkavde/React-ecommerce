import React, { useRef } from 'react';
import './login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { change } from '../store/reducer';

function Login() {
  const dispatch = useDispatch();
  const email = useRef();
  const pass = useRef();
  const log = async () => {

    let data = await axios.get('http://localhost:8000/login/' + email.current.value);
    let res = await data.data[0];
    if (data.status === 200) {

      if (!res) {
        alert("Please Do Sign Up !")
        return;
      }
      if (!localStorage.getItem("Store")) {
        localStorage.setItem("Store", '{}');
      }

      const ele = JSON.parse(localStorage.getItem("Store"));
      alert('Login Successfull');
      ele['email'] = email.current.value;
      ele['check'] = true;
      dispatch(change());
      localStorage.setItem("Store", JSON.stringify(ele));
      email.current.value = "";
      pass.current.value = "";


    } else {
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
            <input type="email" name='email' ref={email} placeholder='abc@example.com' />
            <p>Password</p>
            <input type="password" name="pass" ref={pass} id="pass" autoComplete='off' />
            <button className="loginButton" type="button" onClick={log}>Login</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login;
