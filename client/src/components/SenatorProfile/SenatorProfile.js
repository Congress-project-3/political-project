import React from "react";
import { Container, Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail";

export const SenatorProfile = props => {
  // console.log('these are our senator profile props', props)
  return (
    
  	<Container>
  	<Row>
  	<Col size="xs-6 sm-3">
  	<Thumbnail src={`"https://theunitedstates.io/images/congress/450x550/${props.thumbnail}.jpg"`} />
  	</Col>
  	<Col size="xs-6 sm-8">
    <h1>{props.firstName} {props.lastName}</h1>
    <h3>{props.party}-{props.state}</h3>
    <p>Twitter: @{props.twitter}</p>
    <p>Phone: {props.phone}</p>
    <a href={props.contact} target="_blank">Contact Form</a>
    </Col>
    </Row>
    </Container>

  )

};

