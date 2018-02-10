import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Input from "../components/Input";



class Home extends Component {
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
    console.log(this.state.email)
  };

render() {
  return (
  <div>
    <Jumbotron />
    <Container style={{ marginTop: 30 }}>
     
    
      <Row>
        <Col size="md-7">
        <div class="funcList">
          <h2 class="sec1">Search a senator to see all of their most recent votes.</h2>
           <a class= "redLink" href="/searchvotes">Search Votes</a>
           </div>
           </Col>
        <form id="emailthing">
        <Col size="md-4">
        <Input
        name="email"
        value={this.state.email}
        type="email"
        onChange={this.handleInputChange}
        placeholder="Sign up for our monthly newsletter!"
        />
        </Col>
        <Col size="md-1">
        <Button
        onClick={this.handleFormSubmit}
        type="success"
        className="input-lg"
        >Submit</Button>
        </Col>
        </form>  
      </Row> 


   
       <Row>
        <Col size="md-7">
        <div class="funcList">
          <h2 class="sec1">See the per centage rate of agreement between any two Senators.</h2>
           <a class= "redLink" href="/compare">Check Agreement Rate</a>
           </div>
           </Col>
      </Row>
        

        
        <Row>
        <Col size="md-7">
        <div class="funcList">
          <h2 class="sec1">Find Senators by name or state to access their personal social media accounts.</h2>
           <a class= "redLink" href="/searchsenator">Find Your Senator</a>
           </div>
           </Col>
      </Row> 
  

      <Row>
        <Col size="md-7">
        <div class="funcList">
          <h2 class="sec1">Use your address to find out who your local representative is. </h2>
           <a class= "redLink" href="/finddistrict">Find Your Representative</a>
           </div>
           </Col>
      </Row> 
      
   
    </Container>
  </div>
  );
};
};

export default Home;