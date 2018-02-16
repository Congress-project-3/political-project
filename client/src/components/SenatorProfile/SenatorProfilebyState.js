import React from "react";
import { Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail";
import { Youtube, Twitter, Facebook } from "../Social";

export const SenatorProfilebyState = props => {
  // console.log('these are our senator profile props', props)
  return (
    
    <div className="animated fadeInLeft">
  	
  	     <Col size="xs-6 sm-2">
  	       <Thumbnail src={`"https://theunitedstates.io/images/congress/450x550/${props.thumbnail}.jpg"`} />
  	     </Col>
  	     <Col size="xs-6 sm-4">
            <h2>Sen. {props.firstName} {props.lastName}</h2>
            <h3>{props.party}-{props.state}</h3>
            <h4>Up for re-election in {props.reelection}</h4>
        <Row>
          <Col size="sm-3">
            <Youtube medialink={`https://www.youtube.com/user/${props.youtube}`} />
          </Col>
          <Col size="sm-3">
            <Twitter medialink={`https://twitter.com/${props.twitter}`} />
          </Col>
          <Col size="sm-3">
            <Facebook medialink={`https://www.facebook.com/${props.facebook}/`} />
          </Col>
        </Row>
        </Col>
      
    </div>


  )

};

