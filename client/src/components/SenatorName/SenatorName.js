import React from "react";

const SenatorName = props => {
  console.log('these are our senator name props', props)
  return (
    <h1> Sen. {props.firstname} {props.lastname}'s Recent Votes</h1>
  )

};

export default SenatorName;