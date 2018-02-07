import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import DistrictInfo from "../components/DistrictInfo";


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
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="sm-4">
                      <Input
                        name="address"
                        value={this.state.address}
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Address"
                      />
                      </Col>
                      <Col size="sm-4">
                      <Input
                        name="city"
                        value={this.state.city}
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="City"
                      />
                      </Col>
                      <Col size="sm-2">
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
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
          <Col size="md-12">
          {!this.state.infoArrived ? (
                <h1 className="text-center">Type in your address to find your Congressional District!</h1>
              ) : (
            <DistrictInfo 
              district={this.state.district}
              rep={this.state.representativeName}
              twitter={this.state.twitter}
              facebook={this.state.facebook}
              youtube={this.state.youtube}
              phone={this.state.phone}
            />

            )}
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FindDistrict;
