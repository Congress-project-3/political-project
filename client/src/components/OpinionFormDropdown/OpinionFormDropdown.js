import React from "react";

// RecipeList renders a bootstrap list item
export const OpinionFormDropdown = props => 

<select value={props.value} onChange={props.onChange}>{props.children}</select>;
