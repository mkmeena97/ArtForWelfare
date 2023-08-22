import React from "react";
import dish from "../images/artlogo1.png";
import "./style.css";

import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
   const mystate = useSelector((state)=>state.logged);
  return (
    <div style={{display:mystate.loggedIn?"none":"block"}} >

      <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">  
  <div class="container">
    <a class="navbar-brand" href="#">
    <img
              src={dish}
              height="66"
              alt="logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />

    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

      <li className="nav-item mx-2">
                <NavLink className="nav-link white" to="/homepage">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link white" to="/aboutuspage">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link white" to="/contactpage">
                  Contact
                </NavLink>
              </li>
       
        <li class="nav-item dropdown pe-4">
          <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Registration
          </a>
          <ul class="dropdown-menu">

            <li><Link to="reg_customer" className='dropdown-item '>Customer Registration</Link></li>
            <li> <Link to="reg_ngo" className='dropdown-item nav-link px-3'>NGO Registration</Link></li>           
            <li><Link to="reg_artist" className='dropdown-item nav-link px-3'>Artist Registration</Link></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
    <Link className="btn btn-warning white px-3" to="/login">
           <b>Login</b> 
          </Link>
  </div>
</nav>


    </div>
  );
};

export default Header;