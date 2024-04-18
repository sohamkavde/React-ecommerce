import React, { useEffect, useState } from 'react';
import './header.css';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { change } from '../store/reducer';
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
      setOut(ele['check']);      
    }
  });

  const logout = () => {
    const ele = JSON.parse(localStorage.getItem("Store"));
    ele['check'] = false;
    ele['email'] = "";
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
          <p>shophub</p>
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
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" className="svg-inline--fa fa-shopping-bag fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>

          </Link>
        </div>
          :""
          }
        <div id='burger' onClick={openNav}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        </div>

      </div>
      <Outlet />

    </div>
  )
}

export default Header;
