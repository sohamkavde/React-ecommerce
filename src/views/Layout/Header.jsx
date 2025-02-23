import React, { useEffect, useState } from 'react';
import '../../css/Header.css';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { change } from '../store/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping,faBars} from '@fortawesome/free-solid-svg-icons'
function Header() {
 
  const valbool = useSelector(state=>state.login.value);
   
 const [out, setOut] = useState(valbool);
 const dispatch = useDispatch();

  /* Set the width of the side navigation to 250px */
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  useEffect(() => {
    if (localStorage.getItem("Store")) {
      const ele = JSON.parse(localStorage.getItem("Store"));
      if(ele['token'] === ''){
        ele['check'] = false;
      }
      setOut(ele['check']);      
    }

  });

  const logout = () => {
    const ele = JSON.parse(localStorage.getItem("Store"));
    ele['check'] = false;
    ele['token'] = "";
    setOut(ele['check']);
    dispatch(change());
    localStorage.setItem("Store", JSON.stringify(ele));

  }
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a className="closebtn" onClick={closeNav} style={{ cursor: "pointer" }}>&times;</a>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/Shop">Shop</Link></p>
        <p><Link to="/Blog">Blog</Link></p>
        {/* <p><Link to="/Contact">Contact</Link></p> */}
        {out ? (
          <>          
          <p><Link onClick={logout}>Logout</Link></p>
          <p><Link to="/Myaccount">My Account</Link></p>
          </>
        ) : (
          <>          
          <p><Link to="/Login">Login</Link></p>
          <p><Link to="/Reg">Sign Up</Link></p>
          </>
        )}
      </div>
      <div id="header">
        <div className="logo">
          <div className="circle">
            <div><span>■</span></div>
            <div><span>■</span></div>
            <div><span>■</span></div>
            <div><span>■</span></div>

          </div>
          <p>E-com</p>
        </div>
        <div className="blank1"></div>
        <div className="links">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Shop">Shop</Link></p>
          <p><Link to="/Blog">Blog</Link></p>
          {/* <p><Link to="/Contact">Contact</Link></p> */}
          {out ? (
            <>
              <p><Link onClick={logout}>Logout</Link></p>
              <p><Link to="/Myaccount">My Account</Link></p>            
            </>
          ) : (
            <>
              <p><Link to="/Login">Login</Link></p>
              <p><Link to="/Reg">Sign Up</Link></p>
            </>
          )}
        </div>
        <div className="blank2"></div>
        {out ?
        <div className="cart">
          <Link to="/Cart">
          <FontAwesomeIcon icon={faCartShopping} className="cartIcon"/>
          </Link>
        </div>
          :""
          }
        <div id='burger' onClick={openNav}>
        <FontAwesomeIcon icon={faBars} />
        </div>

      </div>
      <Outlet />

    </div>
  )
}

export default Header;
