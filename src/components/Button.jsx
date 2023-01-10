import React from "react";

const Button = ({ title, color, borderRadius }) => {
  return <button style={{ background: color, borderRadius }}>{title}</button>;
};

export default Button;
