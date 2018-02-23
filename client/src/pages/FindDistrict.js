import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import DistrictInfo from "../components/DistrictInfo";
import Logo from "../components/Jumbotron/logo2.jpg";


class FindDistrict extends Component {
  state = {
    addressSearch: "",
    stateAbbrev: "",
    city: "",
    address: "",
    district: "",
    districtArr: [],
    representativeName: "",
    representativeID: "",
    twitter: "",
    facebook: "",
    youtube: "",
    phone: "",
    infoArrived: false
      };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.address + " " + this.state.city + " " + this.state.stateAbbrev)

      API.findDistrict(this.state.address + " " + this.state.city + " " + this.state.stateAbbrev)
      .then((thingsFromNode) => {
        console.log('district back from backend!!!', thingsFromNode.data);
        this.setState({ 
        infoArrived: false,
        district: thingsFromNode.data.district.name,
        districtArr: thingsFromNode.data.district.districtCode.split("-")
        })
        // console.log("new district state: ", this.state.district)

        // ---------------------------------------------------

        API.searchDistrict(this.state.districtArr[0], this.state.districtArr[1])
          .then((thingsFromNode) => {
          console.log('representative back from backend!!!', thingsFromNode.data);
          this.setState({ 
          representativeID: thingsFromNode.data.id,
          twitter: thingsFromNode.data.twitter_id,
          representativeName: thingsFromNode.data.name,
          facebook: thingsFromNode.data.facebook_account,
          youtube: thingsFromNode.data.youtube_id
          })
          // console.log(this.state.representativeID);

          // ----------------------------------------------------

            API.getSenatorProfile(this.state.representativeID)
          .then((thingsFromNode) => {
          console.log('representative ID back from backend!!!', thingsFromNode.data);
          this.setState({ 
          phone: thingsFromNode.data[0].roles[0].phone,
          infoArrived: true
          })

          })

      })

      })
      .catch(err => console.log(err));
  };

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

render() {
    return (
      <div>
        {!this.state.infoArrived ? (
        <Jumbotron 
          image={Logo}
        />
        ) : (
        <Jumbotron 
          image=""
        >
                <DistrictInfo 
              district={this.state.district}
              rep={this.state.representativeName}
              twitter={this.state.twitter}
              facebook={this.state.facebook}
              youtube={this.state.youtube}
              phone={this.state.phone}
            />
            </Jumbotron>

             )}
        <Container>
          <Row>
            <Col size="lg-12">
              <form>
                <Container>
                  <Row>
                    <Col size="sm-3">
                      <Input
                        name="address"
                        value={this.state.address}
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Address"
                      />
                      </Col>
                      <Col size="sm-3">
                      <Input
                        name="city"
                        value={this.state.city}
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="City"
                      />
                      </Col>
                      <Col size="sm-3">
                      <Input
                        name="stateAbbrev"
                        value={this.state.stateAbbrev}
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="State"
                        size="2"
                        maxLength="2"
                      />
                      </Col>
                    <Col size="sm-3">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        SEARCH
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
                {/*<Row>
                  <Col size='xs-12'>
                    <h1>Use your address to find out who your local representative is!</h1>
                  </Col>
                </Row>*/}
          
        </Container>

      <Footer />  
      </div>

    );

  }
}

export default FindDistrict;
