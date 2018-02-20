import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import SearchVotes from "./pages/SearchVotes";
import Compare from "./pages/Compare";
import Home from "./pages/Home";
import SearchSenator from "./pages/SearchSenator";
import FindDistrict from "./pages/FindDistrict";
import Opinions from "./pages/Opinions";
import Auth from "./pages/Auth";


// -------------------------------------------------

const App = () =>
  <Router>
    <div>
      <Nav />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/searchvotes" component={SearchVotes} />
        <Route exact path="/compare" component={Compare} />
        <Route exact path="/searchsenator" component={SearchSenator} />
        <Route exact path="/finddistrict" component={FindDistrict} />
        <Route exact path="/opinions" component={Opinions} />
        <Route exact path="/auth" component={Auth} /> 

      </Wrapper>
    </div>
  </Router>;


export default App;

