import React from "react";
import { Container, Row, Col } from "../Grid";
import "./DistrictInfo.css";


const DistrictInfo = props => {
  // console.log('these are our district info props', props)
  return (
  	<div>
  	<Container>
  	<Row>
  	<Col size="sm-12">
  	<h1>Rep. {props.rep}</h1>
    <h3>{props.district} District</h3>
    <h4>Phone: {props.phone}</h4>
    <Row>
    <Col size="sm-1">
    <a href={`https://www.youtube.com/user/${props.youtube}`} target="_blank">
      <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-256.png" alt="youtube link" />
    </a>
    </Col>
    <Col size="sm-1">
    <a href={`https://twitter.com/${props.twitter}`} target="_blank">
      <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-twitter-512.png" alt="twitter link" />
    </a>
    </Col>
    <Col size="sm-1">
    <a href={`https://www.facebook.com/${props.facebook}/`} target="_blank">
      <img className="social" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1000px-F_icon.svg.png" alt="facebook link" />
    </a>
    </Col>
    </Row>
    </Col>
    </Row>
    </Container>
    </div>
  )

};

export default DistrictInfo;