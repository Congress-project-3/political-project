import React from "react";
import { Container, Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail";
import { Youtube, Twitter, Facebook } from "../Social";


export const SenatorProfile = props => {
  // console.log('these are our senator profile props', props)
  return (
    
    <div className="animated fadeInLeft">
  	<Container>
  	<Row>
  	<Col size="xs-6 sm-3">
  	<Thumbnail src={`"https://theunitedstates.io/images/congress/450x550/${props.thumbnail}.jpg"`} />
  	</Col>
  	<Col size="xs-6 sm-8">
    <h1>Sen. {props.firstName} {props.lastName}</h1>
    <h3>{props.party}-{props.state}</h3>
    <h4 >Phone: {props.phone}</h4>
    <h4><a style={{color:"#887f7f"}} href={props.contact} target="_blank">Contact Form</a></h4>
    <Row>
    <Col size="sm-4">
    <Youtube medialink={`https://www.youtube.com/user/${props.youtube}`} />
    </Col>
    <Col size="sm-4">
    <Twitter medialink={`https://twitter.com/${props.twitter}`} />
    </Col>
    <Col size="sm-4">
    <Facebook medialink={`https://www.facebook.com/${props.facebook}/`} />
    </Col>
    </Row>
    </Col>
    </Row>
    </Container>
    </div>

  )

};

