import React from "react";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const VoteListItem = props => {
  // console.log('these are our props', props)
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
          </Col>
          <Col size="xs-8 sm-9">
            <h3>Roll Call Vote #{props.rollCallNum}</h3>
            <p>{props.description}</p>
            <p>{props.billNum}</p>
            <p>Date: {props.date}</p>
            <p>Question: {props.question}</p>
            <p>Yes: {props.totalYes} || No: {props.totalNo} || Not Voting: {props.totalNotVoting}</p>
            <p>Voted: {props.position}</p>
          </Col>
        </Row>
      </Container>
    </li>
  )

};
