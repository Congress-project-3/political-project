import React from "react";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";

const OpinionFormItem = props => {
  return (
    <div>
    <Col size="xs-12">

    <h2>{props.issue}</h2>
    <h3>{props.question}</h3>

       <form>
    <div className="radio">
      <label>
        <input type="radio" value="StrongAgree" />
        Strongly Agree
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Agree" />
        Agree
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Disagree" />
        Disagree
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="StrongDisagree" />
        Strongly Disagree
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="NoOpinion" />
        No Opinion/Don't Care
      </label>
    </div>
    <div className="comment">
      <label>
        Additional Comments (300 character limit): <br />
        <textarea maxLength="300" />
      </label>
    </div>
    <div className="zipcode">
      <label>
        <input type="text" placeholder="5-digit zipcode" maxLength="5"/>
      </label>
    </div>

  </form>

  					<Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Submit Opinion
                      </Button>


      </Col>
      </div>

  )
};

export default OpinionFormItem;