import React from "react";
import "./Lexicon.css";

export default function Example(props) {
  if (props.example) {
    return (
      <p className="Example">
        <strong>Example:</strong>
        {props.examples.map(function (example, index) {
          return <div key={index}>{example}</div>;
        })}
      </p>
    );
  } else {
    return null;
  }
}
