import React, { useState } from "react";
import "./Lexicon.css";

export default function Lexicon() {
  let [inputWord, setInputword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${inputWord} definition`);
  }
  function handleWordInput(event) {
    setInputword(event.target.value);
  }
  return (
    <div className="Lexicon">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordInput} />
      </form>
    </div>
  );
}
