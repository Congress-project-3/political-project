import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import API from "../utils/API";
import { VoteList, VoteListItem } from "../components/VoteList";
import { Container, Row, Col } from "../components/Grid";
import { SenatorDropdownItem, SenatorDropdown } from "../components/SenatorDropdown";
import SenatorName from "../components/SenatorName";
import "../../src/components/SenatorName/sensearch.css";
import Logo from "../components/Jumbotron/logo2.jpg";



class SearchVotes extends Component {
  state = {
    senators: [],
    votes: [],
    senatorSearch: "",
    senatorFirstName: "",
    senatorLastName: "",
    nameArrived: false,
    senatorsArrived: false,
    idArrived: false,
    searchRendered: false

  };

  componentDidMount() {
    this.loadSenators();
  }

  handleChange = event => {
    this.setState({
      senatorSearch: event.target.value,
      searchRendered: false
    });
    
  };

  handleFormSubmit = event => {
    event.preventDefault();

      API.getSenatorVotes(this.state.senatorSearch)
      .then((thingsFromNode) => {
        console.log('votes back from backend!!!', thingsFromNode.data);
        this.setState({ 
          votes: thingsFromNode.data.votes,
         })

        // -----------------------------------------------------

        API.getSenatorProfile(this.state.senatorSearch)
          .then((thingsFromNode) => {
          console.log('profile back from backend!!!', thingsFromNode.data);
          this.setState({ 
            senatorFirstName: thingsFromNode.data[0].first_name, 
            senatorLastName: thingsFromNode.data[0].last_name,
            nameArrived: true,
            searchRendered: true
          })
          console.log(this.state.votes[0].member_id)
      console.log(this.state.senatorLastName)
      })

      })

      .catch(err => console.log(err));
  };

  // ----------------------------------------------------------

  loadSenators = () => {
    API.getSenators()
      .then((thingsFromNode) => {
        console.log('got all the senator ids from backend!!!', thingsFromNode.data[0]);
        this.setState({ 
          senators: thingsFromNode.data, 
          senatorSearch: thingsFromNode.data[0].id,
          senatorsArrived: true 
        })
      })
      .catch(err => console.log(err));
  };

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

render() {
    return (
      <div>
        {!this.state.searchRendered ? (
        <Jumbotron 
          image={Logo}
        />
        ) : (
        <Jumbotron 
          image=""
        >
                <div>
                <Row>
                  <Col size="xs-12">
                    <SenatorName 
                       firstname={this.state.senatorFirstName}
                        lastname={this.state.senatorLastName}
                       />
                   </Col>
                </Row>
                
                <Row>
                <Col size="xs-12">
                <VoteList>
                  {this.state.votes.map(vote => {
                    return (
                      <VoteListItem
                        key={vote.roll_call}
                        rollCallNum={vote.roll_call}
                        description={vote.description}
                        date={vote.date}
                        position={vote.position}
                        question={vote.question}
                        billNum={vote.bill.number}
                        totalYes={vote.total.yes}
                        totalNo={vote.total.no}
                        totalNotVoting={vote.total.not_voting}
                      />
                    );
                  })}
                </VoteList>
                </Col>
                </Row>
                </div>

                    </Jumbotron>
        )}
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-12 sm-8">
                      {this.state.senatorsArrived === false ? (
                                <p></p>
                        ) : (
                      <SenatorDropdown
                      value={this.state.senatorSearch} 
                      onChange={this.handleChange}
                        >
                      {this.state.senators.map(senator => {
                    return (
                      <SenatorDropdownItem
                        key={senator.id}
                        value={senator.id}
                        // value={this.state.senatorSearch}
                        firstName={senator.first_name}
                        lastName={senator.last_name}
                        party={senator.party}
                        state={senator.state}
                        // onChange={this.handleInputChange}
                      />
                    );
                  })}
                      </SenatorDropdown>
                      )}
                      </Col>
                      
                    <Col size="xs-6 sm-4">
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
                  <Col size='xs-12'>
                    <h1>Find out a senator's voting record in the most recent votes!</h1>
                  </Col>
                  </Row>

                </Container>
              </form>
            </Col>
          </Row>
             
        </Container>
      </div>
    );
  }
}

export default SearchVotes;
