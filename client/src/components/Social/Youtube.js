import React from "react";
import "./Social.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
export const Youtube = props => (
  <a href={props.medialink} target="_blank">
      <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-256.png" alt="youtube link" />
    </a>
);

