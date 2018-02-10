import React from "react";
import "./Social.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
export const Facebook = props => (
  <a href={props.medialink} target="_blank">
      <img className="social" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1000px-F_icon.svg.png" alt="facebook link" />
    </a>
);

