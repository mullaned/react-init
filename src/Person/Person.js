import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm a person named {props.name}!! Who is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
