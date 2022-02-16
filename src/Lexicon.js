import React, { useState } from "react";
import axios from "axios";
import "./Lexicon.css";

export default function Lexicon() {
  let [inputWord, setInputword] = useState("");

  function showResult(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;

    axios.get(apiUrl).then(showResult);
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
