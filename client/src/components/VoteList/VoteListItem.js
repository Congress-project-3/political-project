import React from "react";
import { Container, Row, Col } from "../Grid";
import Moment from 'react-moment';
import "./VoteList.css";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const VoteListItem = props => {
  // console.log('these are our props', props)
  return (
    <li className="list-group-item my-list">
    <Container>
        <Row>
          <Col size="xs-12">
            <h2>Roll Call Vote #{props.rollCallNum}</h2>
          </Col>
          <Col size="xs-12" className="list-info">
            <h4>{props.description}</h4>
            <h4>{props.billNum}</h4>
            <h4> 
            <Moment format="MM/DD/YYYY">
                {props.date}
            </Moment>
            </h4>
            <h4>Question: {props.question}</h4>
            <h4>Yes: {props.totalYes} || No: {props.totalNo} || Not Voting: {props.totalNotVoting}</h4>
            <h4>Voted: {props.position}</h4>
          </Col>
        </Row>
        </Container>
    </li>
  )

};
