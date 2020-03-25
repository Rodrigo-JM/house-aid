import React from "react";
import HelperUser from "./helperUser";



const HelpersList = props => {
  return (
    <div className="single-list">
      <div className="list-group">
        {props.users.map(user => {
          return <HelperUser key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default HelpersList;

