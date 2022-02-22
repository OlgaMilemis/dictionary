import React from "react";
import "./Lexicon.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Outputs(props) {
  if (props.outputs) {
    return (
      <div className="Outputs">
        <h2>{props.outputs.word} </h2>
        {props.outputs.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        {props.outputs.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
