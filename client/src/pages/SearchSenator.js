import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { SenatorDropdownItem, SenatorDropdown } from "../components/SenatorDropdown";
import { SenatorProfilebyState, SenatorProfile } from "../components/SenatorProfile";
import { StateDropdownItem, StateDropdown } from "../components/StateDropdown";
import Logo from "../components/Jumbotron/logo2.jpg";


const unitedStates = [
    { name: 'Search by State', abbreviation: '--'},
    { name: 'Alabama', abbreviation: 'AL'},
    { name: 'Alaska', abbreviation: 'AK'},
    { name: 'Arizona', abbreviation: 'AZ'},
    { name: 'Arkansas', abbreviation: 'AR'},
    { name: 'California', abbreviation: 'CA'},
    { name: 'Colorado', abbreviation: 'CO'},
    { name: 'Connecticut', abbreviation: 'CT'},
    { name: 'Delaware', abbreviation: 'DE'},
    { name: 'Florida', abbreviation: 'FL'},
    { name: 'Georgia', abbreviation: 'GA'},
    { name: 'Hawaii', abbreviation: 'HI'},
    { name: 'Idaho', abbreviation: 'ID'},
    { name: 'Illinois', abbreviation: 'IL'},
    { name: 'Indiana', abbreviation: 'IN'},
    { name: 'Iowa', abbreviation: 'IA'},
    { name: 'Kansas', abbreviation: 'KS'},
    { name: 'Kentucky', abbreviation: 'KY'},
    { name: 'Louisiana', abbreviation: 'LA'},
    { name: 'Maine', abbreviation: 'ME'},
    { name: 'Maryland', abbreviation: 'MD'},
    { name: 'Massachusetts', abbreviation: 'MA'},
    { name: 'Michigan', abbreviation: 'MI'},
    { name: 'Minnesota', abbreviation: 'MN'},
    { name: 'Mississippi', abbreviation: 'MS'},
    { name: 'Missouri', abbreviation: 'MO'},
    { name: 'Montana', abbreviation: 'MT'},
    { name: 'Nebraska', abbreviation: 'NE'},
    { name: 'Nevada', abbreviation: 'NV'},
    { name: 'New Hampshire', abbreviation: 'NH'},
    { name: 'New Jersey', abbreviation: 'NJ'},
    { name: 'New Mexico', abbreviation: 'NM'},
    { name: 'New York', abbreviation: 'NY'},
    { name: 'North Carolina', abbreviation: 'NC'},
    { name: 'North Dakota', abbreviation: 'ND'},
    { name: 'Ohio', abbreviation: 'OH'},
    { name: 'Oklahoma', abbreviation: 'OK'},
    { name: 'Oregon', abbreviation: 'OR'},
    { name: 'Pennsylvania', abbreviation: 'PA'},
    { name: 'Rhode Island', abbreviation: 'RI'},
    { name: 'South Carolina', abbreviation: 'SC'},
    { name: 'South Dakota', abbreviation: 'SD'},
    { name: 'Tennessee', abbreviation: 'TN'},
    { name: 'Texas', abbreviation: 'TX'},
    { name: 'Utah', abbreviation: 'UT'},
    { name: 'Vermont', abbreviation: 'VT'},
    { name: 'Virginia', abbreviation: 'VA'},
    { name: 'Washington', abbreviation: 'WA'},
    { name: 'West Virginia', abbreviation: 'WV'},
    { name: 'Wisconsin', abbreviation: 'WI'},
    { name: 'Wyoming', abbreviation: 'WY' }
]

// -------------------------------------------------------------

class SearchSenator extends Component {
  state = {
    byIndividual: false,
    byState: false,
    individualChange: true,
    duoChange: true,
    senatorsArrived: false,
    senators: [],
    senatorSearch: "",
    searchedSenators: [],
    firstName: "",
    lastName: "",
    party: "",
    abbrev: "",
    phone: "",
    reelection: "N/A",
    contact: "",
    stateAbbreviation: "--",
    searchRendered: false
  }

  // ------------------------------------------------------------

  componentDidMount() {
    this.loadSenators();
  };

  // ------------------------------------------------------------

