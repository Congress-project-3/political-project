import React from "react";
import { Container, Row, Col } from "../Grid";
import "./VoteList.css"

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
