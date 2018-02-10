import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
        <Link className="navbar-brand" to="/">
           <img src={require("./eyenav2.jpg")} id="navLogo" />
        </Link>
      </div>

      <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
         {/* <Link to="/">About</Link>
        </li>
        <li
          className={window.location.pathname === "/searchvotes" ? "active" : ""}
        >*/}
          <Link to="/searchvotes">Search Votes</Link>
        </li>
        <li className={window.location.pathname === "/compare" ? "active" : ""}>
          <Link to="/compare">Compare</Link>
        </li>
        <li className={window.location.pathname === "/searchsenator" ? "active" : ""}>
          <Link to="/searchsenator">Search Senator</Link>
        </li>
        <li className={window.location.pathname === "/finddistrict" ? "active" : ""}>
          <Link to="/finddistrict">Find District</Link>
        </li>

      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>


  </nav>;

export default Nav;
