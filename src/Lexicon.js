import React, { useState } from "react";
import axios from "axios";
import "./Lexicon.css";
import Outputs from "./Outputs";

export default function Lexicon(props) {
  let [inputWord, setInputword] = useState(props.defaultInputword);
  let [outputs, setOutputs] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function updateSearch(event) {
    event.preventDefault();
    setInputword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleWordInput(event) {
    event.preventDefault();
    search();
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;
    axios.get(apiUrl).then(showResult);
  }

  function showResult(response) {
    setOutputs(response.data[0]);
  }

  if (loaded) {
    return (
      <div className="Lexicon">
        <section>
          <form onSubmit={handleWordInput}>
            <input
              type="search"
              onChange={updateSearch}
              defaultValue={props.defaultInputword}
            />
          </form>
          <div className="hint">Type a word...</div>
        </section>
        <Outputs outputs={outputs} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
