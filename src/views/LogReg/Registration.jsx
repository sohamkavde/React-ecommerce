import React, { useRef, useState } from "react";
import "../../css/Login.css";
import { registerUser, validateEmailFormat } from "./RegService";

function Reg() {
  const email = useRef();
  const pass = useRef();
  const cpass = useRef();
  const [showError, setError] = useState(false);
  const [errors, setErrors] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const handlePasswordChange = (value) => {
    setError(value.length > 0);
    setErrors(validateEmailFormat(value));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    const ObjectData = {
      email: email.current.value,
      password: pass.current.value,
      cpassword: cpass.current.value,
    };
    await registerUser(ObjectData);
  };

  return (
    <div>
      <div className="main_login" style={{ marginBottom: "200px", marginTop: "10px" }}>
        <div className="common-background">
          <form action="#">
            <b>Sign Up</b>
            <p>Email</p>
            <input type="email" name="email" ref={email} placeholder="abc@example.com" />

            <p>Password</p>
            <input type="password" name="pass" ref={pass} onChange={(e) => handlePasswordChange(e.target.value)} autoComplete="off" />
            
            {showError && (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ textAlign: "left", fontSize: "14px", color: "red" }}>
                  <li style={{ color: errors.length ? "green" : "red" }}>At least 8 characters</li>
                  <li style={{ color: errors.uppercase ? "green" : "red" }}>Contains an uppercase letter (A-Z)</li>
                  <li style={{ color: errors.lowercase ? "green" : "red" }}>Contains a lowercase letter (a-z)</li>
                  <li style={{ color: errors.number ? "green" : "red" }}>Includes a number (0-9)</li>
                  <li style={{ color: errors.specialChar ? "green" : "red" }}>Has at least one special character (!@#$%^&*)</li>
                </div>
              </div>
            )}

            <p>Confirm Password</p>
            <input type="password" name="cpass" ref={cpass} autoComplete="off" />
            
            <button className="loginButton" type="submit" onClick={handleRegistration}>
              Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reg;
