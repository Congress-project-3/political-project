import React from "react";
import { Container, Row, Col } from "../Grid";
import "./DistrictInfo.css";
import { Youtube, Twitter, Facebook } from "../Social";


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
    <Youtube medialink={`https://www.youtube.com/user/${props.youtube}`} />
    </Col>
    <Col size="sm-1">
    <Twitter medialink={`https://twitter.com/${props.twitter}`} />
    </Col>
    <Col size="sm-1">
    <Facebook medialink={`https://www.facebook.com/${props.facebook}/`} />
    </Col>
    </Row>
    </Col>
    </Row>
    </Container>
    </div>
  )

};

export default DistrictInfo;