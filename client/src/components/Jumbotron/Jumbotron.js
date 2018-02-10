import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron text-center">

    <h1>
    {/* <img src={require("./logo.jpg")} id="mainglogo" />*/}
    </h1>
     <a
      // target="_blank"
      // rel="noopener noreferrer"
      // href="https://projects.propublica.org/api-docs/congress-api/"
    >
      
    </a>
  {props.children}
  </div>
);

export default Jumbotron;
