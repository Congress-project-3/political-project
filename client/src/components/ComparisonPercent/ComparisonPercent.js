import React from "react";

const ComparisonPercent = props => {
  console.log('these are our comparison percent props', props)
  return (
    <h1>{props.percent}% agreement out of {props.total} common votes</h1>
  )

};

export default ComparisonPercent;