  handleSenatorChange = event => {
    
    this.setState({
      senatorSearch: event.target.value,
      individualChange: true,
      duoChange: false
    })
  }

  // -------------------------------------------------------------

  handleAbbrevChange = event => {
    
    this.setState({
      stateAbbreviation: event.target.value,
      individualChange: false,
      duoChange: true
    });
  };

  // --------------------------------------------------------------

  handleSubmit = event => {
    event.preventDefault();

    // ==========================================

    if (this.state.individualChange) {

      API.getSenatorProfile(this.state.senatorSearch)
      .then((thingsFromNode) => {
        console.log('profile back from backend!!!', thingsFromNode.data);
        this.setState({ 
          searchedSenators: thingsFromNode.data,
          byState: false,
          byIndividual: true,
          searchRendered: true
        })
      })
      .catch(err => console.log(err));
    }

  // =======================================================

    else if (this.state.duoChange) {

      API.getSenatorbyState(this.state.stateAbbreviation)
      .then((thingsFromNode) => {
        console.log('senator by state back from backend!!!', thingsFromNode.data);
        this.setState({ 
        searchedSenators: thingsFromNode.data,
        byState: true,
        byIndividual: false,
        searchRendered: true
        })
      })
      .catch(err => console.log(err));
    }

  };

  // -------------------------------------------------------------

  // Loads the list of senators into the dropdowns via an
  // API call

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
        {!this.state.byIndividual ? (
                      <p></p>
                    ) : ( 
                    
                  <div>
                    {this.state.searchedSenators.map(senator => {
                    return (
                      <SenatorProfile
                        key={senator.member_id}
                        firstName={senator.first_name}
                        lastName={senator.last_name}
                        party={senator.current_party}
                        state={senator.roles[0].state}
                        phone={senator.roles[0].phone}
                        reelection={senator.next_election}
                        twitter={senator.twitter_account === null ? "CSPAN" : senator.twitter_account}
                        youtube={senator.youtube_account === null ? "CSPAN" : senator.youtube_account}
                        facebook={senator.facebook_account === null ? "CSPAN" : senator.facebook_account}
                        thumbnail={senator.member_id}
                        contact={senator.roles[0].contact_form}
                      />
                    );
                  })}
                    </div> 
                    
                    )}


                    {!this.state.byState ? (
                      <p></p>
                     ) : ( 
                  <Row>
                  <div>
                    {this.state.searchedSenators.map(senator => {
                    return (
                      <SenatorProfilebyState
                        key={senator.id}
                        firstName={senator.first_name}
                        lastName={senator.last_name}
                        party={senator.party}
                        state={this.state.stateAbbreviation}
                        // phone={this.state.phone}
                        reelection={senator.next_election}
                        twitter={senator.twitter_id === null ? "CSPAN" : senator.twitter_id}
                        thumbnail={senator.id}
                        youtube={senator.youtube_id === null ? "CSPAN" : senator.youtube_id}
                        facebook={senator.facebook_account === null ? "CSPAN" : senator.facebook_account}

                        // contact={this.state.contact}
                      />
                    );
                  })}
                    </div>
                    </Row>
                      
                    )}


                    </Jumbotron>
        )}
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-12 sm-10">
                      {!this.state.senatorsArrived ? (
                        <p></p>
                        ) : (
                      <SenatorDropdown
                      value={this.state.senatorSearch} 
                      onChange={this.handleSenatorChange}
                        >

                      {this.state.senators.map(senator => {
                        return (
                      <SenatorDropdownItem
                      name="senatorSearch"
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
                      )}
                      </Col>
                      
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
          <Col size="xs-12 sm-10">
          {!this.state.senatorsArrived ? (
                    <p></p>
                ) : (
            <StateDropdown
              value={this.state.stateAbbreviation} 
              onChange={this.handleAbbrevChange}
            >
            {unitedStates.map(states => {
                        return (
                      <StateDropdownItem
                      name="stateAbbreviation"
                        key={states.abbreviation}
                        value={states.abbreviation}
                        abbreviation={states.abbreviation}
                        state={states.name}
                      />
                        );
                  })}
                      </StateDropdown>
            )}
          </Col>
          </Row>
          
     
        </Container>
      </div>
    );
  }
}

export default SearchSenator;
