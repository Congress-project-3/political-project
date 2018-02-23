import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../utils/API";
import { NewsList, NewsListItem } from "../components/NewsList";
import Logo from "../components/Jumbotron/logo2.jpg";


class Home extends Component {
  state = {
    email: "",
    articles: [],
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
     
    
{/*<<<<<<< HEAD */}
       <div className="funcList">
    
        <Row>
        <Col size="lg-12">
        <span className="glyphicon glyphicon-search"></span>
        </Col>
        </Row>

          
          <Row>
          <Col size="lg-12">
         
          <a className= "redLink" href="/searchvotes">Search a senator to see all of their most recent votes.</a>
           
     
{/*=======
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
>>>>>>> Development */}
           </Col>
           </Row>

           <Row>
           <Col size="lg-12">
           </Col>
          </Row>
          
          <Row>
          <Col size="lg-12">
          <span className="glyphicon glyphicon-thumbs-up"></span>
          </Col>
          </Row>
          
          <Row>
          <Col size="lg-12">
          
           <a className= "redLink" href="/compare">See the per centage rate of agreement between any two Senators.</a>
            
           </Col>
           </Row>

          <Row>
           <Col size="lg-12">
           </Col>
          </Row>

          <Row>
          <Col size="lg-12">
          <span className="glyphicon glyphicon-user"></span>
          </Col>
          </Row>
          
          <Row>
          <Col size="lg-12">
           
           <a className= "redLink" href="/searsenator">Find Senators by name or state to access their personal social media accounts.</a>
           
           </Col>
           </Row>

           <Row>
           <Col size="lg-12">
           </Col>
          </Row>
           
           <Row>
          <Col size="lg-12">
          <span className="glyphicon glyphicon-home"></span>
          </Col>
          </Row>
          
           <Row>
           <Col size="lg-12">
           
           <a className= "redLink" href="/finddistrict">Use your address to find out who your local representative is.</a>
           
           </Col>
           </Row>

           </div>
      <Row>
      <div id="newsTick">
        <Col size="lg-12">
          <h3>Recent Congress News:</h3>
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
        
      </div>
      </Row>

      
   
    </Container>
    <Footer />
  </div>
  
  );
};
};



export default Home;
