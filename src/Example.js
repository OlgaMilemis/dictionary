import React from "react";
import "./Lexicon.css";

export default function Example(props) {
  if (props.example) {
    return (
      <h6 className="Example">
        <strong>Example:</strong>
        <p> {props.example}</p>
      </h6>
    );
  } else {
    return null;
  }
}
