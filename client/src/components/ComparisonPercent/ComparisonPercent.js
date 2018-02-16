import React from "react";
import CountUp from "react-countup";
import { Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail";
import "./ComparisonPercent.css";


const ComparisonPercent = props => {
  console.log('these are our comparison percent props', props)
  return (
  	<div className="animated fadeInLeft">
    <Row>
      <Col size="xs-5">
        <h3>Sen. {props.first_firstname} {props.first_lastname}</h3>
      </Col>
      <Col size="xs-3">
    </Col>
      <Col size="xs-4">
        <h3>Sen. {props.second_firstname} {props.second_lastname}</h3>
      </Col>
    </Row>
    <Row>
    <Col size="xs-1">
    </Col>
    <Col size="xs-2">
        <Thumbnail className="thumbnail" id="senatorOne" src={`"https://theunitedstates.io/images/congress/450x550/${props.firstThumbnail}.jpg"`} />
    </Col>
    <Col size="xs-6">
  	<h1 style={{ fontSize: '175px'}}>
  	<CountUp
  		start={-10}
  		end={props.percent}
  		duration={3.5}
  		useEasing={true}
  		useGrouping={true}
  		decimals={0}
  		decimal="."
  		suffix="%"
  	/>
  	</h1>
    </Col>
    <Col size="xs-2">
        <Thumbnail className="thumbnail" id="senatorTwo" src={`"https://theunitedstates.io/images/congress/450x550/${props.secondThumbnail}.jpg"`} />
    </Col>
    <Col size="xs-1">
    </Col>
    </Row>
    <Row>
    <Col size="xs-12">
      <h1 style={{ fontSize: '50px'}}> agreement out of {props.total} votes.</h1>
    </Col>
    </Row>
  	</div>
  )

};

export default ComparisonPercent;

