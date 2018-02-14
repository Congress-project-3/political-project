import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import SearchVotes from "./pages/SearchVotes";
import Compare from "./pages/Compare";
import Home from "./pages/Home";
import SearchSenator from "./pages/SearchSenator";
import FindDistrict from "./pages/FindDistrict";
import Auth from "./pages/Auth";


// -----------------------------------------

// class App extends Component {
//   state = {
//     votes: [],
//     recipeSearch: ""
//   };

//   handleInputChange = event => {
//     // Destructure the name and value properties off of event.target
//     // Update the appropriate state
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // When the form is submitted, prevent its default behavior, get recipes update the recipes state
//     event.preventDefault();

//     // -----------------------------------------

//     // API.getSenators()
//     //   .then((thingsFromNode) => {
//     //     console.log('got all the senator ids from backend!!!', thingsFromNode.data);
//     //     this.setState({ recipes: thingsFromNode.data })
//     //   })
//     //   .catch(err => console.log(err));

//       // ----------------------------------------

//       // API.getComparison("P000449", "D000622")
//       // .then((thingsFromNode) => {
//       //   console.log('data back from backend!!!', thingsFromNode.data);
//       //   this.setState({ recipes: thingsFromNode.data })
//       // })
//       // .catch(err => console.log(err));

//       // ---------------------------------------

//       // API.getSenatorVotes(this.state.recipeSearch)
//       // .then((thingsFromNode) => {
//       //   console.log('data back from backend!!!', thingsFromNode.data);
//       //   this.setState({ votes: thingsFromNode.data })
//       // })
//       // .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <Nav />
//         <Jumbotron />
//         <Container>
//           <Row>
//             <Col size="md-12">
//               <form>
//                 <Container>
//                   <Row>
//                     <Col size="xs-9 sm-10">
//                       <Input
//                         name="recipeSearch"
//                         value={this.state.recipeSearch}
//                         onChange={this.handleInputChange}
//                         placeholder="Search For a Recipe"
//                       />
//                     </Col>
//                     <Col size="xs-3 sm-2">
//                       <Button
//                         onClick={this.handleFormSubmit}
//                         type="success"
//                         className="input-lg"
//                       >
//                         Search
//                       </Button>
//                     </Col>
//                   </Row>
//                 </Container>
//               </form>
//             </Col>
//           </Row>
//           <Row>
//             <Col size="xs-12">
//               {!this.state.votes.length ? (
//                 <h1 className="text-center">No Votes to Display</h1>
//               ) : (
//                 <VoteList>
//                   {this.state.votes.map(vote => {
//                     return (
//                       <VoteListItem
//                         key={vote.roll_call}
//                         rollCallNum={vote.roll_call}
//                         description={vote.description}
//                         date={vote.date}
//                         position={vote.position}
//                         question={vote.question}
//                         billNum={vote.bill.number}
//                         totalYes={vote.total.yes}
//                         totalNo={vote.total.no}
//                         totalNotVoting={vote.total.not_voting}
//                       />
//                     );
//                   })}
//                 </VoteList>
//               )}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

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
        <Route exact path="/auth" component={Auth} /> 

      </Wrapper>
    </div>
  </Router>;


export default App;
