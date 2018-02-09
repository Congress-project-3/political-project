import React from "react";
import CountUp from "react-countup";

const ComparisonPercent = props => {
  console.log('these are our comparison percent props', props)
  return (
  	<div>
  	<h1>
  	<CountUp
  		start={0}
  		end={props.percent}
  		duration={2.5}
  		useEasing={true}
  		useGrouping={true}
  		decimals={2}
  		decimal="."
  		suffix="%"
  	/>
  	</h1>
  	<h1> agreement out of {props.total} votes.</h1>
  	</div>
  )

};

export default ComparisonPercent;