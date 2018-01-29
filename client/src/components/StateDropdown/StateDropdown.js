import React from "react";

// RecipeList renders a bootstrap list item
export const StateDropdown = props => <select value={props.value} onChange={props.onChange}>{props.children}</select>;


