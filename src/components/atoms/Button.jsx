import React from "react";

const Button = props => {
  return <a target="_blank" href={props.link} className={props.className}>{props.text}</a>;
};

export default Button;
