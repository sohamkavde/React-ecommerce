import {React,useRef} from 'react';
import './login.css';
import axios from 'axios';

function Reg() {
  // I have implemented nodejs,express,mongodb later hence
  // I am using localstorage because whole logic is working on localstorage
  if(!localStorage.getItem("Store")){
    localStorage.setItem("Store",'{}');
  }

  const ele =JSON.parse(localStorage.getItem("Store"));
  const email = useRef();
  const pass = useRef();
  const cpass = useRef();

  const Log = async (e)=>{
    e.preventDefault();
    const ObjectData = {
      "email": email.current.value,
      "password":pass.current.value,
      "cpassword":cpass.current.value
    }
  
    if(pass.current.value === cpass.current.value){
      
    let data = await axios.post('http://localhost:8000/signup',ObjectData);
    if(!data.data.message && data.status === 200){
      // localstorage start
      ele["email"] = email.current.value;
      ele["check"] = false;
      localStorage.setItem("Store",JSON.stringify(ele));
      // localstorag end



      alert("Registration Successfull")
      email.current.value = "";
      pass.current.value = "";
      cpass.current.value = "";
    }else{
      alert('Already Exist');
    }

    }else{
      alert("password is not matching !!");
    }
       

  }
  return (
    <div>
        <div className="main_login" style={{marginBottom:"200px",marginTop:"10px"}}>
            <div className="common-background">
                <form action="#">
                    <b>Sign Up</b>
                    <p>Email</p>
                    <input type="email" name='email' ref={email} placeholder='abc@example.com'/>
                    <p>Password</p>
                    <input type="password" name="pass" ref={pass} id="pass" autoComplete='off'/>
                    <p>Confirm Password</p>
                    <input type="password" name="cpass" ref={cpass} id="cpass" autoComplete='off' />
                    <button className="loginButton" type="submit" onClick={Log}>Registration</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Reg;
