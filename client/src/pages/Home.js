import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../utils/API";
import { NewsList, NewsListItem } from "../components/NewsList";


class Home extends Component {
  state = {
    email: "",
    articles: []
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
          title="Blink First"
        />
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Senator Stuff!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
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
      <form>
      <Row>
      <Col size="md-5">
      <Input
      name="email"
      value={this.state.email}
      type="email"
      onChange={this.handleInputChange}
      placeholder="Sign up for our monthly newsletter!"
      />
      </Col>
      <Col size="md-2">
      <Button
      onClick={this.handleFormSubmit}
      type="success"
      className="input-lg"
      >
      Submit
      </Button>
      </Col>
      </Row>
      </form>
    </Container>
  </div>
  );
}
}

export default Home;