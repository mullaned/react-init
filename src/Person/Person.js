import React from "react";

const person = (props) => {
  return (
    <div>
      <p>I'm a person named {props.name}!! Who is {props.age}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
