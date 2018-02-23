import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
      {/*<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar">Search Votes</span>
        <span className="icon-bar">Search Sentors</span>
        <span className="icon-bar">Search Agreement Rate</span>
        <span className="icon-bar">Search By District</span>  
      </button>*/}
        <Link className="navbar-brand" to="/">
{/*<<<<<<< HEAD
        <img src={require("./eyenav2.jpg")} id="navLogo" />
======= */}


           <img src={require("./eyenav2.jpg")} id="navLogo" alt="Blink first logo"/>
{/*>>>>>>> Development*/}
        </Link>
      </div>

      <div id="myNavbar">
      <ul className="nav navbar-nav navItem">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/"
              ? "active"
              : ""
          }
        >

          
        </li>
        <li
          className={window.location.pathname === "/searchvotes" ? "active" : ""}
        >

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
        <li className={window.location.pathname === "/opinions" ? "active" : ""}>
          <Link to="/opinions">Tell us what you think!</Link>
        </li>

      </ul>
      <ul className="nav navbar-nav navbar-right">
{/*<<<<<<< HEAD
        <li><a href="/api/google"><span className="glyphicon glyphicon-log-in glyphnav"></span>Login</a></li>
======= */}
        <li><a href="/api/google"><span style={{left: '-6px'}} className="glyphicon glyphicon-log-in"></span> Login</a></li>
{/*>>>>>>> Development */}
      </ul>
    </div>
  </div>


  </nav>;

export default Nav;
