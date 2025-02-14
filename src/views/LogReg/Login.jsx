import React, { useRef } from 'react';
import '../../css/Login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { change } from '../store/reducer';
import { useNavigate } from 'react-router-dom';
const url = 'https://dbforecommerce.onrender.com/login/' || 'http://localhost:8000/login/';
function Login() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const email = useRef();
  const pass = useRef();
  const log = async () => {
    console.log(url);
    let data = await axios.get(url + email.current.value);
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
      navigation('../');
    } else {
      alert('Not matching');
    }
  }

  function Guest(){
    email.current.value = 'test@gmail.com';
    pass.current.value = 'Test@123';
    log(); 
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
            <button className="loginButton" type="button" onClick={Guest}>Guest Login</button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Login;  