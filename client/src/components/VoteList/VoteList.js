import React from "react";
import "./VoteList.css";

export const VoteList = props => <ul className="list-group vote-list animated slideInUp">{props.children}</ul>;
