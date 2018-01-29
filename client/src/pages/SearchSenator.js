import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { SenatorDropdownItem, SenatorDropdown } from "../components/SenatorDropdown";
import { SenatorProfilebyState, SenatorProfile } from "../components/SenatorProfile";
import { StateDropdownItem, StateDropdown } from "../components/StateDropdown";


class SearchSenator extends Component {
  state = {
    byIndividual: false,
    byState: false,
    senators: [],
    senatorSearch: "",
    searchedSenators: [],
    firstName: "",
    lastName: "",
    party: "",
    abbrev: "",
    phone: "",
    reelection: "N/A",
    twitter: "",
    thumbnail: "",
    contact: "",
    senatorByState: [],
    stateAbbreviation: "AL",
    unitedStates: [
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
]

      }

  componentDidMount() {
    this.loadSenators();
  };

  handleSenatorChange = event => {
    
    this.setState({
      senatorSearch: event.target.value
    })
  }


  handleAbbrevChange = event => {
    
    this.setState({
      stateAbbreviation: event.target.value
    });
  };

  handleIndividualSubmit = event => {
    event.preventDefault();

    // API.getSenatorbyState(this.state.stateAbbreviation)
    //   .then((thingsFromNode) => {
    //     console.log('senator by state back from backend!!!', thingsFromNode.data);
    //     this.setState({ 
    //     searchedSenators: thingsFromNode.data,
    //     byState: true,
    //     byIndividual: false
      
    //     })
    //   })
    //   .catch(err => console.log(err));

    // ==================================

      API.getSenatorProfile(this.state.senatorSearch)
      .then((thingsFromNode) => {
        console.log('profile back from backend!!!', thingsFromNode.data);
        this.setState({ 
        searchedSenators: thingsFromNode.data,
          byState: false,
          byIndividual: true,
        // thumbnail: "https://theunitedstates.io/images/congress/450x550/" + thingsFromNode.data.member_id + ".jpg",

        })
      })
      .catch(err => console.log(err));

      // =======================================


      // API.getSenatorProfile(this.state.senatorSearch)
      // .then((thingsFromNode) => {
      //   console.log('profile back from backend!!!', thingsFromNode.data);
      //   this.setState({ 
      //   firstName: thingsFromNode.data.first_name,
      //   lastName: thingsFromNode.data.last_name,
      //   party: thingsFromNode.data.current_party,
      //   abbrev: thingsFromNode.data.roles[0].state,
      //   phone: thingsFromNode.data.roles[0].phone,
      //   twitter: thingsFromNode.data.twitter_account,
      //   thumbnail: "https://theunitedstates.io/images/congress/450x550/" + thingsFromNode.data.member_id + ".jpg",
      //   contact: thingsFromNode.data.roles[0].contact_form
      //   })
      // })
      // .catch(err => console.log(err));
  };

  handleStateSubmit = event => {
    event.preventDefault();

    API.getSenatorbyState(this.state.stateAbbreviation)
      .then((thingsFromNode) => {
        console.log('senator by state back from backend!!!', thingsFromNode.data);
        this.setState({ 
        searchedSenators: thingsFromNode.data,
        byState: true,
        byIndividual: false
      
        })
      })
      .catch(err => console.log(err));

  };

  // -----------------------------------------------

  loadSenators = () => {
    API.getSenators()
      .then((thingsFromNode) => {
        console.log('got all the senator ids from backend!!!', thingsFromNode.data[0]);
        this.setState({ senators: thingsFromNode.data, senatorSearch: thingsFromNode.data[0].id })
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
                    <Col size="xs-6 sm-10">
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
                      </Col>
                      
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleIndividualSubmit}
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
          <Col size="xs-6 sm-10">
          <StateDropdown
              value={this.state.stateAbbreviation} 
              onChange={this.handleAbbrevChange}
            >
            {this.state.unitedStates.map(states => {
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
          </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleStateSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
          </Row>
          <Row>
            <Col size="xs-12">
            
                {this.state.byIndividual === false ? (
                <h1 className="text-center">-</h1>
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
                        twitter={senator.twitter_account}
                        thumbnail={senator.member_id}
                        contact={senator.roles[0].contact_form}
                      />
                    );
                  })}
                    </div>
                      
                    )}
              
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
            
                {this.state.byState === false ? (
                <h1 className="text-center">--</h1>
              ) : ( 
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
                        twitter={senator.twitter_id}
                        thumbnail={senator.id}

                        // contact={this.state.contact}
                      />
                    );
                  })}
                    </div>
                      
                    )}
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SearchSenator;
