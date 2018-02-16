import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../utils/API";


class Auth extends Component {
  state = {
    email: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);
    // API.getAuthentication()
    console.log(window.location)
    window.location.pathname = '/api/google';
  };

//axios call needed here for onclick


render() {
  return (
  <div>
    <Jumbotron />
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Senator Stuff!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
        AUTH STUFF
          </p>
          
        </Col>
      </Row>
      <a className="google-btn" href='/api/google'>Google+</a>
      <form>
      <Row>
      <Col size="md-5">
      <Input
      name="email"
      value={this.state.email}
      type="email"
      onChange={this.handleInputChange}
      placeholder="Sign up for our monthly newsletter!"
      />
      </Col>
      <Col size="md-2">
      <Button
      onClick={this.handleFormSubmit}
      type="success"
      className="input-lg"
      >
      Submit
      </Button>
      </Col>
      </Row>
      </form>
    </Container>
  </div>
  );
}
}

export default Auth;