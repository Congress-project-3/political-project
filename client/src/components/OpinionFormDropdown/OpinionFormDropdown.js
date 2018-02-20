import React from "react";

// RecipeList renders a bootstrap list item
export const OpinionFormDropdown = props => 

<div>
<label for='opinionFormDropdown'>Choose a topic: </label><br />
<select name='opinionFormDropdown' value={props.value} onChange={props.onChange}>{props.children}</select>
</div>