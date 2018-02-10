import React from "react";
import CountUp from "react-countup";

const ComparisonPercent = props => {
  console.log('these are our comparison percent props', props)
  return (
  	<div className="animated fadeInLeft">
  	<h1 style={{ fontSize: '175px'}}>
  	<CountUp
  		start={0}
  		end={props.percent}
  		duration={3}
  		useEasing={true}
  		useGrouping={true}
  		decimals={0}
  		decimal="."
  		suffix="%"
  	/>
  	</h1>
  	<h1 style={{ fontSize: '50px'}}> agreement out of {props.total} votes.</h1>
  	</div>
  )

};

export default ComparisonPercent;