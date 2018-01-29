import React from "react";

const DistrictInfo = props => {
  // console.log('these are our district info props', props)
  return (
  	<div>
  	<h1> Rep. {props.rep}</h1>
    <h3>{props.district} District</h3>
    <p>Twitter: @{props.twitter}</p>
    <p>Phone: {props.phone}</p>
    </div>
  )

};

export default DistrictInfo;