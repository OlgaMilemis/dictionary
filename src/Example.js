import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <h6>
        <strong>Example:</strong>
        <p className="Example"> {props.example}</p>
      </h6>
    );
  } else {
    return null;
  }
}
