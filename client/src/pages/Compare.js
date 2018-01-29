import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { SenatorDropdownItem, SenatorDropdown } from "../components/SenatorDropdown";
import ComparisonPercent from "../components/ComparisonPercent";


class Compare extends Component {
  state = {
    senators: [],
    votes: [],
    percent: "",
    senatorSearch: "",
    firstSenator: "",
    secondSenator: "",
    totalVotes: ""
  };

  componentDidMount() {
    this.loadSenators();
  }

  handleFirstChange = event => {
    
    this.setState({
      firstSenator: event.target.value
    });
  };

  handleSecondChange = event => {
    
    this.setState({
      secondSenator: event.target.value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();


      // ---------------------------------------

      API.getComparison(this.state.firstSenator, this.state.secondSenator)
      .then((thingsFromNode) => {
        console.log('comparison data back from backend!!!', thingsFromNode.data);
        this.setState({ percent: thingsFromNode.data.agree_percent,
        totalVotes: thingsFromNode.data.common_votes})
        console.log(this.state.percent);
      })
      .catch(err => console.log(err));
  };

  loadSenators = () => {
    API.getSenators()
      .then((thingsFromNode) => {
        console.log('got all the senator ids from backend!!!', thingsFromNode.data);
        this.setState({ senators: thingsFromNode.data, 
          firstSenator: thingsFromNode.data[0].id, 
          secondSenator: thingsFromNode.data[0].id })
      })
      .catch(err => console.log(err));
  };

render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-6 sm-6">
                      <SenatorDropdown
                      value={this.state.firstSenator} 
                      onChange={this.handleFirstChange}
                        >

                      {this.state.senators.map(senator => {
                    return (
                      <SenatorDropdownItem
                        key={senator.id}
                        value={senator.id}
                        firstName={senator.first_name}
                        lastName={senator.last_name}
                        party={senator.party}
                        state={senator.state}
                      />
                    );
                  })}
                      </SenatorDropdown>
                      </Col>
                  
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                  <Col size="xs-6 sm-6">
                      <SenatorDropdown
                      value={this.state.secondSenator} 
                      onChange={this.handleSecondChange}
                        >

                      {this.state.senators.map(senator => {
                    return (
                      <SenatorDropdownItem
                        key={senator.id}
                        value={senator.id}
                        firstName={senator.first_name}
                        lastName={senator.last_name}
                        party={senator.party}
                        state={senator.state}
                      />
                    );
                  })}
                      </SenatorDropdown>
                      </Col>
                  </Row>
                </Container>
              </form>
              <Container>
                 <Row>
                   <Col size="md-12">
                  {this.state.percent === "" ? (
                <h1 className="text-center">Select two Senators to compare them!</h1>
              ) : (
                    <ComparisonPercent 
                     percent={this.state.percent}
                     total={this.state.totalVotes}
                    />
              )}
                    
                   </Col>
                    </Row>
                      </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Compare;