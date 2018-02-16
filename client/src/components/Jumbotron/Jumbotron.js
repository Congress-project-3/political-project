import React from "react";
import "./Jumbotron.css";



const Jumbotron = props => (
  <div className="jumbotron text-center" style={{ backgroundImage: `url(${props.image})` }}>

    
  {props.children}
  </div>
);

export default Jumbotron;
