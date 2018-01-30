import React from "react";
import { Container, Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail";
import "./SenatorProfile.css"

export const SenatorProfilebyState = props => {
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
    <p>Up for re-election in {props.reelection}</p>
    <Row>
    <Col size="sm-2">
    <a href={`https://www.youtube.com/user/${props.youtube}`} target="_blank">
      <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-256.png" alt="youtube link" />
    </a>
    </Col>
    <Col size="sm-2">
    <a href={`https://twitter.com/${props.twitter}`} target="_blank">
      <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-twitter-512.png" alt="twitter link" />
    </a>
    </Col>
    <Col size="sm-2">
    <a href={`https://www.facebook.com/${props.facebook}/`} target="_blank">
      <img className="social" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1000px-F_icon.svg.png" alt="facebook link" />
    </a>
    </Col>
    </Row>

    </Col>
    </Row>
    </Container>

  )

};

