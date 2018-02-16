import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../utils/API";
import { NewsList, NewsListItem } from "../components/NewsList";
import Logo from "../components/Jumbotron/logo2.jpg";
import OpinionForm from "../components/OpinionForm";
import { OpinionFormDropdownItem, OpinionFormDropdown } from "../components/OpinionFormDropdown";


const topics = [
    {name: "Gun Control", value: "gunControl"}, 
    {name: "Climate Change", value: "climateChange"}, 
    {name: "Net Neutrality", value: "netNeutrality"},
    {name: "Other", value: "Other"}
    ]

class Home extends Component {
  state = {
    email: "",
    articles: [],
    opinion: "gunControl"
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
        this.setState({
          articles: thingsFromNode.data
        });
      console.log('article state statetetaieygfw', this.state.articles);

      })
      .catch(err => console.log(err));
  };

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

render() {
  return (
  <div>
    <Jumbotron 
          image={Logo}
        />
    <Container style={{ marginTop: 30 }}>
     
    
      <Row>

        <Col size="md-7">
        <div className="funcList">
          <ul>
           <li><a className= "redLink" href="/searchvotes">Search a senator to see all of their most recent votes.</a></li>
           <li><a className= "redLink" href="/compare">See the percentage rate of agreement between any two Senators.</a></li>
           <li><a className= "redLink" href="/searsenator">Find Senators by name or state to access their personal social media accounts.</a></li>
           <li><a className= "redLink" href="/finddistrict">Use your address to find out who your local representative is.</a></li>
           </ul>
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
          <h2>Recent News</h2>
          <NewsList>
              {this.state.articles.map(article => {
                    return (
                      <NewsListItem
                      key={article.title}
                        url={article.url}
                        title={article.title}
                        author={article.author}
                        source={article.source.name}
                        description={article.description}
                      />
                    );
                  })}
          </NewsList>
          </Col>
        
      </Row> 



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


export default Home;
