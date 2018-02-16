import React from "react";
import { Dropdown } from "semantic-ui-react";


export const SenatorDropdownItem = props => {
  // console.log('these are our senator dropdown item props', props)
  return (
  	  <option value={props.value}>Sen. {props.firstName} {props.lastName} ({props.party}-{props.state})</option>

  )

};

