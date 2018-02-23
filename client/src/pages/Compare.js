import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Button from "../components/Button";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { SenatorDropdownItem, SenatorDropdown } from "../components/SenatorDropdown";
import ComparisonPercent from "../components/ComparisonPercent";
import Logo from "../components/Jumbotron/logo2.jpg";


class Compare extends Component {
  state = {
    senators: [],
    votes: [],
    percent: "",
    senatorSearch: "",
    firstSenator: "",
    secondSenator: "",
    totalVotes: "",
    senatorsArrived: false,
    searchRendered: false,
    FirstSenatorFirstName: "",
    FirstSenatorLastName: "",
    SecondSenatorFirstName: "",
    SecondSenatorLastName: "",
    namesArrived: false
  };

  componentDidMount() {
    this.loadSenators();
  }

  handleFirstChange = event => {
    this.setState({
      firstSenator: event.target.value,
      searchRendered: false
      // percent: ""
    });
  };

  handleSecondChange = event => {
    this.setState({
      secondSenator: event.target.value,
      searchRendered: false
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    this.setState({
      percent: "",
      namesArrived: false
    });

    if (this.state.firstSenator === this.state.secondSenator) {
      alert("Please choose two different senators!")
    }
    else {

    


      // --------------------------------------------------

      API.getComparison(this.state.firstSenator, this.state.secondSenator)
      .then((thingsFromNode) => {
        console.log('comparison data back from backend!!!', thingsFromNode.data);
        this.setState({ 
          searchRendered: true,
          percent: thingsFromNode.data.agree_percent,
          totalVotes: thingsFromNode.data.common_votes
      })
        console.log(this.state.percent);

        API.getSenatorProfile(this.state.firstSenator)
          .then((thingsFromNode) => {
          console.log('first profile back from backend!!!', thingsFromNode.data);
          this.setState({ 
            FirstSenatorFirstName: thingsFromNode.data[0].first_name, 
            FirstSenatorLastName: thingsFromNode.data[0].last_name,
          })
      console.log(this.state.senatorLastName)


            API.getSenatorProfile(this.state.secondSenator)
          .then((thingsFromNode) => {
          console.log(' second profile back from backend!!!', thingsFromNode.data);
          this.setState({ 
            SecondSenatorFirstName: thingsFromNode.data[0].first_name, 
            SecondSenatorLastName: thingsFromNode.data[0].last_name,
            namesArrived: true
          })
      console.log(this.state.senatorLastName)
      })

      })

      })
      .catch(err => console.log(err));
    }
  };

  // ------------------------------------------------------------

  loadSenators = () => {
    API.getSenators()
      .then((thingsFromNode) => {
        console.log('got all the senator ids from backend!!!', thingsFromNode.data);
        this.setState({ senators: thingsFromNode.data, 
          firstSenator: thingsFromNode.data[0].id, 
          secondSenator: thingsFromNode.data[0].id,
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
        {!this.state.namesArrived ? (
                      <p></p>
                    ) : ( 
                    
                  <div>
                    <ComparisonPercent 
                     percent={this.state.percent}
                     total={this.state.totalVotes}
                     first_firstname={this.state.FirstSenatorFirstName}
                     first_lastname={this.state.FirstSenatorLastName}
                     second_firstname={this.state.SecondSenatorFirstName}
                     second_lastname={this.state.SecondSenatorLastName}
                     firstThumbnail={this.state.firstSenator}
                     secondThumbnail={this.state.secondSenator}
                    />
                    </div> 
                    
                    )}

                    </Jumbotron>
        )}

        <Container>
        <div className="inptDiv">
        <Row>
        <Col size="xs-12 lg-12 left">
  
              <form className="fuckthisthing">
                <Container>
                  <Row>
                    <Col size="lg-12">
                      {!this.state.senatorsArrived ? (
                                <p></p>
                        ) : (
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
                      )}
                      </Col>
                      </Row>
                  <Row>
                  <Col size="lg-12">
                  {!this.state.senatorsArrived ? (
                              <p></p>
                        ) : (
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
                      )}
                      </Col>
{/*<<<<<<< HEAD*/}
                  </Row>  
                  <Row>
                  
                    <Col size="lg-12">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg compBtn"
                      >
                        COMPARE
                      </Button>
                    </Col>
                    </Row>
{/*=======</Row>*/}
                  
                  <Row>
                  <Col size='xs-12'>
                    <h1>Compare two senators' voting records to see how often they agree!</h1>
                  </Col>
                  </Row>
{/*>>>>>>> Development*/}
                </Container>
              </form>
     
          </Col> 
         </Row> 
         </div>
        </Container>

         <Footer />
      </div>
    );
   
  }
  
}


export default Compare;