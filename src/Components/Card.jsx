import React from "react";


const Card = ({ name, username }) => {

  return (
    <div className="card">
        <img src='/images/doctor.jpg' alt=''/>
        <h4>{name}</h4>
        <h4>{username}</h4>
    </div>
  );
};

export default Card;
