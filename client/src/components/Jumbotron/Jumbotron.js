import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron text-center">
    <h1>{props.title}</h1>
    {props.children}
  </div>
);

export default Jumbotron;
