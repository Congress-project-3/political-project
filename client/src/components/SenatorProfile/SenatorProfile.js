import React from "react";
import { Container, Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail";
import { Youtube, Twitter, Facebook } from "../Social";


export const SenatorProfile = props => {
  // console.log('these are our senator profile props', props)
  return (
    
  	<Container>
  	<Row>
  	<Col size="xs-6 sm-3">
  	<Thumbnail src={`"https://theunitedstates.io/images/congress/450x550/${props.thumbnail}.jpg"`} />
  	</Col>
  	<Col size="xs-6 sm-8">
    <h1>Sen. {props.firstName} {props.lastName}</h1>
    <h3>{props.party}-{props.state}</h3>
    <h4>Phone: {props.phone}</h4>
    <a href={props.contact} target="_blank">Contact Form</a>
    <Row>
    <Col size="sm-2">
    <Youtube medialink={`https://www.youtube.com/user/${props.youtube}`} />
    </Col>
    <Col size="sm-2">
    <Twitter medialink={`https://twitter.com/${props.twitter}`} />
    </Col>
    <Col size="sm-2">
    <Facebook medialink={`https://www.facebook.com/${props.facebook}/`} />
    </Col>
    </Row>
    </Col>
    </Row>
    </Container>

  )

};

