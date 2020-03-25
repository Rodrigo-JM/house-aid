import React from "react";

const HelperUser = props => {
  return (<a className="list-group-item list-group-item-action">{props.user.name}</a>);
};

export default HelperUser;
