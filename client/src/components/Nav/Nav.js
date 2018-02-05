import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Blink First
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
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
      </ul>
    </div>
  </nav>;

export default Nav;
