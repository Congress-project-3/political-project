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
        <img src={require("./eyenav2.jpg")} id="navLogo" />
        </Link>
      </div>

      <div id="myNavbar">
      <ul className="nav navbar-nav">
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
          <Link to="/opinions">Opinions</Link>
        </li>

      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/api/google"><span className="glyphicon glyphicon-log-in glyphnav"></span>Login</a></li>
      </ul>
    </div>
  </div>


  </nav>;

export default Nav;
