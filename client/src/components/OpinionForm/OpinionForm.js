import React from "react";
import { Container, Row, Col } from "../Grid";
import OpinionFormItem from "../OpinionFormItem";

const OpinionForm = props => {
  return (
    <div>
    <Col size="xs-12">
      {(function() {
        const issue = props.issue;
        switch (issue) {
          case 'gunControl':
            console.log ("guns chosen");
            return <OpinionFormItem 
            issue="Gun Control"
            question="On the issue of gun control, I believe that we should enact stricter laws and regulations."
            />

          case 'climateChange':
            console.log ("climate chosen");
            
             return <OpinionFormItem 
            issue="Climate Change"
            question="On the issue of climate change, I believe that we should enact stricter laws and regulations."
            />

          case 'netNeutrality':
            console.log ("internet chosen");
            return <OpinionFormItem 
            issue="Net Neutrality"
            question="On the issue of net neutrality, I believe that we should enact stricter laws and regulations."
            />


          case 'other':
            console.log ("other chosen");
            return <OpinionFormItem 
            issue="Net Neutrality"
            question="On the issue of net neutrality, I believe that we should enact stricter laws and regulations."
            />


          default:
            console.log("nothing");
            return null

         }
      })()}
      </Col>
      </div>

  )
};

export default OpinionForm;

