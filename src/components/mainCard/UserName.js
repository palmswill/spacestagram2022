import React from "react";

const Username = ({ title }) => {
  return (
    <div className="username">
      <img src={`${process.env.PUBLIC_URL}/nasa.png`}alt="nasa" />
      <p>{title}</p>
      <img className="extra" src="https://i.stack.imgur.com/twIm6.png" alt="extras"/>
    </div>
  );
};

export default Username;
