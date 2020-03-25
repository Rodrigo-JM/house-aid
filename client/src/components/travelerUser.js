import React from "react";

const TravelerUser = props => {
  return (<a className="list-group-item list-group-item-action">{props.user.name}</a>);
};

export default TravelerUser;
