import React from "react";

export const StateDropdownItem = props => {
  // console.log('these are our senator dropdown item props', props)
  return (
    <option value={props.value}>{props.state} ({props.abbreviation})</option>
  )

};

