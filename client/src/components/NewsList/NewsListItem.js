import React from "react";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const NewsListItem = props => {
  // console.log('these are our props', props)
  return (
    <li className="list-group-item">
    <Container>
        <Row>
          <Col size="xs-5">
          <h2><a href={props.url} target="_blank">{props.title}</a></h2>
          
            <p>by {props.author}</p>
            <p>{props.source}</p>
            <p>{props.description}</p>
          </Col>
        </Row>
        </Container>
    </li>
  )

};
