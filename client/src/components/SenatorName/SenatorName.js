import React from "react";

const SenatorName = props => {
  console.log('these are our senator name props', props)
  return (
    <h2> Sen. {props.firstname} {props.lastname}'s Recent Votes</h2>
  )

};

export default SenatorName;