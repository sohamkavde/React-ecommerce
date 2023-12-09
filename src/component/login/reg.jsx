import {React,useEffect,useRef} from 'react';
import './login.css';

function Reg() {
  const email = useRef();
  const pass = useRef();
  const cpass = useRef();
  useEffect(()=>{
  });
  const Log = (e)=>{
    e.preventDefault();
    if(!localStorage.getItem("Store")){
      localStorage.setItem("Store",'{}');
    }
    const ele =JSON.parse(localStorage.getItem("Store"));
    if(pass.current.value === cpass.current.value){
      ele["email"] = email.current.value;
      ele["pass"] = pass.current.value;
      ele["check"] = false;
      localStorage.setItem("Store",JSON.stringify(ele));
      alert("Registration Successfull")
      email.current.value = "";
      pass.current.value = "";
      cpass.current.value = "";
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
                    <button className="loginButton" type="submit" onClick={Log}>Login</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Reg;
