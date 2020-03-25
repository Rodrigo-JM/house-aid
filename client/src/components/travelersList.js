import React from "react";
import TravelerUser from "./travelerUser";

const TravelersList = props => {
  return (
    <div className="single-list">
      <div className="list-group">
        {props.users.map(user => {
          return <TravelerUser key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default TravelersList;

