import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1>Senator Stuff</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://projects.propublica.org/api-docs/congress-api/"
    >
      Powered by ProPublica
    </a>
  </div>
);

export default Jumbotron;
