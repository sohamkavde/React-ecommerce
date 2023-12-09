import React, { useRef } from 'react';
import './Myaccount.css';
function Myaccount() {
    const opass = useRef();
    const pass = useRef();
    const cpass = useRef();
    const up = ()=>{
        if (localStorage.getItem("Store")) {
            let ele = JSON.parse(localStorage.getItem("Store"));
            if (ele['pass'] === opass.current.value) {
              // cart adding logic
              alert('matched');
              console.log(pass.current.value);
              if(pass.current.value === cpass.current.value){
                ele['pass'] = pass.current.value;
                localStorage.setItem("Store",JSON.stringify(ele));
              }
            } else {
              alert('Entered Wrong Old Password !');
            }
          } else {
            alert('Login please');
          }
    }
  return (
    <div className='myaccount-main'>
      <div className="myaccount">
        <div className="first-myaccount">
                <form action="#">
                    <b>Update Password</b>                   
                    <p>Old Password</p>
                    <input type="password" name="pass" ref={opass} id="pass" autoComplete='off'/>

                    <p>Password</p>
                    <input type="password" name="pass" ref={pass} id="pass" autoComplete='off'/>

                    <p>Confirm Password</p>
                    <input type="password" name="pass" ref={cpass} id="pass" autoComplete='off'/>
                    <button className="loginButton" type="button" onClick={up}>Update</button>
                </form>

        </div>
        <div className="second-myaccount"></div>
      </div>
    </div>
  )
}

export default Myaccount;
