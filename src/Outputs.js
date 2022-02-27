import React from "react";
import "./Outputs.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Outputs(props) {
  if (props.outputs) {
    return (
      <div className="Outputs">
        <section>
          <h2>{props.outputs.word} </h2>
          {props.outputs.phonetics
            .filter(function (phonetic) {
              return phonetic.audio;
            })
            .map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
        </section>
        {props.outputs.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
