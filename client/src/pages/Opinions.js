import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Logo from "../components/Jumbotron/logo2.jpg";
import OpinionForm from "../components/OpinionForm";
import { OpinionFormDropdownItem, OpinionFormDropdown } from "../components/OpinionFormDropdown";


const topics = [
    {name: "Gun Control", value: "gunControl"}, 
    {name: "Climate Change", value: "climateChange"}, 
    {name: "Net Neutrality", value: "netNeutrality"},
    ]

class Opinions extends Component {
  state = {
    opinion: "gunControl"
  }


  handleChange = event => {
    this.setState({
      opinion: event.target.value,
    });
  }

handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.opinion)
  };

  
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

render() {
  return (
  <div>
    <Jumbotron 
          image={Logo}
        />
    <Container style={{ marginTop: 30 }}>

    <h1>Tell your elected officials what you think!</h1>
    <p>Sometimes it's hard to reach out to your senator. You feel like you're just 
    one person. But here, you can submit your opinions into our database that is accessible 
    by all elected officials so that they can see what citizens care about the most on a larger scale.
    There's strength in numbers, and when we band together we can push for the change we want to see
    in our society.</p>

    <hr />


      <Row>

                     <OpinionFormDropdown
                      value={this.state.opinion} 
                      onChange={this.handleChange}
                        >

                      {topics.map(topic => {
                    return (
                      <OpinionFormDropdownItem
                        key={topic.value}
                        value={topic.value}
                        issue={topic.name}
                      />
                    );
                  })}
                      </OpinionFormDropdown>
      
      <OpinionForm 
        issue={this.state.opinion}
      />


      </Row>

      
   
    </Container>
  </div>
  );
};
};


export default Opinions;
