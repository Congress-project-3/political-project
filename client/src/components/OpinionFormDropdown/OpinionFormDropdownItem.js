import React from "react";


export const OpinionFormDropdownItem = props => {
  // console.log('these are our senator dropdown item props', props)
  return (
  	  <option value={props.value}>{props.issue}</option>

  )

};
