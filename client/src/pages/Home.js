import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../utils/API";



class Home extends Component {
  state = {
    email: ""
  }

  componentDidMount() {
    this.loadNews();
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

  loadNews = () => {
    API.getHomepageNews()
      .then((thingsFromNode) => {
        console.log('got all the news from backend!!!', thingsFromNode.data);

      })
      .catch(err => console.log(err));
  };

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

render() {
  return (
  <div>
    <Jumbotron 
          title="Blink First"
        />
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Senator Stuff!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
            et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
            gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
            mi sollicitudin turpis semper, et interdum risus lobortis.
            Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
            efficitur malesuada. Mauris lorem urna, sodales accumsan quam non,
            tristique tempor erat. Nullam non sem facilisis, tempus tortor sit
            amet, volutpat nisl. Ut et turpis non nunc maximus mollis a vitae
            tortor. Pellentesque mattis risus ac quam laoreet cursus. Praesent
            suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis
            consequat mattis tortor vitae mattis.
          </p>
          
        </Col>
      </Row>
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

export default Home;