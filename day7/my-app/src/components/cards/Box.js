import React from "react";
import "./box.css";
const Box = ({ id, name, role, email, location, avatar }) => {
  return (
    <div className="box">
      <h1>Users Details</h1>
      <div className="box_details">
        <img src={avatar} alt="image" />
      </div>
      <div>
        <h3>Name: {name}</h3>
        <h4>Role: {role}</h4>
        <h4>Email: {email}</h4>
        <h4>Locaton: {location}</h4>
      </div>
    </div>
  );
};
export default Box;
