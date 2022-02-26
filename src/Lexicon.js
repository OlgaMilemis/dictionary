import React, { useState } from "react";
import axios from "axios";
import "./Lexicon.css";
import Outputs from "./Outputs";
import Images from "./Images";

export default function Lexicon(props) {
  let [inputWord, setInputword] = useState(props.defaultInputword);
  let [outputs, setOutputs] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

  function showResult(response) {
    setOutputs(response.data[0]);
  }
  function showPexelsResult(response) {
    setImages(response.data.photos);
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;
    axios.get(apiUrl).then(showResult);
    let pexelsApiKey =
      "563492ad6f91700001000001d91edc5a67f84bae8b0f19a32f30caa2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${inputWord}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(showPexelsResult);
  }

  function handleWordInput(event) {
    event.preventDefault();
    search();
  }
  function updateSearch(event) {
    event.preventDefault();
    setInputword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
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
        </section>{" "}
        <Images images={images} />
        <Outputs outputs={outputs} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
