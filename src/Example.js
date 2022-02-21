import React from "react";
import "./Lexicon.css";

export default function Example(props) {
  if (props.example) {
    return (
      <h3 className="Example">
        <strong>Example:</strong>
        {props.example.map(function (example, index) {
          return <p key={index}>{example}</p>;
        })}
      </h3>
    );
  } else {
    return null;
  }
}
