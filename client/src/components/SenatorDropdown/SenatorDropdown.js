import React from "react";
import Dropdown from "semantic-ui-react";

// RecipeList renders a bootstrap list item
export const SenatorDropdown = props => 

<select value={props.value} onChange={props.onChange}>{props.children}</select>;

